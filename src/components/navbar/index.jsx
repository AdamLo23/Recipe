import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";
import bg from '../../Assets/bg.png' 

export default function Navbar() {
  const { searchParam, setSearchParam , handleSubmit } = useContext(GlobalContext);

  console.log(searchParam);

  return (

    <>
    <img
        src={bg}
        alt="Home page background image"
        priority="true"
        sizes="100vw"
        className="fixed top-0 left-0 object-cover object-center w-full h-full opacity-100 -z-100"
      />

    <nav className="container relative flex flex-col items-center justify-between gap-5 py-8 mx-auto lg:flex-row lg:gap-0 font-sevillana">
      <h2 className="font-semibold text-blue-600 text-8xl">
        <NavLink to={"/"}>Recipe</NavLink>
      </h2>
      <br/>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Items..."
          className="p-3 px-8 rounded-full shadow-lg outline-none bg-white/75 lg:w-96 shadow-red-100 focus:shadow-red-200"
        />
      </form>
      <ul className="flex gap-20 text-3xl text-amber-400">
        <li>
          <NavLink
            to={"/"}
            className=" duration-300 hover:text-[#00fd00] text-6xl "
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className=" duration-300 hover:text-[#00fd00] text-6xl"
          >
            favorites
          </NavLink>
        </li>
      </ul>
    </nav>
    </>
  );
}
