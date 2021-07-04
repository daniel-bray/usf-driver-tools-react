import { Switch, Route, Redirect } from "react-router-dom";
import Announcements from "./components/AnnouncementsComponent";
import Header from "./components/HeaderComponent";
import Location from "./components/LocationComponent";
import AddLocation from "./components/AddLocationComponent";
import RoutingFeedback from "./components/RoutingFeedbackComponent";
import LoadingFeedback from "./components/LoadingFeedbackComponent";
import BarcodeGenerator from "./components/BarcodeGeneratorComponent";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route
					exact
					path="/usf-driver-tools-react/announcements"
					component={Announcements}
				/>
				<Route
					exact
					path="/usf-driver-tools-react/location-search"
					component={Location}
				/>
				<Route
					exact
					path="/usf-driver-tools-react/location-add"
					component={AddLocation}
				/>
				<Route
					exact
					path="/usf-driver-tools-react/feedback-routing"
					component={RoutingFeedback}
				/>
				<Route
					exact
					path="/usf-driver-tools-react/feedback-loading"
					component={LoadingFeedback}
				/>
				<Route
					exact
					path="/usf-driver-tools-react/barcode-generator"
					component={BarcodeGenerator}
				/>
				<Redirect to="/usf-driver-tools-react/announcements" />
			</Switch>
		</div>
	);
}

export default App;
