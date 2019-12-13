import React from "react";
import BoardIndexContainer from "./board_index_container";
import CreatePinContainer from "../pin/create_pin_container";

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
		// console.log(currentUser);
		// debugger
		const tabs = [
			// { title: 'My Boards', content: <BoardIndexContainer /> },
			// { title: 'Upload Pin', content: <CreatePinContainer /> }
			// { title: 'Hardcode', content: 'Third tab here' }
		];

		const tab = tabs[this.state.selectedTab];

		return (
			<div className="board-canvas">
				<div className="board-profile">
					<div className="myName">{ currentUser.username }</div>
				</div>

				<BoardIndexContainer />

				{/* <div className='tab-area'>
					<Tabs selectedTab={this.state.selectedTab}
							onTabChosen={this.changeTab}
							tabs={tabs}>
					</Tabs>
					<div className='tab-content'>
						<article>
							{tab.content}
						</article>
					</div>
				</div> */}

			</div>
		)
	}
}
