import NavBar from "./NavBar";

function Header() {
  return (
    <div className="h-24 bg-stone-100 py-2 shrink-0 flex justify-between">
      <div className="flex-1 flex justify-end">
        <img src="/logo.png" alt="Logo" className="h-20 w-auto block mr-8" />
      </div>
      <div className="md:w-[600px] lg:w-[800px] 2xl:w-[1200px] mx-auto h-full flex flex-row justify-between items-center">
        <div className="flex flex-col justify-between gap-3">
          <h1 className="text-3xl font-normal tracking-[.4rem] font-impact text-stone-800">
            COCKTAIL
          </h1>
          <NavBar />
        </div>
        <input
          className="bg-stone-700 h-10 w-64 xl:w-80 rounded-3xl pl-4 placeholder:text-stone-200 text-stone-200 hover:ring-2 hover:ring-stone-900 active:ring-2 active:ring-stone-900"
          type="text"
          placeholder="Let's roll..."
        />
      </div>
      <div className="flex-1"></div>
    </div>
  );
}

export default Header;
