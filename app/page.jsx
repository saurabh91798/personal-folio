
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import DownloadCV from "@/components/ui/DownloadCV";

const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '/public/assets/resume/Saurabh-resume.pdf'; // Replace with the actual path to your CV file
  link.download = 'Your_CV.pdf'; // Replace with the desired file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Home = () => {

  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              {/* can use cyan color and any other color */}
              Hello I'm <br />{" "}
              <span className="text-cyan-700">Saurabh Rao</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Currently working as a Product Support Analyst in Operaitv media,
              and have learned programming to upskill myself to dive in the tech
              world.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row gap-8 items-center">
              <DownloadCV />
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order:none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
