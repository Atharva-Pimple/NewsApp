import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API_KEY;
  state={
    progress:0,
  }

  setProgress=(prog)=>{
    this.setState({progress:prog});
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar color="#ff0a1f" progress={this.state.progress}/>
          <Navbar />
          <Routes>
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="sc" category="science" apiKey={this.apiKey}/>} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="b" category="business" apiKey={this.apiKey}/>} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="e" category="entertainment" apiKey={this.apiKey}/>} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="h" category="health" apiKey={this.apiKey}/>} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sp" category="sports" apiKey={this.apiKey}/>} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="t" category="technology" apiKey={this.apiKey}/>} />
            <Route exact path="/" element={<News setProgress={this.setProgress} key="g" category="general" apiKey={this.apiKey}/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}
