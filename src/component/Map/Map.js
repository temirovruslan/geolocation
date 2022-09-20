import React, { useState, useRef,useEffect, useCallback } from "react";
import "./Map.css";
import { defaultTheme } from "./Theme";
// import { Marker ,MarkerF, Polygon} from "@react-google-maps/api";
import { LoadScript, GoogleMap, Polygon, MarkerF} from "@react-google-maps/api";
// import { GoogleMap } from "@react-google-maps/api";

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
	// default settings
	const mapRef = useRef(undefined);
	const onLoad = useCallback(function callback(map) {
		mapRef.current = map;
	}, []);
	const onUnmount = useCallback(function callback(map) {
		mapRef.current = map;
	}, []);



	const [latitudeM, setLatitudeM] = useState()
	const [longitudeM, setLonogitudeM] = useState()

	// add one user-marker
	useEffect(()=>{
		setInterval(()=>{
			setLatitudeM(faker.address.latitude()) 
			setLonogitudeM(faker.address.longitude())
		},2500)
	},[faker])


	// obj of users Lat
	const [usersLatitude, setUsersLatitude] = useState({
		first:'',
		second:'',
		third:'',
	})
	// obj of users Lon
	const [usersLongtitude, setUsersLongtitude] = useState({
		first:'',
		second:'',
		third:'',
	})
	

	// add many user-marker
	useEffect(()=>{
		// each 2.5 sec chancge users position
		setInterval(()=>{
			// set users Latitude
			setUsersLatitude(lat => ({
				...lat,
				...lat.first = faker.address.latitude(),
				...lat.second = faker.address.latitude(),
				...lat.third = faker.address.latitude(),
			}))
			// set users Longtitude
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
				// center={{ lat: 52.52047739093263, lng: 13.36653284549709 }}
				zoom={13}
				onLoad={onLoad}
				onUnmount={onUnmount}
				options={defaultOptions}
			>
				
				<MarkerF position={{ lat: parseFloat(59.428002), lng: parseFloat(24.740948) }} />
				<MarkerF position={{ lat: parseFloat(latitudeM), lng: parseFloat(longitudeM) }} />

				<MarkerF position={{ lat: parseFloat(usersLatitude.first), lng: parseFloat(usersLongtitude.first) }} />
				<MarkerF position={{ lat: parseFloat(usersLatitude.second), lng: parseFloat(usersLongtitude.second) }} />
				<MarkerF position={{ lat: parseFloat(usersLatitude.third), lng: parseFloat(usersLongtitude.third) }} />

				
				<></>
			</GoogleMap>
			
			
		
		</div>
	);
};

export default Map;


