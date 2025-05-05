import Image from "next/image";

export const HiringSteps = () => {
  return (
    <>
      <div className="px-40 py-24">
        <div className="mb-12">
          <h2 className="mb-4 text-4xl font-bold">Get to hiring in minutes</h2>
          <p className="max-w-lg text-left text-[#555555]">
            No annoying sales calls. No jumping through hoops. Polymer is
            designed for quick setup with minimal configuration.
          </p>
        </div>
        <div className="flex items-start justify-start gap-10">
          <StepCard
            icon="/login.svg"
            title="Sign up"
            description="Polymer is an applicant tracking system that's simple to start and easy to master."
            buttonText="Get Started"
          />
          <StepCard
            icon="/pencil.svg"
            title="Create"
            description="Create your first job post. All that's required is a title and description."
          />
          <StepCard
            icon="/send.svg"
            title="Publish"
            description="Click publish to start your subscription and take your job post public."
          />
          <StepCard
            icon="/share.svg"
            title="Share"
            description="Share your job post with the world and watch the applications come in."
          />
        </div>
      </div>
    </>
  );
};

const StepCard = ({
  icon,
  title,
  description,
  buttonText,
}: {
  icon: string;
  title: string;
  description: string;
  buttonText?: string;
}) => (
  <div className="flex w-full flex-col items-start justify-start rounded-lg text-center">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white">
      <Image src={icon} alt={`${title} logo`} width={30} height={30} />
    </div>
    <h3 className="mb-2 text-lg font-semibold">{title}</h3>
    <p className="text-left font-medium text-[#555555]">{description}</p>
    {buttonText && (
      <button className="mt-4 rounded-lg bg-black/5 px-3 py-2 text-sm font-medium hover:cursor-pointer hover:bg-black/10">
        {buttonText}
      </button>
    )}
  </div>
);
