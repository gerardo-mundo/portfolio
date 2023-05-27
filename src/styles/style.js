import styled, { createGlobalStyle } from "styled-components";

export const mainColor = "#8a56dd",
  hoverColor = "#7247b7",
  mint = "#2eb29b",
  blue = "rgba(0, 125, 150, 1)",
  darkBlue = "rgb(2, 0, 36)",
  darkBlueAlpha = "rgb(2, 0, 36, 1)",
  purple = "rgba(30, 30, 127, 1)",
  gray = "#999999";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
  }

  header {
    height: 100vh;
  }

  svg {
      max-width: 23px;
      max-height: 23px;
      cursor: pointer;
      :hover {
        fill: white;
      }
    }

  .section {
   //height: 100vh;
    margin: 0 15px 20px 15px;
    padding-top: 80px;
    justify-content: space-evenly;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    //align-items: center;

      button {
        width: 100%;
      }
    }
  }
`;

export const Container = styled.main`
  color: white;
  background-image: url("../assets/bg.jpeg");
  background-size: cover;
`;

export const NavbarContainer = styled.div`
  img {
    cursor: pointer;
  }

  nav {
    display: flex;
    list-style: none;
    gap: 25px;
    align-items: center;

    .nav-item {
      cursor: pointer;
      color: ${gray};
      :hover {
        color: white;
      }
    }
    .svg-grouper {
      display: flex;
      gap: 8px;
    }

    .active {
      color: ${hoverColor};
    }
  }
  .aligned {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
  }

  max-width: 100%;
  padding: 0 55px;
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  @media (max-width: 720px) {
    nav {
      display: none;
    }
  }
  @media (min-width: 720px) {
    img {
      display: none;
    }
  }
`;

export const NavbarLIst = styled.div`
  nav {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 15px;
    align-items: center;

    .nav-item {
      cursor: pointer;
      color: ${gray};
      :hover {
        color: white;
      }
    }
  }

  position: absolute;
  right: 25px;
  top: 50px;
  background: ${darkBlue};
  background: linear-gradient(${darkBlueAlpha} 0%, ${purple} 50%);
  padding: 20px;
  min-height: 140px;
  min-width: 80px;
  border-radius: 3px;
`;

// export const FlexGrouper = styled.div`
//   display: flex;
//   margin: 100px 50px;
//   justify-content: flex-end;
//   align-items: center;
//   gap: 45px;
// `;

export const BlockContainer = styled.div`
  h2 {
    font-size: 40px;
    font-weight: 800;
    margin: 0;
  }
  h3 {
    text-transform: uppercase;
    font-weight: 400;
  }
  p {
    font-size: 16px;
    font-weight: 500;
  }
  display: flex;
  flex-direction: column;
  margin: 50px;

  .cards-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media (max-width: 790px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const Card = styled.div`
  h3 {
    font-weight: 600;
    font-size: 20px;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    align-self: center;
  }
  img {
    height: 40px;
    width: 40px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${blue};
  padding: 35px 15px;
  background: ${darkBlue};
  background: linear-gradient(${darkBlueAlpha} 0%, ${purple} 50%);
  max-height: 90%;
  width: 85%;

  @media (max-width: 790px) {
    p {
      font-size: 14px;
    }
  }
`;

export const CardImage = styled(Card)`
  justify-content: flex-start;
  max-height: 360px;
  min-width: fit-content;
  padding: 0 0 20px 0;
  border: none;
  border-radius: 10px;

  img {
    width: 100%;
    height: 60%;
  }
  p {
    margin: 0 5px;
  }
  a {
    color: white;
    padding: 5px;
    border-radius: 5px;
    background-color: ${mainColor};
    text-decoration: none;
    &:hover {
      background-color: ${hoverColor};
    }
  }
`;

export const FormContainer = styled.div`
  @media (max-width: 600px) {
    width: 90%;
    margin: 0 10px;
  }

  form {
    padding: 10px;
    border-radius: 5px;
    background-color: ${purple};
  }

  label {
    margin-bottom: 10px;
  }

  input,
  textarea {
    width: 100%;
    height: 20%;
    padding: 5px;
    border: 1px solid ${purple};
    resize: none;
    margin: 5px 0;
    border-radius: 5px;
    :focus {
      outline: 3px solid ${purple};
      border: none;
    }
  }

  button {
    border: none;
    padding: 8px;
    border-radius: 2.5px;
    color: white;
    background-color: purple;
    :hover {
      background-color: ${hoverColor};
      cursor: pointer;
    }
  }

  .field-container {
    margin-top: 10px;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  place-content: center;
  align-items: center;
  padding: 20px 0;
  width: 100%;
  height: 18%;
  background: linear-gradient(90deg, ${darkBlueAlpha} 20%, ${purple} 100%);
  p {
    margin: 0;
    color: ${gray};
    font-weight: lighter;
    font-size: 12px;
  }
  .svg-grouper {
    display: flex;
    gap: 8px;
    margin-bottom: 5px;
  }
`;

export const Left = styled.div`
  flex: 1;
  justify-content: center;

  h1 {
    margin-top: 10px;
    font-size: 45px;
    margin-bottom: 0;
  }
  h2 {
    font-size: 35px;
  }
  p {
    font-size: 18px;
  }
  span {
    color: ${mainColor};
  }

  border-left: 4px solid ${mainColor};
  border-image: linear-gradient(to bottom, ${mainColor}, rgba(0, 0, 0, 0)) 1
    100%;
  padding-left: 10px;
`;

export const Right = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`;

export const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  max-width: 80%;
  max-height: 80%;

  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    100% {
      transform: translateY(20px);
    }
  }
`;
