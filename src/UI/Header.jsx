import NavBar from "./NavBar";
import NavModal from "./NavModal";
import SearchInput from "./SearchInput";

function Header() {
  return (
    <div className="h-24 bg-stone-100 py-2 shrink-0 flex justify-between">
      <div className="flex-1 md:flex justify-end hidden ">
        <img src="/logo.png" alt="Logo" className="h-20 w-auto block mr-8" />
      </div>
      <div className="w-full px-5 md:px-0 md:w-[600px] lg:w-[800px] 2xl:w-[1200px] mx-auto h-full flex flex-row justify-between items-center">
        <div className="flex flex-row items-center md:items-baseline md:flex-col justify-between gap-3">
          <NavModal />
          <h1 className="text-xl md:text-3xl font-normal tracking-[.4rem] font-impact text-stone-800">
            COCKTAIL
          </h1>
          <NavBar />
        </div>
        <SearchInput />
      </div>
      <div className="flex-1 hidden md:block"></div>
    </div>
  );
}

export default Header;
