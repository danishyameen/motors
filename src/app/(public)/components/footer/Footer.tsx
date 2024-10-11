import Link from "next/link"
export default function Footer() {
    return (

        <main className="bg-blue-950 min-h-24 mt-5 w-full">
            <footer className="container mx-auto p-3 grid sm:grid-cols-2 grid-cols-1 gap-4">
                <div>
                    <h2 className="text-white font-bold text-[16px]">Visit Us Today</h2>
                    <p className="text-white font-light">Convenient Location: We are conveniently located at Khalid Bin waleed road karachi. All rights reserved &copy;copyrights &#174; zKingman registered trademark</p>
                   
                </div>
            <div className="flex sm:justify-evenly justify-around gap-10">
                <div>
                    <h2 className="text-white font-bold text-[16px]">Services</h2>
                    <ul className="text-white font-light">
                        <li> <Link href="/">Home</Link></li>
                        <li><Link href="/reviews">Testimonials</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-white font-bold text-[16px]">Social Media</h2>
                    <p className="text-white font-light">facebook</p>
                    <p className="text-white font-light">twitter</p>
                    <p className="text-white font-light">instagram</p>
                    <p className="text-white font-light">linkedin</p>
                </div>
                
            </div>
            
            </footer>
        </main>
    )
}