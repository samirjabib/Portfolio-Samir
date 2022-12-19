import { HiMenuAlt2 } from "react-icons/hi";


import { useState } from "react";
import { createElement } from "react";

//data dummie
import { content } from "../Content";


export const Navbar = () => {
    const { nav } = content;
    const [ showMenu, setShowMenu ] = useState(false);
    const [ active, setActive ] = useState(0);

    return(
        <div className="border border-black w-full flex justify-center">

            {/* Hamburguer Menu */}
            <div 
                className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2"
                onClick={() => setShowMenu(!showMenu)}
                >
                <HiMenuAlt2 size={34}/>
            </div>

            {/* Nav Links */}
            <nav
                className={` fixed z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary 
                duration-300 ${ showMenu ? "bottom-10" : "bottom-[-100%]"}`
                }
            >
                {nav.map( (navItem, index) => {
                    return(
                        <a
                            href={navItem.link}
                            onClick={ () => setActive(index)}
                            className={`text-xl p-2.5 rounded-full sm:cursor-pointer`}
                        >
                            {createElement(navItem.icon)}
                        </a>
                    )
                })

                }
            </nav>
        </div>
    )
}