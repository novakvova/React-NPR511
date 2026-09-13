//Значення, які будуть в input на початку
import {registerSchema} from "./validation";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

const defaultValues = {
    email: "",
    password: "",
    confirmPassword: "",
}

const RegisterPage = () => {

    //Ми створюємо форму де вказуємо систему валіації

    const {
        register, //Для використання value та onChange у input
        handleSubmit, //Для виклику валації форми при роботі
        formState: {errors}, //Що не вірно вказано у формі
    } = useForm({
        resolver: zodResolver(registerSchema),
        defaultValue: defaultValues,
    });

    //Буде викликатися коли усе вказано вірно у формі входу
    const onMySubmit = (data) => {
        console.log("Дані форми входу", data);
    }

    return (
        <>
            <h1 className={"text-center"}>Реєстрація на сайт</h1>
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

                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Повторіть пароль</label>
                    <input type="password"
                           className="form-control"
                           {...register("confirmPassword")}
                           id="confirmPassword"
                           aria-describedby="emailHelp"/>
                    {errors.confirmPassword && <span className={"text-danger"}>{errors.confirmPassword.message}</span>}
                </div>
                <input type={"submit"} className={"btn btn-danger"} value={"Реєстрація"}/>
            </form>
        </>
    )
}

export default RegisterPage;