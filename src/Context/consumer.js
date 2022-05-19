import React from "react";
import { ThemeContext } from "./constant";
import { Button } from "antd";
const Consumer = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => {
        console.log(theme, toggleTheme);
        return (
          <div>
            <div
              style={{
                background: theme.background,
                color: theme.color,
                width: 200,
                height: 50
              }}
            >
              context
            </div>
            <Button type="primary" onClick={toggleTheme}>
              click
            </Button>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};
const ChildComponent = () => {
  return <Consumer />;
};

export default ChildComponent;
