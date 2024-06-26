// src/index.js

import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./main";
import reportWebVitals from "./reportWebVitals";

const ParticlesComponent = () => {
  useEffect(() => {
    // particles.js를 로드
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = () => {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: {
            value: [
              "#f7b267",
              "#f79d65",
              "#f4845f",
              "#f27059",
              "#f25c54",
              "#ffffff",
              "#cc444b",
              "#ff6b6b",
              "#e63946",
            ],
          },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 },
          },
          opacity: {
            value: 1,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 6,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "top",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 150, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div
        id="particles-js"
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />
      <div className="count-particles">
        <span className="js-count-particles">--</span> particles
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ParticlesComponent />
    <App />
  </React.StrictMode>
);

reportWebVitals();
