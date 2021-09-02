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
        `}>
            <h1 className={`
                text-3xl font-bold my-5
                text-gray-700
            `}>{props.title}</h1>
            {props.children}
        </div>
    )
}