export const Navbar = () => {
  return (
    <>
      <nav className="flex w-full items-center justify-between gap-10 rounded-lg bg-white px-5 py-3 font-semibold shadow-lg">
        <div className="flex items-center justify-between gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="32"
            viewBox="0 0 25 32"
            fill="black"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.5528 4.87425C8.87502 4.03898 10.4417 3.55557 12.1213 3.55557C16.852 3.55557 20.687 7.39056 20.687 12.1213C20.687 16.2424 17.7766 19.6838 13.899 20.5022V11.7979C13.899 8.16308 11.1084 5.17999 7.5528 4.87425ZM3.55557 12.1192C3.55564 11.8271 3.57033 11.5385 3.59894 11.2539C3.85927 9.63811 5.26028 8.404 6.94952 8.404C8.82395 8.404 10.3435 9.92352 10.3435 11.7979V20.5022C6.46658 19.6839 3.55653 16.2435 3.55557 12.1233C3.55557 12.1226 3.55557 12.1219 3.55557 12.1213C3.55557 12.1206 3.55557 12.1199 3.55557 12.1192ZM0.0713783 10.7982C0.0243429 11.1247 0 11.4585 0 11.7979V12.1213V25.0505C0 28.8886 3.11141 32.0001 6.94952 32.0001C10.7876 32.0001 13.899 28.8886 13.899 25.0505V24.1131C19.7506 23.253 24.2425 18.2117 24.2425 12.1213C24.2425 5.42687 18.8157 0 12.1213 0C5.87396 0 0.730531 4.7262 0.0713783 10.7982ZM10.3435 24.1131V25.0505C10.3435 26.925 8.82395 28.4445 6.94952 28.4445C5.0751 28.4445 3.55557 26.925 3.55557 25.0505V20.6976C5.35265 22.4925 7.71041 23.7261 10.3435 24.1131Z"
            ></path>
          </svg>
          <span className="text-xl font-bold">Polymer</span>
        </div>
        <ul className="flex items-center justify-between gap-4 text-sm">
          <li className="rounded-md px-3 py-2 hover:cursor-pointer hover:bg-neutral-100">
            Features
          </li>
          <li className="rounded-md px-3 py-2 hover:cursor-pointer hover:bg-neutral-100">
            Pricing
          </li>
          <li className="rounded-md px-3 py-2 hover:cursor-pointer hover:bg-neutral-100">
            Blog
          </li>
          <li className="rounded-md px-3 py-2 hover:cursor-pointer hover:bg-neutral-100">
            Changelog
          </li>
        </ul>

        <div className="flex items-center justify-between gap-3 text-sm">
          <button className="rounded-md bg-neutral-200 px-4 py-2 hover:cursor-pointer hover:bg-neutral-300">
            Log In
          </button>
          <button className="rounded-md bg-black px-4 py-2 text-white hover:cursor-pointer hover:bg-gray-800">
            Sign up
          </button>
        </div>
      </nav>
    </>
  );
};
