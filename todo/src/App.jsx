import Footer from "../components/footer";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div className="min-h-[90vh] ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
