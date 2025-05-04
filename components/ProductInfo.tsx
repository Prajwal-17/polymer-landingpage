import Image from "next/image";

export const ProductInfo = () => {
  return (
    <>
      <div className="px-40 py-28">
        <div className="max-w-sm text-left text-4xl font-bold">
          <h2>Everything you need to grow your team</h2>
        </div>
        <div className="flex items-start justify-between gap-10 pt-16">
          <div className="flex flex-1 flex-col justify-between space-y-5">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-white">
              <Image
                src="/window.svg"
                alt="window logo"
                width={30}
                height={30}
              />
            </div>
            <div className="flex-1 space-y-3">
              <div className="text-lg font-semibold">Instant job board</div>
              <div>
                You&apos;ll have a branded job board as a centralized place to
                display all the open positions at your organization.
              </div>
            </div>
            <div>
              <button className="rounded-lg bg-black/5 px-4 py-2 font-medium text-black hover:cursor-pointer hover:bg-black/10">
                Learn more
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between space-y-5">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-white">
              <Image
                src="/profile.svg"
                alt="profile logo"
                width={30}
                height={30}
              />
            </div>
            <div className="flex-1 space-y-3">
              <div className="text-lg font-semibold">
                Candidate relationship management
              </div>
              <div>
                As they apply, new candidates automatically show up in the
                Polymer applicant tracking system for efficient review and
                management.
              </div>
            </div>
            <div>
              <button className="rounded-lg bg-black/5 px-4 py-2 font-medium text-black hover:cursor-pointer hover:bg-black/10">
                Learn more
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between space-y-5">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-white">
              <Image
                src="/integration.svg"
                alt="integration logo"
                width={30}
                height={30}
              />
            </div>
            <div className="flex-1 space-y-3">
              <div className="text-lg font-semibold">Team collaboration</div>
              <div>
                Hiring is a team sport and Polymer is set up to support it. With
                no limit on your user-count, you can invite all the help you
                need.
              </div>
            </div>
            <div>
              <button className="rounded-lg bg-black/5 px-4 py-2 font-medium text-black hover:cursor-pointer hover:bg-black/10">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
