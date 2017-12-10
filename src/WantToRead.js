import React from 'react';
import ListItems from './CreateListItems.js';
import PropTypes from 'prop-types';

class WantToReadBookShelf extends React.Component {
	static propTypes = {
		currentShelves: PropTypes.array.isRequired
	}
	
	defaultValue = "wantToRead";
	
	render() {
		const {	currentShelves	} = this.props;
		return (
			<div className="bookshelf"> 
			  <h2 className="bookshelf-title">Want to Read</h2>
			  <div className="bookshelf-books">
				<ol className="books-grid">
				
				{ currentShelves.filter((shelf) => shelf.shelf === this.defaultValue).map((eachShelf, index) => (
					<ListItems key={index} id={eachShelf.id} data={eachShelf} currentShelves={currentShelves}
					value={this.defaultValue}
					/>
				)) }				
							 				 
				</ol>
			  </div>
			</div> 
		)
	}
}



export default WantToReadBookShelf;