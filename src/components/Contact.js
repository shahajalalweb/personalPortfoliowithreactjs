import React from "react";
import { AiOutlineMail, AiOutlineWhatsApp, AiOutlineInstagram, AiFillTwitterCircle, AiFillFacebook } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';

const Contact = () => {

    const contact_info = [
        {
            logo: <AiOutlineWhatsApp />, text: "01581238938" 
        },
        {
            logo: <AiOutlineMail />, text: "shahajalalbadsha5@gmail.com"
        },
        {
            logo: <GrLocation />, text: "Taragonj, Rangpur, Bangladesh"
        },
    ]





    return (
        <section id="contact" className="py-10 px-3 text-white">

            <div className="text-center mt-8">

                {/* contact title */}
                <h3 className="text-4xl font-semibold">

                    Contact <span className="text-cyan-600">Me</span>

                </h3>

                <p className="text-gray-400 mt-3 text-lg">
                    Get in touch
                </p>

                <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 p-6 rounded-lg mx-auto">
                    {/* form  */}
                    <form className="flex flex-col flex-1 gap-5">
                        <input type="text" placeholder="Your Name" />
                        <input type="Email" placeholder="Your Email Address" />
                        <textarea placeholder="Your Message" rows={10}></textarea>
                        <button className="btn-primary w-fit ">Send Message</button>
                    </form>

                    <div className="flex flex-col gap-5">

                            {
                                contact_info.map((contact, i) =>{

                                    return (
                                        <div key={i} className="flex gap-2 w-fit items-center">

                                            <div className="min-w-[2.5rem] min-h-[2.5rem] text-xl flex items-center justify-center text-white bg-cyan-600 rounded-full">

                                                {contact.logo}

                                            </div>

                                            <p className="text-sm hover:text-cyan-200">{contact.text}</p>

                                        </div>
                                    );

                                })
                            }

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;