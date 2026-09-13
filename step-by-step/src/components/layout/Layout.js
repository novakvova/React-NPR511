import {Outlet} from "react-router";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}

// <Outlet/> - буде піставлятия дочірній компонент у маршруті
//До прикладу HomePage, LoginPage або інша сторінка
export default Layout;