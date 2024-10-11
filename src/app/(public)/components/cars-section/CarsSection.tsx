import Image from "next/image"
import Ferrari from "../../img/image1.jpg"
import Polex from "../../img/image2.jpg"
import Tyre from "../../img/image3.jpg"
import Civic from "../../img/image4.jpg"
import ferrari from "../../img/image51.jpg"
import Wagon from "../../img/image6.jpg"
import BMW from "../../img/image7.jpg"
import frontSide from "../../img/image8.jpg"
import WallPic from "../../img/image9.jpg"
export default function CarsSection() {
    return (
        <main>
            <div className="container m-auto p-4">
                <h2 className="text-blue-950 font-bold sm:text-[20px] text-[18px] text-start">
                    Featured Vehicles 2024
                    <hr className="border-solid border-2 border-indigo-600 sm:w-56 w-48" />
                </h2>
            </div>

            <section className="carsPics">
                <div className="firstSec grid grid-cols-3 mb-3">
                    <div className="sm:w-[100%] w-[80%] mx-auto">
                        <Image className="mx-auto" src={Ferrari} alt="ferrari" />
                    </div>
                    <div className="sm:w-[100%] w-[80%] mx-auto">
                        <Image className="mx-auto" src={Polex} alt="Polex" />
                    </div>
                    <div className="sm:w-[100%] w-[80%] mx-auto">
                        <Image className="mx-auto" src={Tyre} alt="Tyre" />
                    </div>
                </div>
                <div className="secSec grid grid-cols-3 mb-3">
                    <div className="sm:w-[100%] w-[80%] mx-auto">
                        <Image className="mx-auto" src={Civic} alt="Civic" />
                    </div>
                    <div className="sm:w-[100%] w-[80%] mx-auto">
                        <Image className="mx-auto" src={ferrari} alt="ferrari" />
                    </div>
                    <div className="sm:w-[100%] w-[80%] mx-auto">
                        <Image className="mx-auto" src={Wagon} alt="Wagon" />
                    </div>
                </div>
                <div className="thirdSec grid grid-cols-3 mb-3">
                    <div className="sm:w-[100%] w-[80%] mx-auto">
                        <Image className="mx-auto" src={BMW} alt="BMW" />
                    </div>
                    <div className="sm:w-[100%] w-[80%] mx-auto">
                        <Image className="mx-auto" src={frontSide} alt="PfrontSideolex" />
                    </div>
                    <div className="sm:w-[100%] w-[80%] mx-auto">
                        <Image className="mx-auto" src={WallPic} alt="WallPic" />
                    </div>
                </div>
            </section>
        </main>
    )
}