import MainRoute from "./routes/MainRoute";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <MainRoute />
    </CartProvider>
  );
}

export default App;
