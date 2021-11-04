import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./routes/AppRouter";
function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
