import Footer from "@/components/layout/Footer";
import Main from "@/components/layout/Main/Main";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col backdrop-blur-xl bg-[#eef1ef]">
      <Main className="pt-10"/>
      <Footer/> 
    </div>
  );
}
