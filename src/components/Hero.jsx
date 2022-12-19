import { useEffect } from "react";
import { content } from "../Content";


export const Hero = () => {

    const { hero } = content;

    return(
        <section id="home" className="border border-black">
            <div className="min-h-screen border-14 bg-red-500 border-black">

                {/* Name */}
                <div>
                    <h1>
                        {hero.firstName}{""}
                        <span>{hero.LastName}</span>
                    </h1>
                </div>

                 {/* First Col */}
                <div>
                    <h2>{hero.title}</h2>
                    <br/>
                    <div>
                        <button>{hero.btnText}</button>
                    </div>
                    <div>
                        {hero.hero_content.map ((heroContent, index) => {
                            return(
                                <div>
                                    <h3>{heroContent.count}</h3>
                                    <p>{heroContent.text}</p>
                                </div>
                            )
                        })}
                    </div>

                     {/* Second Col */}
                        <div>
                            <img
                                src={hero.image}
                                alt="photo-hero"
                            />
                        </div>
                        
                </div>

                
            </div>
        </section>
    )
}