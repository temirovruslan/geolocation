import React, { useState, useEffect } from "react";
import "./Map.css";
import { defaultTheme } from "./Theme";
import { Marker ,MarkerF, Polygon} from "@react-google-maps/api";
// import { Marker } from "./Marker";
import { GoogleMap } from "@react-google-maps/api";
import AnyReactComponent from "./AnyReactComponent";

import { faker } from '@faker-js/faker';
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
const Map = ({center}) => {
	
	const [userLatitude, setUserLatitude] = useState(null);
	const [userLongitude, setUserLongitude] = useState(null);
	const [userAccuracy, setUserAccuracy] = useState(null);


	const mapRef = React.useRef(undefined);

	const onLoad = React.useCallback(function callback(map) {
		mapRef.current = map;
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		mapRef.current = map;
	}, []);


	const [latitudeM, setLatitudeM] = useState()
	const [longitudeM, setLonogitudeM] = useState()


	useEffect(()=>{
	
		setInterval(()=>{
			setLatitudeM(faker.address.latitude()) 
			setLonogitudeM(faker.address.longitude())
		},2500)
	},[faker])


	const [usersLatitude, setUsersLatitude] = useState({
		first:'',
		second:'',
		third:'',
	})
	const [usersLongtitude, setUsersLongtitude] = useState({
		first:'',
		second:'',
		third:'',
	})
	


	useEffect(()=>{
		
		setInterval(()=>{
			
			setUsersLatitude(lat => ({
				...lat,
				...lat.first = faker.address.latitude(),
				...lat.second = faker.address.latitude(),
				...lat.third = faker.address.latitude(),
			}))
			setUsersLongtitude(lon => ({
				...lon,
				...lon.first = faker.address.longitude(),
				...lon.second = faker.address.longitude(),
				...lon.third = faker.address.longitude(),
			}))
		},2500)
	},[faker])
	



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
				

				<MarkerF position={{ lat: parseFloat(59.428002), lng: parseFloat(24.740948) }} />
				{/* <MarkerF position={{ lat: parseFloat(latitudeM), lng: parseFloat(longitudeM) }} />

				<MarkerF position={{ lat: parseFloat(usersLatitude.first), lng: parseFloat(usersLongtitude.first) }} />
				<MarkerF position={{ lat: parseFloat(usersLatitude.second), lng: parseFloat(usersLongtitude.second) }} />
				<MarkerF position={{ lat: parseFloat(usersLatitude.third), lng: parseFloat(usersLongtitude.third) }} /> */}

				
				<></>
			</GoogleMap>
			
			<h1 className="lat">lat : {userLatitude}</h1>
			<h1 className="lon">lon : {userLongitude}</h1>
			<h1 className="acc">accuracy : {userAccuracy}</h1>
		</div>
	);
};

export default Map;

// // 1) test 
	// const watchUser = (position) => {
	// 	const { latitude, longitude,accuracy,heading } = position.coords;
	// 	setUserLatitude(latitude)
	// 	setUserLongitude(longitude)
	// 	setUserAccuracy(accuracy)
	// 	count++
		// console.log('count>>>>>>>>',count );
		// console.log('latitude>>',latitude);
		// console.log('longitude>>',longitude);
		// console.log('accuracy>>',accuracy);
		// console.log('heading>>',heading);
	// }	

	// const userMove = navigator.geolocation.watchPosition(watchUser)

	//  // 2) test 
	// useEffect(() => {
	// 	const watchId = () => navigator.geolocation.watchPosition(position => {
	// 		count++
	// 		const { latitude, longitude,accuracy,speed, heading } = position.coords;
	// 		setUserLatitude(latitude);
	// 		setUserLongitude(longitude);
	// 		setUserAccuracy(accuracy)


	// 		console.log('count>>>>>>>>',count );
	// 		console.log('latitude>>',latitude);
	// 		console.log('longitude>>',longitude);
	// 		console.log('accuracy>>',accuracy);
	// 		console.log('heading>>',heading);
			
	// 	});
	// 	watchId()
	// },[userAccuracy])

	// const interval = setInterval(() => {
		// const watchId = () => navigator.geolocation.watchPosition(position => {
		// 	count++
		// 	const { latitude, longitude,accuracy,speed, heading } = position.coords;
		// 	setUserLatitude(latitude);
		// 	setUserLongitude(longitude);
		// 	setUserAccuracy(accuracy)


		// 	console.log('count>>>>>>>>',count );
		// 	console.log('latitude>>',latitude);
		// 	console.log('longitude>>',longitude);
		// 	console.log('accuracy>>',accuracy);
		// 	console.log('heading>>',heading);
			
		// });
		// watchId()

	// }, 1000);


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

	// // 3) test 
	// useEffect(() => {
	// 	setInterval(() => {
	// 		const watchId = () => navigator.geolocation.watchPosition(position => {
	// 			count++
	// 			const { latitude, longitude,accuracy,speed, heading } = position.coords;
	// 			setUserLatitude(latitude);
	// 			setUserLongitude(longitude);
	// 			setUserAccuracy(accuracy)
	
	
	// 			console.log('count>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',count );
	// 			console.log('latitude>>',latitude);
	// 			console.log('longitude>>',longitude);
	// 			console.log('accuracy>>',accuracy);
	// 			console.log('heading>>',heading);
				
	// 		});
	// 		watchId()
	// 	}, 1000);
	//   }, []);


	//   function initMap() {
    //     var map = new window.google.maps.Map(document.getElementsByClassName('container'), {
    //       zoom: 11,
    //       center: {lat: 59.434349, lng: 24.726588}
    //     });
	// 	console.log(map);

	// 	var BecaramangeDelimetr = [
	// 		{lng:24.726588, lat: 59.434349},
	// 		{lng:24.766588, lat: 59.434749},
	// 		{lng:24.786588, lat: 59.434949},
	// 		{lng:24.716588, lat: 59.434249},
	// 	]
	// 	var BecaramangePolygon = new window.google.maps.Polygon({
	// 		paths:BecaramangeDelimetr,
	// 		strokeColor: '#FF0000',
	// 		fillColor: '#FF0000',
	// 		strokeWeight: 2,
	// 		fillOpacity: 0.35,
	// 	})
	// 	BecaramangePolygon.setMap(map)


    
    //   }

