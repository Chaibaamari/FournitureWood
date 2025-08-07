import { Dispatch, useRef, useState } from "react";
import { motion } from "framer-motion";

type PositionProps = {
  left: number;
  width: number;
  opacity: number;
};

const SlideTabs = () => {
  const [position, setPosition] = useState<PositionProps>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full md:gap-6 gap-2    bg-gray-100 p-1.5"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Catalogue</Tab>
      <Tab setPosition={setPosition}>About Us</Tab>
      <Tab setPosition={setPosition}>Contact</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
}: {
  children: React.ReactNode;
  setPosition: Dispatch<React.SetStateAction<PositionProps>>;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      className={`relative z-10 flex group items-center justify-center gap-2  cursor-pointer ${
        hovered && "text-muted-foreground"
      } px-3 py-1.5 text-xs capitalize text-black  md:px-3 md:py-1.5 md:text-base`}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={hovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-black w-2 h-2 rounded-full"
      />
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: PositionProps }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white md:h-9"
    />
  );
};
export default SlideTabs;
