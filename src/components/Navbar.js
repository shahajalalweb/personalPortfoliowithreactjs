import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [open, setOpen] = useState(false);
    const menuLink = [
        { name: "HOME", link: "#home"},
        { name: "ABOUT", link: "#about"},
        { name: "SKILLS", link: "#skills"},
        { name: "PROJECT", link: "#project"},
        { name: "CONTACT", link: "#contact"}
    ]

    useEffect (() => {
       window.addEventListener("scroll", () => {
        const nav = document.querySelector("nav");
        window.scrollY > 0 ? setSticky(true) : setSticky(false);
       });

    }, []);


    return (
        <nav className={`fixed w-full left-0 top-0 ${sticky ? 'bg-white/60 text-gray-900' : "text-white"} z-[999]`}>

            {/* full navbar  */}
            <div className="flex items-center justify-between">

                {/* name protfolio  */}
                <div className="mx-7">
                    <h4 className="text-4xl uppercase font-bold">
                        ba<span className="text-cyan-600">ds</span>ha
                    </h4>
                </div>

                {/* menu list  */}
                <div className={` ${sticky ? 'md:bg-white/0 bg-white' : 'bg-white'} text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full`}>
                    <ul className="flex items-center gap-1 py-2 text-lg">
                        {
                            menuLink?.map((menu, i) => (
                                <li key={i} className="px-6 hover:text-cyan-600">
                                    <a href={menu?.link}>{menu?.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* sidebar menu button */}
                <div onClick={() => setOpen(!open)} className={`z-[999] md:hidden text-3xl m-5 ${open ? 'text-gray-900' : 'text-gray-100'}`}>
                    <i class="bi bi-list"></i>
                </div>

                {/* sm device menu  */}
                <div className={`md:hidden bg-white w-2/3 absolute px-7 py-2 h-screen top-0 font-medium duration-300 ${open ? 'right-0' : 'right-[-100%]'}`}>
                    <ul className="flex flex-col justify-center gap-10 h-full py-2 text-lg">
                        {
                            menuLink?.map((menu, i) => (
                                <li onClick={() => setOpen(false)} key={i} className="px-6 hover:text-cyan-600 text-gray-900">
                                    <a href={menu?.link}>{menu?.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;