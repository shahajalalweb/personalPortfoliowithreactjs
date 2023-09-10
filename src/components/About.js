import React from "react";
import pdf from "../assets/CV-Badsha.pdf";
import aboutimg from "../assets/img/aboutimg.png";

const About = () => {
    const info = [
        {text:'Years Experience', count:'04'},
        {text:'Completed Project', count:'10'},
        {text:'Companies Work', count:'01'},
    ]

    return (
        <section id="about" className="py-10 text-white overflow-hidden">
            <div className="text-center mt-8">


                <h3 className="text-4xl font-semibold">
                    About <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 my-2 mb-10 text-lg">
                    My Introduction
                </p>


                <div className="flex flex-1 md:flex-row flex-col-reverse md:gap-6 gap-12 md:w-full px-10 max-w-7xl mx-auto items-center">
                    <div className="p-2 mt-5">
                        <div className="text-gray-300 ">

                            <p className="text-justify leading-7 mx-auto">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>

                            <div className="flex mt-10 items-center gap-7 justify-center">
                                {
                                    info.map((content) => (
                                        <div key={content.text}>
                                            <h3 className="md:text-4xl text-2xl font-semibold">
                                                {content.count}
                                                <span className="text-cyan-600">+</span>
                                            </h3>
                                            <span className="md:text-base text-sm">{content.text}</span>
                                        </div>
                                    ))
                                }
                            </div>

                            <br/>
                            <br/>

                            <a href={pdf} download className="flex items-center justify-center">
                                <button className="btn-primary mt-5">
                                    Download CV
                                </button>
                            </a>

                        </div>
                    </div>
                        <div className="flex-1 flex mt-5 md:mt-0 justify-center items-center">

                            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">

                                <img src={aboutimg} alt="" className="w-full object-cover bg-cyan-600 rounded-xl overflow-hidden" />

                            </div>

                        </div>

                </div> 
            </div>
        </section>
    );


};

export default About;