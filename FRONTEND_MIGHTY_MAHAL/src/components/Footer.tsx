import About from "../information/about"
import Links from "../information/links"
import NewsLetter from "../information/NewsLetter"
export default function Footer() {
    return (
   
            <div className="flex justify-center items-center lg:relative text-white lg:bottom-0 bg-[#3d8066] w-full lg:h-110 h-110 flex-col">
                <div className="flex lg:w-full lg:px-30 lg:py-10  lg:-mt-20 ">
                            <div className="lg:w-1/4 lg:px-6  ">
                        <About />

                    </div>

                        <div className="lg:w-1/4 lg:px-6 lg:relative lg:left-50 relative  ">
                        <Links />
                    </div>
                    <div className="lg:w-1/4 lg:px-6 lg:relative lg:left-50 lg:top-2 hidden lg:block">
                        <NewsLetter />
                    </div>
                </div>
                <div className="lg:py-4 lg:pt-20 lg:absolute lg:bottom-0 lg:text-center lg:right-160  relative lg:top-80  lg:text-white lg:text-sm">
                    <div className="lg:relative w-120 relative bottom-5 right-28 lg:w-5/1  lg:right-130 lg:bottom-5"><hr></hr></div>
                    © {new Date().getFullYear()} Mighty Mahal. All rights reserved.
                </div>
            </div>
        
    )
}
