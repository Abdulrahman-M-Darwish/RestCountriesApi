import { BiSearchAlt2 } from "react-icons/bi";
import { FaAngleUp } from "react-icons/fa";
import { useRef, useState } from "react";
import NotFound from "./NotFound";
import useFetch from "../hooks/useFetch";
import Country from "../components/Country";
import CountryDetails from "./CountryDetails";

const Countries = () => {
	const [filters, setFilters] = useState(false);
	const [data, setData] = useFetch("https://restcountries.com/v3.1/all");
	const [allData] = useFetch("https://restcountries.com/v3.1/all");
	const [searchValue, setSearchValue] = useState("");
	const [countryDetails, setCountryDetails] = useState(null);
	const list = useRef([]);
	const handelClick = (e) => {
		const filterd = allData.filter(
			(country) => country.cca3 === e.target.textContent
		);
		setCountryDetails(filterd[0]);
	};
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
		return <NotFound country={searchValue} setData={setData} />;
	}
	if (countryDetails) {
		return (
			<CountryDetails
				setCountryDetails={setCountryDetails}
				country={countryDetails}
				handelClick={handelClick}
			/>
		);
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
