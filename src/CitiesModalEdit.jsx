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

      <form>
        <h3>Capstone</h3>
        <label for="name">Capstone Name:</label>
        <br />
        <input type="text" id="name" name="name" defaultValue={props.capstone.name} />
        <br />
        <label for="description">Description:</label>
        <br />
        <input type="text" id="description" name="description" defaultValue={props.capstone.description} />
        <br />
        <label for="url">Link to Capstone:</label>
        <br />
        <input type="text" id="url" name="url" defaultValue={props.capstone.url} />
        <br />
        <label for="screenshot">Screenshot:</label>
        <br />
        <input type="text" id="screenshot" name="screenshot" defaultValue={props.capstone.screenshot} />
        <br />
        <button type="submit">Update Capstone</button>
        <br />
      </form>
    </div>
  );
}
