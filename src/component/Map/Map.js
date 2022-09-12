import React, { useState, useEffect } from "react";
import "./Map.css";
import { defaultTheme } from "./Theme";
import { Marker,GoogleMap  } from "@react-google-maps/api";

// import { GoogleMap } from "@react-google-maps/api";

//*==========================================================*//
const containerStyle = {
	width: "100%",
	height: "100%",
};

const defaultOptions = {
	panControl: true,
	styles: defaultTheme,
	streetViewControl: false, //5
	rotateControl: false,
	clickableIcon: true, //5
	zoomControl: true, //2
	scrollwheel: true, //6
	navigationControl: false,
	mapTypeControl: false, //3
	scaleControl: false, //4
	draggable: true,
	disableDefaultUI: true,
	disableDoubleClickZoom: true,
	keyboardShortcuts: false,
	fullscreenControl: true,
};

//*==========================================================*//
const Map = ({ center }) => {
	const [userLatitude, setUserLatitude] = useState(null);
	const [userLongitude, setUserLongitude] = useState(null);
	const [userSpeed, setUserSpeed] = useState(null);
	const [userAccuracy, setUserAccuracy] = useState(null);


	const mapRef = React.useRef(undefined);

	const onLoad = React.useCallback(function callback(map) {
		mapRef.current = map;
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		mapRef.current = map;
	}, []);
	

	

	
	// get user coordinaties when he moves
	useEffect(() => {
		const watchId = () => navigator.geolocation.watchPosition(position => {
			const { latitude, longitude,accuracy,speed } = position.coords;
			setUserLatitude(latitude);
			setUserLongitude(longitude);
			setUserAccuracy(accuracy)
			setUserSpeed(speed)
			
			
		});
		watchId()

	},[userAccuracy])
	

	return (
		<div className="container">
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={13}
				onLoad={onLoad}
				onUnmount={onUnmount}
				options={defaultOptions}
			>
				<Marker position={{ lat: parseFloat(userLatitude), lng: parseFloat(userLongitude) }} />
				
       
				<></>
			</GoogleMap>
			<h2 className="lat">lat : {userLatitude}</h2>
			<h2 className="lon">lon : {userLongitude}</h2>
			<h2 className="sp">speed : {userSpeed}</h2>
			<h2 className="acc">accuracy : {userAccuracy}</h2>
		</div>
	);
};

export default Map;

