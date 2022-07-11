import { BsArrowLeft } from "react-icons/bs";
import { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";

const CountryDetails = () => {
	const { countryDetails, setCountryDetails, getSingleCountry } =
		useContext(CountriesContext);
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
						<img
							src={countryDetails.flags.svg}
							alt={countryDetails.name.common}
						/>
					</div>
					<div className="inner-info flex flex-col">
						<h2 className="title">{countryDetails.name.common}</h2>
						<div className="about flex flex-col">
							<div className="col flex flex-col">
								<h3>
									<span>Native Name:</span>{" "}
									{
										Object.values(countryDetails.name.nativeName)[
											Object.values(countryDetails.name.nativeName).length - 1
										].common
									}
								</h3>
								<h3>
									<span>Population:</span>{" "}
									{countryDetails.population.toLocaleString()}
								</h3>
								<h3>
									<span>Region:</span> {countryDetails.region}
								</h3>
								<h3>
									<span>Sub Region:</span> {countryDetails.subregion}
								</h3>
								<h3>
									<span>Capital:</span> {countryDetails.capital}
								</h3>
							</div>
							<div className="col flex flex-col">
								<h3>
									<span>Top Level Domain:</span> {countryDetails.tld}
								</h3>
								<h3>
									<span>Currencies:</span>{" "}
									{Object.keys(countryDetails.currencies).map(
										(currency) => countryDetails.currencies[currency].name + " "
									)}
								</h3>
								<h3>
									<span>Languages:</span>{" "}
									{Object.values(countryDetails.languages).join(", ")}
								</h3>
							</div>
						</div>
						<div className="border flex flex-col">
							<h3>
								<span>Border Countries:</span>{" "}
								{!countryDetails.borders && 'There Is No Border Countries ;"('}
							</h3>
							<div className="countries flex">
								{countryDetails.borders &&
									countryDetails.borders.map((countryDetails) => (
										<button onClick={getSingleCountry} key={countryDetails}>
											{countryDetails}
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
