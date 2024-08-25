import Link from "next/link";
import { fontVt, fontPixel } from "@/assets/fonts";

export default function GitGithub() {

    return (
        <div className="w-3/5 h-screen mt-16">
            <h1 className={`${fontPixel.className} text-4xl font-bold`}>Git e Github - Basics</h1>

            <ul className="text-2xl">
                <li>1. git config --global user.name username</li>
                <li>2. git config --global user.email useremail</li>
                <li>3. git init</li>
                <li>4. git remote add origin urlDoDiretorio</li>
                <li>5. git branch -m master main</li>
                <li>6. git add .</li>
                <li>7. git commit -m description</li>
                <li>8. git push -u origin main</li>
                <li>9. git status</li>
                <li>10. git clone urlDoDiretorio nomeDoClone</li>
                <li>11. git pull</li>
            </ul>

            <Link href="/">Voltar para Home</Link> <br />
            {/* <Link href="/git-github/details">Details</Link> */}
        </div>
    );
}   
