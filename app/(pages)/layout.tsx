interface ILayoutPagesProps {
    children: React.ReactNode;
}

export default function LayoutPages({children}:ILayoutPagesProps){
    return(
        <div className="flex flex-col w-3/5 h-screen mt-16 pt-4 text-black">
            {children}
        </div>
    )
}