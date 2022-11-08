import { Link } from "react-router-dom";

export function CitiesModalShow(props) {
  return (
    <div>
      <h2>{props.city.name}</h2>
      <img src={props.city.images[0].url} />
      <p>{props.city.description}</p>
      <p>Median Income: ${props.city.median_income}</p>
      <p>Median Rent with Utilities: ${props.city.median_gross_rent}</p>
      <p>Population: {props.city.population}</p>
      <p>Population Growth per Year: {props.city.population_percent_change}%</p>
      <p>Median Monthly Mortgage: ${props.city.median_monthly_mortgage}</p>
      <p>Price of Gas: ${props.city.gas_price}</p>
      <p>Monthly Average Food Cost: ${props.city.monthly_average_food_cost}</p>
      <Link to={`/cities/${props.city.id}`}>More Info</Link>
    </div>
  );
}
