import { Nunito, Pixelify_Sans, VT323 } from "next/font/google";

const fontNunito = Nunito({ subsets: ["latin"] });
const fontPixel = Pixelify_Sans({ subsets: ["latin"] });
const fontVt = VT323({
    subsets: ["latin"],
    weight: "400"
});

export { fontNunito, fontPixel , fontVt}