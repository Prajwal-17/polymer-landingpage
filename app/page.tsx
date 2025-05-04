import { ChatComponent } from "@/components/ChatComponent";
import { CompaniesComponent } from "@/components/CompaniesComponent";
import { Navbar } from "@/components/Navbar";
import { ProductInfo } from "@/components/ProductInfo";

export default function Home() {
  return (
    <div className="h-[100vh] w-full px-3 py-4">
      <section className="h-[110vh] w-full rounded-xl bg-pink-200">
        <div className="mx-16 flex items-center justify-center px-24 pt-8">
          <Navbar />
        </div>
        <div className="space-y-5 py-28 text-center">
          <div className="font-medium text-[#555555]">Introducing Polymer</div>
          <div className="text-5xl font-bold">Hiring made simple</div>
          <div className="mx-auto max-w-2xl text-lg font-medium">
            <span>
              Polymer gives you a beautiful site to display your job openings
              and powerful applicant tracking software for candidate
              relationship management.
            </span>
          </div>
          <div className="mt-5 flex items-center justify-center gap-3 font-medium">
            <button className="rounded-lg bg-black px-5 py-2 text-white hover:cursor-pointer hover:bg-gray-800">
              Sign up for free
            </button>
            <button className="rounded-lg bg-black/5 px-5 py-2 font-semibold text-black hover:cursor-pointer hover:bg-black/10">
              Contact us
            </button>
          </div>
        </div>
      </section>

      <section className="mt-5 h-[590px] rounded-xl bg-[#F4F4F4]">
        <CompaniesComponent />
      </section>

      <section className="mt-5 h-[590px] w-full rounded-xl bg-pink-200">
        <ProductInfo />
      </section>

      <section className="mt-5 h-[780px] bg-[#F4F4F4]">
        <ChatComponent />
      </section>
    </div>
  );
}
