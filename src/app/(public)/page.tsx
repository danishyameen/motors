import CarsSection from "./components/cars-section/CarsSection"

export default function Home() {
    return (
        <main>
            {/* <div className="w-full">
                <HeroSection />
            </div> */}

            <section className="contaier m-auto">
                <div className="my-5">
                    <h2 className="uppercase text-blue-950 font-bold text-center  text-[16px] sm:text-[26px]">Discover Your Dream Car Today</h2>
                    <h2 className="uppercase text-blue-950 font-bold text-center  text-[16px] sm:text-[26px]">Your Ultimate Destination for Quality Cars</h2>
                </div>
                <div>
                    <CarsSection/>
                </div>
            </section>
        </main>
    )
}