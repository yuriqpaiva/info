import Item from "./Item";
import Line from "./Line";

export default function CardSection() {
    return (
        <>
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
                        flex lg:px-20
                        mt-1 lg:mx-20 mb-5 md:mx-0 sm:mx-20 mx-5
                        flex-wrap justify-center`}>
                <Item
                    value='GitHub'
                    src='/images/github.png'
                    href='https://github.com/yuriqpaiva'
                />
                <Item
                    value='E-mail'
                    src='/images/gmail.png'
                    href='gmail.com'
                />
                <Item
                    value='Instagram'
                    src='/images/instagram.png'
                    href='instagram.com'
                />
                <Item
                    value='Linkedin'
                    src='/images/linkedin.png'
                    href='linkedin.com'
                />
            </ul>
        </>
    )
}