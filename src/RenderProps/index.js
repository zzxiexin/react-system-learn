import React from "react";
export default class RenderProps extends React.Component {
  constructor() {
    super();
    this.state = {
      type: 1
    };
  }
  render() {
    return <div>{this.props.render(this.state)}</div>;
  }
}
