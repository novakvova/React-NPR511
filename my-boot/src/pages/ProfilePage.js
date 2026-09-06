import { z } from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"; //імпортуємо Zod для валідації даних
//zod - бібліотека для валідації даних на клієнті
//react-hook-forms - для роботи з форами на клієнті

//Робимо схему валіації даних
const profileSchema = z.object({
    firstName: z
        .string() //Людина має вводити текст - рядок
        .min(2,"Ім'я має мати щонайменша 2 символи") //мін довжина символів
        .max(50, "Ім'я занадто довге"), //максимум скільки символів
});

//Поля, які будуть на формі
const defaultValues = {
    firstName: "",
};

const ProfilePage = () =>
{

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isDirty },
    } = useForm({
        resolver: zodResolver(profileSchema),
        defaultValues, //Це об'єкт, який описує нашу форму
        mode: "onBlur",
    }); // Налаштувати форму для роботи

    const onSubmit = (data) => {
        //Цей метод буде спрацьовувати, яколи дані у формі буть вірними
        //Тобто валідні- через zod
        console.log("Form Data:", data);
    }

    return (
        <>
            <h1 className={"text-center"}>Профіль користувача</h1>

            <div className="container mt-2">
                <form className="col-md-6 offset-md-3">
                    {/* ПІБ */}
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">Ім'я</label>
                        <input
                            type="text"
                            className={`form-control`}
                            id="firstName"
                            placeholder="Іван"
                        />
                    </div>

                    <button type="submit" className="btn btn-success">Зберегти</button>
                </form>
            </div>
        </>
    )
}

export default ProfilePage;