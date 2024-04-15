import "./style.css";
// import { type Engine, tsParticles } from "@tsparticles/engine";
// import configs from "@tsparticles/configs";
// import { loadAll } from "@tsparticles/all";
import { confetti } from "../../../bundles/confetti/src/confetti.ts";
import ReactDOM from "react-dom/client";
import React from "react";

import Sad from "./svg/Sad.svg";
import Celebrate from "./svg/Celebrate.svg";
import Happy from "./svg/Happy.svg";
import Hello from "./svg/Hello.svg";
import Like from "./svg/Like.svg";
import Surprised from "./svg/Surprised.svg";

// (async (engine: Engine) => {
//     await loadAll(engine);

//     await engine.load({
//         id: "tsparticles",
//         options: configs.basic
//     });
// })(tsParticles);

const App: React.FC = () => {
  const defaultConfig = {
    count: 5,
    scalar: 3,
    flat: true,
  };

  return(<>
   <button onClick={() => {
    confetti({
      ...defaultConfig,
      origin: { x: 0.41, y: 0.45 },
      shapes: ["image"],
          shapeOptions: {
            image: [
              {
                src: Hello,
                width: 32,
                height: 32,
              },
            ],
          },
    });
  }}><img src={Hello}/></button>

   <button onClick={() => {
    confetti({
      ...defaultConfig,
      origin: { x: 0.45, y: 0.45 },
      shapes: ["image"],
      shapeOptions: {
        image: [
          {
            src: Happy,
            width: 32,
            height: 32,
          },
        ],
      },
    });
  }}><img src={Happy}/></button>
  
  <button onClick={() => {
    confetti({
      ...defaultConfig,
      origin: { x: 0.48, y: 0.45 },

      shapes: ["image"],
      shapeOptions: {
        image: [
          {
            src: Sad,
            width: 32,
            height: 32,
          },
        ],
      },
    });
  }}><img src={Sad}/></button>
  
  <button onClick={() => {
    confetti({
      ...defaultConfig,
      origin: { x: 0.52, y: 0.45 },

      shapes: ["image"],
      shapeOptions: {
        image: [
          {
            src: Surprised,
            width: 32,
            height: 32,
          },
        ],
      },
    });
  }}><img src={Surprised}/></button>
  
  <button onClick={() => {
    confetti({
      ...defaultConfig,
      origin: { x: 0.55, y: 0.45 },

      shapes: ["image"],
      shapeOptions: {
        image: [
          {
            src: Like,
            width: 32,
            height: 32,
          },
        ],
      },
    });
  }}><img src={Like}/></button>
  
  <button onClick={() => {
    confetti({
      ...defaultConfig,
      origin: { x: 0.58, y: 0.45 },
      flat: false,
      scalar: randomInRange(1.5, 2),
      shapes: ["circle", "square"],
    });
  }}><img src={Celebrate}/></button></>)
  };
  
  ReactDOM.createRoot(document.getElementById("app")!).render(<App />);

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }