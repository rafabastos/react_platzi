import React from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends React.Component {
	state = {
		author: 'rafabastos'
	}
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		author: props.author
	// 	}
	// }
	handleClick = (event) => {
		console.log(this.props.title);
		this.setState({
			author: 'Rafael Bastos'
		})
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
						src={this.props.cover}
						alt=""
						width={240}
						height={160}
						className="Media-image"
					/>
					<h3 className="Media-title">{this.props.title}</h3>
					<p className="Media-author">{this.props.author}</p>
				</div>
            </div>
		)
	}
}

Media.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
	author: PropTypes.string,
}

export default Media;