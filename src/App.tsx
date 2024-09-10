import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AppRoutes from "./Components/AppRoutes";
import { observer } from "mobx-react-lite";

export const App = observer(() => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
});
