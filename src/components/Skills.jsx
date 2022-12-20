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
       <section className="min-h-fit bg-bg_light_primary py-12" id="skills">
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                onRequestClose={onHandleModal}
            >

            </Modal>

            {/* CONTENT */}
            <div className="md:container text-center ">
                <h2 className="title" >{skills.title}</h2>
                <h4 className="subtitle">{skills.subtitle}</h4>
            </div>

            <br/>

            <div className="flex flex-wrap gap-4 justify-center">
                {skills.skills_content.map( (skill, index) => {
                    return(
                        <div
                            key={index}
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