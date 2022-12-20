import { content } from "../Content";


export const Hero = () => {

    const { hero } = content;

    return(
        <section id="home" className="overflow-hidden">
            <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end items-center justify-center ">

                {/* Name */}
                <div 
                    className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
                    data-aos="slide-left"
                    data-aos-delay="1000"
                >
                    <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
                        {hero.firstName}{""}
                        <span className="text-dark_primary">{hero.LastName}</span>
                    </h1>
                </div>


                 {/* First Col */}
                <div className="pb-16 px-6 pt-5">
                    <h2>{hero.title}</h2>
                    <br/>
                    <div className="flex justify-end">
                        <button className="btn">{hero.btnText}</button>
                    </div>
                    <div className="flex flex-col gap-10 mt-10">
                        {
                            hero.hero_content.map ((heroContent, index) => {
                                return(
                                    <div 
                                        className="flex items-center w-80 gap-5"
                                        data-aos="fade-down"
                                        data-aos-delay="700"
                                        key={index}
                                    >
                                        <h3>{heroContent.count}</h3>
                                        <p>{heroContent.text}</p>
                                    </div>
                                );
                            })
                        }
                    </div>

                </div>

                <div className="md:h-[37rem] h-96">
                    <img
                        src={hero.image}
                        alt="..."
                        className="h-full object-cover"
                    />
                </div>

            </div>
        </section>
    )
}