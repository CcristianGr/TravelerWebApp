export const OutOfService = () => {

    return (
        <blockquote className="w-full flex justify-center mt-30 text-3xl">
            <p className="mr-2">Esta Seccion esta</p>
            <span className="text-3xl relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
                <span className="relative text-white dark:text-gray-950 font-[700]">fuera de Servicio</span>
            </span>
        </blockquote>
    )
}