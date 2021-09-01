import Image from 'next/image'

interface ItemProps {
    value: string
    src?: string
}

export default function Item(props: ItemProps) {
    return (
        <li className={`
            flex items-center
            m-2 border-2 p-8
            border-gray-700
            bg-gray-100
            rounded-xl
            font-semibold w-full
            hover:bg-white
            cursor-pointer
            transform
            hover:scale-105
            transition-transform
            shadow
        `}>
            <Image src={props.src}
                width={35} height={35}
            />
            <p className='ml-2 text-lg'>{props.value}</p>
        </li>
    )
}