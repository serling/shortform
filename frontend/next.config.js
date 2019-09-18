const withPlugins = require("next-compose-plugins");
const withFonts = require("next-fonts");

const nextConfig = {
  webpack: (config, options) => {
    return config;
  }
};

const fontsConfig = {
  enableSvg: true
};

const plugins = [[withFonts, fontsConfig]];

module.exports = withPlugins([...plugins], nextConfig);
