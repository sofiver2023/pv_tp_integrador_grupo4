import { TableRow, TableCell, Button } from "@mui/material";

function ClienteRow({ cliente }) {
  const nombreCompleto = `${cliente.name.firstname} ${cliente.name.lastname}`;

  return (
    <TableRow hover>
      <TableCell>{cliente.id}</TableCell>
      <TableCell>{nombreCompleto}</TableCell>
      <TableCell>{cliente.email}</TableCell>
      <TableCell>{cliente.phone}</TableCell>
      <TableCell>{cliente.address.city}</TableCell>
      <TableCell align="center">
        <Button variant="outlined" size="small">
          Ver Ficha Completa
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default ClienteRow;