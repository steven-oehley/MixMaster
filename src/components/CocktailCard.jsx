import { Link } from "react-router-dom";

const CocktailCard = ({ id, name, alcoholic, cat, img, glass }) => {
  return (
    <Link
      to={`/cocktail/${id}`}
      className="card ring-2 ring-secondary w-full shadow-xl"
    >
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <div className="card-actions justify-start h-12">
          <div className="badge badge-outline badge-accent">{cat}</div>
          <div className="badge badge-outline badge-accent">{glass}</div>
          <div className="badge badge-outline badge-accent">{alcoholic}</div>
        </div>
      </div>
    </Link>
  );
};
export default CocktailCard;
