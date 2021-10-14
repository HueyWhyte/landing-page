import React from "react";
import { motion } from "framer-motion";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { testimonials } from "./assets/testimonals";

import image from "./assets/img/pexels-kate.jpg";
import {
  Footer,
  Header,
  Menu,
  NavigationBar,
  NewsLetter,
  PageContainer,
  Services,
  Testimonials,
} from "./components/BaseStyles";
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

      <Header animate={{}}>
        <p>header</p>

        <div>
          <p>left</p>
          <p>right</p>
        </div>
      </Header>

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
