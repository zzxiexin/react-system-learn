import React from "react";
// 因为PureComponent是浅比较，所以不会比较props.words内部值是不是真的变了,只比较了空间地址
class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(",")}</div>;
  }
}

export default class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ["marklar"]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 这部分代码很糟，而且还有 bug
    this.setState((state) => ({
      words: state.words.concat(["marklar"])
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click</button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}
