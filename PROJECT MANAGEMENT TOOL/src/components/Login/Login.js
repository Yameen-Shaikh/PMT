import React, { Component } from "react";
import { CustomInput, Button } from "../library";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import { Context } from "../context/SessionContext";
let CancelToken = axios.CancelToken;
let source;
export default class Login extends Component {
	static contextType = Context;
	state = {
		username: "",
		password: "",
		error: false,
		loading: false
	};
	componentDidMount() {
		source = CancelToken.source();
	}
	componentWillUnmount() {
		source.cancel("Operation cancelled by user");
	}
	changeWatcher = field => value => {
		this.setState({
			[field]: value,
			error: false
		});
	};
	submit = e => {
		e && e.preventDefault();
		this.setState({
			loading: true
		});
		source = CancelToken.source();
		axios
			.post(
				"login",
				{
					username: this.state.username,
					password: this.state.password
				},
				{ cancelToken: source.token }
			)
			.then(({ data }) => {
				if (data.error)
					this.setState({
						loading: false,
						error: true
					});
				else {
					this.context.setToken(data.token);
					this.setState({
						loading: false
					});
					this.props.history.push("/");
				}
			})
			.catch(err => {
				if (axios.isCancel(err)) console.log(err.message);
				else console.log(err);
			});
	};
	render() {
		return (
			<div className="centered">
				<div className="header">Sign In</div>
				<form onSubmit={this.submit}>
					<CustomInput
						label="username"
						type="text"
						defaultValue={""}
						error={this.state.error}
						errorMessage="invalid username or password"
						triggerOnChange={true}
						watcher={this.changeWatcher("username")}
					/>

					<CustomInput
						label="password"
						type="password"
						defaultValue={""}
						error={this.state.error}
						errorMessage="invalid username or password"
						triggerOnChange={true}
						watcher={this.changeWatcher("password")}
					/>
					<div style={{ textAlign: "right" }}>
						<Button
							disabled={this.state.loading}
							size="small"
							type="submit"
							color="info"
							onClick={this.submit}
						>
							Sign in
						</Button>
					</div>
					<div
						style={{
							fontSize: "0.9em",
							marginTop: "20px",
							marginBottom: "5px"
						}}
					>
						Don't have an account ?{" "}
						<Button
							className="no-margin"
							size="smaller"
							color="info"
							variant="flat"
							onClick={() => this.props.history.push("/register")}
						>
							Sign up
						</Button>
					</div>
				</form>
			</div>
		);
	}
}
