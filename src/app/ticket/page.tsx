import Image from "next/image";
import HeaderImage from "../../../public/album_5.webp";

const Ticket = () => {
  return (
    <div>
      <div className="w-full bg-image p-10 mt-2"></div>
      <div className="mt-24">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex w-24 h-24 lg:w-64 lg:h-64 md:w-32 md:h-32">
            <Image
              src={HeaderImage}
              alt={""}
              className="object-cover object-center ml-16 lg:ml-64 md:ml-32"
            />
            {/* I want to this text to be center horizontal */}
            <div className="flex flex-col justify-center items-center text-center border-lg">
              test
            </div>
          </div>
          <div></div>
        </div>
        <div className="bg-white h-screen">
          <div className="container mx-auto items-center justify-center">
            <div className="flex">
                <div className="flex-1">
                    test
                </div>
                <div className="flex-1">
                    test
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
