import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="container relative flex flex-wrap justify-center gap-10 py-8 mx-auto">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="text-xl font-extrabold text-center text-black lg:text-4xl">
            Favorites recipe is empty.
          </p>
        </div>
      )}
    </div>
  );
}
