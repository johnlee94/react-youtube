import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBIBCvUbFwhKepRdBBQImTWkEXNz9r1u90';



// Create a new component. This component should produce some HTML

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

     this.videoSearch('iiSuperWomanii');
  }

videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // this.setState({ videos: videos });
      console.log(videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    //throttling the search function so that it can be updated only once a while
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);


    return (
      <div>
        <SearchBar
          onSearchTermChange={videoSearch}
         />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Then take the component's generated HTML and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
