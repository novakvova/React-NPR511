import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css';
import LoginPage from "./pages/login/LoginPage";
import {Route, Routes} from "react-router";
import HomePage from "./pages/home/HomePage";
import Layout from "./components/layout/Layout";
import NoMatchPage from "./pages/noMatch/NoMatchPage";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={"login"} element={<LoginPage/>}/>
                    
                    <Route path={"*"} element={<NoMatchPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
