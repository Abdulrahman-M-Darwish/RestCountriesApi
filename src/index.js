import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CountriesProvider } from "./context/CountriesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<CountriesProvider>
			<App />
		</CountriesProvider>
	</React.StrictMode>
);
