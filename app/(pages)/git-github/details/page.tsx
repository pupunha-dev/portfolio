"use client"

import { useRouter } from "next/navigation";

export default function Details(){
    const router = useRouter();

    const handleBackNavigation = () => {
        router.back();
    }
    return(
        <div>
            <h1>Git and Github Details Page</h1>
            <button onClick={handleBackNavigation}>Voltar usando Router Bck</button>

        </div>
    )
}