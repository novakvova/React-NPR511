import { z } from "zod"; //імпортуємо Zod для валідації даних
//zod - бібліотека для валідації даних на клієнті
//react-hook-forms - для роботи з форами на клієнті

//Робимо схему валіації даних
const profileSchema = z.object({
    firstName: z
        .string() //Людина має вводити текст - рядок
        .min(2,"Ім'я має мати щонайменша 2 символи") //мін довжина символів
        .max(50, "Ім'я занадто довге"), //максимум скільки символів
});

const ProfilePage = () =>
{
    return (
        <>
            <h1 className={"text-center"}>Профіль користувача</h1>
        </>
    )
}

export default ProfilePage;