import { z } from "zod"; //імпортуємо Zod для валідації даних
//zod - бібліотека для валідації даних на клієнті
//react-hook-forms - для роботи з форами на клієнті

//Робимо схему валіації даних
const profileSchema = z.object({

})

const ProfilePage = () =>
{
    return (
        <>
            <h1 className={"text-center"}>Профіль користувача</h1>
        </>
    )
}

export default ProfilePage;