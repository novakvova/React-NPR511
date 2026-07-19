import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {

    return (
        <>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage/>}/>
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="register" element={<RegisterPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
