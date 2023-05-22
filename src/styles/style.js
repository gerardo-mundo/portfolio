import styled, { createGlobalStyle } from "styled-components";

export const mainColor = "#8a56dd",
  hoverColor = "#7247b7",
  mint = "#2eb29b",
  blue = "rgba(0, 125, 150, 1)",
  darkBlue = "rgb(2, 0, 36)",
  darkBlueAlpha = "rgb(2, 0, 36, 1)",
  purple = "rgba(30, 30, 127, 1)";

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
`;

export const Container = styled.div`
  color: white;
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::--webkit-scrollbar {
    display: none;
  }
  background-image: url("../assets/bg.jpeg");
`;

export const Section = styled.div`
  height: 100vh;
  margin-top: 100px;
  scroll-snap-align: center;
  display: flex;
`;

export const NavbarContainer = styled.div`
  max-width: 100%;
  padding: 0 55px;
  background: ${darkBlue};
  background: linear-gradient(90deg, ${darkBlueAlpha} 0%, ${purple} 50%);
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    list-style: none;
    gap: 25px;

    li {
      cursor: pointer;
    }
  }
`;

export const FlexGrouper = styled.div`
  display: flex;
  margin: 100px 50px;
  justify-content: flex-end;
  align-items: center;
  gap: 45px;
`;

export const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;

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
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${blue};
  padding: 35px 15px;
  min-height: 100px;
  min-width: 25%;
  background: ${darkBlue};
  background: linear-gradient(${darkBlueAlpha} 0%, ${purple} 50%);
  h3 {
    font-weight: 600;
    font-size: 20px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
  }
  img {
    height: 40px;
    width: 40px;
  }
`;

export const CardImage = styled(Card)`
  justify-content: flex-start;
  max-height: 360px;
  min-width: 25%;
  padding: 0 0 20px 0;
  border: none;
  border-radius: 10px;

  img {
    width: 100%;
    height: 60%;
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

export const Left = styled.div`
  flex: 1;
  justify-content: center;

  h1 {
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
  width: 50vw;
  height: 50vh;
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;

  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    100% {
      transform: translateY(20px);
    }
  }
`;