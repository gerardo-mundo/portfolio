import { FormContainer } from "../styles/style";

export const Form = () => {
  return (
    <FormContainer>
      <h1>Get in touch</h1>
      <form action="submit">
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
            placeholder="Send me a message!"
            name="message"
            id="message"
            cols="20"
            rows="10"
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </FormContainer>
  );
};
