import Image from 'next/image'
import Link from 'next/link'

interface ItemProps {
    value: string
    src: string
    href?: string
}

export default function Item(props: ItemProps) {
    return (
        <Link href={props.href}>
            <li className={` 
            m-2 border-2
            sm:py-20 sm:px-10 p-8
            border-gray-700
            bg-gray-100
            rounded-xl
            font-semibold 
            hover:bg-white
            cursor-pointer
            transform
            hover:scale-105
            transition-transform
            shadow sm:w-1/3 w-full
        `}>
                <div className='flex items-center text-left'>
                    <Image src={props.src}
                        width={35} height={35}
                    />
                    <p className='ml-2 text-lg'>{props.value}</p>
                </div>

            </li>
        </Link>
    )
}