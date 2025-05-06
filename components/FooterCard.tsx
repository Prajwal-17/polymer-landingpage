import Image from "next/image";

export const FooterCard = () => {
  return (
    <>
      <div className="px-40 py-24">
        <div className="flex items-center justify-between gap-20">
          <div className="space-y-5">
            <div className="flex items-center justify-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="32"
                viewBox="0 0 25 32"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.5528 4.87425C8.87502 4.03898 10.4417 3.55557 12.1213 3.55557C16.852 3.55557 20.687 7.39056 20.687 12.1213C20.687 16.2424 17.7766 19.6838 13.899 20.5022V11.7979C13.899 8.16308 11.1084 5.17999 7.5528 4.87425ZM3.55557 12.1192C3.55564 11.8271 3.57033 11.5385 3.59894 11.2539C3.85927 9.63811 5.26028 8.404 6.94952 8.404C8.82395 8.404 10.3435 9.92352 10.3435 11.7979V20.5022C6.46658 19.6839 3.55653 16.2435 3.55557 12.1233C3.55557 12.1226 3.55557 12.1219 3.55557 12.1213C3.55557 12.1206 3.55557 12.1199 3.55557 12.1192ZM0.0713783 10.7982C0.0243429 11.1247 0 11.4585 0 11.7979V12.1213V25.0505C0 28.8886 3.11141 32.0001 6.94952 32.0001C10.7876 32.0001 13.899 28.8886 13.899 25.0505V24.1131C19.7506 23.253 24.2425 18.2117 24.2425 12.1213C24.2425 5.42687 18.8157 0 12.1213 0C5.87396 0 0.730531 4.7262 0.0713783 10.7982ZM10.3435 24.1131V25.0505C10.3435 26.925 8.82395 28.4445 6.94952 28.4445C5.0751 28.4445 3.55557 26.925 3.55557 25.0505V20.6976C5.35265 22.4925 7.71041 23.7261 10.3435 24.1131Z"
                ></path>
              </svg>
              <span className="text-xl font-bold">Polymer</span>
            </div>
            <div className="mx-auto max-w-[310px] text-sm font-medium text-[#727272]">
              Building coordination tools for organizations of all shapes and
              sizes. Hiring is just the start.
            </div>
            <div>
              <Image
                src="/featured.svg"
                alt="Featured Image"
                height={50}
                width={200}
              />
            </div>
            <div className="text-xs font-medium text-[#727272]">
              © 2023 Inflow Hiring, Inc.
            </div>
          </div>

          <div className="flex items-start justify-evenly gap-36 text-sm font-medium text-[#727272]">
            <div>
              <ul className="space-y-3">
                <li className="text-lg font-semibold text-white">Links</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>API</li>
                <li>Sign up</li>
                <li>Log in</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="text-lg font-semibold text-white">Resources</li>
                <li>Help Docs</li>
                <li>Quick start guide</li>
                <li>Changelog</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="text-lg font-semibold text-white">Company</li>
                <li>About us</li>
                <li>Privacy Policy</li>
                <li>Terms of service</li>
                <li>Contact us</li>
                <li>Discord</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
