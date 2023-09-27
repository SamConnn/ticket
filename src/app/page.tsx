import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header/Header";
import Main from "@/components/layout/Main/Main";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col backdrop-blur-xl bg-gradient-to-b from-gray-50 to-slate-100">
      <Header/>
      <Main className="pt-36"/>
      <Footer/> 
    </div>
  );
}
