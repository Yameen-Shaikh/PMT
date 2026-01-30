import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Context } from "../context/SessionContext";
export default class ProtectedRoute extends Component {
	static contextType = Context;
	render() {
		if (this.context.loggedIn) return <Route {...this.props} />;
		else {
			return this.context.invalidLogin();
		}
	}
}
