var screenerConfig = require('./screener.config');

//If you would like to run on Edge or Safari, you need to have a Sauce Labs account
  screenerConfig.browsers = [
    {
      browserName: 'microsoftedge',
      version: '17.17134'
    },
    {
      browserName: 'safari',
      version: '11.1'
    },
    {
      browserName: 'chrome',
      version: '74.0'   //currently, if you exclude the version on chrome and ff, it will run on Screener cloud.
      //including the version will run tests on Sauce Labs cloud
    },
    {
      browserName: 'firefox',
      version: '78.0'
    },
    {
      browserName: 'internet explorer',
      version: '11'
    }
  ];
  screenerConfig.sauce = {
      username: process.env.SAUCE_USERNAME,
      accessKey: process.env.SAUCE_ACCESS_KEY,
      maxConcurrent: 100, // optional available concurrency you have from Sauce Labs
      //extendedDebugging: true, // optional
      //tunnelIdentifier: 'MyTunnel01' // optional
      
    };

  module.exports = screenerConfig;