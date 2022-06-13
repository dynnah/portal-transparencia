import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

import store from "./storage";
import theme from "./theme";

import EditProfile from "./pages/EditProfile/EditProfile";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            }
          />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
