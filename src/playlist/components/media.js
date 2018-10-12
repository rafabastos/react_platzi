import React from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends React.Component {
	// constructor(props) {
	// 	super(props)
	// 	this.handleClick = this.handleClick.bind(this)
	// }
	handleClick = (event) => {
		console.log(this.props.title);
	}
	render() {
		const styles = {
			container: {
				color: '#44546b',
				cursor: 'pointer',
				width: 260,
				border: '1px solid red'
			}
		}
		return (
			<div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
					<img
						src={this.props.image}
						alt=""
						width={260}
						height={160}
						className="Media-image"
					/>
					<h3 className="Media-title">{this.props.title}</h3>
					<p className="Media-author">rafabastos</p>
				</div>
            </div>
		)
	}
}

Media.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	author: PropTypes.string,
}

export default Media;