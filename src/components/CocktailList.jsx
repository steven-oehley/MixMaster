import CocktailCard from "./CocktailCard";

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <div className="text-3xl text-accent text-center">
        No drinks found....
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center align-middle">
      {drinks.map((drink) => {
        const drinkData = {
          id: drink.idDrink,
          name: drink.strDrink,
          alcoholic: drink.strAlcoholic,
          cat: drink.strCategory,
          img: drink.strDrinkThumb,
          glass: drink.strGlass,
        };

        return <CocktailCard key={drinkData.id} {...drinkData} />;
      })}
    </div>
  );
};
export default CocktailList;
