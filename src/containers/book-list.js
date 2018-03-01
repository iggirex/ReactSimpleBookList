import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title} </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// mapStateToProps is what connects React to Redux
// whenever application state changes, this 
// container (BookList) will rerender
function mapStateToProps(state) {
    // Whatever is returned will show up as props insed BookList
    return {
        books: state.books
    };
}

// HERE WE USE CONNECT FUNCTION WE IMPORTED
// connect is what says "take this component, take this 
// mapStateToProps" and RETURN A CONTAINER
// whenever we make a container we don't want to export 
// BookList class,
// we want to export the container
export default connect(mapStateToProps)(BookList);
// connect takes a function and a component and
// produces a container
// container => a component that is aware of the state that is
// contained by redux

// MapStateToProps => returns an object which is available as
// this.state.props