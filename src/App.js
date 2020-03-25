import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const Box = props => {
  return (
    <div style={{background:props.color}} className="hw">

    </div>
  );
}


class App extends Component{
  constructor(props) {
    super(props);
    const boxes=Array(32).fill().map(this.getRandomcolor,this);
    this.state={boxes}
    
    setInterval(() => {
      var randboxindex=Math.floor(Math.random()*this.state.boxes.length)
      const boxes = this.state.boxes.map((box, i) => {
        if (i === randboxindex) {
          return this.getRandomcolor();
        }
        
        return box;
      },200);
      this.setState({boxes});

    }, 200);
  }
  getRandomcolor(){
    return App.defaultProps.allColors[Math.floor(Math.random()*App.defaultProps.allColors.length)]
  }
  render(){
    const boxes=this.state.boxes.map((box,index)=>{
      return <Box 
      key={index}
      color={box}
      />
    })
    return (
      <div className="App">
        {boxes}
      </div>
    );
  }
}
  App.defaultProps = {
    allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
                "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
                "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
                "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
                "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
                "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
                "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
                "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
                "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
                "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
                "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
                "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
                "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
                "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
                "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
                "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
                "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
                "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
                "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
                "Yellow","YellowGreen"]
  };


export default App;
