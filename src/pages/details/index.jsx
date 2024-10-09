import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Details() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favoritesList,
    handleAddToFavorite,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      console.log(data);
      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    }

    getRecipeDetails();
  },);

  console.log(recipeDetailsData, "recipeDetailsData");

  return (
    <div className="container relative grid grid-cols-1 gap-10 py-10 mx-auto lg:grid-cols-2">
      <div className="row-start-2 lg:row-start-auto">
        <div className="overflow-hidden h-96 rounded-xl group">
          <img
            src={recipeDetailsData?.recipe?.image_url}
            className="block object-cover w-full h-full duration-300 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 ">
        <span className="text-2xl font-medium text-blue-600 ">
          {recipeDetailsData?.recipe?.publisher}
        </span>
        <h3 className="text-2xl font-bold truncate text-amber-400">
          {recipeDetailsData?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
            className=" inline-block p-3 px-8 mt-3 text-sm font-medium tracking-wider text-blue-500 uppercase bg-[#00fd00] rounded-lg shadow-md"
          >
            {favoritesList && favoritesList.length > 0 && favoritesList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-blue-400 ">
            Ingredients:
          </span>
          <ul className="flex-col block object-cover w-full h-full gap-3 ">
            {recipeDetailsData?.recipe?.ingredients.map((ingredient) => (
              <li>
                <span className="text-2xl font-semibold text-black ">
                  {ingredient.quantity}  {ingredient.unit}-
                </span>
                <span className="text-2xl font-semibold text-black ">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
