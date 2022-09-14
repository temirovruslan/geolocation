import Map from "./component/Map/Map";
import React from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import "./App.css";


//*==========================================================*//
const API_KEY = process.env.REACT_APP_API_KEY;

const defaultCenter = {
	lat: 59.432102,
	lng: 24.72062,
};

const libreries = ["places"];


//*==========================================================*//
const App = () => {

	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: API_KEY,
		libreries,
	});

 

	return (
		<div>
	
			{isLoaded ? <Map center={defaultCenter} />  : <h2>Loading...</h2>}
		</div>
	);
};

export default App;
