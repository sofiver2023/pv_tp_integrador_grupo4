import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box, Grid } from "@mui/material";

function Layout({ children }) {
    return (
        <>
            <Grid container spacing={4} sx={{ width: {xs:'100%',lg: '80%' }, m: 'auto'}}>
                <Grid size={{ xs: 'contents', sm: 'contents', md: 'contents' ,lg: 3, xl: 2}}>
                    <Navbar/>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 9, xl: 10 }}>
                    <Header />
                    <main className="main-content">
                        {children}
                    </main>
                </Grid>

            </Grid>
            <Footer />

        </>
    );
}

export default Layout;