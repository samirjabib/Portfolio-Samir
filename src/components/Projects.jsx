import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Link } from "react-router-dom";


export const Projects = () => {

    const { Projects } = content

    
    return(
        <section id="projects"  className="bg-bg_light_primary py-12">
            <div >
                <div className="md:container px-5 pt-14 minh-screen flex flex-col text-center">
                    <h2 className="title" data-aos="fade-down">
                        {Projects.title}
                    </h2>
                    <h4 className="subtitle" data-aos="fade-down">
                        {Projects.subtitle}
                    </h4>
                    <br/>
                </div>
                <div className="gap-5 mx-auto w-4/5">
                    <Swiper
                        pagination={{
                            clickable:true,
                        }}
                        className="rounded-3xl pb-16 max-w-lg drop-shadow-primary "
                        spaceBetween={20}
                        modules={[Pagination]}
                    
                    >
                        {
                            Projects.project_content.map( ( content, index) => {
                                return(
                                    <SwiperSlide 
                                        key={index}
                                        className="  flex flex-col-reverse items-center justify-center h-fit
                                        "
                                        data-aos="flip-left"
                                    >  
                                            <img 
                                                src={content.image}
                                                alt="content-image"
                                                className="w-[100%] h-72 flex justify-end object-cover rounded-md shadow-md"
                                            />

                                            <div className="flex flex-col gap-1 mt-6">
                                                <h5 className="font-bold font-Poppins drop-shadow-primary ">{content.title}</h5>
                                                <button className="font-bold text-gray self-center">
                                                    <a href="">
                                                    READ MORE
                                                    </a>
                                                </button>
                                            </div>
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </div>
            </div>
            
        </section>
    )
}