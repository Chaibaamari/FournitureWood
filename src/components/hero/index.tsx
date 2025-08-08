import { ArrowUpRight } from "lucide-react";
import { Gutter } from "../ui/Gutter";
import { Button } from "../ui/button";
import { useState } from "react";
import {productCategories} from "../../assets/constant.js"
import Filter from "./Filter";
import Arrow from "./Arrow";

const Hero = () => {
  const [activeFilter, setActiveFilter] = useState(productCategories[0]);
  
  const handleFilterClick = (id: number) => {
    const newActiveFilter = productCategories.find(category => category.id === id);
    console.log(newActiveFilter);
    setActiveFilter(newActiveFilter || productCategories[0]);
  };
  return (
    <Gutter>
      <section id="hero">
        <div className="left-content p-6">
          <div className="flex items-center justify-center">
            <h1 className="2xl:w-[72%] w-[80%]">
              Elevate Your Space with Elegant Simplicity Furniture Design
            </h1>
          </div>

          <div className="flex flex-col gap-6 flex-1">
            <Filter activeFilter={activeFilter} handleFilterClick={handleFilterClick} className="btn-filter-active" />
            <div className=" bg-white p-6 rounded-2xl relative overflow-hidden">
              <div className="relative overflow-hidden flex gap-2 ">
                <div className=" space-y-6">
                  <span className="bg-gray-100 text-black font-semibold text-base px-4 py-2 rounded-full inline-block">
                    {activeFilter.type}
                  </span>

                  <h2 className="2xl:text-3xl font-medium text-lg text-gray-900 leading-1 mt-6">
                    {activeFilter.title}
                  </h2>

                  <p className="text-gray-500  text-sm leading-relaxed font-medium max-w-md">
                    {activeFilter.description}
                  </p>
                  <Arrow />
                </div>
                <div className=" relative">
                  <img
                    src={activeFilter.image}
                    alt="Megna Karta Spul - Modern wooden coffee table with cane webbing detail in a contemporary living room setting"
                    className="rounded-2xl 2xl:h-[300px] h-[250px] w-[600px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full overflow-hidden rounded-2xl  relative">
          <img
            src="/images/tips3.jpeg"
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
                <Arrow />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Gutter>
  );
};

export default Hero;
