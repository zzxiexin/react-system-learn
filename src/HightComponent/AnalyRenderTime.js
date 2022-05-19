import React, { Profiler } from "react";
function renderTimeCalc(WrappedComponent, id, callback) {
  class CalcRenderTime extends React.Component {
    render() {
      return (
        <Profiler id={id} onRender={(...args) => callback(...args)}>
          <WrappedComponent />
        </Profiler>
      );
    }
  }
  return CalcRenderTime;
}
export default renderTimeCalc;
