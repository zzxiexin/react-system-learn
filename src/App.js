import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
// 错误边界案例
import ErrorBundry from "./Error_Boundaries";
import ErrorPage from "./Error_Boundaries/error-page";
// Context案例
import Context from "./Context/provider";
// Ref案例
import SimpleRef from "./Refs/simple-demo";
import MultuRef from "./Refs/multi-demo";
import highComponent from "./HightComponent";
import Component from "./HightComponent/Component";
import RenderProps from "./RenderProps";
import RenderComponent from "./RenderProps/RenderComponent";
import PureComponent from "./PureComponent";
// import "./Portals";
import renderTimeCalc from "./HightComponent/AnalyRenderTime";
import DiffKey from "./DiffKey";
const ref = React.createRef();
const multiRef = React.createRef();
const Element = highComponent(Component, 2);
const Element1 = renderTimeCalc(ErrorPage, "test", (...args) => {
  console.log("...args==", ...args);
});
const App = () => {
  return (
    <div>
      <div id="app-root"></div>
      <div id="modal-root"></div>
      <ErrorBundry>
        <ErrorPage />
      </ErrorBundry>
      <div>------context--------</div>
      <Context />
      <div>------ref--------</div>
      <SimpleRef ref={ref} />
      <Button type="primary" onClick={() => ref.current.focus()}>
        ref focus
      </Button>
      <div>------multi---ref--------</div>
      <MultuRef ref={multiRef} />
      <Button type="primary" onClick={() => multiRef.current.focus()}>
        multi ref
      </Button>
      <div>------high---component--------</div>
      <Element num={8888} />
      <div>------render---props--------</div>
      <RenderProps render={(val) => <RenderComponent {...val} />} />
      <div>------pure---component--------</div>
      <PureComponent />
      <div>------Profiler ---component--------</div>
      <Element1 num={8888} />
      <div>------Diff ---key--------</div>
      <DiffKey />
    </div>
  );
};

export default App;
