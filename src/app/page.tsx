import Header from "@/components/layout/Header/Header";
import Main from "@/components/layout/Main/Main";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col backdrop-blur-xl bg-gradient-to-b from-white via-white to-blue-100">
      <Header/>
      <Main className="pt-36"/>
      {/* <footer className="">Footer</footer> */}
    </div>
  );
}
