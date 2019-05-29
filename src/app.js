import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import VideoDetails from './components/videoDetails';
import VideoList from './components/videoList';
import YTSearch from 'youtube-search';
import api_key from './api_key';

const appRoot= document.getElementById('app');

const options = {
    key:api_key,
    maxResults: 20
};


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={videos:[],active:null};

        
    }

    searchVideo(term){
        YTSearch(term,options,(error,videos)=>{
            if(error) console.log(error);
            console.dir(videos);
            this.setState({videos});      //equiv to  ==> this.setState({videos:videos});
            this.setState({active:videos[0]});
        });
    }


    render(){
        const searchVideo=_.debounce((term) => {this.searchVideo(term)},400);
        return (
        <div>
            {this.state.videos.length}
            <SearchBar onSearchTermChange={searchVideo} />
            <VideoDetails video={this.state.active}></VideoDetails>
            <VideoList videos={this.state.videos} />
        </div>
        );

    }

}

ReactDOM.render(<App />,appRoot);
