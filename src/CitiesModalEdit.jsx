export function CitiesModalEdit(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateCity(props.city.id, params);
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          City Name: <input type="text" name="name" defaultValue={props.city.name} />
        </div>
        <div>
          City Description: <input type="text" name="description" defaultValue={props.city.description} />
        </div>
        <div>
          Median Income: $<input type="number" name="median_income" defaultValue={props.city.median_income} />
        </div>
        <div>
          Median Rent with Utilities: $
          <input type="number" name="median_gross_rent" defaultValue={props.city.median_gross_rent} />
        </div>
        <div>
          Population: <input type="number" name="population" defaultValue={props.city.population} />
        </div>
        <div>
          Population Growth per Year:{" "}
          <input type="number" name="population_percent_change" defaultValue={props.city.population_percent_change} />%
        </div>
        <div>
          Median Monthly Mortgage: $
          <input type="number" name="median_monthly_mortgage" defaultValue={props.city.median_monthly_mortgage} />
        </div>
        <div>
          Price of Gas: $<input type="number" name="gas_price" defaultValue={props.city.gas_price} />
        </div>
        <div>
          {props.city.images?.map((image) => (
            <div key={image.id}>
              Image Url: <input type="text" name="url" defaultValue={image.url} />
            </div>
          ))}
        </div>
        <button type="submit">Update {props.city.name}</button>
      </form>
    </div>
  );
}
