module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre'
  })
  return config
}
