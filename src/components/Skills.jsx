import { createElement, useState } from "react";
import Modal from "react-modal";


import { content } from "../Content";





const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "23rem",
      width: "90%",
    },
    overlay: {
      padding: "2rem",
    },
  };

  Modal.setAppElement("#root");


export const Skils = () => {
    const { skills } = content;
    const [ modalIsOpen, setOpenModal ] = useState(false);
    const [ selectSkill, setSelectSkill ] = useState(null);

    // function openModal() {
    //     setOpenModal(true);
    //   }
    
    // function closeModal() {
    //     setOpenModal(false);
    //   }

    const onHandleModal = () => {
        setOpenModal(!modalIsOpen)
    }


    return(
       <section className="min-h-fit bg-bg_light_primary py-12 " id="skills">
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                onRequestClose={onHandleModal}
            >
                <div className="flex items-center gap-2">
                    <img className="h-10" src={selectSkill?.logo} alt="..." />
                    <h6>{selectSkill?.name}</h6>
                    </div>
                    <br />
                    <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit, ame.</li>
                    <li>Lorem ipsum dolor sit, amet consectetur</li>
                    <li>
                        Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.
                    </li>
                    <li>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est
                        beatae quos rem.
                    </li>
                    </ul>
                    <br />
                    <div className="flex justify-end">
                    <button onClick={onHandleModal} className="btn">
                        Close
                    </button>
                </div>

            </Modal>

            {/* CONTENT */}
            <div className="md:container text-center  ">
                <h2 className="title" data-aos="fade-left">{skills.title}</h2>
                <h4 className="subtitle" data-aos="fade-left">{skills.subtitle}</h4>
            </div>

            <br/>

            <div className="flex flex-wrap gap-4 justify-center md:container">
                {skills.skills_content.map( (skill, index) => {
                    return(
                        <div
                            key={index}
                            data-aos="fade-down"
                            data-aos-delay={index * 400}
                            className="bg-white sm:cursor-pointer relative group w-full flex items-center border-2  gap-5 p-5 max-w-sm
                            rounded-md  border-slate-200
                            "
                            
                        >

                            <div>
                                <img 
                                    src={skill.logo}
                                    alt='logo'
                                    className="w-10 group hover:scale-125 duration-200"
                                    
                                />
                            </div>
                            
                            <div>
                                <h6>{skill.name}</h6>
                            </div>

                            <div
                                className="text-xl absolute top-3 right-3"
                                onClick={ () => {
                                    setSelectSkill(skill)
                                    onHandleModal();
                                }}
                            >
                                {createElement(skills.icon)}
                            </div>

                            
                        </div>
                    )
                })}
            </div>

       </section>
       
    )
}