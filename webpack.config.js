module.exports={
  entry: './app/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias:{
      About: 'app/components/About.js',
      Examples: 'app/components/Examples.js',
      Main: 'app/components/Main.js',
      Nav: 'app/components/Nav.js',
      Weather: 'app/components/Weather.js',
      WeatherForm: 'app/components/WeatherForm.js',
      WeatherMessage: 'app/components/WeatherMessage.js',
      openweathermap: 'app/api/openweathermap.js'
    }
  },
  module:{
    loaders: [
      {
        loader: 'babel-loader',
        query:{
          presets: ['es2015', 'react']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
}
