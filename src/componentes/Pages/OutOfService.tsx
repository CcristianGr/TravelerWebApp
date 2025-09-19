import { useRegresarMenu } from "../Hook/HooksGenerals"
export const OutOfService = () => {
    const regresarMenu = useRegresarMenu();
    return (
        <div className="flex flex-col justify-center items-center">
            <blockquote className="w-full flex justify-center mt-30 text-3xl shadow-">
                <p className="mr-2">Esta Seccion esta</p>
                <span className="text-3xl relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
                    <span className="relative text-white dark:text-gray-950 font-[700]">fuera de Servicio</span>
                </span>
            </blockquote>
            <div className="mt-10 bg-primary h-10 w-40 text-center hover:shadow-2xl">
                <button className="hover:cursor-pointer w-full h-full text-white" onClick={regresarMenu}>Regresar al menu</button>
            </div>
        </div>

    )
}