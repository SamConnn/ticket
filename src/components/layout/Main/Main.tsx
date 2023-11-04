import Event from "@/components/layout/Main/Event";
import Partner from "@/components/layout/Main/Partner";
import Popular from "@/components/layout/Main/Popular";
import Trending from "@/components/layout/Main/Trending";
import SearchBar from "@/components/layout/Main/search/search-bar";
import { cn } from "@/lib/utils";
import Section from "../Section";
interface MainProps {
  className?: string;
  children?: React.ReactNode;
}

const Main = ({ className, children }: MainProps) => {
  return (
    <>
      <Section />
      <main className={cn("container mx-auto", className)}>
        <SearchBar />
        <Trending />
        <Popular />
        <Event />
        <Partner />
      </main>
    </>
  );
};

export default Main;
