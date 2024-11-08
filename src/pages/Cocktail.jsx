import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";

export const loader = async ({ params }) => {
  const { id } = params;

  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/lookup.php?i=${id}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  return { drink: response.data.drinks[0] }; // Access the single drink object directly
};

const Cocktail = () => {
  const { drink } = useLoaderData();

  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = drink[`strIngredient${i}`];
    const measure = drink[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push({ ingredient, measure });
    }
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="mb-4">
        <Link to="/" className="btn btn-outline btn-secondary">
          &larr; Back to List
        </Link>
      </div>

      <div className="card shadow-lg bg-base-100">
        <figure>
          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            className="
             h-60 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold mb-2">
            {drink.strDrink}
          </h2>
          <div className="badge badge-primary mr-2">{drink.strCategory}</div>
          <div className="badge badge-secondary">{drink.strAlcoholic}</div>
          <div className="divider mt-4"></div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Glass:</h3>
            <p>{drink.strGlass}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Instructions:</h3>
            <p>{drink.strInstructions}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Ingredients:</h3>
            <ul className="list-disc list-inside">
              {ingredients.map(({ ingredient, measure }, index) => (
                <li key={index}>
                  {measure && <span className="font-medium">{measure}</span>}{" "}
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cocktail;
