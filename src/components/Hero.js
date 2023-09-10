import React from "react";
import Heros from "../assets/img/hero.PNG";


const Hero = () => {

    const social_here = [
        {
            logo: 'bi-facebook', link: "https://www.facebook.com/shahajalal38"
        },
        {
            logo: 'bi-instagram', link: "https://www.instagram.com/shahajalalbadsha5"
        },
        {
            logo: 'bi-linkedin', link: ""
        },
        {
            logo: 'bi-twitter', link: "https://twitter.com/Shahajalal89212"
        },
    ]


    return (
        <section id="home" className="flex py-10 flex-col md:flex-row items-center min-h-screen">
            <div className="flex-1 p-10 flex itmes-center justify-center h-full">
                <img src={Heros} alt="" className="md:w-11/12 object-cover rounded-full h-full" />
            </div>
            <div className="flex-1 p-5">
                <div className="text-center md:text-left">
                    <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                        <span className="text-cyan-600 md:text-6xl text-5xl">
                            Hello!
                            <br/>
                        </span>
                        My Name is <span>Shahajalal Badsha</span>
                    </h1>
                    <h4 className="md:text-2xl text-lg md:leading-normal leading-10 font-bold text-gray-600">Font Developer</h4>
                    <a href="https://call.whatsapp.com/voice/cYTj3pGqB4M0jSdAorNVkU" target="_blank" className="btn-primary w-fit mt-5 hover:bg-cyan-700 duration-300">Contact Me</a>
                </div>
                <div className="mt-8 text-3xl flex itmes-center md:justify-start justify-center gap-5">
                    {
                        social_here.map((icon, i) => (
                            <div key={i} className="text-gray-600 hover:text-white cursor-pointer">
                                <a href={icon.link} target="_blank">

                                    <i class={`bi ${icon.logo}`}></i>

                                </a>
                            </div>
                        ))
                    } 
                </div> 
            </div>
        </section>
    )
}

export default Hero;

