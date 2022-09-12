import React, { useState, useEffect } from "react";
import "./Map.css";
import { defaultTheme } from "./Theme";
import { Marker } from "@react-google-maps/api";

import { GoogleMap } from "@react-google-maps/api";

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
	// const [userSpeed, setUserSpeed] = useState(null);
	const [userAccuracy, setUserAccuracy] = useState(null);
	// console.log(userSpeed);

	const mapRef = React.useRef(undefined);

	const onLoad = React.useCallback(function callback(map) {
		mapRef.current = map;
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		mapRef.current = map;
	}, []);
	

	
	// 1) test 
	const watchUser = (position) => {
		const { latitude, longitude,accuracy } = position.coords;
		setUserLatitude(latitude)
		setUserLongitude(longitude)
		setUserAccuracy(accuracy)
		console.log('work');
	}	

	const userMove = navigator.geolocation.watchPosition(watchUser)

	// 2) test 
	// useEffect(() => {
	// 	const watchId = () => navigator.geolocation.watchPosition(position => {
	// 		const { latitude, longitude,accuracy,speed } = position.coords;
	// 		setUserLatitude(latitude);
	// 		setUserLongitude(longitude);
	// 		setUserAccuracy(accuracy)
	// 		setUserSpeed(speed)
	// 	});
	// 	watchId()
	// },[userAccuracy])
	

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
			<h1 className="lat">lat : {userLatitude}</h1>
			<h1 className="lon">lon : {userLongitude}</h1>
			<h1 className="acc">accuracy : {userAccuracy}</h1>
		</div>
	);
};

export default Map;




// const componentDidMount = () => {
	// 	navigator.geolocation.getCurrentPosition(function (position) {
	// 		navigator.geolocation.watchPosition()
	// 		// setUserLatitude(position.coords.latitude);
	// 		// setUserLongitude(position.coords.longitude);
	// 		console.log(position.coords);
	
	// 	});
	// }
	// componentDidMount();
	// const watchId = navigator.geolocation.watchPosition(position => {
	// 	const { latitude, longitude,accuracy } = position.coords;
	// 	setUserLatitude(latitude);
	// 	setUserLongitude(longitude);
	// 	setUserAccuracy(accuracy)
	// 	console.log(position.coords);
	// 	// Show a map centered at latitude / longitude.
	// });

