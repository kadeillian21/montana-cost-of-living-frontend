export function CitiesIndex(props) {
  return (
    <div>
      <h1>Cities</h1>
      {props.cities.map((city) => (
        <div key={city.id}>
          <h2>{city.name}</h2>
          <p>{city.description}</p>
          <p>Median Income: ${city.median_income}</p>
          <p>Median Rent with Utilities: ${city.median_gross_rent}</p>
          <p>Population: {city.population}</p>
          <p>Population Growth per Year: {city.population_percent_change}%</p>
          <p>Median Monthly Mortgage: ${city.median_monthly_mortgage}</p>
          <p>Price of Gas: ${city.gas_price}</p>
          <button onClick={() => props.onSelectCity(city)}>More info</button>
        </div>
      ))}
    </div>
  );
}
