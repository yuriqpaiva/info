import Head from 'next/head'

interface LayoutProps {
    title: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
            flex flex-col justify-center
            items-center min-h-screen
            animate-fade-in-down 
            bg-gray-100
        `}>
            <Head>
                <title>Yuri Paiva - Info</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/images/icon.png" />
            </Head>
            <div className={`
                flex flex-col
                items-center
                px-1
                lg:w-lg md:w-md w-96
                mb-10 
            `}>
                <h1 className={`
                    text-3xl
                    font-bold my-5
                    text-gray-700
                `}>{props.title}</h1>
                {props.children}
            </div>
        </div>
    )
}