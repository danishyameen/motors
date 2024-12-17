import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"



import Image from "next/image"
import Logo from "../../img/logo.png"
import Link from "next/link"


export default function Header(){
    return(
        <main className="mt-5 mb-5 sticky top-0 bg-white shadow-xl w-full mx-auto">
            <header className="mt-5 grid sm:grid-cols-2 gap-2 w-full mx-auto">
                <div className="logo mb-2 mt-3 ">
                    <Image src={Logo} alt="logo" className="w-[150px] sm:w-[250px] ml-4 sm:m-auto"/>
                </div>
                    <div className="md:block hidden">
                    <ul className="flex justify-center gap-9 mt-3 text-[18px]">
                        <li className="font-semibold hover:text-blue-800 hover:underline"><Link href="/">Home</Link></li>
                        <li className="font-semibold hover:text-blue-800 hover:underline"><Link href="/reviews">Testimonials</Link></li>
                        <li className="font-semibold hover:text-blue-800 hover:underline"><Link href="/about">About</Link></li>
                        <li className="font-semibold hover:text-blue-800 hover:underline"><Link href="/contact">Contact</Link></li>
                    </ul>
                    </div>
                    <div className="absolute right-6 top-3 sm:top-4 sm:block md:hidden">
                    <Sheet>
                    <SheetTrigger><Menu/></SheetTrigger>
                    <SheetContent  side="right">
                    <ul className=" mt-3 text-[18px] text-center leading-[50px] items-center">
                        <li className="font-semibold hover:text-blue-800 hover:underline"><Link href="/">Home</Link></li>
                        <li className="font-semibold hover:text-blue-800 hover:underline"><Link href="/reviews">Testimonials</Link></li>
                        <li className="font-semibold hover:text-blue-800 hover:underline"><Link href="/about">About</Link></li>
                        <li className="font-semibold hover:text-blue-800 hover:underline"><Link href="/contact">Contact</Link></li>
                    </ul>
                    </SheetContent>
                    </Sheet>
                    </div>
            </header>
        </main>
    )
}