import {useState} from "react";

const LoginPage = () => {

    //Ці змінні будуть зберігати email та пароль користувача
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (e) => {
        setEmail(e.target.value); // Зберігаю значення у state - email
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value); //Аналогічно роблю для пароля
    }
    //Функція має перевіряти логін і пароль користувача
    const onHandleSubmit = (e) => {
        e.preventDefault(); //відміняє стандартну поведінку для форми
        console.log("----Вхід користувача-----");
        console.log("Email = ", email); //Пошта
        console.log("Password = ", password); //Пароль
        if(email === "admin@gmail.com" && password === "123456")
        {
            alert("Вітаємо Амідна у системі");
            setEmail(""); //обнули значення в email
            setPassword(""); //так само зробив із паролем
        }
        else
        {
            alert("Щось пішло не так :). Дані не вірні")
        }
    }

    return (
        <div className={"container mt-2"}>
            <h1 className="text-center">Вхід на сайт</h1>
            <form className="col-md-6 offset-md-3" onSubmit={onHandleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Електронна пошта</label>
                    <input type="email"
                           className="form-control"
                           id="email"
                           value = {email}
                           onChange={onChangeEmail}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Пароль</label>
                    <input type="password"
                           className="form-control"
                           id="password"
                           value = {password}
                           onChange={onChangePassword}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Вхід</button>
            </form>
        </div>
    )
}

export default LoginPage;