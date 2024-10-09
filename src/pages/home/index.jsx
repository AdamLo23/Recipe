import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading...Please wait!</div>;

  return (
    <>
  
    
    <div className="container relative flex flex-wrap justify-center gap-10 py-8 mx-auto">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="text-4xl font-extrabold text-center font-cormorant text-[#00fd00]">
            Enter a name of a Recipe
          </p>
        </div>
      )}
    </div>
    </>
  );
}
