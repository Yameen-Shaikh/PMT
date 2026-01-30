import React, { Component } from "react";
import axios from "axios";
import Project from "./Project/Project";
let CancelToken = axios.CancelToken;
let source;
export default class Projects extends Component {
	state = {
		projects: [],
		loading: true
	};
	componentWillUnmount() {
		source.cancel("operation cancelled by the user");
	}
	fetch = () => {
		this.setState({ loading: true });
		source = CancelToken.source();
		axios
			.post("/list_projects", {}, { cancelToken: source.token })
			.then(({ data: { projects } }) => {
				this.setState({ projects, loading: false });
			})
			.catch(err => {
				if (axios.isCancel(err)) console.log(err.message);
				else console.error(err);
			});
	};
	componentWillMount() {
		this.fetch();
	}
	render() {
		let projects = this.state.projects.map(project => {
			return <Project {...project} key={project._id} />;
		});
		return <div className="projects">{projects}</div>;
	}
}
