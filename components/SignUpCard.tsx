import Image from "next/image";

export const SignUpCard = () => {
  return (
    <div className="flex w-full items-center justify-between px-40 py-10">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center rounded-lg bg-white px-3 py-3">
          <Image src="/flag.svg" alt="Flag logo" width={30} height={30} />
        </div>
        <div className="max-w-md font-semibold text-[#555555]">
          You&aposll have <span className="text-black">unlimited time</span> to
          explore Polymer and a{" "}
          <span className="text-black">14-day free trial</span> when you publish
          your first job.
        </div>
      </div>
      <button className="rounded-lg bg-black px-5 py-2 font-semibold text-white">
        Sign up for free
      </button>
    </div>
  );
};
