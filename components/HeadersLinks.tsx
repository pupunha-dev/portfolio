import { Feather } from "lucide-react";
import Link from "next/link";

interface IProps {
    url: string;
    description: string;
}

export const HeadersLinks = ({url, description}: IProps) => {
    return(
        <Link href={url} className="flex items-center space-x-2">
            <Feather className="text-orange-900 h-7 w-7"/>
            <h1 className="text-4xl text-orange-900">{description}</h1>
        </Link>
    )
}