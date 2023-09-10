import React from "react";

const Skills = () => {

    const skillss = [
        {logo:'bi-filetype-html', perfor:'Advance', count:'86'},
        {logo:'bi-bootstrap', perfor:'Intermediate', count:'50'},
        {logo:'bi-filetype-css', perfor:'Expect', count:'90'},
        {logo:'bi-filetype-jsx', perfor:'Beginner', count:'70'},
    ]

    return (
        <section id="skills" className="py-10 bg-gray-800 relative">

            <div className="mt-8 text-gray-100 text-center">

                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-600">Skills</span>
                </h3>

                <p className="text-gray-400 mt-3 text-lg">
                    My Knowledge
                </p>

                <div className="flex items-center justify-center flex-wrap mt-12 gap-10">

                {
                    skillss?.map((skill, i) => (
                        
                        <div key={i} className="border-2 border-cyan-600 p-8 rounded-xl min-w-[12rem] max-w-[16rem] relative">

                            <div style={{
                                background: `conic-gradient(rgb(8,145,170) ${skill.count}%, #ddd ${skill.count}%)`,
                            }} className="flex w-32 h-32 items-center justify-center rounded-full">

                                <div className="flex items-center justify-center w-28 h-28 bg-gray-900 hover:text-cyan-600 rounded-full text-6xl">
                                    <i class={`bi ${skill.logo}`}></i>
                                </div>

                            </div>

                            <p className="text-xl mt-3">
                                {
                                    skill.perfor
                                }
                            </p>

                        </div>

                    ))
                }

                </div>

            </div>

        </section>
    )
}

export default Skills;



