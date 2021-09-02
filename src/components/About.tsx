import Line from "./Line";

export default function About() {
    return (
        <div className={`
            flex flex-col
            items-center
        `}>
            <h2 className='text-gray-700 text-xl font-semibold'>
                Sobre mim
            </h2>
            <Line />
            <p className={`
                text-gray-700 font-medium mx-11 sm:mx-0
                sm:w-3/6 lg:w-2/6 text-left 
            `}>
                Sou um programador Front-End focado em JavaScript.
                Atualmente estou cursando Ciência da Computação.
                Não me limito somente aos conhecimentos obtidos na faculdade, estou sempre buscando me aprimorar na área de tecnologia.
            </p>
        </div>
    )
}