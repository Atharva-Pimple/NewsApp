import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API_KEY;
  
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          {console.log(this.apiKey)}
          <Routes>
            <Route exact path="/science" element={<News key="sc" category="science" apiKey={this.apiKey}/>} />
            <Route exact path="/business" element={<News key="b" category="business" apiKey={this.apiKey}/>} />
            <Route exact path="/entertainment" element={<News key="e" category="entertainment" apiKey={this.apiKey}/>} />
            <Route exact path="/health" element={<News key="h" category="health" apiKey={this.apiKey}/>} />
            <Route exact path="/sports" element={<News key="sp" category="sports" apiKey={this.apiKey}/>} />
            <Route exact path="/technology" element={<News key="t" category="technology" apiKey={this.apiKey}/>} />
            <Route exact path="/" element={<News key="g" category="general" apiKey={this.apiKey}/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}
