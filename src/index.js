import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from "./App";
import store from "./App/store"

// const theme = createTheme();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <ThemeProvider>
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    // </ThemeProvider>
   );