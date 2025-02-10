import { Acme, Montserrat, Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
    display: "swap",
});

const montserrat = Montserrat({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
    variable: "--font-montserrat",
    display: "swap",
});

const aceme = Acme({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-montserrat",
    display: "swap",
})

export { poppins, montserrat };