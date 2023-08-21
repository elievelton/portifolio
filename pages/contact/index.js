import { useState } from 'react';
import emailjs from 'emailjs-com';
import Circles from '/components/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { toast, ToastContainer } from 'react-toastify';
import Head from 'next/head';

const Contact = () => {
  //Trabalhando os dados usando o emailjs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  //validação dos dados de e-mail 


  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Nome é obrigatório!");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Email inválido!");
      return;
    }

    if (!subject.trim()) {
      toast.error("Assunto é obrigatório!");
      return;
    }

    if (!message.trim()) {
      toast.error("Mensagem é obrigatória!");
      return;
    }
    const formData = {
      name,
      email,
      subject,
      message,
    };

    emailjs.send('service_t6y9gz1', 'template_lvfsadz', formData, '1wslfI6JpR1pcnXHc')
      .then((result) => {
        console.log(result.text);
        toast.success('Mensagem enviada com sucesso!');  // Notificação de sucesso aqui
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      });

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <>
    <Head>
    <title>Contact-Elievelton - Questions? Contact Me!</title>
    <meta name="description" content="Every great collaboration starts with a simple message. Reach out today, and let's create something amazing together." />
    <meta name="keywords" content="Elievelton, contact" />
        <link rel="canonical" href="https://elievelton.dev/" />
        <link rel="alternate" hreflang="en-US" href="https://elievelton.dev/" />
  </Head>
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2 variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' className='h2 text-center mb-12'>
          Let&apos;s <span className='text-accent'>Connect.</span>
          </motion.h2>
          <motion.form onSubmit={handleSubmit} variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden' className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} className='input' />
              <input type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} className='input' />
            </div>
            <input type='text' placeholder='subject' value={subject} onChange={(e) => setSubject(e.target.value)} className='input' />
            <textarea placeholder='message' value={message} onChange={(e) => setMessage(e.target.value)} className='textarea'></textarea>
            <button type='submit' className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let&apos;s talk</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] text-accent' />
            </button>
          </motion.form>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      /> {/* Container para renderizar os toasts */}
    </div>
    </>
  );
};

export default Contact;
