import React from 'react';
import { Link } from 'react-router-dom';

const BoardIndexItem = ({ board }) => {

	return (
		<div>
			<Link to={`/my-boards/${board.id}`}>
				
				<div className="board-outer">

					<img src={board.photo} />

					<div className="board-info">

						<div className="board-option">
							<div className="board-title">{board.title}</div>
							<div className="edit-button"></div>
						</div>

					</div>

				</div>
			</Link>
		</div>
	)
};

export default BoardIndexItem;

{/* <img src={board.photo} /> */}
