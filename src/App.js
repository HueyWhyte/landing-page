import React from "react";
import { motion } from "framer-motion";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { testimonials } from "./assets/testimonals";
import "./assets/blobz.css";
import image from "./assets/img/pexels-kate.jpg";
import travel from "./assets/img/travel card_6374208.png";
import {
  Footer,
  Header,
  Menu,
  NavigationBar,
  NewsLetter,
  PageContainer,
  Services,
  Team,
  Testimonials,
} from "./components/BaseStyles";
import Ach from "./components/Ach";

const importImg =
  "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";

export default function App() {
  return (
    <PageContainer>
      <Menu></Menu>
      <NavigationBar>
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
        </div>

        <a className="get_started" href="#More">
          Get Started
        </a>
      </NavigationBar>

      <Header>
        <div>
          <h1>Company Name</h1>
          <p>
            Adipisicing elit. Fugit amet quas nobis explicabo saepe quibusdam.
            Porro odio voluptatum corrupti veniam modi itaque tempori.
          </p>

          <motion.button
            href="#button"
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.4 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            Let's Go
          </motion.button>
        </div>

        <motion.img
          src={travel}
          alt=""
          initial={{ x: 30, y: 50 }}
          animate={{ x: 0, y: 0, rotate: 360 }}
          transition={{ duration: 2 }}
        />

        {/* <div class="tk-blob">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440.7 428.7">
            <path d="M410.6 78.8c36 52.5 36.1 126 19.2 194C412.9 340.7 379 403 330 421.9c-49 19-113.1-5.3-178.6-34C85.8 359.2 18.7 326.1 3.5 276.4-11.7 226.7 25 160.3 71.7 105.3 118.3 50.3 174.8 6.8 239 .7c64.1-6 135.7 25.5 171.6 78.1z"></path>
          </svg>
        </div> */}
      </Header>

      <Team>
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
          alt=""
        />

        <div>
          <h3>About our Agency</h3>

          <section>
            <Ach name="Clients" number="233" />
            <Ach name="Projects" number="1k" />
          </section>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            accusantium aperiam earum quod inventore placeat doloremque dolores
            voluptate atque, necessitatibus voluptates, illum repellat dicta
            maiores, aspernatur deserunt quae numquam assumenda.
          </p>

          <a href="#hso">Get in touch</a>
        </div>
      </Team>

      <Services id="services">
        <h3>Services</h3>

        <div>
          <section className="first">
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

          <section className="second">
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

          <section className="third">
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
          {testimonials.map((testimonial) => (
            <div className="tes_item">
              <img src={image} alt="" />

              <div>
                <h5>{testimonial.name}</h5>

                <p>{testimonial.body}</p>

                <div className="stars">
                  <p>X</p>
                  <p>X</p>
                  <p>X</p>
                  <p>X</p>
                  <p>X</p>
                </div>
              </div>
            </div>
          ))}
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
