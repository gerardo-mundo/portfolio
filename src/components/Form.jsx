import { FormContainer } from "../styles/style";

export const Form = () => {
  return (
    <FormContainer>
      <h1>Contact me</h1>
      <form action="submit">
        <div className="field-container">
          <label htmlFor="name">Name</label>
          <input type="name" placeholder="John Doe" />
        </div>
        <div className="field-container">
          <label htmlFor="email">Email adress</label>
          <input type="email" placeholder="email@mail.com" />
        </div>
        <div className="field-container">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="20" rows="10"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </FormContainer>
  );
};
