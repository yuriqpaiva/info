interface LayoutProps {
    title: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
            flex flex-col justify-center
            items-center min-h-screen max-h-full
        `}>
            <h1 className={`
                text-2xl font-bold mb-5
            `}>{props.title}</h1>
            
            {props.children}
        </div>
    )
}