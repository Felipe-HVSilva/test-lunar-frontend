import AppRoutes from "./routes";
import Header from "./_components/Header";
import Cart from "./_components/Cart";

function App() {
  return (
    <div className="h-screen relative overflow-hidden">
      <Header />
      <AppRoutes />
      <Cart />
    </div>
  );
}

export default App;
