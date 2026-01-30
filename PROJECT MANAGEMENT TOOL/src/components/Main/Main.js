import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { SessionProvider } from "../context/SessionContext";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import Editor from "../Editor/Editor";
export default class Main extends Component {
	render() {
		return (
			<SessionProvider>
				<Switch>
					<Route path="/login" component={Login} />
					<ProtectedRoute path="/editor" component={Editor} />
					<ProtectedRoute path="/" component={Dashboard} />
				</Switch>
			</SessionProvider>
		);
	}
}
