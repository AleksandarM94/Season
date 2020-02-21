import {useState, useEffect} from "react";

export default () => {
	const [lat, setLat] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");
	useEffect(() => {
		window.navigator.geolocation.getCurrentPosition(
			(postion) => setLat(postion.coords.latitude),
			(err) => setErrorMessage(err.message)
		);
	}, []);
	return [lat, errorMessage];
};
