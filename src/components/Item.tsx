import Image from 'next/image'
import Link from 'next/link'

interface ItemProps {
    value: string
    src: string
    href?: string
}

export default function Item(props: ItemProps) {
    return (
        <li>
            <a
                href={props.href}
                target='_blank'
                rel='noreferrer'
                className={` 
                    flex
                    p-2
                    rounded-xl
                    font-semibold 
                    cursor-pointer
                    transform
                    duration-200
                    transition-all
                    text-blue-900
                    hover:text-blue-500
        `}
            >
                <div className={`
                    flex items-center text-left
                    flex-col gap-1 justify-center
                `}>
                    <Image src={props.src} alt=''
                        width={35} height={35}
                    />
                    <p className={`
                        ml-2 
                        font-normal
                        text-base
                        underline
                        
                    `}>
                        {props.value}
                    </p>
                </div>
            </a>
        </li>
    )
}