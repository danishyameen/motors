import Image from "next/image"
import Logo from "../../img/logo.png"
import Link from "next/link"


export default function Header(){
    return(
        <main className="mt-5 mb-5 sticky top-0 bg-white shadow-xl w-full">
            <header className="mt-5 grid sm:grid-cols-2 gap-2 w-full">
                <div className="logo mb-2 mt-3">
                    <Image src={Logo} alt="logo" className="w-[250px] m-auto"/>
                </div>

                    <ul className="flex justify-center gap-9 mt-3 text-[18px]">
                        <li className="font-semibold hover:text-blue-800 hover:underline"><Link href="/">Home</Link></li>
                        <li className="font-semibold hover:text-blue-800 hover:underline"><Link href="/reviews">Testimonials</Link></li>
                        <li className="font-semibold hover:text-blue-800 hover:underline"><Link href="/about">About</Link></li>
                        <li className="font-semibold hover:text-blue-800 hover:underline"><Link href="/contact">Contact</Link></li>
                    </ul>
            </header>
        </main>
    )
}