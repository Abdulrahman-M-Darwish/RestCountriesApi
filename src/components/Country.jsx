const Country = ({ country, index, handelClick }) => {
  return (
    <div
      data-id={index}
      onClick={handelClick}
      className="card flex flex-col justify-between"
    >
      <div className="flag">
        <img src={country.flags.png} alt={country.name.common} />
      </div>
      <div className="info">
        <h2>{country.name.common}</h2>
        <h3>
          <span>Population:</span> {country.population.toLocaleString()}
        </h3>
        <h3>
          <span>Region:</span> {country.region}
        </h3>
        <h3>
          <span>Capital:</span> {country.capital}
        </h3>
      </div>
    </div>
  );
};

export default Country;
