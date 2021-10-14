import styled from "styled-components";
import { motion } from "framer-motion";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const PageContainer = styled.main`
  a {
    text-decoration: none;
  }
`;

export const NavigationBar = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #b8000021;
  position: fixed;

  div {
    margin-left: auto;
    margin-right: auto;

    a {
      color: black;
      font-weight: 500;
      margin: 5px;
    }
  }

  .get_started {
    background: linear-gradient(90deg, orange, #ff00b3);
    padding: 8px 20px;
    border-radius: 20px;
    color: #fff;
    font-weight: 600;
    margin-left: auto;
    margin-right: 20px;
  }

  @media ${device.laptop} {
    /* max-width: 800px; */
  }
`;

export const Header = styled(motion.header)`
  min-height: 100vh;
  background: url("https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

export const Services = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    text-align: center;
    font-size: 40px;
    margin: 30px;
  }

  h4 {
    font-size: 30px;
  }

  div {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 80%;

    section {
      display: flex;
      flex-direction: column;
      flex: 1;

      img {
        width: 100%;
      }

      div {
        display: flex;
        flex-direction: column;

        p {
          margin-bottom: 10px;
        }
      }
    }

    @media ${device.mobileL} {
      flex-direction: column;

      section {
        margin-top: 10px;
        margin-bottom: 20px;
      }

      .first {
        flex-direction: column-reverse;
      }

      .third {
        flex-direction: column-reverse;
      }
    }
  }
`;

export const Testimonials = styled.section`
  min-height: 100vh;

  h3 {
    text-align: center;
    font-size: 40px;
    margin: 30px;
  }

  .tes_item {
    display: flex;
    width: 60%;
    height: 400px;
    margin-left: auto;
    margin-right: auto;

    div {
      margin-left: 60px;
      display: flex;
      flex-direction: column;
      margin-top: auto;
      margin-bottom: auto;

      h5 {
        font-size: 30px;
      }

      .stars {
        display: flex;
        flex-direction: row;
        width: 120px;
        justify-content: space-between;
        margin-left: auto;
        margin-right: auto;

        p {
          background-color: yellow;
        }
      }
    }

    img {
      height: 350px;
      box-shadow: 30px 30px 1px #160068;
    }

    @media ${device.mobileL} {
      flex-direction: column;
      height: 100%;
      justify-content: center;

      img {
        height: 290px;
      }

      div {
        width: 90vw;
        margin: 30px 30px 0 -60px;
      }
    }
  }
`;

export const NewsLetter = styled.form`
  display: flex;
  flex-direction: row;
  height: 60vh;
  background-color: #160068;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    /* flex: 2; */
    width: 50%;

    input {
      border-radius: 20px;
      padding: 5px 12px;
      border: 1px solid grey;
      /* width: 200px; */
      height: 30px;
      margin: 5px;
      font-size: 17px;
    }
  }

  .button {
    border: none;
    background: linear-gradient(90deg, orange, #ff00b3);
    padding: 8px 20px;
    border-radius: 20px;
    color: #fff;
    font-size: 17px;
    font-weight: 600;
  }

  @media ${device.mobileL} {
    flex-direction: column;

    div {
      width: 90vw;
    }
    .button {
      margin-top: 20px;
    }
  }
`;

export const Footer = styled.footer`
  height: 170px;
  display: flex;
  background-color: #160068;

  div {
    margin-top: auto;
    padding: 12px;
    display: flex;
    justify-content: space-evenly;
    flex: 1;

    color: white;
  }
`;

// menu
export const Menu = styled.nav`
  display: none;
  height: 100vh;
  width: 90vw;
  background-color: #160068;
`;
