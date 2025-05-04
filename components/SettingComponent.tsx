import Image from "next/image";

export const SettingComponent = () => {
  return (
    <div className="px-40 py-28">
      <div className="text-center text-4xl font-bold">
        Tailor your experience
      </div>
      <div className="mt-8 text-center text-[#A3A3A3]">
        Our customizations go deep. Polymer is applicant tracking software{" "}
        <br /> that can flex to fit your needs perfectly.
      </div>
      <div className="my-10 grid place-items-center rounded-lg">
        <Image
          src="/settings.webp"
          alt="Account Settings Image"
          height={901}
          width={1200}
          className="rounded-lg object-contain"
        />
      </div>
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-start justify-center gap-4">
          <div className="rounded-lg bg-[#414141] px-3 py-3 text-center">
            <Image
              src="/moon.svg"
              className="fill-white"
              alt="Dark mode"
              width={50}
              height={50}
            />
          </div>
          <div className="">
            <div className="text-bold mb-2 text-lg">Dark mode enabled</div>
            <div className="font-medium text-[#A3A3A3]">
              With support for both light and dark themes, Polymer fits in
              perfectly with the rest of your productivity suite.
            </div>
          </div>
        </div>
        <div className="flex items-start justify-center gap-4">
          <div className="rounded-lg bg-[#414141] px-3 py-3 text-center">
            <Image src="/terminal.svg" alt="Jobs Api" width={50} height={50} />
          </div>
          <div>
            <div className="text-bold mb-2 text-lg">Jobs API included</div>
            <div className="font-medium text-[#A3A3A3]">
              You can either use our ready-made job board or build your own
              front-end using our developer API.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
