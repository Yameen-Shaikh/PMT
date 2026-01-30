import React, { createContext, Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import axios from "axios";
var Context = createContext();
class SessionProvider extends Component {
	constructor(props) {
		super(props);
		let sessionObj = localStorage.getItem("session");
		if (sessionObj) {
			let decodedObj = {};
			decodedObj = JSON.parse(sessionObj);
			this.state = {
				loggedIn: !!decodedObj.token.length,
				token: decodedObj.token
			};
			this.saveToken();
		} else
			this.state = {
				loggedIn: false,
				token: ""
			};
		axios.interceptors.request.use(config => {
			config.headers.AUTH = this.state.token;
			return config;
		});
		axios.interceptors.response.use(response => {
			if (response.error === 2) console.log("/login");
			return response;
		});
	}
	setToken = token => {
		if (token && token.length) {
			this.setState(
				{
					loggedIn: true,
					token
				},
				() => this.saveToken()
			);
		}
	};
	saveToken = () => {
		localStorage.setItem(
			"session",
			JSON.stringify({
				token: this.state.token
			})
		);
	};
	changeLoginState = value => {
		return new Promise(resolve => {
			this.setState(
				{
					loggedIn: value
				},
				resolve
			);
		});
	};
	invalidLogin = () => {
		return <Redirect to="/login" />;
	};
	render() {
		return (
			<Context.Provider
				value={{
					loggedIn: this.state.loggedIn,
					changeLoginState: this.changeLoginState,
					invalidLogin: this.invalidLogin,
					setToken: this.setToken
				}}
			>
				{this.props.children}
			</Context.Provider>
		);
	}
}
SessionProvider = withRouter(SessionProvider);
export { SessionProvider, Context };
