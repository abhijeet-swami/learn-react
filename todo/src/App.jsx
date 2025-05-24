import Footer from "../components/footer";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import TodoProvider from "./context/Context";

function App() {
  return (
    <>
      <NavBar />
      <div className="min-h-[90vh] ">
        <TodoProvider>
          <Outlet />
        </TodoProvider>
      </div>
      <Footer />
    </>
  );
}

export default App;
