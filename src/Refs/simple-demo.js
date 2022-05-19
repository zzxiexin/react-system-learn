import React from "react";
import { Input } from "antd";
const TextInput = React.forwardRef((props, ref) => (
  <div>
    <Input placeholder="Basic ref" ref={ref} maxLength={100} />
  </div>
));
export default TextInput;
