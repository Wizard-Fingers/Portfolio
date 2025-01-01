"use client"; // Add this at the top

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const handleDownload = () => {
    window.open("/assets/cv-art-beckett.pdf", "_blank");
  };

  return (
    <section className="h-full bg-primary">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-text-secondary">
              Software Developer
            </span>
            <h1 className="h1 mb-6 text-text-primary">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Art Beckett</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-text-muted">
              I build beautiful, user-centered digital experiences that make a
              difference. Genuinely passionate about clean code and innovative
              solutions.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                onClick={handleDownload}
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-500"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
