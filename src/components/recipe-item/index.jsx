import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
  return (
    <>
    
    <div className="relative flex flex-col gap-5 p-5 overflow-hidden bg-yellow-200 border-2 border-black shadow-xl w-80 rounded-2xl">
      <div className="flex items-center justify-center h-40 overflow-hidden rounded-xl">
        <img src={item?.image_url} alt="recipe item" className="block w-full" />
      </div>
      <div>
        <span className="relative text-2xl font-bold text-cyan-700 font-press">
          {item?.publisher}
        </span>
        <h3 className="relative text-2xl font-bold text-black truncate font-sevillana">
          {item?.title}
        </h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="relative inline-block p-3 px-8 mt-5 text-2xl font-medium tracking-wider text-blue-600 uppercase rounded-lg shadow-md bg-[#00fd00] font-cormorant"
        >
          Recipe Details
        </Link>
      </div>
    </div>
    </>
  );
}
