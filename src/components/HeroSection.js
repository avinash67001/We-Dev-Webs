import React from "react";
import "./style.css";
import webimg from "../Images/WebImage.jpg";

function HeroSection() {
  return (
    <div>
      <div class="w-cover h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30 z-0">
        <img
          src={webimg}
          class="absolute top-0 left-0 min-h-full ob opacity-50"
          alt=""
        />
        <div class="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
          <div class="col-span-6">
            <h1 class="text-white font-extrabold text-5xl mb-8">
             WE HAVE PRICING PLANS, BUT WE CAN WORK AS PER YOUR BUDGET PLANS
            </h1>
            <p class="text-stone-100 text-base">
              Yes, you read it right !
              WeDevWebs is the only platform where you can customise your website according to your business needs.
              <html lang="en">
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
              </head>
              <body>
                
              </body>
              </html>
            </p>
            <button class="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
