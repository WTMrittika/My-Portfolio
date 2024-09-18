import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    {/*hero text color*/}
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                        Hii, I'm Wasifa Tasnim Mrittika
                    </h1>
                    <p className="text-[#ADB7BE] text-lg lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab labore veritatis aperiam sunt, repellat provident error ut voluptatibus a odio vitae eveniet
                    </p>
                </div>
                {/*image information*/}
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#333131] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src="/images/picture.png"
                        alt="picture"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={500}
                        height={500}
                    />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default HeroSection;