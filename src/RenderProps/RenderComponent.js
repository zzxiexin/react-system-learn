import React from "react";
export default class RenderComponent extends React.Component {
  render() {
    const { type } = this.props;
    return <div style={{ background: "#000", color: "#fff" }}>{type}</div>;
  }
}
