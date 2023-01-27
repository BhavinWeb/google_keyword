// // const cheerio = require("cheerio");
// //
// // const fs = require('fs');
// //
// // const webdriver = require('selenium-webdriver'),
// //     By = webdriver.By,
// //     until = webdriver.until,
// //     Key = webdriver.Key,
// //     WebElement = webdriver.WebElement;
// // const {suite} = require("selenium-webdriver/testing");
// // suite
// //
// // var capabilities = {
// //     'browserName': 'Chrome',
// //     'browser_version': '81.0',
// //     'os': 'Windows',
// //     'os_version': '10',
// //     'resolution': '1024x768',
// //     'browserstack.user': 'hemant_u4k2qr',
// //     'browserstack.key': '3srwUyqhYqW3cYifzLLW',
// //     'name': 'Bstack-[Node] Sample Test',
// //     'geoLocation': "US"
// //
// // }
// //
// // const driver = await new webdriver.Builder().forBrowser('chrome').build();
// // //
// // // const driver = new webdriver.Builder()
// // //     .forBrowser('chrome')
// // //     //   .usingServer('http://hemant_u4k2qr:3srwUyqhYqW3cYifzLLW@hub.browserstack.com/wd/hub')
// // //     //  .withCapabilities(capabilities)
// // //     .build();
// // //
// // // driver.executeScript("setGeolocationOverride", {
// // //     "latitude": 42.1408845,
// // //     "longitude": -72.5033907,
// // //     "accuracy": 1
// // // })
// //
// // const Scrapper = async (req, res, next) => {
// //     await driver.get("https://google.com/").then(async () => {
// //         setTimeout(async () => {
// //             await driver.findElement(By.css(".icon-geolocate")).click();
// //         }, 5000)
// //     })
// // }
// //
// // //
// // // const Scrapper = async (req, res, next) => {
// // //     console.log(req.body);
// // //     var key = req.body.keyword.replaceAll(" ", "+").toLowerCase();
// // //     var location = req.body.location.replaceAll(" ", "+");
// // //
// // //
// // //     driver.get('https://www.yelp.com/').then(async function () {
// // //
// // //         await driver.findElement(By.name("find_desc")).sendKeys("concrete contractors");
// // //         await driver.findElement(By.id("search_location")).sendKeys("Huntsville, Alabama", Key.ENTER);
// // //         // await driver.findElement(By.className("css-dew2bp")).click();
// // //         setTimeout(async () => {
// // //             await driver.get(`https://www.yelp.com/search?find_desc=${key}&find_loc=${location}`).then(async function () {
// // //                 driver.getTitle().then(async function (title) {
// // //
// // //                     console.log('page Title', title);
// // //
// // //                     var titleTrackElement = await driver.findElement(By.className("css-agyoef"))
// // //
// // //                     var titleTrack = titleTrackElement.getText();
// // //                     console.log("titleTrack: ", titleTrack);
// // //
// // //                     var parentNode = titleTrackElement.findElement(By.xpath("./../.."));
// // //                     console.log("parentTitle: ", parentNode);
// // //
// // //                     await driver.findElements(By.css("ul>li")).then(async function(elems) {
// // //                         console.log('elems:', elems);
// // //                         console.log('elems Data:', elems[1]);
// // //                         // await elems[1].then(async function (elem) {
// // //                             var elTitle = await elems[1].findElement(By.css("css-1agk4wl a.css-1m051bw>span")).getText();
// // //                             console.log('el Text: ', elTitle);
// // //                         // });
// // //                     });
// // //
// // //                 });
// // //             });
// // //         }, 5000);
// // //
// // //     });
// // //
// // //     // driver.get('https://www.yelp.com/search?find_desc=' + req.body.keyword + '&find_loc=' + req.body.location).then(async function () {
// // //     //
// // //     // });
// // //
// // //
// // //     // await db.collection('users').doc(email).collection('my_drive').doc(fileId).set(
// // //     return res.status(200).json({
// // //         status: 1,
// // //         data: {
// // //             "scrapped Data" : "All the Best"
// // //         }
// // //     });
// // // }
// // //
// // //
// // module.exports = {Scrapper};
//
// const { By, Key } = require('selenium-webdriver');
// const { suite } = require('selenium-webdriver/testing');
// const assert = require("assert");
//
// const Scrapper = async (req, res, next) => {
//     driver = await env.builder().build();
//
//     const cdpConnection = await driver.createCDPConnection('page');
//
//     // Latitude and longitude of Tokyo, Japan
//     const coordinates = {
//         latitude: 35.689487,
//         longitude: 139.691706,
//         accuracy: 100,
//     };
//
//     await cdpConnection.execute(
//         "Emulation.setGeolocationOverride",
//         coordinates
//     );
//     await driver.get("https://www.google.com");
// }
//
//
//
// module.exports = {Scrapper}