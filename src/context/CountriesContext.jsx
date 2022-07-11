import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
export const CountriesContext = React.createContext({});

export const CountriesProvider = ({ children }) => {
	const [countryDetails, setCountryDetails] = useState(null);
	const [searchValue, setSearchValue] = useState("");
	const [data, setData] = useFetch("https://restcountries.com/v3.1/all");
	const [allData] = useFetch("https://restcountries.com/v3.1/all");
	const getSingleCountry = (e) => {
		const filterd = allData.filter(
			(country) => country.cca3 === e.target.textContent
		);
		setCountryDetails(filterd[0]);
	};
	console.log(data);
	console.log(allData);
	return (
		<CountriesContext.Provider
			value={{
				data,
				setData,
				allData,
				searchValue,
				setSearchValue,
				countryDetails,
				setCountryDetails,
				getSingleCountry,
			}}
		>
			{children}
		</CountriesContext.Provider>
	);
};
