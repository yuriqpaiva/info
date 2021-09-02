import Image from 'next/image'
import { useEffect, useState } from 'react'



export default function AvatarImage() {

    return (
        <div className={`
            m-5 
        `}>
            <Image src={'https://avatars.githubusercontent.com/u/77457083?v=4'}
                width={200} height={200}
                className="rounded-full "
                alt=''
            />
        </div>
    )
}