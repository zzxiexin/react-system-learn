import React from "react";
export default class Component extends React.Component {
  render() {
    const { num } = this.props;
    return <div>{num}</div>;
  }
}
