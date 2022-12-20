import { createElement } from "react";
import { Toaster } from "react-hot-toast";
import { content } from "../Content";



export const Contact = () => {

    const { Contact: ContactData} = content


    return(
        <section className="bg-dark_primary text-white" id="contact">
            <div className="md:container px-5 py-14 text-center">
                <h2 
                    className="title !text-white"
                    data-aos="fade-down"
                    >
                    {ContactData.title}
                </h2>

                <h4 className="subtitle" 
                    data-aos="fade-down"
                >
                    {ContactData.subtitle}
                </h4>
                <br/>
                <div className="flex gap-10  flex-col">
                    <form className="flex flex-col item-center justify-center">
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Name"
                            required
                            className="border border-slate-600 p-3 rounded"
                        />
                        <input
                            type="email"
                            name="user_email"
                            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                            placeholder="Email Id"
                            required
                            className="border border-slate-600 p-3 rounded"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            className="border border-slate-600 p-3 rounded h-44"
                            required
                        ></textarea>
                        <button
                            className="btn self-end mt-2
                            bg-white text-dark_primary"
                            >
                            Submit
                        </button>
                    </form>
                    <div className="flex-1 flex flex-col gap-5">
                        {ContactData.social_media.map((content, i) => (
                            <div
                                key={i}
                                data-aos="fade-down"
                                data-aos-delay={i * 430}
                                className="flex items-center gap-2"
                            >
                                <h4 className="text-white">{createElement(content.icon)}</h4>
                                <a className="font-Poppins" href={content.link} target="_blank">
                                {content.text}
                                </a>
                            </div>
                        ))}
                    </div>
                 </div>
            </div>
        </section>

    )
};