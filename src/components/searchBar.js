import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state= {term:''};
    }

    render(){
//        return (<input type="text" value={this.state.term} onChange={this.onInputChange.bind(this)} />);
        return (<input type="text" value={this.state.term} onChange={(event) => this.setState({ term: event.target.value})  } />);
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({ term: event.target.value});
    }

}

export default SearchBar;
