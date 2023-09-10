import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay} from 'swiper/modules';
import Demo1 from "../assets/img/demo1.PNG";
import project2 from "../assets/img/project2.PNG";
import project3 from "../assets/img/project3.PNG";
import project4 from "../assets/img/project4.PNG";

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';



const Project = () => {

    const Projects = [
        {
            img: Demo1, name: "Backend Demo", github_link: "https://github.com/shahajalalweb/backend-demo-1", live_link: "https://demo-backend-1.netlify.app"
        },
        {
            img: project2, name: "P Blog", github_link: "https://github.com/shahajalalweb/pBlog", live_link: "https://pblog-badsha.netlify.app"
        },
        {
            img: project3, name: "Dev Blog", github_link: "https://github.com/shahajalalweb/DevBlog-codewithsadee", live_link: "https://dev-blog-badsha.netlify.app"
        },
        {
            img: project4, name: "Cricket Shedule", github_link: "https://github.com/shahajalalweb/cricket-schedule", live_link: "https://cricket-schedule.netlify.app"
        },
    ]

    return (
        <section id="project" className="py-10 text-white">

            {/* project title   */}
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-600">Project</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">
                    My Awesome works
                </p>
            </div>


            <br/>

            <div className="flex max-w-6xl px-5 mx-auto items-center justify-center relative">
                
                <div className="lg:w-2/3 w-full">

                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1.2}
                        // navigation
                        breakpoints={
                            {
                                768: {
                                    slidesPerView: 2, 
                                }
                            }
                        }
                        pagination={{ clickable: true }}
                        autoplay={
                            {
                                delay: 3000,
                            }
                        }
                        
                    >

                        {
                            Projects.map((project) => (


                                <SwiperSlide>
                            
                                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                                
                                    <img src={project.img} alt="" className="rounded-lg w-full h-80" />
                                
                                    <h3 className="text-xl my-4">{project.name}</h3>
                                
                                    <div className="flex gap-3">
                                        <a href={project.github_link} target="_blank" className=" text-cyan-600 rounded-sm bg-gray-800 hover:bg-gray-950 px-2 py-1 inline-block ">
                                            GitHub
                                        </a>
                                        <a href={project.live_link} target="_blanck" className=" text-cyan-600 rounded-sm bg-gray-800 hover:bg-gray-950 px-2 py-1 inline-block">
                                            Live Demo
                                        </a>
                                    </div>
                                
                                </div>
                                
                                </SwiperSlide> 


                            ))
                        }

                    </Swiper>

                </div>

            </div>

        </section>
    );
}

export default Project;






