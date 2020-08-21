import React from "react";
import { addDecorator } from "@storybook/react";

import "../src/scss/index.scss";

addDecorator((storyFn) => <div style={{ padding: "12px" }}>{storyFn()}</div>);
