import { themes } from "@storybook/theming";
import { addons } from "@storybook/addons";

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: "rFactor 2 Overlay",
    brandUrl: "https://ninja-labs.co.uk",
    brandImage: "https://ninja-labs.co.uk/img/logo-white-small.png",
  },
});
