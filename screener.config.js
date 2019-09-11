var Steps = require('screener-runner/src/steps');
module.exports = {
    // full repository name for your project:
    projectRepo: 'hilton-poc',
  
    // this example assumes Environment Variables listed below exist on your system:
    apiKey: process.env.SCREENER_API_KEY,
    newSessionForEachState: true, //this forces screener to run a brand new sauce labs session for each screenshot
  
    // array of UI states to capture visual snapshots of.
    // each state consists of a url and a name.
    states: [
      {
        url: 'https://www.hilton.com',
        name: 'Hilton Home Page'
      },
      {
        url: 'https://hiltonhonors3.hilton.com/en_US/hh/search/findhotels/index.htm',
        name: 'Hilton Booking Page'
      },
      {
        url: 'https://www.hilton.com/en/hotels/laxswhw-homewood-suites-los-angeles-international-airport/',
        name: 'Hilton Homewood Suites LA'
      }
      //{
        //This page has dynamic elements that only appear when they are scrolled into view
        //so we run a script to preload those elements
      //   url: 'https://www.ultimateqa.com',
      //   name: 'Ultimate QA Home Page',
      //   steps: new Steps()
      //   .executeScript('window.scrollTo(0,document.body.scrollHeight)')
      //   .wait(4000)
      //   .snapshot('Loaded')
      //   .end()
      // },
    ],
    //What are all of the browsers that we want to test against
    //In this case, they are all overriden in the screener.sauce.config
    // browsers: [
    //   {
    //     browserName: 'chrome'
    //   },
    //   {
    //     browserName: 'firefox'
    //   },
    //   {
    //     browserName: 'internet explorer',
    //     version: '11'
    //   }
    // ],
    resolutions: [
        '1024x768',
        {
            deviceName: 'iPhone X'
        },
        {
          deviceName: 'iPhone X',
          deviceOrientation: 'landscape'
        },
        {
            deviceName: 'iPhone 8 Plus'
        },
        {
          deviceName: 'iPhone 8 Plus',
          deviceOrientation: 'landscape'
        },
        {
            deviceName: 'iPhone 8'
        },
        {
          deviceName: 'iPhone 8',
          deviceOrientation: 'landscape'
      },
        {
            deviceName: 'iPhone 7 Plus'
        },
        {
          deviceName: 'iPhone 7 Plus',
          deviceOrientation: 'landscape'
      },
        {
            deviceName: 'iPhone 7',
            deviceOrientation: 'landscape'
        },
        {
          deviceName: 'iPhone 7'
      },
        {
          deviceName: 'iPad Pro'
        },
        {
          deviceName: 'iPad Pro',
          deviceOrientation: 'landscape'
        },
        {
          deviceName: 'iPad'
        },
        {
          deviceName: 'iPad',
          deviceOrientation: 'landscape'
        },
        {
          deviceName: 'Galaxy S8'
        },
        {
          deviceName: 'Nexus 10'
        }
      ]
  };