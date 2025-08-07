import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Gutter: React.FC<Props> = (props) => {
  const { className, children } = props;

  return (
    <main
      className={[
        className,
        "max-w-[1920px] px-4  lg:px-[40px] xl:px-[60px] mx-auto",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </main>
  );
};
