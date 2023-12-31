import React from "react";
import hereme from '../assets/img/aboutimg.png'

const Hireme = () => {
    return (
        <section id="hireme" className="py-10 px-3 text-white">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    Hire <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
            </div>
            <div className="bg-gray-700 relative px-8 rounded-2xl py-5 md:max-w-4xl mx-auto min-h-[24rem] mt-10 md:mt-24 flex gap-6 md:flex-row flex-col-reverse md:items-center items-center">
                <div>
                    <h2 className="text-2xl font-semibold">
                        Do you want any work from me ?
                    </h2> 
                    <p className="max-w-md lg:max-w-lg md:text-left text-justify  text-sm mt-4 text-gray-200 leading-6">
                        "Welcome to my portfolio! I'm Shahajalal Badsha, a computer student and passionate font developer. I specialize in crafting unique and aesthetically pleasing typefaces that elevate the visual experience of digital content. With a keen eye for detail and a commitment to that demands exceptional typography, I invite you to get in touch. Let's transform your ideas into stunning fonts that leave a lasting impression."
                    </p>
                    <button className="btn-primary mt-10">Say hello</button>
                </div>
                <img src={hereme} alt="" className="md:h-[32rem] h-80 md:absolute bottom-0 -right-2 object-cover"/>

            </div>
        </section>
    ); 
}

export default Hireme;