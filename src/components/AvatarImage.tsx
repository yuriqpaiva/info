import Image from 'next/image'

export default function AvatarImage() {
    return (
        <div className={`
            m-5 
        `}>
            <Image src={'/images/mockAvatar.jpg'}
                width={150} height={150} className="rounded-full"
            />
        </div>
    )
}