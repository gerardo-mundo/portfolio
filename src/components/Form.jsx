import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import { FormContainer, Paragraph } from "../styles/style";

export const Form = () => {
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const KEY = import.meta.env.VITE_PUBLIC_KEY;

  const formRef = useRef();
  const [isSubmited, setIsSubmited] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, KEY).then(
      () => {
        setIsSubmited(true);
        setMessage(<Paragraph>Your message has been sent.</Paragraph>);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
        setIsLoading(false);
      },
      () => {
        setIsLoading(true);
        setIsSubmited(false);
        setMessage(<Paragraph>Something went wrong!</Paragraph>);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
        setIsLoading(false);
      }
    );
  };

  return (
    <FormContainer>
      <h1>Get in touch</h1>
      {(isSubmited && message) || (isSubmited === false && message)}

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="field-container">
          <label htmlFor="name">Name</label>
          <input name="name" type="name" placeholder="John Doe" />
        </div>
        <div className="field-container">
          <label htmlFor="email">Email adress</label>
          <input name="email" type="email" placeholder="email@mail.com" />
        </div>
        <div className="field-container">
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Leave your thoughts here..."
            name="message"
            id="message"
            cols="20"
            rows="10"
          ></textarea>
        </div>
        <button disabled={isLoading} type="submit">
          {isLoading ? "Sending..." : "Send"}
        </button>
      </form>
    </FormContainer>
  );
};
