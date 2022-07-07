import { BsArrowLeft } from "react-icons/bs";

const CountryDetails = ({ setCountryDetails, country, handelClick }) => {
  return (
    <div className="details">
      <div className="container flex flex-col">
        <button
          onClick={() => setCountryDetails(null)}
          className="flex items-center"
        >
          <BsArrowLeft /> Back
        </button>
        <div className="info flex flex-col">
          <div className="flag">
            <img src={country.flags.svg} alt={country.name.common} />
          </div>
          <div className="inner-info flex flex-col">
            <h2 className="title">{country.name.common}</h2>
            <div className="about flex flex-col">
              <div className="col flex flex-col">
                <h3>
                  <span>Native Name:</span>{" "}
                  {
                    Object.values(country.name.nativeName)[
                      Object.values(country.name.nativeName).length - 1
                    ].common
                  }
                </h3>
                <h3>
                  <span>Population:</span> {country.population.toLocaleString()}
                </h3>
                <h3>
                  <span>Region:</span> {country.region}
                </h3>
                <h3>
                  <span>Sub Region:</span> {country.subregion}
                </h3>
                <h3>
                  <span>Capital:</span> {country.capital}
                </h3>
              </div>
              <div className="col flex flex-col">
                <h3>
                  <span>Top Level Domain:</span> {country.tld}
                </h3>
                <h3>
                  <span>Currencies:</span>{" "}
                  {country.currencies[Object.keys(country.currencies)].name}
                </h3>
                <h3>
                  <span>Languages:</span>{" "}
                  {Object.values(country.languages).join(", ")}
                </h3>
              </div>
            </div>
            <div className="border flex flex-col">
              <h3>
                <span>Border Countries:</span>{" "}
                {!country.borders && 'There Is No Border Countries ;"('}
              </h3>
              <div className="countries flex">
                {country.borders &&
                  country.borders.map((country) => (
                    <button onClick={handelClick} key={country}>
                      {country}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
