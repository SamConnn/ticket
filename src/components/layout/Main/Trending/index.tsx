"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={index}
            className="hidden sm:block"
          >
            <motion.button
              className="bg-gradient-to-tr from-zinc-50 to-zinc-200 px-6 py-6 text-black rounded-full mt-6 m-auto text-[16px] w-32 font-bold h-12
          hover:from-zinc-200 hover:to-zinc-50 shadow-md whitespace-nowrap flex items-center justify-center"
            >
              {category.name}
            </motion.button>
          </motion.div>
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
