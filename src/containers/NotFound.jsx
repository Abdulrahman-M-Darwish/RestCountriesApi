import notFound from "../images/undraw_around_the_world_re_rb1p.svg";
import { BsArrowLeft } from "react-icons/bs";
import useFetch from "../hooks/useFetch";

const NotFound = ({ country, setData }) => {
  const [allData] = useFetch("https://restcountries.com/v3.1/all");
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
      <h1 className="text">Sorry Your Country "{country}" Not Found</h1>
    </div>
  );
};

export default NotFound;
