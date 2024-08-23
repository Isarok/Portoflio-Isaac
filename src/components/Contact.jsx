import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { sendEmail } from '../utils/emailService'; // Asegúrate de que la ruta sea correcta
import { toast, ToastContainer, Zoom } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(form);
  };

  const notify = () => {
    toast("Email enviado 🚀, gracias por contactar conmigo!", {
      position: "top-center",
      className: "text-[15px] md:text-[20px] lg:text-[30px] xl:text-[30px] 2xl text-cyan-400  text-left text-black",
      theme: "dark",
      transition:Zoom,
      

      
    });
  };
  return (
    <section
      className="max-w-[1200px]  mx-auto py-[20vh] md:py-[30vh] lg:py-[30vh] xl:min-h-[60vh] 2xl:min-h-[100vh] flex items-center justify-center"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div className='md:pl-6'>
              <h4 className="text-xl uppercase text-cyan-400 font-medium mb-6 tracking-wide">
                Contacto
              </h4>
              <h2 className="text-2xl 2xl:text-6xl leading-none font-semibold">
                Trabajemos juntos
              </h2>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:mt-0 mt-8 border rounded-2xl flex flex-col gap-y-4 pb-20 p-6 items-start "
          >
            <form ref={form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="user_name"
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-cyan-400 transition-all duration-300"
                placeholder="Nombre"
              />

              <input
                type="email"
                name="user_email"
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-cyan-400 transition-all duration-300"
                placeholder="Email"
              />

              <textarea
                name="message"
                cols="30"
                rows="2"
                className="bg-transparent border-b py-2 outline-none w-full placeholder:text-white focus:border-cyan-400 transition-all duration-300 resize-none"
                placeholder="Escribe tu mensaje..."
              ></textarea>

              <button 
              className="btn btn-lg rounded-md text-black bg-[#12eff7] px-6 py-3 transition-colors hover:text-[#12eff7] hover:bg-transparent"
              onClick={notify}>
                Enviar
              </button>

              <ToastContainer />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
