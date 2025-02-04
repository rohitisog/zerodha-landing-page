import React from "react";

import { ArrowRight } from "lucide-react";

const Trust = () => {
  return (
    <>
      <div className="lg:mx-40 lg:px-20 md:px-10">
        <h1 className="text-4xl px-6 text-neutral-700 my-6 md:pt-10 md:mb-6">
          Trust with confidence
        </h1>
        <div className="md:flex justify-around  ">
          <div className="md:w-1/2 px-6 tracking-tight">
            <div>
              <h3 className="text-2xl text-neutral-700 my-2">
                Customer-first always
              </h3>
              <p className="text-neutral-500 pb-4 mb-6">
                That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
                crores of equity investments and contribute to 15% of daily
                retail exchange volumes in India.
              </p>
            </div>
            <div>
              <h3 className="text-2xl text-neutral-700 my-2">
                No spam or gimmicks
              </h3>
              <p className="text-neutral-500 pb-4 mb-6">
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like.
              </p>
            </div>
            <div>
              <h3 className="text-2xl text-neutral-700 my-2">
                The Zerodha universe
              </h3>
              <p className="text-neutral-500 pb-4 mb-6">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>
            <div>
              <h3 className="text-2xl text-neutral-700 my-2">
                Do better with money
              </h3>
              <p className="text-neutral-500  mb-6">
                With initiatives like{" "}
                <span className="text-sky-600">Nudge </span>
                and
                <span className="text-sky-600"> Kill Switch </span>, we don't
                just facilitate transactions, but actively help you do better
                with your money.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 px-6">
            <img src="https://zerodha.com/static/images/ecosystem.png" alt="" />
            <div className="flex justify-center px-4 mb-4">
              <button className="text-sky-600 flex px-4 py-6">
                Explore our products
                <span>
                  <ArrowRight />
                </span>
              </button>
              <button className="text-sky-600 flex px-4 py-6">
                Try Kite demo{" "}
                <span>
                  <ArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Trust;
