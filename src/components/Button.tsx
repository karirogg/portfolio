import Image from "next/image";

type Props = {
  children?: React.ReactNode;
  to?: string;
};

export const Button = ({ children, to }: Props) => {
  return (
    <button className="flex gap-4 align-center group">
      <span className="text-2xl font-josefin my-auto">{children}</span>
      <span className="transition-transform -rotate-45 group-hover:translate-x-10 group-hover:rotate-0">
        <Image src="/img/arrow.svg" width={36} height={36} alt="arrow" />
      </span>
    </button>
  );
};
