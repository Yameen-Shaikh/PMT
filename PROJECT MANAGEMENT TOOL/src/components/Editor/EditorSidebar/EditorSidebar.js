import React, { Component } from "react";
import ProjectStructure from "../ProjectStructure/ProjectStructure";
import EditorSettings from "../EditorSettings/EditorSettings";
import "./EditorSidebar.css";
const TabHeader = ({ icon, tooltip, onClick, tid, current }) => {
	return (
		<li
			className={
				"editor-sidebar-tab" + (current === tid ? " active" : "")
			}
			onClick={() => onClick(tid)}
		>
			<i className={"fa fa-" + icon} />
		</li>
	);
};
const TabBody = ({ fortab, current, component }) => {
	console.log(fortab === current);
	return fortab === current ? component : null;
};

export default class EditorSidebar extends Component {
	state = {
		current: "structure",
		panelOpen: false
	};
	setTab = tid => {
		this.setState({
			current: tid
		});
	};
	toggleTabBody = () => {
		this.setState(prev => ({ panelOpen: !prev.panelOpen }));
	};

	render() {
		const HigherTabHeader = ({ ...props }) => (
			<TabHeader
				{...props}
				current={this.state.current}
				onClick={this.setTab}
			/>
		);
		const HigherTabBody = ({ ...props }) => (
			<TabBody {...props} current={this.state.current} />
		);
		return (
			<div
				className={
					"editor-sidebar" + (this.state.panelOpen ? " active" : "")
				}
			>
				<div className="sidebar-headers">
					<TabHeader
						tid="minimise"
						icon={
							this.state.panelOpen ? "arrow-left" : "arrow-right"
						}
						onClick={this.toggleTabBody}
					/>
					<HigherTabHeader tid="structure" icon="folder" />
					<HigherTabHeader tid="settings" icon="edit" />
				</div>
				<div className="sidebar-tab-body">
					<HigherTabBody
						fortab="structure"
						component={<ProjectStructure />}
					/>
					<HigherTabBody
						fortab="settings"
						component={<EditorSettings />}
					/>
				</div>
			</div>
		);
	}
}
