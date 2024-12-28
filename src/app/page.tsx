import Downloadapp from "@/components/Home/Downloadapp";
import Homebanner from "@/components/Home/Homebanner";
import Homebanner2 from "@/components/Home/Homebanner2";
import Homeeight from "@/components/Home/Homeeight";
import Homefive from "@/components/Home/Homefive";
import FeaturesSection from "@/components/Home/Homefour";
import Homeone from "@/components/Home/Homeone";
import Homeseven from "@/components/Home/Homeseven";
import Homesix from "@/components/Home/Homesix";
import Homethree from "@/components/Home/Homethree";
import HowItWorks from "@/components/Home/Hometwo";
import Leftrightsection from "@/components/shared/Leftrightsection";
import Leftrightsectionfour from "@/components/shared/Lrfour";
import Leftrightsectionthree from "@/components/shared/Lrthree";
import Leftrightsectiontwo from "@/components/shared/Lrtwo";
import Image from "next/image";

export default function Home() {
  return (
   <div className="space-y-16 overflow-x-hidden">
    <Homebanner/>
    <Leftrightsection />
    <Leftrightsectiontwo />
    <HowItWorks/>
    <Homethree/>
    <FeaturesSection/>
    {/* <Leftrightsectionthree /> */}
    <Leftrightsectionfour />
    {/* <Homeone/> */}
    {/* <Homefive/> */}
    <Homesix/>
    {/* <Homeseven/> */}
    <Homeeight/>
    {/* <Downloadapp/> */}
    <Homebanner2/>
   </div>
  );
}
