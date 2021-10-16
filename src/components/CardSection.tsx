import Item from "./Item";
import Line from "./Line";

export default function CardSection() {
    return (
        <div className={`
            flex flex-col 
            
        `}>
            <div className={`
                text-center 
                flex flex-col items-center
                mt-10
            `}>
                <h2 className='text-gray-700 text-xl font-semibold '>
                    Contato
                </h2>
                <Line />
            </div>

            <ul className={`
                        mt-2
                        gap-10
                        flex justify-center
                         items-center`}>
                <Item
                    value='GitHub'
                    src='/images/github.png'
                    href='https://github.com/yuriqpaiva'
                />
                <Item
                    value='Linkedin' 
                    src='/images/linkedin.png'
                    href='https://www.linkedin.com/in/yuri-queiroz-paiva-a4b7111b3/'
                />
                <Item
                    value='E-mail'
                    src='/images/gmail.png'
                    href='mailto:yuriqpaiva@gmail.com'
                />
            </ul>
        </div>
    )
}