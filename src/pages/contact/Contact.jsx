import { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [isFocused , setIsFocused] = useState(false)
  const [isFocused2 , setIsFocused2] = useState(false)
  const [isFocused3 , setIsFocused3] = useState(false)
  const [isFocused4 , setIsFocused4] = useState(false)

  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [subject , setSubject] = useState('')
  const [message , setMessage] = useState('')

  const handleFocus = (e) => {
    if(e.target.name === 'name'){
      setIsFocused(true)
    }
    if(e.target.name === 'email'){
      setIsFocused2(true)
    }
    if(e.target.name === 'subject'){
      setIsFocused3(true)
    }
    if(e.target.name === 'message'){
      setIsFocused4(true)
    }
  }
  const handleBlur = (e) => {
    if(e.target.name === 'name'){
      setIsFocused(false)
    }
    if(e.target.name === 'email'){
      setIsFocused2(false)
    }
    if(e.target.name === 'subject'){
      setIsFocused3(false)
    }
    if(e.target.name === 'message'){
      setIsFocused4(false)
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    
  }

  return (
    <div className="w-full h-3/4 flex justify-center items-center px-3 flex-col gap-14">
      <h1 className="font-head3 text-3xl lg:text-5xl text-[#e34b71] uppercase">Get in touch 👋</h1>
      <form action="" className="flex flex-col w-full sm:w-2/4 xl:w-2/5" onSubmit={handleSubmit}>
        <div className="relative flex nameInput ">
          <input
            type="text"
            name="name"
            id="name"
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={name}
            onChange={(e) => setName(e.target.value)}
            // placeholder="Name"
            className="border focus:border-[#e34b71] focus:border-2 rounded-md p-2 m-2 outline-none w-full bg-transparent "
          />
          <label
            htmlFor="name"
            className={`${!isFocused ? !name ? "top-4 left-2 bg-transparent" : '-top-0.5 left-6 text-sm' : '-top-0.5 left-6 text-sm'} absolute bg-black px-3 messageLabel transition-all text-pink-100/70`}
          >
            Name
          </label>
        </div>

        <div className="relative flex ">
          <input
            type="email"
            name="email"
            id="email"
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // placeholder="Email"
            className="border focus:border-[#e34b71] focus:border-2 rounded-md p-2 m-2 outline-none  w-full bg-transparent emailInput"
          />
          <label
            htmlFor="email"
            className={`${!isFocused2 ? !email ? "top-4 left-2 bg-transparent" : '-top-0.5 left-6 text-sm' : '-top-0.5 left-6 text-sm'} absolute bg-black px-3 messageLabel transition-all text-pink-100/70`}
          >
            Email
          </label>
        </div>

        <div className="relative flex ">
          <input
            type="text"
            name="subject"
            id="subject"
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            // placeholder="Subject"
            className="border focus:border-[#e34b71] focus:border-2 rounded-md p-2 m-2 outline-none   w-full bg-transparent subjectInput"
          />
          <label
            htmlFor="subject"
            className={`${!isFocused3 ? !subject ? "top-4 left-2 bg-transparent" : '-top-0.5 left-6 text-sm' : '-top-0.5 left-6 text-sm'} absolute bg-black px-3 messageLabel transition-all text-pink-100/70`}
          >
            Subject
          </label>
        </div>

        <div className="relative flex ">
          <textarea
            name="message"
            id="message"
            cols="10"
            rows="4"
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            // placeholder="Message"
            className="border focus:border-[#e34b71] focus:border-2 rounded-md p-2 m-2 outline-none w-full bg-transparent messageInput"
          ></textarea>
          <label
            htmlFor="message"
            className={`${!isFocused4 ? !message ? "top-4 left-2 bg-transparent" : '-top-0.5 left-6 text-sm' : '-top-0.5 left-6 text-sm'} absolute bg-black px-3 messageLabel transition-all text-pink-100/70`}
          >
            Message
          </label>
        </div>

        <button className="bg-[#a52646] px-6 py-2 uppercase font-semibold border-2 transition-all border-pink-700 hover:bg-transparent w-36 self-end mx-2 mt-8 rounded-full text-pink-100">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
