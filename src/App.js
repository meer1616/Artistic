import "./App.css";
import { Box } from "@chakra-ui/react";
import AuthContextProvider from "./context/AuthContext";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AppRouter from "./routes/AppRouter";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
