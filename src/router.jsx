import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home_Page";
import Roomspage from "./pages/Rooms_Page";
import LoginComponent from "./components/Login/Login";
import RegisterComponent from "./components/Register/Register";

function Router() {

    return(
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/rooms" element={<Roomspage/>}/>
            <Route path="/login" element={<LoginComponent/>}/>
            <Route path="/register" element={<RegisterComponent/>}/>
        </Routes>
    );
}
export default Router;