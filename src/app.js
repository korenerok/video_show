import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import VideoDetails from './components/videoDetails';
import VideoList from './components/videoList';
import YTSearch from 'youtube-search';

const appRoot= document.getElementById('app');

const options = {
    key : 'AIzaSyDzKTY49xwdjw9jJCVrbltceYnZ08ahL0c',
    maxResults: 20
};


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={videos:[]};

        YTSearch('raspberry Pi',options,(error,videos)=>{
            if(error) console.log(error);
            console.dir(videos);
            this.setState({videos});
            //this.setState({videos:videos});
        });
    }

    render(){
        return (
        <div>
            {this.state.videos.length}
            <SearchBar />
            <VideoDetails video={this.state.videos[0]}></VideoDetails>
            <VideoList videos={this.state.videos} />
        </div>
        );

    }

}

ReactDOM.render(<App />,appRoot);