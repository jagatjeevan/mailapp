import React from "react";
import ReactDOM from "react-dom";

import "../scss/styles.scss";

export default class App extends React.Component {
  render() {
    return(
      <div>hello</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
