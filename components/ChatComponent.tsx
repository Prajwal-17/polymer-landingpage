import Image from "next/image";

export const ChatComponent = () => {
  return (
    <>
      <div className="flex h-full w-full items-start justify-between gap-x-20 gap-y-10 px-40 py-20">
        <div className="rounded-xl shadow-lg">
          <Image
            src="/chatfeature.webp"
            alt="chat image"
            height={800}
            width={1000}
            className="rounded-xl"
          />
        </div>
        <div className="space-y-5 font-medium">
          <div className="max-w-md text-4xl font-bold">
            Manage the entire <br /> hiring workflow
          </div>
          <div className="mx-auto max-w-5xl text-[#555555]">
            Polymer&apos;s built with productivity at heart and is loaded with
            features to help you hire more effectively. It&apos;s quick to
            learn, fast to navigate, and empowering to use.
          </div>
          <ul className="space-y-3 text-[#555555]">
            <li className="flex items-center justify-start gap-3">
              <Image src="/tick.svg" alt="tick icon" height={20} width={20} />
              Flexible applicant tracking
            </li>
            <li className="flex items-center justify-start gap-3">
              <Image src="/tick.svg" alt="tick icon" height={20} width={20} />
              Customizable workflows
            </li>
            <li className="flex items-center justify-start gap-3">
              <Image src="/tick.svg" alt="tick icon" height={20} width={20} />
              Rich candidate profiles
            </li>
            <li className="flex items-center justify-start gap-3">
              <Image src="/tick.svg" alt="tick icon" height={20} width={20} />
              Built-in candidate messaging
            </li>
            <li className="flex items-center justify-start gap-3">
              <Image src="/tick.svg" alt="tick icon" height={20} width={20} />
              Bulk messaging
            </li>
            <li className="flex items-center justify-start gap-3">
              <Image src="/tick.svg" alt="tick icon" height={20} width={20} />
              Message template
            </li>
            <li className="flex items-center justify-start gap-3">
              <Image src="/tick.svg" alt="tick icon" height={20} width={20} />
              Shared notes & documentation
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
