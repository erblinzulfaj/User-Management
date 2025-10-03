import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

function App() {

    return (
        <>
            <Navbar/>
            <main className="container mt-4">
                <Outlet/>
            </main>
        </>
    )
}

export default App
