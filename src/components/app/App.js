import React from "react";
import Products from "../Products";
// import { Container } from '@material-ui/core';
// import { blue, orange } from '@material-ui/core/colors';
// import { createTheme } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
    
    // const theme = createTheme({
    //     palette: {
    //       primary: blue,
    //       secondary: orange
    //     },
    // });

    return (
        <div>
            {/* <ThemeProvider theme={theme}>
                <Container>
                    <Router>
                        <Routes>
                            <Route exact path="/" component={() => (<Products />)} />
                        </Routes>
                    </Router>
                </Container>
      </ThemeProvider> */}
            <Products />
        </div>
    )
}

export default App;