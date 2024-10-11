import Image from "next/image"
import Maps from "../../(public)/img/contact1.gif"
// Image

export default function ContactPage() {
    return (
        <main>
            <section className="w-full mx-auto">
                <div className="p-4">
                    <h1 className="uppercase text-blue-950 font-bold text-center  text-[16px] sm:text-[26px] mb-5">Contact Us</h1>
                </div>

                <div className="location w-full">
                    <Image src={Maps} className="w-[100%] shadow-xl" alt="map" />
                </div>

                <div className="contactDetails">
                    <div className="p-5">
                        <h2 className="text-blue-950 font-bold text-left  text-[15px] sm:text-[20px]">Get in Touch</h2>
                        <p className="text-justify text-[15px]">We invite you to visit our dealership and experience the Zkingman difference for yourself. Whether you’re in the market for a new car, need service for your current vehicle, or just have a question, we are here to help. We look forward to serving you! Follow us on social media to stay updated on our latest offerings, events, and promotions. Join the Zkingman community and be a part of our journey. Feel free to tweak or expand on this to make it perfectly fit Zkingman!</p>
                        {/* <p>Contact us at [Phone Number] or [Email Address], or stop by our showroom at [Address]. </p> */}
                    </div>
                    
                    <div className="p-5">
                        <h2 className="text-blue-950 font-bold text-left  text-[15px] sm:text-[20px]">Contact Us</h2>
                        <h5 className="font-bold">Phone no: 111-222-333 </h5>
                        <h5 className="font-bold"> Email: support@zKingman.com </h5> 
                        <h5 className="font-bold">Address: JL.Kemacetan timur no 23. block. Q Jakarta-Indonesia</h5>
                    </div>
                </div>
            </section>
        </main>
    )
}
