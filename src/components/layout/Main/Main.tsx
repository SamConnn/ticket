import Popular from "@/components/layout/Main/Popular";
import Trending from "@/components/layout/Main/Trending";
import SearchBar from "@/components/layout/Main/search/search-bar";
import { cn } from "@/lib/utils";
interface MainProps {
  className?: string;
  children?: React.ReactNode;
}

const Main = ({ className, children }: MainProps) => {
  return (
    <main className={cn("container mx-auto", className)}>
      <SearchBar />
      <Trending />
      <Popular />
    </main>
  );
};

export default Main;
