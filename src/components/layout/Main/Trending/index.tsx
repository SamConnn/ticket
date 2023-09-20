import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Trending = () => {
  const trendingCategories = [
    {
      name: "Movie",
    },
    {
      name: "Music",
    },
    {
      name: "Business",
    },
    {
      name: "Technology",
    },
    {
      name: "Sports",
    },
    {
      name: "Food",
    },
    {
      name: "Travel",
    },
    {
      name: "Health",
    },
  ];

  return (
    <div className="w-full pb-16">
      <h1 className="font-bold text-2xl sha">Check out trending categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 sm:grid-cols-3 lg:gap-4 md:gap-0 sm:gap-0 gap-4">
        {trendingCategories.map((category, index) => (
          <div key={index} className="hidden sm:block">
            <Button
              className="bg-gradient-to-tr from-zinc-50 to-zinc-200 px-6 py-6 text-black rounded-full mt-6 w-28
          hover:from-zinc-200 hover:to-zinc-50 hover:text-black shadow-md"
            >
              {category.name}
            </Button>
          </div>
        ))}
      </div>
      <div className="block sm:hidden">
        <Select>
          <SelectTrigger className="w-full mt-5 bg-gradient-to-tr from-zinc-50 to-zinc-200">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Trending;
