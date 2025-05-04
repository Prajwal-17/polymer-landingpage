import Image from "next/image";

const logos = [
  { src: "/svg/piratewires.svg", alt: "piratewires" },
  { src: "/svg/tixel.svg", alt: "tixel" },
  { src: "/svg/campfire.svg", alt: "campfire" },
  { src: "/svg/filebase.svg", alt: "filebase" },
  { src: "/svg/eeetwell.svg", alt: "eeetwell" },
  { src: "/svg/leland.svg", alt: "leland" },
  { src: "/svg/helio.svg", alt: "helio" },
  { src: "/svg/makelog.svg", alt: "makelog" },
  { src: "/svg/helium.svg", alt: "helium" },
  { src: "/svg/cala.svg", alt: "cala" },
];

export const CompaniesComponent = () => {
  return (
    <>
      <div className="w-full px-40 pt-[200px]">
        <div className="py-12 text-center font-semibold text-[#555555]">
          Helping to grow the next generation of companies
        </div>
        <div className="grid h-full w-full grid-cols-5 grid-rows-2 items-center justify-between gap-x-6 gap-y-10 px-24">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={150}
            />
          ))}
        </div>
      </div>
    </>
  );
};
