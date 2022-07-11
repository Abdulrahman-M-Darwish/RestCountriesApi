import notFound from "../images/undraw_around_the_world_re_rb1p.svg";
import { BsArrowLeft } from "react-icons/bs";
import { CountriesContext } from "../context/CountriesContext";
import { useContext } from "react";

const NotFound = () => {
	const { setData, allData, searchValue } = useContext(CountriesContext);
	const reset = () => {
		setData(allData);
	};
	return (
		<div className="main">
			<button onClick={reset} className="flex items-center">
				<BsArrowLeft /> Back
			</button>
			<div className="img">
				<img src={notFound} alt="notfound" />
			</div>
			{searchValue && (
				<h1 className="text">Sorry Your Country "{searchValue}" Not Found</h1>
			)}
			{!searchValue && <h1 className="text">Loading...</h1>}
		</div>
	);
};

export default NotFound;
