import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import image from "./assets/img/pexels-kate.jpg";
const importImg =
  "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
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

const PageContainer = styled.main`
  a {
    text-decoration: none;
  }
`;

const NavigationBar = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #b8000021;
  position: fixed;

  @media ${device.laptop} {
    /* max-width: 800px; */
  }

  a {
    color: black;
    font-weight: 500;
  }

  .get_started {
    background: linear-gradient(90deg, orange, #ff00b3);
    padding: 8px 20px;
    border-radius: 20px;
    color: #fff;
    font-weight: 600;
  }
`;

const Header = styled(motion.header)`
  min-height: 100vh;
  background: url("https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

const Services = styled.section`
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
      flex: 1;

      img {
        width: 100%;
      }

      div {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

const Testimonials = styled.section`
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

const NewsLetter = styled.form`
  display: flex;
  flex-direction: row;
  height: 40vh;
  background-color: #03001d;
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

const Footer = styled.footer`
  height: 170px;
  display: flex;

  div {
    margin-top: auto;
    padding: 12px;
    display: flex;
    justify-content: space-evenly;
    flex: 1;
  }
`;

export default function App() {
  return (
    <PageContainer>
      <NavigationBar>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>

        <a className="get_started" href="#More">
          Get Started
        </a>
      </NavigationBar>

      <Header animate={{ x: 0 }}>
        <p>header</p>

        <div>
          <p>left</p>
          <p>right</p>
        </div>
      </Header>

      <Services id="services">
        <h3>Services</h3>

        <div>
          <section>
            <img src={importImg} alt="" />
            <div>
              <h4>Something</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, maxime labore ad repellat similique, nostrum suscipit,
                atque itaque consequuntur qui dolor! Aliquam, blanditiis
                deleniti animi odio adipisci quos ducimus quo?
              </p>
            </div>
          </section>

          <section>
            <div>
              <h4>Another</h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, maxime labore ad repellat similique, nostrum suscipit,
                atque itaque consequuntur qui dolor! Aliquam, blanditiis
                deleniti animi odio adipisci quos ducimus quo?
              </p>
            </div>
            <img src={importImg} alt="" />
          </section>

          <section>
            <img src={importImg} alt="" />
            <div>
              <h4>LAst</h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, maxime labore ad repellat similique, nostrum suscipit,
                atque itaque consequuntur qui dolor! Aliquam, blanditiis
                deleniti animi odio adipisci quos ducimus quo?
              </p>
            </div>
          </section>
        </div>
      </Services>

      <Testimonials id="testimonials">
        <h3>Testimonials</h3>

        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
        >
          <div className="tes_item">
            <img src={image} alt="" />

            <div>
              <h5>Jane Doe</h5>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque, officia beatae! Sapiente deleniti cumque repellat
                minima architecto et necessitatibus beatae similique, distinctio
                quia neque reiciendis ea libero, explicabo blanditiis
                temporibus?
              </p>

              <div className="stars">
                <p>X</p>
                <p>X</p>
                <p>X</p>
                <p>X</p>
                <p>X</p>
              </div>
            </div>
          </div>

          <div className="tes_item">
            <img src={image} alt="" />

            <div>
              <h5>Ellen Smith</h5>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque, officia beatae! Sapiente deleniti cumque repellat
                minima architecto et necessitatibus beatae similique, distinctio
                quia neque reiciendis ea libero, explicabo blanditiis
                temporibus?
              </p>

              <div className="stars">
                <p>X</p>
                <p>X</p>
                <p>X</p>
                <p>X</p>
                <p>X</p>
              </div>
            </div>
          </div>
        </Carousel>
      </Testimonials>

      <NewsLetter>
        <div>
          <input type="text" name="fullname" id="" placeholder="Full Name" />
          <input type="email" name="email" id="" placeholder="Email" />
          <input type="number" name="email" id="" placeholder="Phone" />
        </div>

        <input type="button" className="button" value="Book Now" />
      </NewsLetter>

      <Footer>
        <div>
          <p>&copy 2021, company name, All rights reserved</p>

          <p>made by Stanley Otabil</p>
        </div>
      </Footer>
    </PageContainer>
  );
}
