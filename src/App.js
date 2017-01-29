import React, { Component } from 'react';
import Navigation from './Navigation';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Lato|Playfair+Display" rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.2/dist/leaflet.css" />
         <script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"></script>

        <nav>
          <Navigation />
        </nav>
        <main role="main">
          {this.props.children}
        </main>
      </div>
    );
  }
}
export default App;
