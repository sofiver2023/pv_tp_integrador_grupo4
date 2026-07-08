import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, LineChart, Line, Legend, ResponsiveContainer } from 'recharts';
import useClientes from '../hooks/useClientes';
import { obtenerActividades } from '../utils/actividad';

const COLORS = ['#4F86C6', '#F2994A', '#9B51E0', '#27AE60', '#EB5757'];

function agruparPorCiudad(clientes) {
  const conteo = clientes.reduce((acc, c) => {
    const ciudad = c.ciudad || 'Sin dato';
    acc[ciudad] = (acc[ciudad] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(conteo).map(([name, value]) => ({ name, value }));
}

function agruparPorMes(clientes) {
  const conteo = clientes.reduce((acc, c) => {
    if (!c.fechaAlta) return acc;
    const mes = new Date(c.fechaAlta).toLocaleString('es', { month: 'short', year: '2-digit' });
    acc[mes] = (acc[mes] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(conteo).map(([mes, cantidad]) => ({ mes, cantidad }));
}

function contarNuevosPorMes(clientes, offsetMeses) {
  const hoy = new Date();
  const objetivo = new Date(hoy.getFullYear(), hoy.getMonth() - offsetMeses, 1);
  return clientes.filter((c) => {
    if (!c.fechaAlta) return false;
    const f = new Date(c.fechaAlta);
    return f.getFullYear() === objetivo.getFullYear() && f.getMonth() === objetivo.getMonth();
  }).length;
}

function rankingCiudades(clientes, top = 3) {
  const datos = agruparPorCiudad(clientes);
  return datos.sort((a, b) => b.value - a.value).slice(0, top);
}

function agruparActividadPorDia(actividades) {
  const conteo = {};
  actividades.forEach((act) => {
    const dia = new Date(act.fecha).toLocaleDateString('es', { day: '2-digit', month: 'short' });
    if (!conteo[dia]) conteo[dia] = { dia, altas: 0, bajas: 0 };
    if (act.tipo === 'alta') conteo[dia].altas += 1;
    if (act.tipo === 'baja') conteo[dia].bajas += 1;
  });
  return Object.values(conteo).reverse();
}

function Reportes() {
  const clientes = useClientes();
  const actividades = obtenerActividades();
  const datosPorCiudad = agruparPorCiudad(clientes);
  const datosPorMes = agruparPorMes(clientes);
  const datosActividad = agruparActividadPorDia(actividades);
  const nuevosEsteMes = contarNuevosPorMes(clientes, 0);
  const nuevosMesPasado = contarNuevosPorMes(clientes, 1);
  const diferencia = nuevosEsteMes - nuevosMesPasado;
  const top3Ciudades = rankingCiudades(clientes, 3);

  return (
    <div className="reportes-container">
      <h1>REPORTES</h1>
      <p>Visualiza y analiza las métricas clave de clientes</p>

      <div className="metricas-cards">
        <div className="card">
          <h3>{clientes.length}</h3>
          <p>Total de Clientes</p>
        </div>
        <div className="card">
          <h3>{nuevosEsteMes}</h3>
          <p>
            Nuevos Este Mes{' '}
            {diferencia !== 0 && (
              <span style={{ color: diferencia > 0 ? '#27AE60' : '#EB5757', fontWeight: 'bold' }}>
                ({diferencia > 0 ? '+' : ''}{diferencia} vs mes anterior)
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>Clientes Agregados por Mes</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={datosPorMes}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="cantidad" fill="#4F86C6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Distribución por Ciudad</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={datosPorCiudad}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {datosPorCiudad.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Línea de Tiempo de Actividad</h3>
          {datosActividad.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#888', padding: '2rem 0' }}>
              Aún no hay actividad registrada. Se mostrará aquí a medida que agregues o elimines clientes.
            </p>
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={datosActividad}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dia" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="altas" name="Altas" stroke="#27AE60" strokeWidth={2} />
                <Line type="monotone" dataKey="bajas" name="Bajas" stroke="#EB5757" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>

        <div className="chart-card">
          <h3>Top 3 Ciudades con Más Clientes</h3>
          <table className="ranking-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Ciudad</th>
                <th>Clientes</th>
              </tr>
            </thead>
            <tbody>
              {top3Ciudades.map((c, i) => (
                <tr key={c.name}>
                  <td>{i + 1}</td>
                  <td>{c.name}</td>
                  <td>{c.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Reportes;
