import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state= {term:''};
    }

    render(){
//        return (<input type="text" value={this.state.term} onChange={this.onInputChange.bind(this)} />);
        return (<input type="text" value={this.state.term} onChange= {event => this.onInputChange(event.target.value) } />);
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;
