import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="w-full h-screen flex items-center flex-col">
      
        <Image
          src={"./banner.svg"}
          width={500}
          height={500}
          alt={"banner_img"}
        />
      <div className="text-center flex-col mt-2 flex justify-center ">
      <h1 className="text-5xl md:text-4xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 mb-3 text-transparent bg-clip-text">Jhoot</h1>
        <div className="text-base font-bold text-center font-mono mt-2">The best burger in town</div>
        <Link href="/login"> 
        <Button className="mt-3 p-5 ">Get Started</Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
