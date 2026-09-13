import {Outlet} from "react-router";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <>
            <Navbar/>
            <div className={"container"}>
                <Outlet/>
            </div>
        </>
    )
}

// <Outlet/> - буде піставлятия дочірній компонент у маршруті
//До прикладу HomePage, RegisterPage або інша сторінка
export default Layout;