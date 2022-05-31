import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./storage";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Provider>
  );
}

export default App;
