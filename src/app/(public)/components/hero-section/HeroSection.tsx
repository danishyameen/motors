import Image from "next/image"
import Barnner from "../../img/barner.gif"
export default function HeroSection(){
    return(
        <section>
            <div className="barnner">
                <Image src={Barnner} alt="barnner" className="w-[100%] sm:w-[100%]"/>
            </div>
        </section>
    )
}