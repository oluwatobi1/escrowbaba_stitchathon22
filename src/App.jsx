import React, { Component } from "react";
import AllRoutes from './views/routes';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Helen",
      cart: {},
      products: [],
      showMenu: true
    };
    this.routerRef = React.createRef();  }


  render() {
    return (
  
        <AllRoutes />

    )
  }
}

