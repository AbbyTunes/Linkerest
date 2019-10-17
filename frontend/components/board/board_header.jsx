import React from "react";
import CreateDropdown from "./create_dropdown";
import BoardIndex from "./board_index";
import BoardIndexContainer from "./board_index_container";

class Tabs extends React.Component {
	
	render() {
		const selected = this.props.selectedTab;
		const boardHeaders = this.props.tabs.map((tab, idx) => {
			const title = tab.title;
			const isActive = idx === selected ? 'active' : '';

			return (
				<li
					key={idx}
					className={isActive}
					onClick={() => this.props.onTabChosen(idx)}>
					{title}{' '}
				</li>
			);
		});
		return (
			<ul className='dashboard-nav'>
				{ boardHeaders }
			</ul>

		);
	}
}

export default class BoardHeader extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 0
		};
		this.changeTab = this.changeTab.bind(this);
	}

	changeTab(num) {
		this.setState({ selectedTab: num });
	}

	render() {
		const { currentUser } = this.props;
		const tabs = [
			{ title: 'Board', content: <BoardIndexContainer /> },
			{ title: 'Pin', content: 'Show all your Pins' },
			{ title: 'Hardcode', content: 'Third tab here' }
		];

		const tab = tabs[this.state.selectedTab];

		return (
			<div>
				<div className="board-canvas">
					<CreateDropdown />
					<div className="myName">{currentUser.username}</div>
				</div>
				

				<div className='tab-area'>
					<Tabs selectedTab={this.state.selectedTab}
							onTabChosen={this.changeTab}
							tabs={tabs}>
					</Tabs>
					<div className='tab-content'>
						<article>
							{tab.content}
						</article>
					</div>
				</div>

			</div>
		)
	}
}
