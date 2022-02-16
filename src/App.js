import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./routes/AppRouter";
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
   <AnimatePresence exitBeforeEnter >
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
    </AnimatePresence>
  );
}

export default App;
