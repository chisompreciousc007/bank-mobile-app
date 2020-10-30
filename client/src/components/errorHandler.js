import React, { Component } from "react";
import { useHistory } from "react-router-dom";
class ErrorHandler extends Component {
  state = { errorOccurred: false, errorMessage: "" };
  componentDidCatch(error, info) {
    this.setState({ errorOccurred: true, errorMessage: error });
    console.log(error, info);
  }

  render() {
    if (this.state.errorOccurred) {
      return useHistory().push("/login");
      // <h1>
      //   Something went wrong. Go to <a href="/login">Login</a> page
      // </h1>
    } else {
      return this.props.children;
    }
  }
}

export default ErrorHandler;
