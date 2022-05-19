import React from "react";
function highComponent(WrappedComponent, type) {
  class FinallyComponent extends React.Component {
    componentDidMount() {
      console.log(type == 1 ? "1" : "2");
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return FinallyComponent;
}

export default highComponent;
