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
  display: flex;
  background: url("https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  div {
    width: 40%;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 50px;
    margin-right: 20px;

    h1 {
      font-size: 50px;
      color: #fff;
    }

    p {
      margin-bottom: 30px;
      font-size: 20px;
      color: #fff;
    }

    button {
      border: none;
      background: linear-gradient(90deg, orange, #ff00b3);
      padding: 10px 30px;
      border-radius: 20px;
      color: #fff;
      font-size: 17px;
      font-weight: 600;
    }
  }

  img {
    height: 500px;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export const Team = styled.section`
  min-height: 100vh;
  display: flex;

  img {
    width: 45%;
    border-bottom-right-radius: 180px;
    margin-bottom: auto;

    border-right: 1px solid #160068;
    border-bottom: 1px solid #160068;
    padding-right: 30px;
    padding-bottom: 30px;

    margin-top: auto;
    margin-bottom: auto;
  }

  div {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: auto;
    margin-bottom: auto;

    h3 {
      font-size: 40px;
      margin: 30px;
    }

    section {
      display: flex;
    }

    p {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    a {
      background: linear-gradient(90deg, orange, #ff00b3);
      padding: 8px 20px;
      border-radius: 20px;
      color: #fff;
      font-weight: 600;
    }
  }
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
  /* background-color: #160068; */
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #9c90ff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(260,683,280)'%3E%3Cstop offset='0' stop-color='%239C90FF'/%3E%3Cstop offset='1' stop-color='%23160068'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='504' height='420' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.12'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;

  div {
    display: flex;
    flex-direction: column;
    /* flex: 2; */
    width: 50%;

    input {
      border-radius: 20px;
      padding: 5px 12px;
      border: none;
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
