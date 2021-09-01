import About from "./About";
import Item from "./Item";


export default function Content() {
    return (
        <div >
            <About />
            <ul className="flex m-5 flex-wrap justify-center">
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
        </div>
    )
}