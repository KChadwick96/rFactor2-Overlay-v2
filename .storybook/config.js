import React from "react";
import { configure, addDecorator, addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";

import "../src/scss/index.scss";

addParameters({
  options: {
    theme: {
      ...themes.dark,
      brandTitle: "rFactor 2 Overlay",
      brandUrl: "https://ninja-labs.co.uk",
      brandImage: "https://ninja-labs.co.uk/img/logo-white-small.png"
    }
  }
});

addDecorator(storyFn => <div style={{ padding: "12px" }}>{storyFn()}</div>);

configure(require.context("../src", true, /\.stories\.js$/), module);
