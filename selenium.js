const cheerio = require('cheerio')
const {GoogleSpreadsheet} = require('google-spreadsheet');

// File handling package
const fs = require('fs');

// spreadsheet key is the long id in the sheets URL
const RESPONSES_SHEET_ID = '1KR-rt8oLLLAHoH0Osewci_W78WfviNbcOgCyKCKdrQY';

// Create a new document
const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);

// Credentials for the service account
const CREDENTIALS = JSON.parse(fs.readFileSync('./servicekey.json'));
const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    Key = webdriver.Key,
    WebElement = webdriver.WebElement;

var capabilities = {
    'browserName': 'Chrome',
    'browser_version': '81.0',
    'os': 'Windows',
    'os_version': '10',
    'resolution': '1024x768',
    'browserstack.user': 'hemant_u4k2qr',
    'browserstack.key': '3srwUyqhYqW3cYifzLLW',
    'name': 'Bstack-[Node] Sample Test'
}
const addRow = async (rows) => {

    // use service account creds
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    });

    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[5];

    for (let index = 0; index < rows.length; index++) {
        const row = rows[index];
        await sheet.addRow(row);
    }
};
var addDetails=[];
const driver = new webdriver.Builder()
    .forBrowser('chrome')
    //   .usingServer('http://hemant_u4k2qr:3srwUyqhYqW3cYifzLLW@hub.browserstack.com/wd/hub')
    //  .withCapabilities(capabilities)
    .build();
driver.get('https://app.ahrefs.com/user/login').then(async function () {
    //By.cssSelector
//    driver.findElement(By.xpath("//button[contains(text(),'Sign in')]")).click();
    // driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    // await driver.manage().setTimeouts({implicit:50000});
    setTimeout(async () => {
        await driver.findElement(By.name("email")).sendKeys('jignesh@freshcodes.in')
        await driver.findElement(By.name("password")).sendKeys('jP@9974046560', Key.ENTER);
        setTimeout(async () => {
            // await driver.manage().setTimeouts({implicit:10000});
            await driver.get('https://app.ahrefs.com/keywords-explorer').then(async function () {
                driver.getTitle().then(async function (title) {
                    console.log(title)
                    setTimeout(async () => {
                        //  await driver.manage().setTimeouts({implicit:10000});
                        await driver.findElement(By.css('textarea')).sendKeys('concrete contractors,polished concrete floors', Key.ENTER).then(async function () {
                            setTimeout(async () => {
                                //  await driver.manage().setTimeouts({implicit:10000});
                                driver.findElement(By.xpath("//a/span[contains(text(),'Matching terms')]")).click().then(async function () {
                                    // setTimeout(async () => {
                                    //     console.log("Delayed for 10 second get keywords.");
                                    //     driver.findElement(By.xpath('//table/tbody/tr')).getAttribute('innerHTML').then(function(info) {
                                    //         console.log(info);
                                    //     });
                                    // })
                                    setTimeout(async () => {
                                        driver.getTitle().then(async function (title) {
                                            console.log(title)
                                            // for (table in driver.findElement(By.xpath('//table'))){
                                            //    table.fin
                                            //      var info=new Array<WebElement> driver.findElement(By.xpath('//table'));
                                            //  console.log(info);
                                            // }
                                            // driver.findElement(By.xpath('//table')).getText().then(function (info) {
                                            //     console.log(info);
                                            //
                                            // })
                                            await driver
                                                .findElements(By.xpath('//table/tbody'))
                                                .then((rows) => {
                                                    for (var i = 0; i < rows.length; i++) {
                                                        rows[i]
                                                            .findElement(By.tagName('tr'))
                                                            .getAttribute('innerHTML')
                                                            .then((txt) => {
                                                                const result = cheerio.load('<body><table><tr>'+txt+'</tr></table></body>')
                                                              //  console.log(txt);
                                                           //    const keyword_title = driver.findElement(By.xpath('//table')).getText().then(function (info) {
                                                               const keyword_title = result("td.resultsTable-keyword div div a div span span").text();
                                                                console.log(keyword_title);
                                                                const keyword_d = result("td.resultsTable-difficulty div div").text();
                                                                console.log(keyword_d);
                                                                const keyword_volume = result("td.resultsTable-volume").text();
                                                                console.log(keyword_volume);
                                                                const keyword_globalVolume = result("td.resultsTable-globalVolume").text();
                                                                console.log(keyword_globalVolume);
                                                                const keyword_tp = result("td.resultsTable-trafficPotential").text();
                                                                console.log(keyword_tp);
                                                                const resultsTable_cpc = result("td.resultsTable-cpc div").text();
                                                                console.log(resultsTable_cpc);
                                                                const resultsTable_cps = result("td.resultsTable-cps div").text();
                                                                console.log(resultsTable_cps);
                                                                const resultsTable_serpFeatures = result("td.resultsTable-serpFeatures div div div div div div").text();
                                                                console.log(resultsTable_serpFeatures);
                                                                var keywordResult = {
                                                                    'keyword': keyword_title,
                                                                    'KD': keyword_d,
                                                                    'Volume': keyword_volume,
                                                                    'GV': keyword_globalVolume,
                                                                    'TP': keyword_tp,
                                                                    'CPC': resultsTable_cpc,
                                                                    'CPS': resultsTable_cps,
                                                                    'SF': resultsTable_serpFeatures,
                                                                }
                                                                addDetails.push(keywordResult);
                                                            });
                                                    }
                                                    addRow(addDetails, doc);
                                                });
                                        });
                                    }, "10000")
                                });
                                //   });
                            }, "5000")
                        })

                    }, "5000")
                })
            });
        }, "5000")
    }, "5000")
});


//driver.quit();
// username.send_keys('USERNAME_SEMRUSH')
// password.send_keys('MyUlt1m@t3N3v3rT0H@ckPa$$$$$W0rd')
//password.sendKeys(driver.Key.ENTER);
// await driver.findElement(webdriver.By.name('email')).sendKeys('jignesh@freshcodes.in')
//  await driver.findElement(webdriver.By.name('password')).sendKeys('jP@9974046560').send_keys(Keys.ENTER)
//.then(function(){
// driver.getTitle().then(function(title) {
//     console.log(title)
//     if(title === 'Ahrefs user login') {
//         console.log('Test passed');
//     } else {
//         console.log('Test failed');
//     }
//     driver.quit();
// });
//  });
// const webdriver = require('selenium-webdriver'),
//     By = webdriver.By,
//     until = webdriver.until;
// var capabilities = {
//     'browserName' : 'Chrome',
//     'browser_version' : '81.0',
//     'os' : 'Windows',
//     'os_version' : '10',
//     'resolution' : '1024x768',
//     'browserstack.user' : 'chaitalisheth_pvuc2X',
//     'browserstack.key' : 'ygXsEJeELyEk3ry4wH9u',
//     'name' : 'Bstack-[Node] Sample Test'
// }
// var driver = new webdriver.Builder().
// usingServer('http://chaitalisheth_pvuc2X:ygXsEJeELyEk3ry4wH9u@hub.browserstack.com/wd/hub').
// withCapabilities(capabilities).
// build();
// driver.get('https://app.ahrefs.com/user/login').then(function(){
//     driver.findElement(webdriver.By.id('q')).sendKeys('webdriver').then(function(){
//         driver.getTitle().then(function(title) {
//             console.log(title);
//             if(title === 'Google')
//             {
//                 console.log('Test passed');
//             } else {
//                 console.log('Test failed');
//             }
//             driver.quit();
//         });
//     });
// });
