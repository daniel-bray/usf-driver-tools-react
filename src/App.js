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
				<Route exact path="/announcements" component={Announcements} />
				<Route exact path="/location-search" component={Location} />
				<Route exact path="/location-add" component={AddLocation} />
				<Route
					exact
					path="/feedback-routing"
					component={RoutingFeedback}
				/>
				<Route
					exact
					path="/feedback-loading"
					component={LoadingFeedback}
				/>
				<Route
					exact
					path="/barcode-generator"
					component={BarcodeGenerator}
				/>
				<Redirect to="/announcements" />
			</Switch>
		</div>
	);
}

export default App;
