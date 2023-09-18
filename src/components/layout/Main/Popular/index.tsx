
import {
  Card, CardDescription, CardHeader, CardTitle
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
}

const Popular = () => {
  return (
    <div className="w-full">
      <h1 className="font-bold text-2xl pb-4">Check out trending categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-16 md:gap-8 sm:gap-2">
        <CardEvent className="bg-[url('../../public/92123123.jpg')] bg-cover bg-center hover:opacity-70"/>
        <CardEvent className="bg-[url('../../public/92123123.jpg')] bg-cover bg-center" />
        <CardEvent className="bg-[url('../../public/9124411.png')] bg-cover bg-center" />
        <CardEvent className="bg-[url('../../public/9289231.jpg')] bg-cover bg-center" />
      </div>
    </div>
  );
};

function CardEvent({ className }: CardProps) {
  return (
    <Card className={cn(className, 'h-64')}>
      <CardHeader>
        <CardTitle className="text-white">Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
        {/* <Image
          src="https://cdn.pixabay.com/photo/2023/03/16/16/49/watercolor-7857103_640.png"
          alt="Card Image"
          width={140}
          height={27}
        /> */}
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
}

export default Popular;
