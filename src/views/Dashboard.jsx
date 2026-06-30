import { Box } from "@mui/material";
import Header from "../components/layout/Header";
import ListaClientes from "./ListaClientes";
import Footer from "../components/common/Footer";

function Dashboard() {
    return (<Box>
        <Header></Header>
        <h1>DASHBOARD</h1>
        <Footer></Footer>
    </Box>);
}
export default Dashboard;