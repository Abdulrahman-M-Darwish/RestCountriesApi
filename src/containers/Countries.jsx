import { BiSearchAlt2 } from "react-icons/bi";
import { FaAngleUp } from "react-icons/fa";
import { useRef, useState, useContext } from "react";
import NotFound from "./NotFound";
import Country from "../components/Country";
import CountryDetails from "./CountryDetails";
import { CountriesContext } from "../context/CountriesContext";

const Countries = () => {
	const {
		data,
		setData,
		allData,
		searchValue,
		setSearchValue,
		countryDetails,
		setCountryDetails,
	} = useContext(CountriesContext);
	const [filters, setFilters] = useState(false);
	const list = useRef([]);
	const serchForCountry = (e) => {
		e.preventDefault();
		const filterd = allData.filter((country) =>
			country.name.common.toLowerCase().startsWith(searchValue.toLowerCase())
		);
		setData(filterd);
	};
	const setFilter = (e) => {
		if (e.target.classList.contains("active")) {
			e.target.classList.remove("active");
			setData(allData);
		} else {
			const filterd = allData.filter(
				(country) => country.region === e.target.textContent
			);
			setData(filterd);
			list.current.childNodes.forEach((li) => li.classList.remove("active"));
			e.target.classList.add("active");
		}
	};
	const displayCountry = (e) => {
		const id = e.target.getAttribute("data-id");
		setCountryDetails(data[id]);
	};
	if (data.length <= 0) {
		return <NotFound />;
	}
	if (countryDetails) {
		return <CountryDetails />;
	}
	return (
		<div className="countries flex flex-col">
			<div className="container">
				<div className="find flex flex-col">
					<form className="flex" onSubmit={serchForCountry}>
						<button>
							<BiSearchAlt2 size={24} />
						</button>
						<input
							type="text"
							placeholder="Search for a country"
							onChange={(e) => setSearchValue(e.target.value)}
						/>
					</form>
					<div className={`filter flex flex-col ${filters ? "active" : ""}`}>
						<span
							onClick={() => setFilters((p) => !p)}
							className="flex items-center justify-between"
						>
							Filter by Region <FaAngleUp />
						</span>
						<ul ref={list} className="flex flex-col">
							{["Africa", "Americas", "Asia", "Europe", "Oceania"].map(
								(region, i) => (
									<li onClick={setFilter} key={i}>
										{region}
									</li>
								)
							)}
						</ul>
					</div>
				</div>
				<div className="countries">
					{data &&
						data.map((country, index) => (
							<Country
								country={country}
								key={"country" + index}
								handelClick={displayCountry}
								index={index}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default Countries;
