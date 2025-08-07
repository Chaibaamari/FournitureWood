import { ArrowUpRight } from "lucide-react";
import { Gutter } from "./Gutter";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <Gutter>
      <section id="hero">
        <div className="left-content p-6">
          <div className="flex items-center justify-center">
            <h1 className="w-[72%]">
              Elevate Your Space with Elegant Simplicity Furniture Design
            </h1>
          </div>

          <div className="flex flex-col gap-6 flex-1">
            <div className="flex flex-wrap gap-3 px-5 justify-center mb-3 ">
              <div className="btn-filter-active">Popular</div>
              <div className="btn-filter-non-active">Exclusive</div>
              <div className="btn-filter-non-active">Hot Picks</div>
              <div className="btn-filter-non-active">LimitedEdition</div>
            </div>

            {/* Product Showcase */}
            <div className=" bg-white p-6 rounded-2xl relative overflow-hidden">
              <div className="relative overflow-hidden flex ">
                {/* Left content section */}
                <div className=" space-y-6">
                  <span className="bg-gray-100 text-black font-semibold text-base px-4 py-2 rounded-full inline-block">
                    Popular
                  </span>

                  <h2 className="lg:text-3xl font-medium text-xl text-gray-900 leading-1 mt-6">
                    Megna Karta Spul
                  </h2>

                  <p className="text-gray-500 text-base leading-relaxed font-medium max-w-md">
                    Experience high-end materials, expert detailing, and
                    enduring design in every piece.
                  </p>

                  <Button
                    variant={"secondary"}
                    className="rounded-full w-10 h-10  bg-stone-200 bottom-5"
                  >
                    <ArrowUpRight className="size-7  rounded-[100%] text-gray-600" />
                  </Button>
                </div>

                {/* Right image section */}
                <div className=" relative">
                  <img
                    src="/images/table3.jpeg"
                    alt="Megna Karta Spul - Modern wooden coffee table with cane webbing detail in a contemporary living room setting"
                    className="rounded-2xl  h-[300px] w-[600px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 w-full overflow-hidden rounded-2xl  relative">
          <img
            src="/images/tips6.jpeg"
            alt="Nature Lofa furniture piece"
            className="w-full "
          />

          <div className="absolute bottom-0 left-0 right-0  p-6 w-full  ">
            <div className="p-6 space-y-10 backdrop-blur-xs bg-white/15 border-white border rounded-2xl">
              <div className="space-y-3">
                <h2 className="text-3xl  md:text-4xl text-white font-medium leading-tight ">
                  Megna Karta Spul
                </h2>
                <p className="text-white text-base leading-relaxed max-w-md">
                  Experience high-end materials, expert detailing, and enduring
                  design in every piece.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant={"outline"} className="rounded-full h-10">
                  view product
                </Button>
                <Button
                  variant={"secondary"}
                  className="rounded-full w-10 h-10  bg-white bottom-5"
                >
                  <ArrowUpRight className="size-7  rounded-[100%] text-gray-600" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Gutter>
  );
};

export default Hero;
