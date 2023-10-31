import { useState } from "react";
import { useRef } from "react";
import toast from "react-hot-toast";
// import 'dotenv/config'

import "./contact.css";
import emailjs from "@emailjs/browser";

const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;

const Contact = () => {
  const form = useRef();

  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const [isFocused4, setIsFocused4] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleFocus = (e) => {
    if (e.target.name === "name") {
      setIsFocused(true);
    }
    if (e.target.name === "email") {
      setIsFocused2(true);
    }
    if (e.target.name === "subject") {
      setIsFocused3(true);
    }
    if (e.target.name === "message") {
      setIsFocused4(true);
    }
  };
  const handleBlur = (e) => {
    if (e.target.name === "name") {
      setIsFocused(false);
    }
    if (e.target.name === "email") {
      setIsFocused2(false);
    }
    if (e.target.name === "subject") {
      setIsFocused3(false);
    }
    if (e.target.name === "message") {
      setIsFocused4(false);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, "aJQttG4CBb1GiKyn_")
      .then(
        () => {
          toast.success("Email Sent!");
        },
        (error) => {
          toast.error("Could not send email");
          console.log(error.text);
        },
      );
    setIsSubmitting(false);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <div className="mt-12 flex h-3/4 w-full flex-col items-center justify-center gap-14 px-3">
      <h1 className="font-head3 text-3xl font-bold uppercase tracking-wider text-[#e34b71] lg:text-5xl">
        Contact 👋
      </h1>
      <form
        action=""
        className="flex w-full flex-col sm:w-2/4 xl:w-2/5"
        onSubmit={handleSubmit}
        ref={form}
      >
        <div className="nameInput relative flex ">
          <input
            type="text"
            name="name"
            id="name"
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={name}
            onChange={(e) => setName(e.target.value)}
            // placeholder="Name"
            className="m-2 w-full rounded-md border bg-transparent p-2 outline-none focus:border-2 focus:border-[#e34b71] "
          />
          <label
            htmlFor="name"
            className={`${
              !isFocused
                ? !name
                  ? "left-2 top-4 bg-transparent"
                  : "-top-0.5 left-6 text-sm"
                : "-top-0.5 left-6 text-sm"
            } messageLabel absolute bg-black px-3 text-pink-100/70 transition-all`}
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
            className="emailInput m-2 w-full rounded-md border bg-transparent p-2  outline-none focus:border-2 focus:border-[#e34b71]"
          />
          <label
            htmlFor="email"
            className={`${
              !isFocused2
                ? !email
                  ? "left-2 top-4 bg-transparent"
                  : "-top-0.5 left-6 text-sm"
                : "-top-0.5 left-6 text-sm"
            } messageLabel absolute bg-black px-3 text-pink-100/70 transition-all`}
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
            className="subjectInput m-2 w-full rounded-md border bg-transparent p-2   outline-none focus:border-2 focus:border-[#e34b71]"
          />
          <label
            htmlFor="subject"
            className={`${
              !isFocused3
                ? !subject
                  ? "left-2 top-4 bg-transparent"
                  : "-top-0.5 left-6 text-sm"
                : "-top-0.5 left-6 text-sm"
            } messageLabel absolute bg-black px-3 text-pink-100/70 transition-all`}
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
            className="messageInput m-2 w-full rounded-md border bg-transparent p-2 outline-none focus:border-2 focus:border-[#e34b71]"
          ></textarea>
          <label
            htmlFor="message"
            className={`${
              !isFocused4
                ? !message
                  ? "left-2 top-4 bg-transparent"
                  : "-top-0.5 left-6 text-sm"
                : "-top-0.5 left-6 text-sm"
            } messageLabel absolute bg-black px-3 text-pink-100/70 transition-all`}
          >
            Message
          </label>
        </div>

        <button
          className="mx-2 mt-8 w-36 self-end rounded-full border-2 border-pink-700 bg-[#a52646] px-6 py-2 font-semibold uppercase text-pink-100 transition-all hover:bg-transparent"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
