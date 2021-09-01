import Item from "./Item";


export default function Content() {
    return (
        <div>
            <ul className="flex m-5 flex-wrap justify-center">
                <Item value='GitHub' src='/images/github.png' />
                <Item value='E-mail' src='/images/gmail.png'/>
                <Item value='Instagram' src='/images/instagram.png'/>
                <Item value='Linkedin' src='/images/linkedin.png'/> 
            </ul>
        </div>
    )
}