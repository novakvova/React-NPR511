//Значення, які будуть в input на початку
import {loginSchema} from "./validation";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

const defaultValues = {
    email: "",
    password: ""
}

const LoginPage = () => {

    //Ми створюємо форму де вказуємо систему валіації

    const {
        register, //Для використання value та onChange у input
        handleSubmit, //Для виклику валації форми при роботі
        formState: {errors}, //Що не вірно вказано у формі
    } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValue: defaultValues,
    });

    //Буде викликатися коли усе вказано вірно у формі входу
    const onMySubmit = (data) => {
        console.log("Дані форми входу", data);
    }

    return (
        <>
            <h1 className={"text-center"}>Вхід на сайт</h1>
            <form className={"col-md-6 offset-md-3"} onSubmit={handleSubmit(onMySubmit)}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Електронна пошта</label>
                    <input type="email"
                           className="form-control"
                           id="email"
                           {...register("email")}
                           aria-describedby="emailHelp"/>
                    {errors.email && <span className={"text-danger"}>{errors.email.message}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Пароль</label>
                    <input type="password"
                           className="form-control"
                           {...register("password")}
                           id="password"
                           aria-describedby="emailHelp"/>
                    {errors.password && <span className={"text-danger"}>{errors.password.message}</span>}
                </div>
                <input type={"submit"} className={"btn btn-danger"} value={"Вхід"}/>
            </form>
        </>
    )
}

export default LoginPage;