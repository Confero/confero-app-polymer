module.exports = {
  root: 'app',
  suites: ['test'],
   plugins: {
        sauce: {
            browsers: [
                "Windows 8.1/internet explorer",
                "Windows 8.1/chrome",
                "Windows 8.1/firefox",
                "OS X 10.10/safari"
            ]
        }
    }
};
