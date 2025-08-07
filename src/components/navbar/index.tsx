import { Heart, ShoppingBag } from "lucide-react";
import { Gutter } from "../Gutter";
import { Button } from "../ui/button";
import SlideTabs from "./slidetabs";

const Navbar = () => {
  return (
    <Gutter className="flex items-center justify-between py-8">
      <h1 className="text-xl font-bold">FURNICO</h1>
      <SlideTabs />
      <div className="flex items-center justify-center gap-4">
        <Button size={"icon"} className="rounded-full" variant={"secondary"}>
          <Heart className="text-black size-5" strokeWidth={1} />
        </Button>
        <Button
          size={"icon"}
          className="rounded-full relative"
          variant={"secondary"}
        >
          <div className="bg-primary rounded-full size-4 flex items-center justify-center absolute -top-1 -right-1 text-white text-xs font-light">
            3
          </div>
          <ShoppingBag className="text-black size-5" strokeWidth={1} />
        </Button>
      </div>
    </Gutter>
  );
};
export default Navbar;
