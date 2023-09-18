import Header from "@/components/layout/Header/Header";
import Main from "@/components/layout/Main/Main";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <Main className="pt-36"/>
      {/* <footer className="">Footer</footer> */}
    </div>
  );
}
