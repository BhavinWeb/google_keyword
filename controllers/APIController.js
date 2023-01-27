const path = require("path");
const reader = require("xlsx");
const csvf = require("fast-csv");
const cheerio = require("cheerio");
const email_id = "jignesh@freshcodes.in"; 
const password_ = "jP@9974046560"; 
const fs = require("fs");
const { GoogleAdsApi, services, ResourceNames } = require("google-ads-api");
const client = new GoogleAdsApi({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  developer_token: process.env.DEVELOPMENT_TOKEN,
});
const webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  Key = webdriver.Key;
const csv = require("csvtojson");
const csvFilePath = "https://google-keyword.vercel.app/csv/geotargets.csv";
require("dotenv").config();
const { google } = require("googleapis");
var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const admin = require("firebase-admin");
var serviceAccount = require("../FHKeyfile.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://aaron-keyword-planner.firebaseio.com",
  // databaseURL: "https://fine-loader-369308.firebaseio.com"
});
const db = admin.firestore();

// Google sheet npm package
const { GoogleSpreadsheet } = require("google-spreadsheet");
const { Console } = require("console");

// spreadsheet key is the long id in the sheets URL

// Credentials for the service account

var firbase_data = {
  "type": "service_account",
  "project_id": "fine-loader-369308",
  "private_key_id": "62f6e2ac91208178c1b25525a91ee13473237501",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDEKgsg/Uzfy88T\nqprUv1sffxFo/Hp2FKsv6T/og+r5xAuhLjpeJ6zA4k1M/AjyFtziOj8vHBS70Jap\nt+L8AMhn+YJz/jZmcS+U35p3YZzhpS9GgKydWJepX/Rs2Dvwad06/AbDr/QC1hTu\nM3biHbIUqifFMQ2yHlJ0tkghCfErEThGhFUELQfc1bRPE+q1J5bvxdS/pr7p8pjT\nXWBJ/x8I5A2dnb8cSVTcrW6116r7q3/C5lyBKb4/qXugFz5imxWn4YYBbHtlUg85\nP80TKHoz4FjMYFKEXm6MZbOIG0hzldOsNaoHr8/wN0teLb7L1ITR/2fmyG6Kof1Z\n6vN6Mc8nAgMBAAECggEAIFmN+p5F57Ws4Yw7OsY7Pk9ObTcPRlreklOlMkX9txFB\nbmQjxF7xn+DnfkB62dsIXpcxeqY8YG7OnJA9SBwkRfVWsfn55Fyvy/LbfpWOnC20\nGqyMtZQkdWO5ePETYsXqnILEkM/7GIlP6//OZWLKo/AdspOGM9oen1hnk79CfOdG\nGmDYnlXXE3YbAqvjSdYZw6jR7pjpS/HFhi3MO1JPW+Ti7ioCCQJldmNOqHKQrJCx\nuq1gMnyTNoqot5jPMQhOLFpVqVzvIURyyP7W38WMk3OVb0ghzPHTHa1ixykqWVFk\nRwQjNs0J81dbFzsq6rXRdGnSwPs9XoDrOn7QNuxfPQKBgQDyuk5yAVxiqwagIKfY\nehbpW5bZA5EiChGdPjl5nkHOK+dwZVIntIqZITVh3gpR8U4IhdFgustSH0Okqhsi\nGGpzWX+ETFRH7/JT3REeCSjE0VeZYGOpyhk5un6V2HKnYnJPnoPr8uYuh5HDmFcQ\n3hn5xQPaDmTIwjMFRYTwl8SrAwKBgQDO4/FQeVXhUM9tSZTHB1IT/kL5/uZhY6U1\n5mSne/Z6oSwoOyCVdWbmgeN1plnqo3JCb72ym0TJ8C7XYpdBHT+ynVNtYbQwU7y7\nWHr5Jcn2pi7cLjHzqoACuQ898zbJnV59M87U/dFKhIGsraUDXmpranNyhgcEX434\nHwZcMFxgDQKBgHXvphvoo13hoXd+Rm99atJ5yQKqpAL5B3PyfvSju2+Uj4BiCpf2\nNf2PUCO8QiFscLDdbE1mlVHSlQhWCpb3bAmd68J5X94QLRsoZ5/DbYar/LcuSV5/\nLuCIx+bA43yG7enXqFulisgC4QU7aNpuQArG+kciBUAyc53VGHHaHBnHAoGBAMn4\n1vzz5vYWeNk9CwQdzm/8OZBq2qdaqs9qwvqKVv4yV7RSvKWLvk/rn42cP42D0Kix\nA2TYlZf6ZRAZjIWhsyyA0BApYMoJBWdzomGWFYs3gumqI1O4ME34MbwNsn+ypKrf\np9xgiTARGbLktgIK6yNAAcJcu372ddczGndnMtcFAoGAKY4QY/U4h7ZMkCV4JqPI\nmun1M589ZylyDXu4/uAKfwlePiZBk7/5WLwCpFAksU8Tb2epaNEmB0JHxYYWitAj\nyyIUARxgzNL7Oqc4ujBiJDLR0/TaOOSrqOjE1o0FPfD6eJM90LE74RnfsTwywS3a\nyyIkgIevvuwwXtbSwK+QSNo=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-lc4ta@fine-loader-369308.iam.gserviceaccount.com",
  "client_id": "112681331562585502819",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-lc4ta%40fine-loader-369308.iam.gserviceaccount.com"
}
const CREDENTIALS = firbase_data;

const doLogin = async (req, res, next) => {
  try {
    var isLogin = false;
    var username = req.body.username;
    var password = req.body.password;

    var uname = username.toLowerCase();

    const userRef = await db
      .collection("admin-users")
      .where("username", "==", username)
      .where("password", "==", password)
      .get();

    if (userRef.empty) {
      return res
        .status(200)
        .json({
          status: 0,
          isLogin: isLogin,
          message: "Credentials Not Match.",
          data: {},
        });
    }

    var users = userRef.docs.map((doc) => doc.data());
    var user = users[0];

    if (user.username.toLowerCase() === uname) isLogin = true;

    return res
      .status(200)
      .json({
        status: 1,
        isLogin: isLogin,
        message: "Login Successfully",
        data: user,
      });
  } catch (e) {
    console.log("error", e);

    return res.status(200).json({ status: 0, error: e });
  }
};

const getAccountDetails = async (req, res, next) => {
  try {
    const refreshToken = req.body.refresh_token;
    const email = req.body.email;
    const CheckExistAccountDetails = await db
      .collection("users")
      .doc(email)
      .collection("account_list")
      .get();

    if (CheckExistAccountDetails.docs.length < 0) {
      console.log("No such document!");

      let main = await client.listAccessibleCustomers(refreshToken);
      console.log(main.resource_names);
      //getResourceNames
      var array = [];
      //main.resource_names.forEach(async resource_names => {
      for (var i = 0; i < main.resource_names.length; i++) {
        let mainId = main.resource_names[i].split("/").pop();

        try {
          let mcc = client.Customer({
            customer_id: mainId,
            refresh_token: refreshToken,
            login_customer_id: mainId,
            //  linked_customer_id:'2209324103'
          });

          let clusterClients = await mcc.report({
            entity: "customer_client",
            attributes: [
              "customer_client.id",
              "customer_client.resource_name",
              "customer_client.descriptive_name",
            ],
          });
          //  console.log(clusterClients);
          for (var j = 0; j < clusterClients.length; j++) {
            array.push(clusterClients[j].customer_client);
            console.log(clusterClients[j].customer_client.id);
            await db
              .collection("users")
              .doc(email)
              .collection("account_list")
              .doc(clusterClients[j].customer_client.id.toString())
              .set(clusterClients[j].customer_client, { merge: true })
              .then(() => {
                console.log("add account ");
              })
              .catch((error) => {
                console.log("error account: ", error);
              });
          }
        } catch (e) {
          console.log("error"); ///, e);
        }
        //
        //  });
        //    array.push({customer_id:mainId})
      }
    } else {
      var result = CheckExistAccountDetails.docs.map((e) => e.data());
      console.log("Document data:", result);
      array = result;
    }

    return res.status(200).json({ status: 1, data: array });
  } catch (e) {
    console.log("error", e);
    return res.status(200).json({ status: 0, error: e });
  }
};
const GetGeoTargetLocationList = async (req, res, next) => {
  const jsonArray = await csv().fromFile(csvFilePath);
  const unique = [...new Set(jsonArray.map((item) => item.country_code))];
  // return res.status(200).json({status: 1, data: unique});
  console.log(req.body);
  let filter = jsonArray
    .filter((obj) => obj.canonical_name.includes(req.body.country))
    .map((obj) => obj);

  var result = paginator(filter, 1, 1000);
  if (req.body.city !== undefined) {
    let filter1 = filter
      .filter((obj) => obj.country_code.toUpperCase().includes("US"))
      .map((obj) => obj);
    console.log(filter1.length);
    return res.status(200).json({ status: 1, data: filter1 });
  } else {
    return res.status(200).json({ status: 1, data: result.data });
  }
};

const getUsCities = async (req, res, next) => {
  try {
    const jsonArray = await csv().fromFile(csvFilePath);

    let cities = jsonArray
      .filter(
        (obj) =>
          obj.country_code.toUpperCase().includes("US") &&
          obj.target_type === "City"
      )
      .map((obj) => ({
        name: obj.name,
        locationId: obj.criteria_id,
        location: obj.canonical_name,
      }));

    return res.status(200).json({ status: 1, data: cities });
  } catch (e) {
    console.log(e);
    return res.status(200).json({ status: 0, error: e });
  }
};

const getCountryList = async (req, res, next) => {
  try {
    const countries = await db.collection("countries").get();
    console.log(countries);

    var list = countries.docs.map((e) => e.data());

    return res.status(200).json({ status: 1, data: list });
  } catch (e) {
    console.log("Error ", e);
    return res.status(200).json({ status: 0, error: e });
  }
};

const getProvinceList = async (req, res, next) => {
  console.log(req.body);
  try {
    const states = await db
      .collection("countries")
      .doc(req.body.country_id)
      .collection("states")
      .get();
    console.log(states);

    var list = states.docs.map((e) => e.data());

    return res.status(200).json({ status: 1, data: list });
  } catch (e) {
    console.log("Error ", e);
    return res.status(200).json({ status: 0, error: e });
  }
};

const getCityList = async (req, res, next) => {
  console.log(req.body);
  try {
    const cities = await db
      .collection("countries")
      .doc(req.body.country_id)
      .collection("states")
      .doc(req.body.state_id)
      .collection("cities")
      .where("target_type", "==", "City")
      .get();
    console.log(cities);

    var list = cities.docs.map((e) => e.data());

    return res.status(200).json({ status: 1, data: list });
  } catch (e) {
    console.log("Error ", e);
    return res.status(200).json({ status: 0, error: e });
  }
};
const GetGeoTargetRegions = async (req, res, next) => {
  try {
    const jsonArray = await csv().fromFile(csvFilePath);
    const unique = [...new Set(jsonArray.map((item) => item.country_code))];

    const countries = await jsonArray
      .filter(
        (obj) => obj.target_type === "Country" && obj.country_code === "US"
      )
      .map((obj) => obj);

    console.log("countries : ", countries);

    for (let i = 0; i < countries.length; i++) {
      let country_id = countries[i].criteria_id;

      try {
        await db
          .collection("countries")
          .doc(country_id)
          .set(countries[i])
          .then(() => {
            console.log("Add Country ");
          })
          .catch((error) => {
            console.log("Error Country: ", error);
          });
        console.log(countries[i]);

        const states = await jsonArray
          .filter(
            (objCountry) =>
              objCountry.country_code === countries[i].country_code &&
              objCountry.parent_id === country_id
          )
          .map((obj) => obj);

        console.log(countries[i].name, states);

        for (let j = 0; j < states.length; j++) {
          let currentState = states[j];
          currentState.countryId = country_id;

          console.log("current State : ", currentState);

          const docRef = db
            .collection("countries")
            .doc(country_id)
            .collection("states")
            .doc(states[j].criteria_id);

          await docRef
            .set(currentState)
            .then(() => {
              console.log("Add States ", currentState);
            })
            .catch((error) => {
              console.log("Error States: ", error);
            });

          const cities = await jsonArray
            .filter(
              (objStates) =>
                objStates.parent_id === currentState.criteria_id &&
                objStates.country_code === countries[i].country_code
            )
            .map((obj) => obj);

          for (let k = 0; k < cities.length; k++) {
            let currentCity = cities[k];
            currentCity.countryId = country_id;
            currentCity.stateId = currentState.criteria_id;

            await db
              .collection("countries")
              .doc(country_id)
              .collection("states")
              .doc(states[j].criteria_id)
              .collection("cities")
              .doc(cities[k].criteria_id)
              .set(currentCity)
              .then(() => {
                console.log("Add City ", currentCity);
              })
              .catch((error) => {
                console.log("Error City: ", currentCity.name, error);
              });
          }
        }
      } catch (e) {
        console.log("error ", e);
        return res.status(200).json({ status: 0, error: e });
      }
    }

    // return res.status(200).json({status: 1, data: jsonArray});
    // console.log(req.body);
    // {
    //     "criteria_id": "1000002",
    //     "name": "Kabul",
    //     "canonical_name": "Kabul,Kabul,Afghanistan",
    //     "parent_id": "9075393",
    //     "country_code": "AF",
    //     "target_type": "City",
    //     "status": "Active"
    // },
    // {
    //     "criteria_id": "2004",
    //     "name": "Afghanistan",
    //     "canonical_name": "Afghanistan",
    //     "parent_id": "",
    //     "country_code": "AF",
    //     "target_type": "Country",
    //     "status": "Active"
    // },
    // {
    //     "criteria_id": "9075386",
    //     "name": "Jowzjan",
    //     "canonical_name": "Jowzjan,Afghanistan",
    //     "parent_id": "2004",
    //     "country_code": "AF",
    //     "target_type": "Province",
    //     "status": "Active"
    // },
    // var result = paginator(filter, 1, 1000);
    // if (req.body.city !== undefined) {
    // let filter1 = filter.filter(obj => (obj.country_code.toUpperCase()).includes('US')).map(obj => (obj));
    // console.log(filter1.length);

    // console.log(filter1);

    var aData = [];

    await unique.forEach(async (item) => {
      let filter = await jsonArray
        .filter((obj) => obj.country_code === item)
        .map((obj) => obj);

      // const uniqueStates = [...new Set(filter.map((item) => item.country_code))];

      aData.push({ item: item, data: filter });
    });

    // try {
    //     await db.collection('locations').doc(item).set(
    //
    //     ).then(() => {
    //         console.log("add account ");
    //     }).catch((error) => {
    //         console.log("error account: ", error);
    //     });
    // } catch (e) {
    //     console.log('error ', e);
    //     return res.status(200).json({status: 0, error: e});
    // }

    return res.status(200).json({ status: 1, data: aData });
  } catch (e) {
    return res.status(200).json({ status: 0, error: e });
  }
};

const getGeoProvinces = async (req, res, next) => {
  try {
    const jsonArray = await csv().fromFile(csvFilePath);

    let states = jsonArray
      .filter(
        (obj) =>
          obj.country_code.toUpperCase().includes("US") &&
          obj.target_type === "State"
      )
      .map((obj) => ({
        name: obj.name,
        criteria_id: obj.criteria_id,
        canonical_name: obj.canonical_name,
        parent_id: obj.parent_id,
      }));

    return res.status(200).json({ status: 1, data: states });
  } catch (e) {
    console.log(e);
    return res.status(200).json({ status: 0, error: e });
  }
};

const getGeoCities = async (req, res, next) => {
  try {
    const jsonArray = await csv().fromFile(csvFilePath);

    let cities = jsonArray
      .filter(
        (obj) =>
          obj.country_code.toUpperCase() === "US" &&
          obj.parent_id === req.body.state_id &&
          obj.target_type === "City"
      )
      .map((obj) => obj);

    return res.status(200).json({ status: 1, data: cities });
  } catch (e) {
    console.log(e);
    return res.status(200).json({ status: 0, error: e });
  }
};

const getNicheList = async (req, res, next) => {
  try {
    const niches = await db.collection("niches").get();
    // console.log(niches);
    var list = niches.docs.map((e) => e.data());

    for (let i = 0; i < list.length; i++) {
      console.log(list[i].name);

      const templates = await db
        .collection("templates")
        .where("niche", "==", list[i].name)
        .get();

      list[i].templatesCount = templates.docs.length;
    }

    return res.status(200).json({ status: 1, data: list });
  } catch (e) {
    console.log("error ", e);
  }
};

const addNewNiche = async (req, res, next) => {
  try {
    const niches = await db.collection("niches").doc(req.body.nicheName).set({
      name: req.body.nicheName,
    });
    console.log(niches);

    // var list = countries.docs.map(e => e.data());

    return res.status(200).json({ status: 1, data: niches });
  } catch (e) {
    console.log("error ", e);
  }
};

const getTemplateList = async (req, res, next) => {
  try {
    const templates = await db.collection("templates").get();
    console.log(templates);

    var list = templates.docs.map((e) => e.data());

    return res.status(200).json({ status: 1, data: list });
  } catch (e) {
    console.log("error ", e);
  }
};

const searchAhrefKeyword = async (req, res, next) => {
  try {
    var keywordArray = [];
    if (
      req.body.keyword !== undefined &&
      req.body.keyword !== "" &&
      !req.body.isTemplate
    ) {
      var keyword1 = req.body.keyword;
      var keyword2 = keyword1.replaceAll("{{state code}}", "");
      var keyword = keyword2.replaceAll(
        "{{city}}",
        req.body.location_str.toLowerCase()
      );
      var searchKeyword = keyword.split(",");

      searchKeyword.map((obj) => keywordArray.push(obj.trim()));
      console.log(keywordArray);
    } else {
      if (req.body.isTemplate) {
        let templateName = req.body.template;

        templateName = templateName.replaceAll(" ", "-");

        const keywordsDocs = await db
          .collection("templates")
          .doc(templateName)
          .collection("keywords")
          .get();

        keywordArray = keywordsDocs.docs.map((e) => e.data().name.trim());
      }
    }

    console.log(keywordArray);
    let searchKeywords = "";
    if (keywordArray.length) {
      for (var i = 0; i < keywordArray.length; i++) {
        searchKeywords += keywordArray[i] + ",";
      }
    }
    console.log(searchKeywords);

    searchKeywords = searchKeywords.slice(0, searchKeywords.length - 1);
    console.log(searchKeywords);

    var capabilities = {
      browserName: "Chrome",
      browser_version: "81.0",
      os: "Windows",
      os_version: "10",
      resolution: "1024x768",
      "browserstack.user": "hemant_u4k2qr",
      "browserstack.key": "3srwUyqhYqW3cYifzLLW",
      name: "Bstack-[Node] Sample Test",
    };

    const driver = new webdriver.Builder()
      .forBrowser("chrome")
      .usingServer(
        "http://hemant_u4k2qr:3srwUyqhYqW3cYifzLLW@hub.browserstack.com/wd/hub"
      )
      .withCapabilities(capabilities)
      .build();
    driver.get(process.env.AHREF_LOGIN_URL).then(async function () {
      setTimeout(async () => {
        await driver
          .findElement(By.name("email"))
          .sendKeys(process.env.AHREF_EMAIL);
        await driver
          .findElement(By.name("password"))
          .sendKeys(process.env.AHREF_PASSWORD, Key.ENTER);
        setTimeout(async () => {
          // await driver.manage().setTimeouts({implicit:10000});
          await driver
            .get(process.env.AHREF_KEYWORD_MATCHING_URL)
            .then(async function () {
              driver.getTitle().then(async function (title) {
                console.log(title);
                setTimeout(async () => {
                  await driver
                    .findElement(By.css("textarea"))
                    .sendKeys(searchKeywords, Key.ENTER)
                    .then(async function () {
                      setTimeout(async () => {
                        driver
                          .findElement(
                            By.xpath(
                              "//a/span[contains(text(),'Matching terms')]"
                            )
                          )
                          .click()
                          .then(async function () {
                            setTimeout(async () => {
                              driver.getTitle().then(async function (title) {
                                console.log(title);
                                var addDetails = [];
                                await driver
                                  .findElements(By.xpath("//table/tbody"))
                                  .then(async (rows) => {
                                    for (var i = 0; i < rows.length; i++) {
                                      await rows[i]
                                        .findElement(By.tagName("tr"))
                                        .getAttribute("innerHTML")
                                        .then((txt) => {
                                          const result = cheerio.load(
                                            "<body><table><tr>" +
                                              txt +
                                              "</tr></table></body>"
                                          );
                                          const keyword_title = result(
                                            "td.resultsTable-keyword div div a div span span"
                                          ).text();
                                          //     console.log(keyword_title);
                                          const keyword_d = result(
                                            "td.resultsTable-difficulty div div"
                                          ).text();
                                          //    console.log(keyword_d);
                                          const keyword_volume = result(
                                            "td.resultsTable-volume"
                                          ).text();
                                          //   console.log(keyword_volume);
                                          const keyword_globalVolume = result(
                                            "td.resultsTable-globalVolume"
                                          ).text();
                                          //  console.log(keyword_globalVolume);
                                          const keyword_tp = result(
                                            "td.resultsTable-trafficPotential"
                                          ).text();
                                          //   console.log(keyword_tp);
                                          var resultsTable_cpc = result(
                                            "td.resultsTable-cpc div"
                                          ).text();
                                          //  console.log(resultsTable_cpc);
                                          var resultsTable_cps = result(
                                            "td.resultsTable-cps div"
                                          ).text();
                                          //  console.log(resultsTable_cps);
                                          const resultsTable_serpFeatures =
                                            result(
                                              "td.resultsTable-serpFeatures div div div div div div"
                                            ).text();
                                          // console.log(resultsTable_serpFeatures);
                                          resultsTable_cpc =
                                            resultsTable_cpc.replace("N/A", "");
                                          resultsTable_cps =
                                            resultsTable_cps.replace("N/A", "");
                                          if (keyword_d !== "N/A") {
                                            var keywordResult = {
                                              keyword: keyword_title,
                                              KD: keyword_d,
                                              Volume: keyword_volume,
                                              GV: keyword_globalVolume,
                                              TP: keyword_tp,
                                              CPC: resultsTable_cpc,
                                              CPS: resultsTable_cps,
                                              SF: resultsTable_serpFeatures,
                                            };
                                            console.log(keywordResult);
                                            addDetails.push(keywordResult);
                                          }
                                        });
                                    }
                                    await addRowResponse(addDetails, res);
                                    console.log(addDetails);
                                    // await updateRow('Run', '', '1', 'city', listRow.city, doc, 5)
                                    driver.quit();
                                  });
                              });
                            }, "10000");
                          });
                        //   });
                      }, "5000");
                    });
                }, "5000");
              });
            });
        }, "5000");
      }, "5000");
    });
  } catch (e) {
    console.log(e);

    return res.status(200).json({ status: 0, error: e });
  }
};

const searchCityKeyword = async (req, res, next) => {
  const refreshToken = req.body.refresh_token;
  console.log(refreshToken);
  const customer = client.Customer({
    customer_id: req.body.customer_id, //"8284774611"
    refresh_token: refreshToken,
    //   login_customer_id:"5197253497", //  "2209324103"
  });

  // return res.status(200).json({status: 1, data: []});

  try {
    let templateNameOriginal = req.body.template.name;

    let templateName = templateNameOriginal.replaceAll(" ", "-");

    const keywordsDocs = await db
      .collection("templates")
      .doc(templateName)
      .collection("keywords")
      .get();

    var keywordArray = keywordsDocs.docs.map((e) => e.data().name.trim());

    var cities = req.body.cities;
    var cityIds = cities.map((obj) => obj.locationId);

    console.log(cityIds, cities);

    // console.log(keywordArray, cities, cityIds)
    var result1 = [];
    for (let i = 0; i < cityIds.length; i++) {
      // console.log(cityIds[i])

      var city = cities[i].name;
      city = city.toLowerCase().replaceAll(" ", "-");

      var cityData = await db.collection("city-rank").doc(city).get();

      cityData = cityData.data();

      var searching = false;

      var newDate = new Date();
      var filterDate = newDate;

      console.log("searching", searching);

      console.log("cityData", cityData);

      if (cityData != undefined) {
        if (cityData.cityName === "") {
          searching = true;
        }

        console.log(cityData.nextFilterDate);

        console.log("searching", searching);

        if (
          cityData.nextFilterDate !== "" ||
          cityData.nextFilterDate !== undefined
        ) {
          // searching = true;

          var nDate = new Date(cityData.nextFilterDate);
          console.log(nDate);

          if (nDate <= filterDate) {
            searching = true;
          }
        }

        console.log("searching", searching);

        if (
          cityData.nextFilterDate === "" ||
          cityData.nextFilterDate === undefined
        ) {
          searching = true;
        }

        console.log("searching", searching);
      } else {
        searching = true;
      }

      if (searching) {
        const geoTargetConstants = cities
          .filter((obj) => obj.locationId === cityIds[i])
          .map((obj) => ResourceNames.geoTargetConstant(obj.locationId));
        // const geoTargetConstants = ResourceNames.geoTargetConstant(cityIds[i])

        const keywordSeed = new services.KeywordSeed({
          keywords: keywordArray,
        });
        var result = await customer.keywordPlanIdeas.generateKeywordIdeas({
          customer_id: customer.credentials.customer_id,
          page_size: keywordArray.length,
          geo_target_constants: geoTargetConstants,
          keyword_seed: keywordSeed,
          historical_metrics_options: { include_average_cpc: true },
          // forecast_period:
        });

        var results = result
          .filter((obj) => keywordArray.includes(obj.text))
          .map((obj) => obj);

        // console.log(result1[i]);
        // keywordRank = parseFloat((eval(parseInt(checkCompRank(obj.keyword_idea_metrics ? obj.keyword_idea_metrics.competition : '-') + parseInt(obj.keyword_idea_metrics ? obj.keyword_idea_metrics.avg_monthly_searches : 0) + (parseInt(obj.keyword_idea_metrics ? obj.keyword_idea_metrics.average_cpc_micros : undefined) / 1000000) ) / 3)).toFixed(2))

        var keyData = await results.map((obj) => {
          var cpc = parseFloat(
            (
              parseInt(
                obj.keyword_idea_metrics
                  ? obj.keyword_idea_metrics.average_cpc_micros
                  : undefined
              ) / 1000000
            ).toFixed(2)
          );
          var cmp = obj.keyword_idea_metrics
            ? obj.keyword_idea_metrics.competition
            : "-";
          var cmpIndex = parseInt(
            obj.keyword_idea_metrics
              ? obj.keyword_idea_metrics.competition_index
              : undefined
          );
          var searchVolume = parseInt(
            obj.keyword_idea_metrics
              ? obj.keyword_idea_metrics.avg_monthly_searches
              : undefined
          );
          var bidHigh =
            parseInt(
              obj.keyword_idea_metrics
                ? obj.keyword_idea_metrics.high_top_of_page_bid_micros
                : undefined
            ) / 1000000;
          var bidLow =
            parseInt(
              obj.keyword_idea_metrics
                ? obj.keyword_idea_metrics.low_top_of_page_bid_micros
                : undefined
            ) / 1000000;
          return {
            avgCPC: cpc >= 0 ? cpc : 0,
            competition: cmp,
            competitionIndex: cmpIndex >= 0 ? cmpIndex : 0,
            keyword: obj.text,
            keywordRank:
              parseFloat(
                eval(
                  parseInt(
                    checkCompRank(cmp) +
                      parseInt(searchVolume >= 0 ? searchVolume : 0) +
                      parseInt(cpc >= 0 ? cpc : 0)
                  ) / 3
                ).toFixed(2)
              ) ?? 0,
            searchVolume: searchVolume >= 0 ? searchVolume : 0,
            topBidHigh: bidHigh >= 0 ? bidHigh : 0,
            topBidLow: bidLow >= 0 ? bidLow : 0,
          };
        });
        // console.log(keyData);

        var avg = 0;
        keyData.forEach((obj) => {
          avg = avg + (obj.keywordRank >= 0 ? obj.keywordRank : 0);
        });
        console.log(avg);
        avg = parseFloat(avg / keywordArray.length).toFixed(0);

        await result1.push({
          location: cities[i],
          template: templateNameOriginal,
          cityRank: avg,
          keywords: keyData,
        });

        console.log(filterDate);
        var nextDate = newDate.setDate(filterDate.getDate() + 30);

        // let date = dateToday.getDate();
        // let month = dateToday.getMonth() + 1;
        // let year = dateToday.getFullYear();
        //
        // // prints date & time in YYYY-MM-DD format
        // console.log(year + "-" + month + "-" + date);

        await db.collection("city-rank").doc(city).set({
          cityRank: avg,
          template: templateNameOriginal,
          cityName: cities[i].name,
          cityId: cities[i].locationId,
          rankingDate: filterDate,
          nextFilterDate: nextDate,
        });

        for (let j = 0; j < keyData.length; j++) {
          var keywordName = keyData[j].keyword;
          var keyName = keywordName.toLowerCase().replaceAll(" ", "-");

          await db
            .collection("city-rank")
            .doc(city)
            .collection("keywords")
            .doc(keyName)
            .set(keyData[j]);
        }
      }
    }

    return res.status(200).json({ status: 1, data: result1 });
  } catch (e) {
    console.log(e);

    return res.status(200).json({ status: 0, error: e });
  }
};

const searchStateKeyword = async (req, res, next) => {
  const refreshToken = req.body.refresh_token;
  console.log(refreshToken);
  const customer = client.Customer({
    customer_id: req.body.customer_id, //"8284774611"
    refresh_token: refreshToken,
    //   login_customer_id:"5197253497", //  "2209324103"
  });

  // return res.status(200).json({status: 1, data: []});

  try {
    let templateNameOriginal = req.body.template.name;
    let templateName = templateNameOriginal.replaceAll(" ", "-");
    const keywordsDocs = await db
      .collection("templates")
      .doc(templateName)
      .collection("keywords")
      .get();

    var keywordArray = keywordsDocs.docs.map((e) => e.data().name.trim());

    var searchName = req.body.searchName;
    var state = req.body.state;

    const jsonArray = await csv().fromFile(csvFilePath);
    let cities = await jsonArray
      .filter(
        (obj) =>
          obj.country_code.toUpperCase() === "US" &&
          obj.parent_id === state.criteria_id &&
          obj.target_type === "City"
      )
      .map((obj) => obj);

    var cityIds = await cities.map((obj) => obj.criteria_id);
    console.log(cities, cities.length, cityIds, cityIds.length);

    // console.log(keywordArray, cities, cityIds)
    var result1 = [];
    await db
      .collection("rankList")
      .doc(searchName.toLowerCase().replaceAll(" ", "-"))
      .set({
        searchName: searchName,
        status: "processing",
        date: new Date().toISOString(),
        statusCode: 2,
        stateName: state.name,
      });

    for (let i = 0; i < 10; i++) {
      var searching = true;

      if (searching) {
        const geoTargetConstants = cities
          .filter((obj) => obj.criteria_id === cityIds[i])
          .map((obj) => ResourceNames.geoTargetConstant(obj.criteria_id));

        const keywordSeed = new services.KeywordSeed({
          keywords: keywordArray,
        });
        var result = await customer.keywordPlanIdeas.generateKeywordIdeas({
          customer_id: customer.credentials.customer_id,
          page_size: keywordArray.length,
          geo_target_constants: geoTargetConstants,
          keyword_seed: keywordSeed,
          historical_metrics_options: { include_average_cpc: true },
          // forecast_period:
        });

        var results = result
          .filter((obj) => keywordArray.includes(obj.text))
          .map((obj) => obj);

        /*console.log(result1[i]);
                keywordRank = parseFloat((eval(parseInt(checkCompRank(obj.keyword_idea_metrics ? obj.keyword_idea_metrics.competition : '-') + parseInt(obj.keyword_idea_metrics ? obj.keyword_idea_metrics.avg_monthly_searches : 0) + (parseInt(obj.keyword_idea_metrics ? obj.keyword_idea_metrics.average_cpc_micros : undefined) / 1000000) ) / 3)).toFixed(2))*/

        var keyData = await results.map((obj) => {
          var cpc = parseFloat(
            (
              parseInt(
                obj.keyword_idea_metrics
                  ? obj.keyword_idea_metrics.average_cpc_micros
                  : undefined
              ) / 1000000
            ).toFixed(2)
          );
          var cmp = obj.keyword_idea_metrics
            ? obj.keyword_idea_metrics.competition
            : "-";
          var cmpIndex = parseInt(
            obj.keyword_idea_metrics
              ? obj.keyword_idea_metrics.competition_index
              : undefined
          );
          var searchVolume = parseInt(
            obj.keyword_idea_metrics
              ? obj.keyword_idea_metrics.avg_monthly_searches
              : undefined
          );
          var bidHigh =
            parseInt(
              obj.keyword_idea_metrics
                ? obj.keyword_idea_metrics.high_top_of_page_bid_micros
                : undefined
            ) / 1000000;
          var bidLow =
            parseInt(
              obj.keyword_idea_metrics
                ? obj.keyword_idea_metrics.low_top_of_page_bid_micros
                : undefined
            ) / 1000000;
          return {
            avgCPC: cpc >= 0 ? cpc : 0,
            competition: cmp,
            competitionIndex: cmpIndex >= 0 ? cmpIndex : 0,
            keyword: obj.text,
            keywordRank:
              parseFloat(
                eval(
                  parseInt(
                    checkCompRank(cmp) +
                      parseInt(searchVolume >= 0 ? searchVolume : 0) +
                      parseInt(cpc >= 0 ? cpc : 0)
                  ) / 3
                ).toFixed(2)
              ) ?? 0,
            searchVolume: searchVolume >= 0 ? searchVolume : 0,
            topBidHigh: bidHigh >= 0 ? bidHigh : 0,
            topBidLow: bidLow >= 0 ? bidLow : 0,
          };
        });

        var avg = 0;
        keyData.forEach((obj) => {
          avg = avg + (obj.keywordRank >= 0 ? obj.keywordRank : 0);
        });
        console.log(avg);
        avg = parseFloat(avg / keywordArray.length).toFixed(0);

        await result1.push({
          location: cities[i],
          template: templateNameOriginal,
          cityRank: avg,
          keywords: keyData,
        });

        var city = cities[i].name;
        city = city.toLowerCase().replaceAll(" ", "-");

        // console.log(filterDate);
        // var nextDate = newDate.setDate(filterDate.getDate() + 30);

        // let date = dateToday.getDate();
        // let month = dateToday.getMonth() + 1;
        // let year = dateToday.getFullYear();
        //
        // // prints date & time in YYYY-MM-DD format
        // console.log(year + "-" + month + "-" + date);

        console.log(city);

        await db
          .collection("rankList")
          .doc(searchName.toLowerCase().replaceAll(" ", "-"))
          .collection(state.name.toLowerCase().replaceAll(" ", "-"))
          .doc(city)
          .set({
            cityRank: avg,
            template: templateNameOriginal,
            cityName: cities[i].name,
            cityId: cities[i].criteria_id,
          });
        // rankingDate: filterDate,
        // nextFilterDate: nextDate

        for (let j = 0; j < keyData.length; j++) {
          var keywordName = keyData[j].keyword;
          var keyName = keywordName.toLowerCase().replaceAll(" ", "-");

          await db
            .collection("rankList")
            .doc(searchName.toLowerCase().replaceAll(" ", "-"))
            .collection(state.name.toLowerCase().replaceAll(" ", "-"))
            .doc(city)
            .collection("keywords")
            .doc(keyName)
            .set(keyData[j]);
        }
      }

      if (i + 1 == 10) {
        await db
          .collection("rankList")
          .doc(searchName.toLowerCase().replaceAll(" ", "-"))
          .update({
            searchName: searchName,
            status: "Processed",
            date: new Date().toISOString(),
            statusCode: 1,
            stateName: state.name,
          });
      }
    }

    return res.status(200).json({ status: 1, data: result1 });
  } catch (e) {
    console.log(e);

    return res.status(200).json({ status: 0, error: e });
  }
};

const generateSearchRank = async (req, res, next) => {
  const refreshToken = req.body.refresh_token;
  console.log(refreshToken);
  const customer = client.Customer({
    customer_id: req.body.customer_id, //"8284774611"
    refresh_token: refreshToken,
    //   login_customer_id:"5197253497", //  "2209324103"
  });

  var keywordArray = [];

  try {
    let templateName = "";
    if (req.body.isTemplate) {
      templateName = req.body.template;

      templateName = templateName.replaceAll(" ", "-");

      const keywordsDocs = await db
        .collection("templates")
        .doc(templateName)
        .collection("keywords")
        .get();

      keywordArray = keywordsDocs.docs.map((e) => e.data().name.trim());
    } else {
      var keyword1 = req.body.keyword;
      var keyword2 = keyword1.replaceAll("{{state code}}", "");
      var keyword = keyword2.replaceAll(
        "{{city}}",
        req.body.location_str.toLowerCase()
      );
      var searchKeyword = keyword.split(",");
      searchKeyword.map((obj) => keywordArray.push(obj.trim()));
      console.log(keywordArray);

      templateName = `custom-template-${new Date().toString()}`;

      // return res.status(200).json({status: 0, error:'errpo'});
    }

    // const keywordSeed = new services.KeywordSeed({keywords: keywordArray});
    //
    // var result1 = await customer.keywordPlanIdeas.generateKeywordIdeas({
    //     customer_id: customer.credentials.customer_id,
    //     //  page_size: 100,
    //     geo_target_constants: geoTargetConstants,
    //     keyword_seed: keywordSeed,
    //     historical_metrics_options: {include_average_cpc: true},
    //     // keyword_plan_network:'GOOGLE_SEARCH'
    //     //  historical_metrics_options:{include_average_cpc :true}
    // });

    var country = req.body.country;
    var state = req.body.state;
    var city = req.body.city;
    var isCountry = req.body.isCountry;
    var isCity = req.body.isCity;
    var isState = req.body.isState;

    var searchName = country.criteria_id.toString();

    var result1 = [];

    if (isCity) {
      var cityIds = [city.criteria_id];

      await db
        .collection("rankList")
        .doc(searchName)
        .set({
          // searchName: searchName,
          status: "Processing",
          date: new Date().toISOString(),
          statusCode: 2,
          countryId: country.criteria_id,
          countryName: country.name,
          // stateName: state.name,
          // stateId: state.criteria_id,
          // cityId: city.criteria_id,
          // cityName: city.name,
          // isCity: isCity,
          targetType: isCity ? "city" : isState ? "State" : "Region",
        });

      const geoTargetConstants = cityIds.map((obj) =>
        ResourceNames.geoTargetConstant(obj)
      );

      const keywordSeed = new services.KeywordSeed({ keywords: keywordArray });
      var result = await customer.keywordPlanIdeas.generateKeywordIdeas({
        customer_id: customer.credentials.customer_id,
        page_size: keywordArray.length,
        geo_target_constants: geoTargetConstants,
        keyword_seed: keywordSeed,
        historical_metrics_options: { include_average_cpc: true },
        // forecast_period:
      });

      results = result
        .filter((obj) => keywordArray.includes(obj.text))
        .map((obj) => obj);

      /*console.log(result1[i]);
        keywordRank = parseFloat((eval(parseInt(checkCompRank(obj.keyword_idea_metrics ? obj.keyword_idea_metrics.competition : '-') + parseInt(obj.keyword_idea_metrics ? obj.keyword_idea_metrics.avg_monthly_searches : 0) + (parseInt(obj.keyword_idea_metrics ? obj.keyword_idea_metrics.average_cpc_micros : undefined) / 1000000) ) / 3)).toFixed(2))*/

      var keyData = await results.map((obj) => {
        var cpc = parseFloat(
          (
            parseInt(
              obj.keyword_idea_metrics
                ? obj.keyword_idea_metrics.average_cpc_micros
                : undefined
            ) / 1000000
          ).toFixed(2)
        );
        var cmp = obj.keyword_idea_metrics
          ? obj.keyword_idea_metrics.competition
          : "-";
        var cmpIndex = parseInt(
          obj.keyword_idea_metrics
            ? obj.keyword_idea_metrics.competition_index
            : undefined
        );
        var searchVolume = parseInt(
          obj.keyword_idea_metrics
            ? obj.keyword_idea_metrics.avg_monthly_searches
            : undefined
        );
        var bidHigh =
          parseInt(
            obj.keyword_idea_metrics
              ? obj.keyword_idea_metrics.high_top_of_page_bid_micros
              : undefined
          ) / 1000000;
        var bidLow =
          parseInt(
            obj.keyword_idea_metrics
              ? obj.keyword_idea_metrics.low_top_of_page_bid_micros
              : undefined
          ) / 1000000;
        return {
          avgCPC: cpc >= 0 ? cpc : 0,
          competition: cmp,
          competitionIndex: cmpIndex >= 0 ? cmpIndex : 0,
          keyword: obj.text,
          keywordRank:
            parseFloat(
              eval(
                parseInt(
                  checkCompRank(cmp) +
                    parseInt(searchVolume >= 0 ? searchVolume : 0) +
                    parseInt(cpc >= 0 ? cpc : 0)
                ) / 3
              ).toFixed(2)
            ) ?? 0,
          searchVolume: searchVolume >= 0 ? searchVolume : 0,
          topBidHigh: bidHigh >= 0 ? bidHigh : 0,
          topBidLow: bidLow >= 0 ? bidLow : 0,
        };
      });

      console.log(keyData);

      var avgRank = 0;
      var avgCPC = 0;
      var avgBH = 0;
      var avgBL = 0;
      var avgSV = 0;
      var avgSI = 0;
      keyData.forEach((obj) => {
        avgRank = avgRank + (obj.keywordRank >= 0 ? obj.keywordRank : 0);
        avgCPC = avgCPC + obj.avgCPC;
        avgBH = avgBH + obj.topBidHigh;
        avgBL = avgBL + obj.topBidLow;
        avgSV = avgSV + obj.searchVolume;
        avgSI = avgSI + obj.competitionIndex;
      });
      console.log(avgRank, avgCPC, avgBH, avgBL, avgSV, avgSI);
      avgRank = parseFloat(avgRank / keywordArray.length).toFixed(0);
      avgCPC = parseFloat(avgCPC / keywordArray.length).toFixed(0);
      avgBH = parseFloat(avgBH / keywordArray.length).toFixed(0);
      avgBL = parseFloat(avgBL / keywordArray.length).toFixed(0);
      avgSV = parseFloat(avgSV / keywordArray.length).toFixed(0);
      avgSI = parseFloat(avgSI / keywordArray.length).toFixed(0);
      console.log(avgRank, avgCPC, avgBH, avgBL, avgSV, avgSI);

      await result1.push({
        location: city,
        // template: templateNameOriginal,
        cityRank: avgRank,
        keywords: keyData,
        averageSV: avgSV,
        averageCPC: avgCPC,
        averageBH: avgBH,
        averageBL: avgBL,
        averageSI: avgSI,
      });

      // var cityName = city.name;
      // cityName = cityName.toLowerCase().replaceAll(' ', '-');

      for (let i = 0; i < keyData.length; i++) {
        var keywordName = keyData[i].keyword;
        var keyName = keywordName.toLowerCase().replaceAll(" ", "-");

        console.log(keyData[i]);

        await db
          .collection("rankList")
          .doc(searchName)
          .collection(country.criteria_id.toString())
          .doc(state.criteria_id.toString())
          .collection(city.criteria_id.toString())
          .doc("keywordTemplate")
          .collection(templateName.toLowerCase().replaceAll(" ", "-"))
          .doc(keyName)
          .set(keyData[i]);
      }

      await db
        .collection("rankList")
        .doc(searchName)
        .collection(country.criteria_id.toString())
        .doc(state.criteria_id.toString())
        .collection(city.criteria_id.toString())
        .doc("keywordTemplate")
        .set({
          // searchName: searchName,
          status: "Processed",
          statusCode: 1,
          date: new Date().toISOString(),
          cityRank: avgRank,
          averageSV: avgSV,
          averageCPC: avgCPC,
          averageBH: avgBH,
          averageBL: avgBL,
          averageSI: avgSI,
          isCity: isCity,
        });

      await db
        .collection("rankList")
        .doc(searchName)
        .update({
          // searchName: searchName,
          status: "processed",
          statusCode: 1,
          targetType: isCity ? "city" : isState ? "State" : "Region",
        });

      // await
    } else {
      if (isState) {
        const jsonArray = await csv().fromFile(csvFilePath);
        let cities = await jsonArray
          .filter(
            (obj) =>
              obj.country_code.toUpperCase() === "US" &&
              obj.parent_id === state.criteria_id &&
              obj.target_type === "City"
          )
          .map((obj) => obj);

        var cityIds = await cities.map((obj) => obj.criteria_id);
        console.log(cities, cities.length, cityIds, cityIds.length);

        // console.log(keywordArray, cities, cityIds)
        var result1 = [];
        await db
          .collection("rankList")
          .doc(searchName.toLowerCase().replaceAll(" ", "-"))
          .set({
            searchName: searchName,
            status: "processing",
            date: new Date().toISOString(),
            statusCode: 2,
            stateName: state.name,
          });

        var stateAvgRank = 0;
        var stateAvgSV = 0;
        var stateAvgCPC = 0;
        var stateAvgBH = 0;
        var stateAvgBL = 0;
        var stateAvgSI = 0;

        for (let i = 0; i < cityIds.length; i++) {
          var searching = true;

          if (searching) {
            const geoTargetConstants = cities
              .filter((obj) => obj.criteria_id === cityIds[i])
              .map((obj) => ResourceNames.geoTargetConstant(obj.criteria_id));

            const keywordSeed = new services.KeywordSeed({
              keywords: keywordArray,
            });
            var result = await customer.keywordPlanIdeas.generateKeywordIdeas({
              customer_id: customer.credentials.customer_id,
              page_size: keywordArray.length,
              geo_target_constants: geoTargetConstants,
              keyword_seed: keywordSeed,
              historical_metrics_options: { include_average_cpc: true },
              // forecast_period:
            });

            var results = result
              .filter((obj) => keywordArray.includes(obj.text))
              .map((obj) => obj);

            /* console.log(result1[i]);
                        keywordRank = parseFloat((eval(parseInt(checkCompRank(obj.keyword_idea_metrics ? obj.keyword_idea_metrics.competition : '-') + parseInt(obj.keyword_idea_metrics ? obj.keyword_idea_metrics.avg_monthly_searches : 0) + (parseInt(obj.keyword_idea_metrics ? obj.keyword_idea_metrics.average_cpc_micros : undefined) / 1000000) ) / 3)).toFixed(2))*/

            var keyData = await results.map((obj) => {
              var cpc = parseFloat(
                (
                  parseInt(
                    obj.keyword_idea_metrics
                      ? obj.keyword_idea_metrics.average_cpc_micros
                      : undefined
                  ) / 1000000
                ).toFixed(2)
              );
              var cmp = obj.keyword_idea_metrics
                ? obj.keyword_idea_metrics.competition
                : "-";
              var cmpIndex = parseInt(
                obj.keyword_idea_metrics
                  ? obj.keyword_idea_metrics.competition_index
                  : undefined
              );
              var searchVolume = parseInt(
                obj.keyword_idea_metrics
                  ? obj.keyword_idea_metrics.avg_monthly_searches
                  : undefined
              );
              var bidHigh =
                parseInt(
                  obj.keyword_idea_metrics
                    ? obj.keyword_idea_metrics.high_top_of_page_bid_micros
                    : undefined
                ) / 1000000;
              var bidLow =
                parseInt(
                  obj.keyword_idea_metrics
                    ? obj.keyword_idea_metrics.low_top_of_page_bid_micros
                    : undefined
                ) / 1000000;
              return {
                avgCPC: cpc >= 0 ? cpc : 0,
                competition: cmp,
                competitionIndex: cmpIndex >= 0 ? cmpIndex : 0,
                keyword: obj.text,
                keywordRank:
                  parseFloat(
                    eval(
                      parseInt(
                        checkCompRank(cmp) +
                          parseInt(searchVolume >= 0 ? searchVolume : 0) +
                          parseInt(cpc >= 0 ? cpc : 0)
                      ) / 3
                    ).toFixed(2)
                  ) ?? 0,
                searchVolume: searchVolume >= 0 ? searchVolume : 0,
                topBidHigh: bidHigh >= 0 ? bidHigh : 0,
                topBidLow: bidLow >= 0 ? bidLow : 0,
              };
            });

            var avgRank = 0;
            var avgSV = 0;
            var avgCPC = 0;
            var avgBH = 0;
            var avgBL = 0;
            var avgSI = 0;
            await keyData.forEach((obj) => {
              avgRank = avgRank + (obj.keywordRank >= 0 ? obj.keywordRank : 0);
              avgCPC = avgCPC + obj.avgCPC;
              avgBH = avgBH + obj.topBidHigh;
              avgBL = avgBL + obj.topBidLow;
              avgSV = avgSV + obj.searchVolume;
              avgSI = avgSI + obj.competitionIndex;
            });
            console.log(avgRank, avgCPC, avgBH, avgBL, avgSV, avgSI);
            avgRank = parseFloat(avgRank / keywordArray.length).toFixed(0);
            avgCPC = parseFloat(avgCPC / keywordArray.length).toFixed(0);
            avgBH = parseFloat(avgBH / keywordArray.length).toFixed(0);
            avgBL = parseFloat(avgBL / keywordArray.length).toFixed(0);
            avgSV = parseFloat(avgSV / keywordArray.length).toFixed(0);
            avgSI = parseFloat(avgSI / keywordArray.length).toFixed(0);
            console.log(avgRank, avgCPC, avgBH, avgBL, avgSV, avgSI);

            stateAvgRank = parseInt(stateAvgRank + parseInt(avgRank));
            stateAvgSV = parseInt(stateAvgSV + parseInt(avgSV));
            stateAvgCPC = parseInt(stateAvgCPC + parseInt(avgCPC));
            stateAvgBH = parseInt(stateAvgBH + parseInt(avgBH));
            stateAvgBL = parseInt(stateAvgBL + parseInt(avgBL));
            stateAvgSI = parseInt(stateAvgSI + parseInt(avgSI));

            await result1.push({
              location: cities[i],
              // template: templateNameOriginal,
              cityRank: avgRank,
              keywords: keyData,
              averageSV: avgSV,
              averageCPC: avgCPC,
              averageBH: avgBH,
              averageBL: avgBL,
              averageSI: avgSI,
            });
            // await result1.push({
            //     location: cities[i],
            //     template: templateNameOriginal,
            //     cityRank: avg,
            //     keywords: keyData
            // });

            var city_current = cities[i].name;
            city_current = city_current.toLowerCase().replaceAll(" ", "-");

            // console.log(filterDate);
            // var nextDate = newDate.setDate(filterDate.getDate() + 30);

            // let date = dateToday.getDate();
            // let month = dateToday.getMonth() + 1;
            // let year = dateToday.getFullYear();
            //
            // // prints date & time in YYYY-MM-DD format
            // console.log(year + "-" + month + "-" + date);

            console.log(city_current);

            await db
              .collection("rankList")
              .doc(searchName)
              .collection(country.criteria_id.toString())
              .doc(state.criteria_id.toString())
              .collection(cities[i].criteria_id.toString())
              .doc("keywordTemplate")
              .set({
                // template: templateNameOriginal,
                cityName: cities[i].name,
                cityId: cities[i].criteria_id,
                cityRank: avgRank,
                averageSV: avgSV,
                averageCPC: avgCPC,
                averageBH: avgBH,
                averageBL: avgBL,
                averageSI: avgSI,
                isCity: isCity,
              });
            // rankingDate: filterDate,
            // nextFilterDate: nextDate

            for (let j = 0; j < keyData.length; j++) {
              var keywordName = keyData[j].keyword;
              var keyName = keywordName.toLowerCase().replaceAll(" ", "-");

              await db
                .collection("rankList")
                .doc(searchName)
                .collection(country.criteria_id.toString())
                .doc(state.criteria_id.toString())
                .collection(cities[i].criteria_id.toString())
                .doc("keywordTemplate")
                .collection(templateName.toLowerCase().replaceAll(" ", "-"))
                .doc(keyName)
                .set(keyData[j]);
            }
          }

          if (i + 1 == cityIds.length) {
            console.log(
              stateAvgRank,
              stateAvgSV,
              stateAvgCPC,
              stateAvgBH,
              stateAvgBL,
              stateAvgSI
            );
            stateAvgRank = parseFloat(
              parseInt(stateAvgRank) / cityIds.length
            ).toFixed(0);
            stateAvgSV = parseFloat(
              parseInt(stateAvgSV) / cityIds.length
            ).toFixed(0);
            stateAvgCPC = parseFloat(
              parseInt(stateAvgCPC) / cityIds.length
            ).toFixed(0);
            stateAvgBH = parseFloat(
              parseInt(stateAvgBH) / cityIds.length
            ).toFixed(0);
            stateAvgBL = parseFloat(
              parseInt(stateAvgBL) / cityIds.length
            ).toFixed(0);
            stateAvgSI = parseFloat(
              parseInt(stateAvgSI) / cityIds.length
            ).toFixed(0);
            console.log(
              stateAvgRank,
              stateAvgSV,
              stateAvgCPC,
              stateAvgBH,
              stateAvgBL,
              stateAvgSI
            );
            await db
              .collection("rankList")
              .doc(searchName)
              .collection(country.criteria_id.toString())
              .doc(state.criteria_id.toString())
              .set({
                searchName: searchName,
                status: "Processed",
                date: new Date().toISOString(),
                statusCode: 1,
                stateName: state.name,
                stateAvgRank: stateAvgRank,
                stateAvgSV: stateAvgSV,
                stateAvgCPC: stateAvgCPC,
                stateAvgBH: stateAvgBH,
                stateAvgBL: stateAvgBL,
                stateAvgSI: stateAvgSI,
                isCity: isCity,
                isState: isState,
              });
          }
        }

        await db
          .collection("rankList")
          .doc(searchName)
          .update({
            // searchName: searchName,
            status: "processed",
            statusCode: 1,
            targetType: isCity ? "city" : isState ? "State" : "Region",
          });
      } else {
        const jsonArray = await csv().fromFile(csvFilePath);
        let states = await jsonArray
          .filter(
            (obj) =>
              obj.country_code.toUpperCase() === "US" &&
              obj.parent_id === country.criteria_id &&
              obj.target_type === "State"
          )
          .map((obj) => obj);

        await db.collection("rankList").doc("hemant@freshcodes.in").set({
          searchName: searchName,
          status: "processing",
          date: new Date().toISOString(),
          statusCode: 2,
          countryName: country.name,
          countryId: country.criteria_id,
        });

        var countryAvgRank = 0;
        var countryAvgSV = 0;
        var countryAvgCPC = 0;
        var countryAvgBH = 0;
        var countryAvgBL = 0;
        var countryAvgSI = 0;

        for (let k = 0; k < states.length; k++) {
          var currentState = states[k];

          let cities = await jsonArray
            .filter(
              (obj) =>
                obj.country_code.toUpperCase() === "US" &&
                obj.parent_id === currentState.criteria_id &&
                obj.target_type === "City"
            )
            .map((obj) => obj);

          var cityIds = await cities.map((obj) => obj.criteria_id);
          console.log(cities, cities.length, cityIds, cityIds.length);

          await db
            .collection("rankList")
            .doc("hemant@freshcodes.in")
            .collection(country.criteria_id.toString())
            .doc(currentState.criteria_id.toString())
            .set({
              searchName: searchName,
              status: "Processing",
              date: new Date().toISOString(),
              statusCode: 2,
              stateName: currentState.name,
            });

          // console.log(keywordArray, cities, cityIds)
          var result1 = [];

          var stateAvgRank = 0;
          var stateAvgSV = 0;
          var stateAvgCPC = 0;
          var stateAvgBH = 0;
          var stateAvgBL = 0;
          var stateAvgSI = 0;

          for (let i = 0; i < cityIds.length; i++) {
            var searching = true;

            if (searching) {
              const geoTargetConstants = cities
                .filter((obj) => obj.criteria_id === cityIds[i])
                .map((obj) => ResourceNames.geoTargetConstant(obj.criteria_id));

              const keywordSeed = new services.KeywordSeed({
                keywords: keywordArray,
              });
              var result = await customer.keywordPlanIdeas.generateKeywordIdeas(
                {
                  customer_id: customer.credentials.customer_id,
                  page_size: keywordArray.length,
                  geo_target_constants: geoTargetConstants,
                  keyword_seed: keywordSeed,
                  historical_metrics_options: { include_average_cpc: true },
                  // forecast_period:
                }
              );

              var results = result
                .filter((obj) => keywordArray.includes(obj.text))
                .map((obj) => obj);

              /* console.log(result1[i]);
                            keywordRank = parseFloat((eval(parseInt(checkCompRank(obj.keyword_idea_metrics ? obj.keyword_idea_metrics.competition : '-') + parseInt(obj.keyword_idea_metrics ? obj.keyword_idea_metrics.avg_monthly_searches : 0) + (parseInt(obj.keyword_idea_metrics ? obj.keyword_idea_metrics.average_cpc_micros : undefined) / 1000000) ) / 3)).toFixed(2))*/

              var keyData = await results.map((obj) => {
                var cpc = parseFloat(
                  (
                    parseInt(
                      obj.keyword_idea_metrics
                        ? obj.keyword_idea_metrics.average_cpc_micros
                        : undefined
                    ) / 1000000
                  ).toFixed(2)
                );
                var cmp = obj.keyword_idea_metrics
                  ? obj.keyword_idea_metrics.competition
                  : "-";
                var cmpIndex = parseInt(
                  obj.keyword_idea_metrics
                    ? obj.keyword_idea_metrics.competition_index
                    : undefined
                );
                var searchVolume = parseInt(
                  obj.keyword_idea_metrics
                    ? obj.keyword_idea_metrics.avg_monthly_searches
                    : undefined
                );
                var bidHigh =
                  parseInt(
                    obj.keyword_idea_metrics
                      ? obj.keyword_idea_metrics.high_top_of_page_bid_micros
                      : undefined
                  ) / 1000000;
                var bidLow =
                  parseInt(
                    obj.keyword_idea_metrics
                      ? obj.keyword_idea_metrics.low_top_of_page_bid_micros
                      : undefined
                  ) / 1000000;
                return {
                  avgCPC: cpc >= 0 ? cpc : 0,
                  competition: cmp,
                  competitionIndex: cmpIndex >= 0 ? cmpIndex : 0,
                  keyword: obj.text,
                  keywordRank:
                    parseFloat(
                      eval(
                        parseInt(
                          checkCompRank(cmp) +
                            parseInt(searchVolume >= 0 ? searchVolume : 0) +
                            parseInt(cpc >= 0 ? cpc : 0)
                        ) / 3
                      ).toFixed(2)
                    ) ?? 0,
                  searchVolume: searchVolume >= 0 ? searchVolume : 0,
                  topBidHigh: bidHigh >= 0 ? bidHigh : 0,
                  topBidLow: bidLow >= 0 ? bidLow : 0,
                };
              });

              var avgRank = 0;
              var avgSV = 0;
              var avgCPC = 0;
              var avgBH = 0;
              var avgBL = 0;
              var avgSI = 0;
              await keyData.forEach((obj) => {
                avgRank =
                  avgRank + (obj.keywordRank >= 0 ? obj.keywordRank : 0);
                avgCPC = avgCPC + obj.avgCPC;
                avgBH = avgBH + obj.topBidHigh;
                avgBL = avgBL + obj.topBidLow;
                avgSV = avgSV + obj.searchVolume;
                avgSI = avgSI + obj.competitionIndex;
              });
              console.log(avgRank, avgCPC, avgBH, avgBL, avgSV, avgSI);
              avgRank = parseFloat(avgRank / keywordArray.length).toFixed(0);
              avgCPC = parseFloat(avgCPC / keywordArray.length).toFixed(0);
              avgBH = parseFloat(avgBH / keywordArray.length).toFixed(0);
              avgBL = parseFloat(avgBL / keywordArray.length).toFixed(0);
              avgSV = parseFloat(avgSV / keywordArray.length).toFixed(0);
              avgSI = parseFloat(avgSI / keywordArray.length).toFixed(0);
              console.log(avgRank, avgCPC, avgBH, avgBL, avgSV, avgSI);

              stateAvgRank = parseInt(stateAvgRank + parseInt(avgRank));
              stateAvgSV = parseInt(stateAvgSV + parseInt(avgSV));
              stateAvgCPC = parseInt(stateAvgCPC + parseInt(avgCPC));
              stateAvgBH = parseInt(stateAvgBH + parseInt(avgBH));
              stateAvgBL = parseInt(stateAvgBL + parseInt(avgBL));
              stateAvgSI = parseInt(stateAvgSI + parseInt(avgSI));

              await result1.push({
                location: cities[i],
                cityRank: avgRank,
                keywords: keyData,
                averageSV: avgSV,
                averageCPC: avgCPC,
                averageBH: avgBH,
                averageBL: avgBL,
                averageSI: avgSI,
              });

              var city_current = cities[i].name;
              city_current = city_current.toLowerCase().replaceAll(" ", "-");

              console.log(city_current);

              await db
                .collection("rankList")
                .doc("hemant@freshcodes.in")
                .collection(country.criteria_id.toString())
                .doc(currentState.criteria_id.toString())
                .collection(cities[i].criteria_id.toString())
                .doc("keywordTemplate")
                .set({
                  // template: templateNameOriginal,
                  cityName: cities[i].name,
                  cityId: cities[i].criteria_id,
                  cityRank: avgRank,
                  averageSV: avgSV,
                  averageCPC: avgCPC,
                  averageBH: avgBH,
                  averageBL: avgBL,
                  averageSI: avgSI,
                  isCity: isCity,
                });
              // rankingDate: filterDate,
              // nextFilterDate: nextDate

              for (let j = 0; j < keyData.length; j++) {
                var keywordName = keyData[j].keyword;
                var keyName = keywordName.toLowerCase().replaceAll(" ", "-");

                await db
                  .collection("rankList")
                  .doc("hemant@freshcodes.in")
                  .collection(country.criteria_id.toString())
                  .doc(currentState.criteria_id.toString())
                  .collection(cities[i].criteria_id.toString())
                  .doc("keywordTemplate")
                  .collection(templateName.toLowerCase().replaceAll(" ", "-"))
                  .doc(keyName)
                  .set(keyData[j]);
              }
            }

            if (i + 1 == cityIds.length) {
              console.log(
                stateAvgRank,
                stateAvgSV,
                stateAvgCPC,
                stateAvgBH,
                stateAvgBL,
                stateAvgSI
              );
              stateAvgRank = parseFloat(
                parseInt(stateAvgRank) / cityIds.length
              ).toFixed(0);
              stateAvgSV = parseFloat(
                parseInt(stateAvgSV) / cityIds.length
              ).toFixed(0);
              stateAvgCPC = parseFloat(
                parseInt(stateAvgCPC) / cityIds.length
              ).toFixed(0);
              stateAvgBH = parseFloat(
                parseInt(stateAvgBH) / cityIds.length
              ).toFixed(0);
              stateAvgBL = parseFloat(
                parseInt(stateAvgBL) / cityIds.length
              ).toFixed(0);
              stateAvgSI = parseFloat(
                parseInt(stateAvgSI) / cityIds.length
              ).toFixed(0);
              console.log(
                stateAvgRank,
                stateAvgSV,
                stateAvgCPC,
                stateAvgBH,
                stateAvgBL,
                stateAvgSI
              );
              await db
                .collection("rankList")
                .doc("hemant@freshcodes.in")
                .collection(country.criteria_id.toString())
                .doc(currentState.criteria_id.toString())
                .set({
                  searchName: searchName,
                  status: "Processed",
                  date: new Date().toISOString(),
                  statusCode: 1,
                  stateName: currentState.name,
                  stateAvgRank: stateAvgRank,
                  stateAvgSV: stateAvgSV,
                  stateAvgCPC: stateAvgCPC,
                  stateAvgBH: stateAvgBH,
                  stateAvgBL: stateAvgBL,
                  stateAvgSI: stateAvgSI,
                });
            }
          }

          countryAvgRank = countryAvgRank + parseInt(stateAvgRank);
          countryAvgSV = countryAvgSV + parseInt(stateAvgSV);
          countryAvgCPC = countryAvgCPC + parseInt(stateAvgCPC);
          countryAvgBH = countryAvgBH + parseInt(stateAvgBH);
          countryAvgBL = countryAvgBL + parseInt(stateAvgBL);
          countryAvgSI = countryAvgSI + parseInt(stateAvgSI);

          if (k + 1 == states.length) {
            console.log(
              countryAvgRank,
              countryAvgSV,
              countryAvgCPC,
              countryAvgBH,
              countryAvgBL,
              countryAvgSI
            );
            countryAvgRank = parseFloat(
              parseInt(countryAvgRank) / states.length
            ).toFixed(0);
            countryAvgSV = parseFloat(
              parseInt(countryAvgSV) / states.length
            ).toFixed(0);
            countryAvgCPC = parseFloat(
              parseInt(countryAvgCPC) / states.length
            ).toFixed(0);
            countryAvgBH = parseFloat(
              parseInt(countryAvgBH) / states.length
            ).toFixed(0);
            countryAvgBL = parseFloat(
              parseInt(countryAvgBL) / states.length
            ).toFixed(0);
            countryAvgSI = parseFloat(
              parseInt(countryAvgSI) / states.length
            ).toFixed(0);
            console.log(
              countryAvgRank,
              countryAvgSV,
              countryAvgCPC,
              countryAvgBH,
              countryAvgBL,
              countryAvgSI
            );
            await db.collection("rankList").doc("hemant@freshcodes.in").update({
              searchName: searchName,
              status: "Processed",
              date: new Date().toISOString(),
              statusCode: 1,
              countryAvgRank: countryAvgRank,
              countryAvgSV: countryAvgSV,
              countryAvgCPC: countryAvgCPC,
              countryAvgBH: countryAvgBH,
              countryAvgBL: countryAvgBL,
              countryAvgSI: countryAvgSI,
            });
          }
        }
      }
    }
    // console.log(keywordArray, cities, cityIds)
    // if((i + 1) == 10) {
    //     await db.collection('rankList').doc(searchName.toLowerCase().replaceAll(' ', '-')).update({
    //         searchName: searchName,
    //         status: 'Processed',
    //         date: new Date().toISOString(),
    //         statusCode: 1,
    //         stateName: state.name
    //     })
    // }

    return res.status(200).json({ status: 1, data: result1 });
  } catch (e) {
    console.log(e);

    return res.status(200).json({ status: 0, error: e });
  }

  /*try {
        let templateNameOriginal = req.body.template.name;
        let templateName = templateNameOriginal.replaceAll(' ', '-');
        const keywordsDocs = await db.collection('templates').doc(templateName).collection('keywords').get()

        var keywordArray = keywordsDocs.docs.map(e => e.data().name.trim());

        var searchName = req.body.searchName;
        var state = req.body.state;

        const jsonArray = await csv().fromFile(csvFilePath);
        let cities = await jsonArray.filter(obj => (obj.country_code.toUpperCase()) === 'US' && obj.parent_id === state.criteria_id && obj.target_type === 'City').map(obj => (obj))

        var cityIds = await cities.map(obj => obj.criteria_id)
        console.log(cities, cities.length, cityIds, cityIds.length);

        // console.log(keywordArray, cities, cityIds)
        var result1 = []
        await db.collection('rankList').doc(searchName.toLowerCase().replaceAll(' ', '-')).set({
            searchName: searchName,
            status: 'processing',
            date: new Date().toISOString(),
            statusCode: 2,
            stateName: state.name
        })

        for (let i = 0; i < 10; i++) {

            var searching = true;

            if (searching) {
                const geoTargetConstants = cities.filter(obj => obj.criteria_id === cityIds[i]).map(obj => ResourceNames.geoTargetConstant(obj.criteria_id));

                const keywordSeed = new services.KeywordSeed({keywords: keywordArray});
                var result = await customer.keywordPlanIdeas.generateKeywordIdeas({
                    customer_id: customer.credentials.customer_id,
                    page_size: keywordArray.length,
                    geo_target_constants: geoTargetConstants,
                    keyword_seed: keywordSeed,
                    historical_metrics_options: {include_average_cpc: true},
                    // forecast_period:
                });

                var results = result.filter(obj => keywordArray.includes(obj.text)).map(obj => obj)

                /!*console.log(result1[i]);
                keywordRank = parseFloat((eval(parseInt(checkCompRank(obj.keyword_idea_metrics ? obj.keyword_idea_metrics.competition : '-') + parseInt(obj.keyword_idea_metrics ? obj.keyword_idea_metrics.avg_monthly_searches : 0) + (parseInt(obj.keyword_idea_metrics ? obj.keyword_idea_metrics.average_cpc_micros : undefined) / 1000000) ) / 3)).toFixed(2))*!/

                var keyData = await results.map(obj => {
                    var cpc = parseFloat((parseInt(obj.keyword_idea_metrics ? obj.keyword_idea_metrics.average_cpc_micros : undefined) / 1000000).toFixed(2));
                    var cmp = obj.keyword_idea_metrics ? obj.keyword_idea_metrics.competition : '-';
                    var cmpIndex = parseInt(obj.keyword_idea_metrics ? obj.keyword_idea_metrics.competition_index : undefined);
                    var searchVolume = parseInt(obj.keyword_idea_metrics ? obj.keyword_idea_metrics.avg_monthly_searches : undefined);
                    var bidHigh = (parseInt(obj.keyword_idea_metrics ? obj.keyword_idea_metrics.high_top_of_page_bid_micros : undefined) / 1000000);
                    var bidLow = (parseInt(obj.keyword_idea_metrics ? obj.keyword_idea_metrics.low_top_of_page_bid_micros : undefined) / 1000000);
                    return {
                        avgCPC: cpc >= 0 ? cpc : 0,
                        competition: cmp,
                        competitionIndex: cmpIndex >= 0 ? cmpIndex : 0,
                        keyword: obj.text,
                        keywordRank: parseFloat((eval(parseInt(checkCompRank(cmp) + parseInt(searchVolume >= 0 ? searchVolume : 0) + parseInt(cpc >= 0 ? cpc : 0)) / 3)).toFixed(2)) ?? 0,
                        searchVolume: searchVolume >= 0 ? searchVolume : 0,
                        topBidHigh: bidHigh >= 0 ? bidHigh : 0,
                        topBidLow: bidLow >= 0 ? bidLow : 0
                    }
                });

                var avg = 0;
                keyData.forEach((obj) => {
                    avg = avg + (obj.keywordRank >= 0 ? obj.keywordRank : 0)
                });
                console.log(avg);
                avg = parseFloat(avg / keywordArray.length).toFixed(0)

                await result1.push({
                    location: cities[i],
                    template: templateNameOriginal,
                    cityRank: avg,
                    keywords: keyData
                });

                var city = cities[i].name;
                city = city.toLowerCase().replaceAll(' ', '-');

                // console.log(filterDate);
                // var nextDate = newDate.setDate(filterDate.getDate() + 30);

                // let date = dateToday.getDate();
                // let month = dateToday.getMonth() + 1;
                // let year = dateToday.getFullYear();
                //
                // // prints date & time in YYYY-MM-DD format
                // console.log(year + "-" + month + "-" + date);

                console.log(city);

                await db.collection('rankList').doc(searchName.toLowerCase().replaceAll(' ', '-')).collection((state.name).toLowerCase().replaceAll(' ', '-')).doc(city).set({
                    cityRank: avg,
                    template: templateNameOriginal,
                    cityName: cities[i].name,
                    cityId: cities[i].criteria_id,
                })
                // rankingDate: filterDate,
                // nextFilterDate: nextDate

                for (let j = 0; j < keyData.length; j++) {

                    var keywordName = keyData[j].keyword;
                    var keyName = keywordName.toLowerCase().replaceAll(' ', '-');

                    await db.collection('rankList').doc(searchName.toLowerCase().replaceAll(' ', '-')).collection((state.name).toLowerCase().replaceAll(' ', '-')).doc(city).collection('keywords').doc(keyName).set(keyData[j]);
                }
            }

            if((i + 1) == 10) {
                await db.collection('rankList').doc(searchName.toLowerCase().replaceAll(' ', '-')).update({
                    searchName: searchName,
                    status: 'Processed',
                    date: new Date().toISOString(),
                    statusCode: 1,
                    stateName: state.name
                })
            }

        }

        return res.status(200).json({status: 1, data: result1});

    } catch (e) {
        console.log(e)

        return res.status(200).json({status: 0, error: e});
    }*/
};

const getStateRankList = async (req, res, next) => {
  try {
    var rankRef = await db.collection("rankList").get();

    let rankRefList = await rankRef.docs.map((obj) => obj.data());

    return res.status(200).json({ status: 1, data: rankRefList });
  } catch (e) {
    console.log(e);

    return res.status(200).json({ status: 0, error: e });
  }
};

const getStateCityRank = async (req, res, next) => {
  try {
    var searchName = req.body.searchName;
    searchName = searchName.toLowerCase().replaceAll(" ", "-");

    var stateName = req.body.stateName;
    stateName = stateName.toLowerCase().replaceAll(" ", "-");

    // console.log(rankRefList)

    var cityRef = await db
      .collection("rankList")
      .doc(searchName)
      .collection(stateName)
      .get();

    var cities = await cityRef.docs.map((obj) => obj.data());

    return res.status(200).json({ status: 1, data: cities });
  } catch (e) {
    console.log(e);

    return res.status(200).json({ status: 0, error: e });
  }
};

const getCityRankerList = async (req, res, next) => {
  try {
    var searchName = req.body.searchName;
    searchName = searchName.toLowerCase().replaceAll(" ", "-");

    var stateName = req.body.stateName;
    stateName = stateName.toLowerCase().replaceAll(" ", "-");

    var city = req.body.city;
    city = city.toLowerCase().replaceAll(" ", "-");

    const cityKeyRef = await db
      .collection("rankList")
      .doc(searchName)
      .collection(stateName)
      .doc(city)
      .collection("keywords")
      .get();

    var keywords = await cityKeyRef.docs.map((e) => e.data());

    return res.status(200).json({ status: 1, data: keywords });
  } catch (e) {
    console.log(e);

    return res.status(200).json({ status: 0, error: e });
  }
};

const getCityRankList = async (req, res, next) => {
  try {
    var rankRef = await db.collection("city-rank").get();

    let rankRefList = rankRef.docs.map((obj) => obj.data());

    // console.log(rankRefList)

    for (let i = 0; i < rankRefList.length; i++) {
      var cityName = rankRefList[i].cityName;
      cityName = cityName.toLowerCase().replaceAll(" ", "-");

      var keyRef = await db
        .collection("city-rank")
        .doc(cityName)
        .collection("keywords")
        .get();

      var keywords = keyRef.docs.map((e) => e.data());

      rankRefList[i].keyRanks = keywords;
    }

    return res.status(200).json({ status: 1, data: rankRefList });
  } catch (e) {
    console.log(e);

    return res.status(200).json({ status: 0, error: e });
  }
};

const addNewTemplate = async (req, res, next) => {
  try {
    let templateName = req.body.templateName;
    templateName = templateName.replaceAll(" ", "-");
    const template = await db.collection("templates").doc(templateName).set({
      name: req.body.templateName,
      niche: req.body.niche,
    });
    console.log(template);

    var keyword1 = req.body.keyword;
    var keyword2 = keyword1.replaceAll("{{state code}}", "");
    var keyword = keyword2.replaceAll("{{city}}", "");
    // var keyword = keyword2.replaceAll('{{city}}', req.body.location_str.toLowerCase());
    var searchKeyword = keyword.split(",");
    var keywordArray = [];
    searchKeyword.map((obj) => keywordArray.push(obj.trim()));
    console.log(keywordArray);

    if (keywordArray.length > 0 && req.body.keyword != "") {
      for (let i = 0; i < keywordArray.length; i++) {
        var keyName = keywordArray[i];
        keyName = keyName.replaceAll(" ", "-");

        db.collection("templates")
          .doc(templateName)
          .collection("keywords")
          .doc(keyName)
          .set({
            template: templateName,
            niche: req.body.niche,
            name: keywordArray[i],
          });
      }
    }

    // var list = countries.docs.map(e => e.data());

    return res.status(200).json({ status: 1, data: template });
  } catch (e) {
    console.log("error ", e);
  }
};

const getTemplateKeywordList = async (req, res, next) => {
  try {
    const template = await db.collection("templates").get();
    console.log(template);

    let templateName = req.body.template;
    templateName = templateName.replaceAll(" ", "-");

    var single = template.docs
      .filter((doc) => doc.data().name === req.body.template)
      .map((e) => e.data());

    const keywords = await db
      .collection("templates")
      .doc(templateName)
      .collection("keywords")
      .get();
    var list = keywords.docs.map((e) => e.data());

    return res.status(200).json({ status: 1, template: single, data: list });
  } catch (e) {
    console.log("error ", e);
  }
};

const addTemplateKeyWord = async (req, res, next) => {
  try {
    // var keyName = req.body.keyword;
    // keyName = keyName.replaceAll(' ', '-');
    console.log(typeof req.body.keyword);
    var searchKeyword =
      typeof req.body.keyword === "object"
        ? req.body.keyword
        : req.body.keyword.split(",");
    var keywordArray = [];
    searchKeyword.map((obj) => keywordArray.push(obj.trim().toLowerCase()));
    console.log(keywordArray);

    let templateName = req.body.template;
    templateName = templateName.replaceAll(" ", "-");

    if (keywordArray.length > 0) {
      for (let i = 0; i < keywordArray.length; i++) {
        var keyName = keywordArray[i];
        keyName = keyName.replaceAll(" ", "-");

        const template = await db
          .collection("templates")
          .doc(templateName)
          .collection("keywords")
          .doc(keyName)
          .set({
            template: req.body.template,
            niche: req.body.niche,
            name: keywordArray[i],
          });
        console.log(template);
      }
    }

    // var list = countries.docs.map(e => e.data());

    return res.status(200).json({ status: 1, data: "done" });
  } catch (e) {
    console.log("error ", e);
  }
};

const editTemplateKeyWord = async (req, res, next) => {
  try {
    var keyName = req.body.keyword;
    keyName = keyName.replaceAll("", "-");
    const template = await db
      .collection("templates")
      .doc(req.body.template)
      .collection("keywords")
      .doc(keyName)
      .set({
        template: req.body.template,
        niche: req.body.niche,
        name: req.body.keyword,
      });
    console.log(template);

    // var list = countries.docs.map(e => e.data());

    return res.status(200).json({ status: 1, data: template });
  } catch (e) {
    console.log("error ", e);
  }
};

const DeleteKeyword = async (req, res, next) => {
  const keywordRef = await db
    .collection("templates")
    .doc(req.body.keyword_template)
    .collection("keywords")
    .doc(req.body.keyword)
    .delete();
  console.log(keywordRef);
  return res.status(200).json({
    status: 1,
    message: "Keyword Successfully Deleted",
  });
};
const DeleteKT = async (req, res, next) => {
  const keywordTemplateRef = await db
    .collection("templates")
    .doc(req.body.keyword_template)
    .delete();
  console.log(keywordTemplateRef);
  return res.status(200).json({
    status: 1,
    message: "Keyword Template Successfully Deleted",
  });
};

const DeleteNiche = async (req, res, next) => {
  var jobsKill_query = await db
    .collection("templates")
    .where("niche", "==", req.body.niche);
  await jobsKill_query.get().then(async function (querySnapshot) {
    querySnapshot.forEach(async function (doc) {
      await doc.ref.delete();
      //  doc.ref.collection('keywords').doc().delete();
      await doc.ref
        .collection("keywords")
        .get()
        .then(async function (querySnapshot1) {
          querySnapshot1.forEach(async function (doc1) {
            await doc1.ref.delete();
          });
        });
    });
    var niche = req.body.niche.replaceAll(" ", "-");
    await db.collection("niches").doc(niche).delete();

    return res.status(200).json({
      status: 1,
      message: "Niche Successfully Deleted",
    });
    //  for(var i=0;)
  });
};

const paginator = (items, page, per_page) => {
  var page = page || 1,
    per_page = per_page || 10,
    offset = (page - 1) * per_page,
    paginatedItems = items.slice(offset).slice(0, per_page),
    total_pages = Math.ceil(items.length / per_page);
  return {
    page: page,
    per_page: per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: items.length,
    total_pages: total_pages,
    data: paginatedItems,
  };
};
const SearchKeyword = async (req, res, next) => {
  console.log(req.body);
  const refreshToken = req.body.refresh_token;
  console.log(refreshToken);
  const customer = client.Customer({
    customer_id: req.body.customer_id, //"8284774611"
    refresh_token: refreshToken,
    //   login_customer_id:"5197253497", //  "2209324103"
  });
  try {
    const locationIds = [req.body.location ? req.body.location : "1002764"];
    const geoTargetConstants = locationIds.map((locationId) =>
      ResourceNames.geoTargetConstant(locationId)
    );
    var result1 = "";
    if (
      req.body.keyword !== undefined &&
      req.body.keyword !== "" &&
      !req.body.isTemplate
    ) {
      var keyword1 = req.body.keyword;
      var keyword2 = keyword1.replaceAll("{{state code}}", "");
      var keyword = keyword2.replaceAll(
        "{{city}}",
        req.body.location_str.toLowerCase()
      );
      var searchKeyword = keyword.split(",");
      var keywordArray = [];
      searchKeyword.map((obj) => keywordArray.push(obj.trim()));
      console.log(keywordArray);
      // return res.status(200).json({status: 0, error:'errpo'});
      const keywordSeed = new services.KeywordSeed({ keywords: keywordArray });
      result1 = await customer.keywordPlanIdeas.generateKeywordIdeas({
        customer_id: customer.credentials.customer_id,
        //  page_size: 100,
        geo_target_constants: geoTargetConstants,
        keyword_seed: keywordSeed,
        historical_metrics_options: { include_average_cpc: true },
        // keyword_plan_network:'GOOGLE_SEARCH'
        //  historical_metrics_options:{include_average_cpc :true}
      });
    } else if (req.body.pageUrl !== undefined && req.body.pageUrl !== "") {
      const pageUrl = req.body.pageUrl;
      const UrlSeed = new services.UrlSeed({ url: pageUrl });
      result1 = await customer.keywordPlanIdeas.generateKeywordIdeas({
        customer_id: customer.credentials.customer_id,
        page_size: 100,
        geo_target_constants: geoTargetConstants,
        url_seed: UrlSeed,
        historical_metrics_options: { include_average_cpc: true },
        keyword_plan_network: "GOOGLE_SEARCH",
        //  historical_metrics_options:{include_average_cpc :true}
      });
    } else {
      if (req.body.isTemplate) {
        let templateName = req.body.template;

        templateName = templateName.replaceAll(" ", "-");

        const keywordsDocs = await db
          .collection("templates")
          .doc(templateName)
          .collection("keywords")
          .get();

        var keywordArray = keywordsDocs.docs.map((e) => e.data().name.trim());

        const keywordSeed = new services.KeywordSeed({
          keywords: keywordArray,
        });
        result1 = await customer.keywordPlanIdeas.generateKeywordIdeas({
          customer_id: customer.credentials.customer_id,
          //  page_size: 100,
          geo_target_constants: geoTargetConstants,
          keyword_seed: keywordSeed,
          historical_metrics_options: { include_average_cpc: true },
          // keyword_plan_network:'GOOGLE_SEARCH'
          //  historical_metrics_options:{include_average_cpc :true}
        });
      } else {
        var keyword1 = req.body.keyword;
        var keyword2 = keyword1.replaceAll("{{state code}}", "");
        var keyword = keyword2.replaceAll(
          "{{city}}",
          req.body.location_str.toLowerCase()
        );
        const searchKeyword = keyword.split(",");
        var keywordArray = [];
        searchKeyword.map((obj) => keywordArray.push(obj.trim()));
        console.log(keywordArray);
        const pageUrl = req.body.pageUrl;
        const keywordAndUrlSeed = new service.KeywordAndUrlSeed([
          { url: pageUrl, keywords: keywordArray },
        ]);
        result1 = await customer.keywordPlanIdeas.generateKeywordIdeas({
          customer_id: customer.credentials.customer_id,
          //page_size: 100,
          geo_target_constants: geoTargetConstants,
          keyword_and_url_seed: keywordAndUrlSeed,
          historical_metrics_options: { include_average_cpc: true },
          // keyword_plan_network:'GOOGLE_SEARCH'
          //  historical_metrics_options:{include_average_cpc :true}
        });
      }
    }
    // console.log(result1);

    var result = JSON.parse(JSON.stringify(result1));
    // const file = reader.readFile('./csv/keywords-city.xlsx')
    // let addDetails = [];
    let finalKeyResults;

    var properResult = await result1.map((obj) => {
      var cpc = parseFloat(
        (
          parseInt(
            obj.keyword_idea_metrics
              ? obj.keyword_idea_metrics.average_cpc_micros
              : undefined
          ) / 1000000
        ).toFixed(2)
      );
      var cmp = obj.keyword_idea_metrics
        ? obj.keyword_idea_metrics.competition
        : "-";
      var cmpIndex = parseInt(
        obj.keyword_idea_metrics
          ? obj.keyword_idea_metrics.competition_index
          : undefined
      );
      var searchVolume = parseInt(
        obj.keyword_idea_metrics
          ? obj.keyword_idea_metrics.avg_monthly_searches
          : undefined
      );
      var bidHigh =
        parseInt(
          obj.keyword_idea_metrics
            ? obj.keyword_idea_metrics.high_top_of_page_bid_micros
            : undefined
        ) / 1000000;
      var bidLow =
        parseInt(
          obj.keyword_idea_metrics
            ? obj.keyword_idea_metrics.low_top_of_page_bid_micros
            : undefined
        ) / 1000000;
      var monthlyResult = obj.keyword_idea_metrics
        ? obj.keyword_idea_metrics.monthly_search_volumes
        : [];
      var keyAnnotations = obj.keyword_idea_metrics
        ? obj.keyword_idea_metrics.keyword_annotations
        : { concepts: [] };
      return {
        avgCPC: cpc >= 0 ? cpc : "-",
        competition: cmp,
        competitionIndex: cmpIndex >= 0 ? cmpIndex : "-",
        keyword: obj.text,
        searchVolume: searchVolume >= 0 ? searchVolume : "-",
        topBidHigh: bidHigh >= 0 ? bidHigh : "-",
        topBidLow: bidLow >= 0 ? bidLow : "-",
        monthlySearchVolumes: monthlyResult,
        keywordAnnotations: keyAnnotations,
      };
    });

    // result.map(data => {
    //     var keyword1 = req.body.keyword;
    //     var keyword2 = keyword1.replaceAll("{{state code}}", "");
    //     var keyword = keyword2.replaceAll('{{city}}', req.body.location_str.toLowerCase());
    //     const searchKeywords = keyword.split(",");
    //     var keywordArray = [];
    //     searchKeywords.map(obj => keywordArray.push(obj.trim()));
    //     console.log(keywordArray);
    //     if (keywordArray.includes(data.text)) {
    //         //  console.log(data)
    //         var keywordResult = {
    //             'Niche': 'Concrete',
    //             'City': req.body.location_str,
    //             'Keyword': data.text,
    //             'Avg. Monthly Searches': (data.keyword_idea_metrics !== null && data.keyword_idea_metrics.avg_monthly_searches !== undefined) ? data.keyword_idea_metrics.avg_monthly_searches : '',
    //             'Three Month Change': '',
    //             'YoY Change': '',
    //             'Competition': (data.keyword_idea_metrics !== null && data.keyword_idea_metrics.competition !== undefined) ? data.keyword_idea_metrics.competition : '',
    //             'Top of page big (low range)': (data.keyword_idea_metrics !== null && data.keyword_idea_metrics.low_top_of_page_bid_micros !== undefined) ? data.keyword_idea_metrics.low_top_of_page_bid_micros : '',
    //             'Top of page big (high range)': (data.keyword_idea_metrics !== null && data.keyword_idea_metrics.high_top_of_page_bid_micros !== undefined) ? data.keyword_idea_metrics.high_top_of_page_bid_micros : '',
    //             'Competition Rank': (data.keyword_idea_metrics !== null && data.keyword_idea_metrics.competition_index !== undefined) ? data.keyword_idea_metrics.competition_index : '',
    //             'Low Range Rank': '',
    //             'High Range Rank': '',
    //             'CPC Average Rank': (data.keyword_idea_metrics !== null && data.keyword_idea_metrics.average_cpc_micros !== undefined) ? data.keyword_idea_metrics.average_cpc_micros : '',
    //             'Overall Rank': ''
    //         };
    //         addDetails.push(keywordResult);
    //
    //
    //     }
    // })
    // addRow(addDetails);
    //
    // Sheets read code
    //
    // const sheets = file.SheetNames
    // for(let i = 0; i < sheets.length; i++)
    // {
    //     if(file.SheetNames[i]==='results') {
    //         const temp = reader.utils.sheet_to_json(
    //             file.Sheets[file.SheetNames[i]]);
    //         addDetails.map(o=>temp.push(o));
    //         let Heading = [[  'Niche','City','keyword','Avg. Monthly Searches','Three Month Change',
    //             'YoY Change',
    //             'Competition',
    //             'Top of page big (low range)',
    //             'Top of page big (high range)',
    //             'Competition Rank',
    //             'Low Range Rank',
    //             'High Range Rank',
    //             'CPC Average Rank',
    //             'Overall Rank']];
    //         const wb = reader.utils.book_new();
    //         const ws= reader.utils.json_to_sheet([]);
    //         reader.utils.sheet_add_aoa(ws, Heading);
    //         reader.utils.sheet_add_json(ws, temp, { origin: 'A2', skipHeader: true });
    //
    //         reader.utils.book_append_sheet(wb, ws, file.SheetNames[i]);
    //
    //         reader.writeFile(wb,'./csv/keywords-city.xlsx')
    //     }
    // }
    //
    // var keywordResults = result1.filter((kword) => {
    //     return kword.keyword_idea_metrics && kword.keyword_idea_metrics.average_cpc_micros &&(req.body.minCPC >= (parseInt(kword.keyword_idea_metrics.average_cpc_micros) / 1000000) <= req.body.maxCPC );
    //     // if(kword.keyword_idea_metrics) {
    //     //     if(kword.keyword_idea_metrics.average_cpc_micros && parseInt(kword.keyword_idea_metrics.average_cpc_micros) >= parseInt(req.body.minCPC))
    //     //         return kword;
    //     // }
    // });
    //
    // // console.log('fkes', keywordResults);
    // // console.log('fkess');
    // // Competition
    // // var keywordResults2 = keywordResults.filter((kword) => {
    // //     return kword.keyword_idea_metrics && kword.keyword_idea_metrics.competition && parseFloat(kword.keyword_idea_metrics.competition) >= parseFloat(req.body.minCMP);
    // //     // if(kword.keyword_idea_metrics) {
    // //     //     if(kword.keyword_idea_metrics.average_cpc_micros && parseInt(kword.keyword_idea_metrics.average_cpc_micros) >= parseInt(req.body.minCPC))
    // //     //         return kword;
    // //     // }
    // // });
    //
    // // Search Volume
    // var finalKeyResults = keywordResults.filter((kword) => {
    //     return kword.keyword_idea_metrics && kword.keyword_idea_metrics.avg_monthly_searches && ( parseInt(req.body.minSV) >= parseInt(kword.keyword_idea_metrics.avg_monthly_searches) <= parseInt(req.body.maxSV));
    //     // if(kword2.keyword_idea_metrics) {
    //     //     if(kword2.keyword_idea_metrics.avg_monthly_searches && parseInt(kword2.keyword_idea_metrics.avg_monthly_searches) >= parseInt(req.body.minSV))
    //     //         return kword2;
    //     // }
    // });

    if (
      req.body.minSV !== undefined &&
      req.body.minSV >= 0 &&
      req.body.minCPC !== undefined &&
      req.body.minCPC >= 0 &&
      req.body.maxSV !== undefined &&
      req.body.maxSV >= 0 &&
      req.body.maxCPC !== undefined &&
      req.body.maxCPC >= 0 &&
      req.body.minCMP !== undefined &&
      req.body.minCMP >= 0 &&
      req.body.maxCMP !== undefined &&
      req.body.maxCMP >= 0
    ) {
      console.log("result1", result1.length, "proper ", properResult.length);
      // CPC
      var keywordResults = properResult
        .filter((kword) => {
          return (
            kword.avgCPC >= req.body.minCPC && kword.avgCPC <= req.body.maxCPC
          );
        })
        .map((obj) => obj);

      console.log("keywordResults", keywordResults.length);

      // Competition
      var keywordResults2 = keywordResults
        .filter((kword) => {
          return (
            parseFloat(kword.competitionIndex / 100) >=
              parseFloat(req.body.minCMP) &&
            parseFloat(kword.competitionIndex / 100) <=
              parseFloat(req.body.maxCMP)
          );
        })
        .map((obj) => obj);
      console.log("keywordResults2", keywordResults2.length);

      // Search Volume
      finalKeyResults = keywordResults2
        .filter((kword) => {
          return (
            kword.searchVolume >= parseInt(req.body.minSV) &&
            kword.searchVolume <= parseInt(req.body.maxSV)
          );
        })
        .map((obj) => obj);

      console.log("finalResults", finalKeyResults.length);
    } else {
      finalKeyResults = result1;
    }
    console.log("finalResult", finalKeyResults);
    keywordArray = keywordArray.map((e) => e.toLowerCase());
    console.log("Searched keywords", keywordArray);

    return res
      .status(200)
      .json({ status: 1, data: finalKeyResults, searchedKeys: keywordArray });
  } catch (e) {
    console.log("error", e);
    return res.status(200).json({ status: 0, error: e });
  }
  // KeyWordPlanner function for now
};

const checkCompRank = (comp) => {
  let id = 1;
  let s = comp.toLowerCase();
  if (s === "high") {
    id = 3;
  } else if (s === "medium") {
    id = 2;
  } else if (s === "low") {
    id = 1;
  } else {
    id = 0;
  }
  return id;
};

const addRow = async (rows, doc, sheetindex = 1) => {
  // use service account creds
  await doc.useServiceAccountAuth({
    client_email: CREDENTIALS.client_email,
    private_key: CREDENTIALS.private_key,
  });

  await doc.loadInfo();

  // Index of the sheet
  let sheet = doc.sheetsByIndex[sheetindex];

  for (let index = 0; index < rows.length; index++) {
    const row = rows[index];
    await sheet.addRow(row);
  }
};
const addRowResponse = async (rows, res) => {
  console.log(rows);

  return res.status(200).json({
    status: 1,
    data: rows,
  });
};
const getRows = async (start, limit, doc) => {
  // use service account creds
  await doc.useServiceAccountAuth({
    client_email: CREDENTIALS.client_email,
    private_key: CREDENTIALS.private_key,
  });

  // load the documents info
  await doc.loadInfo();

  // Index of the sheet
  let sheet = doc.sheetsByIndex[0];

  // Get all the rows
  let rows = await sheet.getRows();

  if (start + limit > rows.length) limit = rows.length;
  else limit = start + 20;
  console.log(rows.length);
  var keywords = "";
  for (let index = start; index < limit; index++) {
    const row = rows[index];
    console.log(row);
    if (row.status === "1") {
      console.log("status", row.status, row.Keyword);
      keywords += row.Keyword + ",";
    }
  }
  return keywords.slice(0, keywords.length - 1);
};
const getCityRow = async (doc, cityIndex = 3) => {
  // use service account creds
  await doc.useServiceAccountAuth({
    client_email: CREDENTIALS.client_email,
    private_key: CREDENTIALS.private_key,
  });

  // load the documents info
  await doc.loadInfo();

  // Index of the sheet
  let sheet = doc.sheetsByIndex[cityIndex];

  // Get all the rows
  let rows = await sheet.getRows();

  for (let index = 0; index < rows.length; index++) {
    const row = rows[index];
    if (row.Run === "" && row.process === "0") {
      console.log(row.city);
      console.log(row.Run);
      return row;
    }
  }
};
const updateRow = async (
  keyValue,
  oldValue,
  newValue,
  conditionValue,
  WhereValue,
  doc,
  sheetIndex = 3
) => {
  // use service account creds
  await doc.useServiceAccountAuth({
    client_email: CREDENTIALS.client_email,
    private_key: CREDENTIALS.private_key,
  });

  await doc.loadInfo();

  // Index of the sheet
  let sheet = doc.sheetsByIndex[sheetIndex];

  let rows = await sheet.getRows();
  const current_date = new Date();
  const format = {
    dd: formatData(current_date.getDate()),
    mm: formatData(current_date.getMonth() + 1),
    yyyy: current_date.getFullYear(),
    HH: formatData(current_date.getHours()),
    MM: formatData(current_date.getMinutes()),
    SS: formatData(current_date.getSeconds()),
  };
  for (let index = 0; index < rows.length; index++) {
    const row = rows[index];
    if (row[conditionValue] === WhereValue) {
      if (row[keyValue] === oldValue) {
        rows[index][keyValue] = newValue;
        if (keyValue !== "process") {
          rows[index]["Run Date"] =
            format.dd +
            "-" +
            format.mm +
            "-" +
            format.yyyy +
            " " +
            format.HH +
            ":" +
            format.MM +
            ":" +
            format.SS;
          rows[index]["Niche"] = "Concrete";
        }
        await rows[index].save();
        break;
      }
    }
  }
};
const formatHour = (input) => {
  if (input > 12) {
    return input - 12;
  }
  return input;
};
const formatData = (input) => {
  if (input > 9) {
    return input;
  } else return `0${input}`;
};
const GenerateKeywords = async (req, res) => {
  const RESPONSES_SHEET_ID = req.body.google_sheet_id;
  const email = req.body.email;
  const search_mechanism = req.body.search_mechanism;
  const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);

  var page = 1;
  var limit = 20;
  // const collectionRef = db.collection('users').doc(email).collection('keywords').where("status", "==", true)
  // const snapshot = await collectionRef.count().get();
  // console.log(snapshot.data().count);

  if (search_mechanism === "Google Keyword Planner") {
    var cityResponse = await getCityRow(doc, 3);
    const CheckExistAccountDetails = await db
      .collection("users")
      .doc(email)
      .collection("keywords")
      .where("status", "==", true)
      .where("search_mechanism", "==", search_mechanism)
      .orderBy("sr_no")
      .limit(limit)
      .get();

    await updateRow("process", "0", "1", "city", cityResponse.city, doc, 3);
    if (CheckExistAccountDetails.docs.length > 0) {
      var KeywordsInfo = CheckExistAccountDetails.docs.map((e) => e.data());
      var searchKeywords = "";
      for (var i = 0; i < KeywordsInfo.length; i++) {
        searchKeywords += KeywordsInfo[i].keyword + ",";
      }
      searchKeywords = searchKeywords.slice(0, searchKeywords.length - 1);
      console.log(searchKeywords);
      if (searchKeywords.length > 0) {
        await SearchGooglePlanningKeywords(
          req.body.customer_id,
          req.body.refresh_token,
          cityResponse.id,
          cityResponse.city,
          searchKeywords,
          cityResponse,
          doc,
          cityResponse.State
        ).then(async (response) => {
          if (response.status === 1) {
            SearchKeywordInFirebase(
              req,
              cityResponse,
              res,
              doc,
              limit,
              page,
              CheckExistAccountDetails,
              search_mechanism
            );
          }
        });
      } else {
        console.log("keyword not found");
        await updateRow("process", "0", "1", "city", cityResponse.city, doc, 3);
        return res.status(200).json({ status: 1, city: cityResponse.city });
      }
    } else {
      return res.status(200).json({ status: 1, city: cityResponse.city });
    }
  } else {
    var cityResponse = await getCityRow(doc, 5);
    SearchAhrefKeywordMaching(req, res, cityResponse);
  }
};
const SearchKeywordInFirebase = async (
  req,
  cityResponse,
  res,
  doc,
  limit,
  page,
  snapshot,
  search_mechanism
) => {
  console.log("Call Page " + page);

  const email = req.body.email;
  const last = snapshot.docs[snapshot.docs.length - 1];

  const CheckExistAccountDetails = await db
    .collection("users")
    .doc(email)
    .collection("keywords")
    .where("status", "==", true)
    .where("search_mechanism", "==", search_mechanism)
    .orderBy("sr_no")
    .startAfter(last.data().sr_no)
    .limit(limit)
    .get();
  console.log(CheckExistAccountDetails.docs.length);
  if (CheckExistAccountDetails.docs.length > 0) {
    var KeywordsInfo = CheckExistAccountDetails.docs.map((e) => e.data());
    var searchKeywords = "";
    for (var j = 0; j < KeywordsInfo.length; j++) {
      searchKeywords += KeywordsInfo[j].keyword + ",";
    }
    searchKeywords = searchKeywords.slice(0, searchKeywords.length - 1);
    console.log(searchKeywords);
    await SearchGooglePlanningKeywords(
      req.body.customer_id,
      req.body.refresh_token,
      res.id,
      cityResponse.city,
      searchKeywords,
      cityResponse,
      doc,
      cityResponse.State
    ).then(async (result) => {
      result.city = cityResponse.city;
      SearchKeywordInFirebase(
        req,
        cityResponse,
        res,
        doc,
        limit,
        page,
        CheckExistAccountDetails
      );
      //   return res.status(200).json(result);
    });
  } else {
    //  await updateRow('Run', '', '1', 'city', cityResponse.city, doc)
    return res.status(200).json({ status: 1, city: cityResponse.city });
  }
};
const SearchKeywordInGoogleSheet = async (
  req,
  cityResponse,
  res,
  doc,
  start,
  limit,
  i
) => {
  i = i + 1;
  console.log("Call " + i);

  var searchKeywords = await getRows(start, limit, doc);
  if (searchKeywords.length > 0) {
    await SearchGooglePlanningKeywords(
      req.body.customer_id,
      req.body.refresh_token,
      res.id,
      cityResponse.city,
      searchKeywords,
      cityResponse,
      doc,
      cityResponse.State
    ).then(async (result) => {
      // if (result.status === 1) {
      //     await updateRow('Run', '', '1', 'city', cityResponse.city, doc)
      // }
      result.city = cityResponse.city;
      var offset = start + limit;
      console.log("Start,limit ,offset: ", start, limit, offset);
      SearchKeywordInGoogleSheet(req, cityResponse, res, doc, offset, limit, i);
      //   return res.status(200).json(result);
    });
  } else {
    await updateRow("Run", "", "1", "city", cityResponse.city, doc, 3);
    return res.status(200).json({ status: 1, city: cityResponse.city });
  }
};
const SearchAhrefKeywordMaching = async (req, res, listRow) => {
  const RESPONSES_SHEET_ID = req.body.google_sheet_id;
  const search_mechanism = req.body.search_mechanism;
  const email = req.body.email;
  const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
  //
  // var capabilities = {
  //     'browserName': 'Chrome',
  //     'browser_version': '81.0',
  //     'os': 'Windows',
  //     'os_version': '10',
  //     'resolution': '1024x768',
  //     'browserstack.user': 'hemant_u4k2qr',
  //     'browserstack.key': '3srwUyqhYqW3cYifzLLW',
  //     'name': 'Bstack-[Node] Sample Test'
  // }

  const KeywordList = await db
    .collection("users")
    .doc(email)
    .collection("keywords")
    .where("status", "==", true)
    .where("search_mechanism", "==", search_mechanism)
    .orderBy("sr_no")
    .get();

  console.log(KeywordList.docs.length);

  if (KeywordList.docs.length > 0) {
    var KeywordsInfo = KeywordList.docs.map((e) => e.data());
    var searchKeywords = "";
    for (var i = 0; i < KeywordsInfo.length; i++) {
      searchKeywords += KeywordsInfo[i].keyword + ",";
    }
    searchKeywords = searchKeywords.slice(0, searchKeywords.length - 1);
    console.log(searchKeywords);
    var keyword2 = searchKeywords.replaceAll(
      "{{state code}}",
      listRow.state_code.toLowerCase()
    );
    var searchKeywordsList = keyword2.replaceAll(
      "{{city}}",
      listRow.city.toLowerCase()
    );
    await updateRow("process", "0", "1", "city", listRow.city, doc, 5);
    const driver = new webdriver.Builder()
      .forBrowser("chrome")
      //   .usingServer('http://hemant_u4k2qr:3srwUyqhYqW3cYifzLLW@hub.browserstack.com/wd/hub')
      //  .withCapabilities(capabilities)
      .build();
    driver.get(process.env.AHREF_LOGIN_URL).then(async function () {
      setTimeout(async () => {
        await driver
          .findElement(By.name("email"))
          .sendKeys(process.env.AHREF_EMAIL);
        await driver
          .findElement(By.name("password"))
          .sendKeys(process.env.AHREF_PASSWORD, Key.ENTER);
        setTimeout(async () => {
          // await driver.manage().setTimeouts({implicit:10000});
          await driver
            .get(process.env.AHREF_KEYWORD_MATCHING_URL)
            .then(async function () {
              driver.getTitle().then(async function (title) {
                console.log(title);
                setTimeout(async () => {
                  await driver
                    .findElement(By.css("textarea"))
                    .sendKeys(searchKeywordsList, Key.ENTER)
                    .then(async function () {
                      setTimeout(async () => {
                        driver
                          .findElement(
                            By.xpath(
                              "//a/span[contains(text(),'Matching terms')]"
                            )
                          )
                          .click()
                          .then(async function () {
                            setTimeout(async () => {
                              driver.getTitle().then(async function (title) {
                                console.log(title);
                                await driver
                                  .findElements(By.xpath("//table/tbody"))
                                  .then(async (rows) => {
                                    var addDetails = [];
                                    for (var i = 0; i < rows.length; i++) {
                                      rows[i]
                                        .findElement(By.tagName("tr"))
                                        .getAttribute("innerHTML")
                                        .then((txt) => {
                                          const result = cheerio.load(
                                            "<body><table><tr>" +
                                              txt +
                                              "</tr></table></body>"
                                          );
                                          const keyword_title = result(
                                            "td.resultsTable-keyword div div a div span span"
                                          ).text();
                                          //     console.log(keyword_title);
                                          const keyword_d = result(
                                            "td.resultsTable-difficulty div div"
                                          ).text();
                                          //    console.log(keyword_d);
                                          const keyword_volume = result(
                                            "td.resultsTable-volume"
                                          ).text();
                                          //   console.log(keyword_volume);
                                          const keyword_globalVolume = result(
                                            "td.resultsTable-globalVolume"
                                          ).text();
                                          //  console.log(keyword_globalVolume);
                                          const keyword_tp = result(
                                            "td.resultsTable-trafficPotential"
                                          ).text();
                                          //   console.log(keyword_tp);
                                          var resultsTable_cpc = result(
                                            "td.resultsTable-cpc div"
                                          ).text();
                                          //  console.log(resultsTable_cpc);
                                          var resultsTable_cps = result(
                                            "td.resultsTable-cps div"
                                          ).text();
                                          //  console.log(resultsTable_cps);
                                          const resultsTable_serpFeatures =
                                            result(
                                              "td.resultsTable-serpFeatures div div div div div div"
                                            ).text();
                                          // console.log(resultsTable_serpFeatures);
                                          resultsTable_cpc =
                                            resultsTable_cpc.replace("N/A", "");
                                          resultsTable_cps =
                                            resultsTable_cps.replace("N/A", "");
                                          if (keyword_d !== "N/A") {
                                            var keywordResult = {
                                              keyword: keyword_title,
                                              KD: keyword_d,
                                              Volume: keyword_volume,
                                              GV: keyword_globalVolume,
                                              TP: keyword_tp,
                                              CPC: resultsTable_cpc,
                                              CPS: resultsTable_cps,
                                              SF: resultsTable_serpFeatures,
                                            };
                                            addDetails.push(keywordResult);
                                          }
                                        });
                                    }
                                    console.log(addDetails);
                                    await addRow(addDetails, doc, 4);
                                    await updateRow(
                                      "Run",
                                      "",
                                      "1",
                                      "city",
                                      listRow.city,
                                      doc,
                                      5
                                    );
                                    driver.quit();
                                    return res.status(200).json({
                                      status: 1,
                                      city: listRow.city,
                                    });
                                  });
                              });
                            }, "10000");
                          });
                        //   });
                      }, "5000");
                    });
                }, "5000");
              });
            });
        }, "5000");
      }, "5000");
    });
  } else {
    return res.status(200).json({ status: 0, message: "There is no Keywords" });
  }
};
const SearchGooglePlanningKeywords = async (
  customer_id,
  refresh_token,
  location_id = "",
  location_str = "",
  search_keywords,
  res,
  doc,
  state
) => {
  const refreshToken = refresh_token;
  console.log(refreshToken);
  const customer = client.Customer({
    customer_id: customer_id, //"8284774611"
    refresh_token: refreshToken,
    //   login_customer_id:"5197253497", //  "2209324103"
  });
  try {
    console.log("LOCATION ID : ", location_id);
    const locationIds = [location_id ? location_id : "1002764"];
    const geoTargetConstants = locationIds.map((locationId) =>
      ResourceNames.geoTargetConstant(locationId)
    );
    var result1 = "";
    var keyword1 = search_keywords;
    var keyword2 = keyword1.replaceAll("{{state code}}", "");
    var keyword = keyword2.replaceAll("{{city}}", location_str.toLowerCase());
    var searchKeyword = keyword.split(",");
    //   console.log(searchKeyword);
    var keywordArray = [];
    searchKeyword.map((obj) => keywordArray.push(obj.trim()));
    console.log(keywordArray);
    // return res.status(200).json({status: 0, error:'errpo'});
    const keywordSeed = new services.KeywordSeed({ keywords: keywordArray });
    console.log(geoTargetConstants);
    result1 = await customer.keywordPlanIdeas.generateKeywordIdeas({
      customer_id: customer.credentials.customer_id,
      //  page_size: 100,
      geo_target_constants: geoTargetConstants,
      keyword_seed: keywordSeed,
      historical_metrics_options: { include_average_cpc: true },
    });

    //  console.log(result1);
    var result = JSON.parse(JSON.stringify(result1));
    let addDetails = [];

    result.map((data) => {
      //  if(keywordArray.includes(data.text)){
      if (
        data.keyword_idea_metrics !== null &&
        data.keyword_idea_metrics.avg_monthly_searches !== undefined &&
        data.keyword_idea_metrics.avg_monthly_searches > 10
      ) {
        //  console.log(data)
        var keywordResult = {
          Niche: "",
          City: location_str,
          State: state,
          Keyword: data.text,
          "Avg. Monthly Searches":
            data.keyword_idea_metrics !== null &&
            data.keyword_idea_metrics.avg_monthly_searches !== undefined
              ? data.keyword_idea_metrics.avg_monthly_searches
              : "",
          "Three Month Change": "",
          "YoY Change": "",
          Competition:
            data.keyword_idea_metrics !== null &&
            data.keyword_idea_metrics.competition !== undefined
              ? data.keyword_idea_metrics.competition
              : "",
          "Top of page big (low range)":
            data.keyword_idea_metrics !== null &&
            data.keyword_idea_metrics.low_top_of_page_bid_micros !== undefined
              ? "$" +
                (
                  data.keyword_idea_metrics.low_top_of_page_bid_micros / 1000000
                ).toFixed(2)
              : "",
          "Top of page big (high range)":
            data.keyword_idea_metrics !== null &&
            data.keyword_idea_metrics.high_top_of_page_bid_micros !== undefined
              ? "$" +
                (
                  data.keyword_idea_metrics.high_top_of_page_bid_micros /
                  1000000
                ).toFixed(2)
              : "",
          "Competition Rank":
            data.keyword_idea_metrics !== null &&
            data.keyword_idea_metrics.competition_index !== undefined
              ? data.keyword_idea_metrics.competition_index
              : "",
          "Low Range Rank": "",
          "High Range Rank": "",
          "CPC Average Rank":
            data.keyword_idea_metrics !== null &&
            data.keyword_idea_metrics.average_cpc_micros !== undefined
              ? (
                  data.keyword_idea_metrics.average_cpc_micros / 1000000
                ).toFixed(2)
              : "",
          "Overall Rank": "",
        };
        addDetails.push(keywordResult);
      }
    });
    console.log("Keyword DONE");
    await addRow(addDetails, doc, 1);

    await updateRow("Run", "", "1", "city", location_str, doc, 3);
    return { status: 1, data: result1 };
    //  return res.status(200).json({status: 1, data: result1});
  } catch (e) {
    console.log("error", e);
    return { status: 0, error: e };
    // return res.status(200).json({status: 0, error: e});
    // return false;
  }
};
const Welcome = (req, res, next) => {
  console.log("welcome");
  res.sendFile(path.join(__dirname + "/../index.html")); // KeyWordPlanner function for now
};

const GoogleScraping = (req, res, next) => {
  console.log("GoogleScraping");
  res.sendFile(path.join(__dirname + "/../google_view.html")); // KeyWordPlanner function for now
};
const loadimg = (req, res, next) => {
  res.sendFile(path.join(__dirname + "/../uploads/loader.gif")); // KeyWordPlanner function for now
};
const ImportKeywords = async (req, res, next) => {
  console.log(req.file);
  console.log(__dirname + "/../uploads/");
  getCSVImport(
    __dirname + "/../uploads/" + req.file.filename,
    req.body.email,
    res
  );
};
const ImportKeyword = async (req, res, next) => {
  console.log(req.file);
  console.log(__dirname + "/../uploads/");
  csvUpload(
    __dirname + "/../uploads/" + req.file.filename,
    req.body.refresh_token,
    req.body.customer_id,
    res,
    req.body.location_id
  );
};
const ReadXLS = async (req, res, next) => {
  const file = reader.readFile("./csv/keywords-city.xlsx");
  const sheets = file.SheetNames;
  let location_ids = [];
  let locations = [];
  let keywords = [];

  for (let i = 0; i < sheets.length; i++) {
    console.log(file.SheetNames[i]);
    if (file.SheetNames[i] === "city") {
      const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
      temp.forEach((res) => {
        location_ids.push(res.location_id);
        locations.push(res);
      });
    }
    console.log(locations.length);
    if (file.SheetNames[i] === "keywords") {
      const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
      temp.forEach((res) => {
        //{{city}}
        console.log(res.KEYWORDS);
        if (
          res.KEYWORDS.includes("{{city}}") ||
          res.KEYWORDS.includes("{{state code}}")
        ) {
          console.log(locations.length);
          for (i = 0; i < locations.length; i++) {
            var keyword = res.KEYWORDS.replace("{{city}}", locations[i].city);
            var keyword1 = keyword.replace(
              "{{state code}}",
              locations[i].state
            );
            akeywords.push(keyword1);
          }
        } else {
          keywords.push(res.KEYWORDS);
        }
        //location_id
      });
    }
  }
  console.log(keywords);
  // var resultInfo=await SearchCsvKeywords(keywords, req.body.refresh_token, req.body.customer_id,location_ids);
  // console.log(res);
  return res.status(200).json({
    status: 1,
    msg: "Keyword successfully Imported!",
    data: keywords,
  });
};

async function getCSVImport(csvUrl, email, res) {
  var i = 0;
  var str = "";

  new Promise((resolve, reject) => {
    let stream = fs.createReadStream(csvUrl);

    let csvFileStream = csvf
      .parse({ delimiter: ",", from_line: 1 })
      .on("data", async function (data) {
        if (i > 0) {
          //   str += data[0] + ',';
          console.log("Sno==>" + data[0]);
          console.log("Niche==>" + data[1]);
          console.log("keyword==>" + data[2]);
          console.log("Search Mechanism==>" + data[3]);
          console.log("status==>" + data[4]);
          var object = {
            sr_no: data[0],
            niche: data[1],
            keyword: data[2],
            search_mechanism: data[3],
            status: data[4] ? true : false,
          };
          await db
            .collection("users")
            .doc(email)
            .collection("keywords")
            .doc(data[0])
            .set(object, { merge: true })
            .then(() => {
              console.log("add keyword " + JSON.stringify(object));
            })
            .catch((error) => {
              console.log("error keyword: ", error);
            });
        }
        i++;
      })
      .on("end", async function () {
        return res.status(200).json({
          status: 1,
          message: "Keyword successfully imported!",
        });
      });
    stream.pipe(csvFileStream);
  }).catch((error) => console.log(error));
}

async function csvUpload(csvUrl, refresh_token, customer_id, res, location_id) {
  var i = 0;
  var str = "";

  new Promise((resolve, reject) => {
    let stream = fs.createReadStream(csvUrl);

    let csvFileStream = csvf
      .parse({ delimiter: ",", from_line: 2 })
      .on("data", function (data) {
        if (i > 0) {
          str += data[0] + ",";
          console.log(data[0]);
        }
        i++;
      })
      .on("end", async function () {
        //   console.log(str.substring(0, str.length - 1), refresh_token, customer_id);
        //    return res.status(200).json({
        //            status: 1,
        //            msg: 'Keyword successfully Imported!'
        //        });
        var resultInfo = await SearchCsvKeywords(
          str.substring(0, str.length - 1),
          refresh_token,
          customer_id,
          location_id
        );
        console.log(res);
        return res.status(200).json({
          status: 1,
          msg: "Keyword successfully Imported!",
          data: resultInfo,
        });
      });
    stream.pipe(csvFileStream);
  }).catch((error) => console.log(error));
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const SearchCsvKeywords = async (
  keywords,
  refreshToken,
  customer_id,
  location_ids
) => {
  const customer = client.Customer({
    customer_id: customer_id, //"8284774611"
    refresh_token: refreshToken,
    //   login_customer_id:"5197253497", //  "2209324103"
  });
  try {
    console.log(location_ids);
    const locationIds = [location_ids];

    const geoTargetConstants = locationIds.map((locationId) =>
      // console.log(locationId);
      ResourceNames.geoTargetConstant(locationId)
    );
    var result1 = "";
    if (keywords !== undefined && keywords !== "") {
      const keywordList = keywords;
      const searchKeyword = keywordList.split(",");
      const keywordSeed = new services.KeywordSeed({ keywords: searchKeyword });
      result1 = await customer.keywordPlanIdeas.generateKeywordIdeas({
        customer_id: customer.credentials.customer_id,
        page_size: 100,
        geo_target_constants: geoTargetConstants,
        keyword_seed: keywordSeed,
        historical_metrics_options: { include_average_cpc: true },
        // keyword_plan_network:'GOOGLE_SEARCH'
        //  historical_metrics_options:{include_average_cpc :true}
      });
    }
    // console.log(result1);
    var result = JSON.parse(JSON.stringify(result1));
    // result.map(data => {
    //     //console.log(data.keyword_idea_metrics)
    // })

    return result1;
  } catch (e) {
    console.log("error", e);
    return e;
  }
};

const Welcome1 = (req, res, next) => {
  //res.sendFile(path.join(__dirname + '/../index1.html')); // KeyWordPlanner function for now
  // const sheets = google.sheets({ version: 'v4', auth: oauth2Client });
  //
  //  sheets.spreadsheets.values.get({
  //     '1KR-rt8oLLLAHoH0Osewci_W78WfviNbcOgCyKCKdrQY'
  // })
  // return res.status(200).json({
  //     status: 1,
  //     url: authUrl
  // });
};
const Keyfile = (req, res, next) => {
  res.sendFile(path.join(__dirname + "/../keyfile.json"));
};
const Callback = async (req, res, next) => {
  oauth2Client.getToken(req.query.code, async function (err, token) {
    if (err) {
      console.log("Error while trying to retrieve access token", err);
      return;
    }
    console.log(token);
    oauth2Client.setCredentials(token);
    const oauth2 = google.oauth2({
      version: "v2",
      auth: oauth2Client,
    });
    const googleUser = await oauth2.userinfo.get();
    const googleuserInfo = googleUser.data;
    console.log(googleuserInfo);
    if (googleuserInfo) {
      await db
        .collection("users")
        .doc(googleuserInfo.email)
        .set(
          {
            email: googleuserInfo.email,
            name: googleuserInfo.name,
            refresh_token: token.refresh_token,
          },
          { merge: true }
        )
        .then(() => {
          console.log("add user ");
        })
        .catch((error) => {
          console.log("error user: ", error);
        });
      var auth = oauth2Client;
      res.redirect("/?uid=" + googleuserInfo.email);
    } else {
      res.redirect("/?message=INVALID ACCESS TOKEN");
    }
  });
};
const GetNewAccessToken = async (refresh_token) => {
  const request = await fetch("https://www.googleapis.com/oauth2/v4/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      refresh_token: refresh_token,
      grant_type: "refresh_token",
    }),
  });
  const data = await request.json();
  console.log("google new access token", data);
  return data;
};
// const WebScrapingKeywords = async (req, res, next) => { //Huntsville,AL,United States
//     console.log(req.body);
//     var key = req.body.keyword.replaceAll(" ", "-").toLowerCase();
//     const request = await fetch("https://www.yelp.com/search?find_desc=" + req.body.keyword + "&find_loc=" + req.body.location, {
//         method: "GET"
//     });
//
//
//     const data = await request.text();
//     const result = cheerio.load(data)
//     const listItems = result("h3.css-1agk4wl a");
//     console.log(listItems.text().length);
//     if (listItems.text().length > 0) {
//         var results = [];
//         for (var i = 0; i < 10; i++) {
//             //    setTimeout(async () => {
//
//             console.log('Title : ' + result(listItems[i]).html());
//             console.log('URL : ' + 'https://www.yelp.com' + result(listItems[i]).attr('href'));
//             const request1 = await fetch('https://www.yelp.com' + result(listItems[i]).attr('href'), {
//                 method: "GET"
//             });
//             const data1 = await request1.text();
//             const result1 = cheerio.load(data1)
//             // const text = result1(".css-r9996t a span");
//             // console.log('Address : '+text.text());
//             const text = result1("div.css-1vhakgw div div.arrange-unit__09f24__rqHTg p.css-qyp8bo");
//
//             var address = text.html();
//             if (text.html() === null) {
//                 const text1 = result1(".css-r9996t a span");
//                 console.log('Address : ' + text1.text());
//                 address = text1.text();
//             }
//             console.log('Address : ' + address);
//             const mobile = result1("div.arrange-unit__09f24__rqHTg p.css-1p9ibgf");
//             var dd = mobile.text().split('(');
//             var ll = dd[1].replaceAll('Get Directions', '');
//             var mm = ll.replaceAll('View Service Area', '');
//             const desc = result1("div.border-color--default__09f24__NPAKY div.border-color--default__09f24__NPAKY p.css-1evauet");
//             console.log('Desc : ' + removeTags(desc.html()));
//             // var ll=dd[1].split('Get');
//             console.log('Contact No : (' + mm);
//             const ddata = result1("div.arrange-unit__09f24__rqHTg a.css-1fliqpp img").attr('src');
//             var lat = '';
//             var lng = '';
//             if (ddata.includes('center=') === true) {
//                 // console.log('map url',ddata)
//                 var d1 = ddata.split("center=");
//                 var d2 = d1[1].split('&')
//                 var d3 = d2[0].split("-");
//                 lat = d3[0].replace('%2C', '');
//                 lng = d3[1];
//             }
//             results.push({
//                 business_name: result(listItems[i]).html(),
//                 url: 'https://www.yelp.com' + result(listItems[i]).attr('href'),
//                 address: address,
//                 mobile: '(' + mm,
//                 Desc: removeTags(desc.html()),
//                 map_url: ddata,
//                 latitude: lat,
//                 longitude: lng
//
//             })
//             var id = (parseInt(i) + 1).toString()
//             console.log(id);
//
//             await db.collection('keywords').doc(key).collection('yelp.com').doc(id).set(
//                 {
//                     business_name: result(listItems[i]).html(),
//                     url: 'https://www.yelp.com' + result(listItems[i]).attr('href'),
//                     address: address,
//                     mobile: '(' + mm,
//                     Desc: removeTags(desc.html()),
//                     map_url: ddata,
//                     latitude: lat,
//                     longitude: lng
//
//                 }, {merge: true}).then(() => {
//                 console.log("add keyword ");
//             }).catch((error) => {
//                 console.log("error user: ", error);
//             });
//             //   }, "10000")
//
//
//         }
//         // await db.collection('users').doc(email).collection('my_drive').doc(fileId).set(
//         return res.status(200).json({
//             status: 1,
//             data: results
//         });
//     } else {
//         return res.status(204).json({
//             status: 0,
//             message: 'Not able to web scraping site'
//         });
//     }
// }

function removeTags(str) {
  if (str === null || str === "") return false;
  else str = str.toString();
  // Regular expression to identify HTML tags i
  // the input string. Replacing the identified
  // HTML tag with a null string.
  //

  return str.replace(/(<([^>]+)>)/gi, "");
}

const AuthLinkGenerate = async (req, res, next) => {
  var SCOPES = [
    "https://www.googleapis.com/auth/adwords",
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/spreadsheets.readonly",
  ];
  var authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
    include_granted_scopes: true,
    prompt: "consent",
    redirect_uri: process.env.REDIRECT_URL,
  });
  console.log("Authorize this app by visiting this url : ", authUrl);

  return res.status(200).json({
    status: 1,
    url: authUrl,
  });
};

const GetKeywordsData = async (req, res, next) => {
  var keyword = req.query.keyword;
  var location = req.query.location;
  var total_result_count = req.query.total_result;
  total_result_count = Number(total_result_count) + 1;

  const search_keyword = keyword;
  const city_key = location;

  const webdriver = require("selenium-webdriver"),
    By = webdriver.By,
    until = webdriver.until,
    Key = webdriver.Key,
    WebElement = webdriver.WebElement;

  const driver = new webdriver.Builder()
    .forBrowser("chrome")
    // .setChromeOptions(chromeOptions)
    .build();
  const db = admin.firestore();
  var j = 1;
  var addDetails = [];
  var final_keyword = keyword.replace("{{city}}", location);

  await driver.get("https://www.google.com/").then(function () {
    driver
      .findElement(By.name("q"))
      .sendKeys(final_keyword, Key.ENTER)
      .then(async function () {
        setTimeout(async () => {
          await driver
            .findElements(By.className("tF2Cxc"))
            .then(async (rows) => {
              for (var i = 0; i <= rows.length; i++) {
                if (rows[i] != undefined) {
                  await rows[i]
                    .findElement(By.tagName("div"))
                    .getAttribute("innerHTML")
                    .then(async (txt) => {
                      const result = cheerio.load(
                        "<body><div>" + txt + "</div></body>"
                      );
                      const keyword_title = result("div div div a h3").text();
                      const description = result("div.lyLwlc").text();
                      const website = result("div div div a").attr("href");

                      if (website != undefined && j <= total_result_count-1) {
                        var keywordResult = {
                          name: keyword_title,
                          email: "",
                          description: description,
                          website: website,
                          address: "",
                          contact: "",
                          geo: "",
                          logo: "",
                        };

                        addDetails.push(keywordResult);
                        j++;
                      }
                    });
                }
              }
            });

          for (let k = 0; k < addDetails.length; k++) {
            var search_id = k + 1;
            var search_key = search_keyword
              .toLowerCase()
              .replaceAll(" ", "-")
              .trim();
            var add_key = addDetails[k];
            add_key["searchId"] = search_id.toString();
            await db
              .collection("keywords")
              .doc(search_key)
              .collection("google.com")
              .doc(city_key.toLowerCase().replaceAll(" ", "-").trim())
              .collection("result")
              .doc(search_id.toString())
              .set(add_key, { merge: true })
              .then(() => {
                console.log("add account " + k);
                // console.log(addDetails[k]);
              })
              .catch((error) => {
                console.log("error account: ", error);
              });
          }

          driver.quit();

          return res.status(200).json({
            status: 1,
            msg: "Keyword successfully Imported!",
            data: 1,
          });
        }, "5000");
      });
  });
};

const GetmapData = async (req, res, next) => {
  var keyword = req.query.keyword;
  var location = req.query.location;
  var total_result_count = req.query.total_result;

  const search_keyword = keyword;
  const city_key = location;

  const webdriver = require("selenium-webdriver"),
    By = webdriver.By,
    until = webdriver.until,
    Key = webdriver.Key,
    WebElement = webdriver.WebElement;

  const driver = new webdriver.Builder()
    .forBrowser("chrome")
    // .setChromeOptions(chromeOptions)
    .build();
  const db = admin.firestore();
  var j = 1;
  var addDetails = [];
  var final_keyword = keyword.replace("{{city}}", location);

  await driver
    .get(
      "https://www.google.com/maps/search/" +
        final_keyword.toLowerCase().replaceAll(" ", "+").trim() +
        ""
    )
    .then(
      function () {
        setTimeout(async () => {
          await driver
            .findElements(By.className("Nv2PK"))
            .then(async (rows) => {
              for (var i = 0; i <= total_result_count - 1; i++) {
                if (rows[i] != undefined) {
                  await rows[i].getAttribute("innerHTML").then(async (txt) => {
                    var website = "";
                    const result = cheerio.load(
                      "<body><div>" + txt + "</div></body>"
                    );
                    const keyword_title = result(
                      ".fontHeadlineSmall span"
                    ).text();
                    website = result(".Rwjeuc div a").attr("href");
                    const address = result(
                      ".fontBodyMedium > div:nth-child(4)  > div:nth-child(2)"
                    ).text();
                    const mobile = result(
                      ".fontBodyMedium > div:nth-child(4)  > div:nth-child(3) > span:nth-child(2)"
                    ).text();
                    var contact = "";

                    if (website == undefined) {
                      website = "";
                    }
                    if (mobile == "") {
                      var contact = result(
                        ".fontBodyMedium > div:nth-child(4) > div:nth-child(3) > span"
                      ).text();
                    } else {
                      contact = mobile;
                    }

                    var keywordResult = {
                      name: keyword_title,
                      email: "",
                      description: "",
                      website: website,
                      address: address.replaceAll("·", "").replace(/\s/g, " "),
                      contact: contact.replaceAll("·", ""),
                      geo: "",
                      logo: "",
                    };

                    addDetails.push(keywordResult);
                  });
                }
              }
            });

          for (let k = 0; k < addDetails.length; k++) {
            var search_id = k + 1;
            var search_key = search_keyword
              .toLowerCase()
              .replaceAll(" ", "-")
              .trim();
            var add_key = addDetails[k];
            add_key["searchId"] = search_id.toString();
            await db
              .collection("keywords")
              .doc(search_key)
              .collection("map.com")
              .doc(city_key.toLowerCase().replaceAll(" ", "-").trim())
              .collection("result")
              .doc(search_id.toString())
              .set(add_key, { merge: true })
              .then(() => {
                console.log("add account " + k);
                // console.log(addDetails[k]);
              })
              .catch((error) => {
                console.log("error account: ", error);
              });
          }

          //   console.log(addDetails);

          driver.quit();

          return res.status(200).json({
            status: 1,
            msg: "Keyword successfully Imported!",
            data: 1,
          });
        }, "5000");
      },
      function (err) {
        driver.quit();

        // console.log(k_j);

        return res.status(200).json({
          status: 1,
          msg: "Keyword successfully Imported!",
          data: 1,
        });
      }
    );
};

const GetyelpData = async (req, res, next) => {
  var addDetails = [];
  var keyword = req.query.keyword;
  var location = req.query.location;
  var total_result_count = req.query.total_result;

  const search_keyword = keyword;
  const city_key = location;

  const webdriver = require("selenium-webdriver"),
    By = webdriver.By,
    until = webdriver.until,
    Key = webdriver.Key,
    WebElement = webdriver.WebElement;

  const driver = new webdriver.Builder()
    .forBrowser("chrome")
    // .setChromeOptions(chromeOptions)
    .build();
  const db = admin.firestore();

  var main_url = [];

  var headings = [];

  var check_complete = 0;
  var k_j = 0;
  var total_count = Number(total_result_count) + 9;
  console.log(total_count);
  var final_keyword = keyword.replace("{{city}}", "");
  setTimeout(async () => {
    // driver.get('https://www.yelp.com/search?find_desc=concrete+contractons&find_loc=United+States+Adit%2C+NM%2C+United+States').then( function () {
    await driver
      .get(
        "https://www.yelp.com/search?find_desc=" +
          final_keyword.toLowerCase().replaceAll(" ", "+").trim() +
          "&find_loc=" +
          location.toLowerCase().replaceAll(" ", "+").trim() +
          ""
      )
      .then(function () {
        setTimeout(async () => {
          for (var i = 9; i <= total_count; i++) {
            await driver
              .findElement(
                By.css("#main-content > div > ul > li:nth-child(" + i + ")")
              )
              .getAttribute("innerHTML")
              .then(
                function (profile) {
                  const result = cheerio.load(
                    "<body><div>" + profile + "</div></body>"
                  );
                  var url = result(".css-1egxyvc a").attr("href");
                  if (url != undefined) {
                    main_url.push(url);
                  }
                },
                function (err) {
                  // driver.quit();

                  // console.log(k_j);

                  // return res.status(200).json({
                  //   status: 1,
                  //   msg: "Keyword successfully Imported!",
                  //   data: 1,
                  // });
                }
              );
          }
          get_yeld_data(main_url);
        }, "5000");
      });
  }, "1000");

  function get_yeld_data(main_url) {
    console.log(main_url);
    if(main_url.length == 0){
      driver.quit();

        return res.status(200).json({
          status: 1,
          msg: "Keyword successfully Imported!",
          data: 1,
        });
    }
    var current_url = main_url[k_j];
    if (current_url != undefined) {
     
      setTimeout(async () => {
        await driver
          .get("https://www.yelp.com" + current_url)
          .then(async function () {
            driver
              .findElement(By.css("main"))
              .getAttribute("innerHTML")
              .then(
                async function (second_profile) {
                  var phone = "";
                  var web_url = "";
                  await driver
                    .findElements(By.className("css-1vhakgw"))
                    .then(async (rows) => {
                      for (var i = 0; i <= 1; i++) {
                        if (rows[i] != undefined) {
                          await rows[i]
                            .findElement(By.tagName("div"))
                            .getAttribute("innerHTML")
                            .then(async (txt) => {
                              const result_data = cheerio.load(
                                "<body><div>" + txt + "</div></body>"
                              );
                              if (
                                result_data(".css-na3oda").text() ==
                                "Business website"
                              ) {
                                web_url =
                                  "https://www.yelp.com" +
                                  result_data(".css-1p9ibgf a").attr("href");
                              }
                              if (
                                result_data(".css-na3oda").text() ==
                                "Phone number"
                              ) {
                                phone = result_data(".css-1p9ibgf").text();
                              }
                            });
                        }
                      }
                    });
                  const results = cheerio.load(
                    "<body><div>" + second_profile + "</div></body>"
                  );
                  var item_index = k_j + 1;
                  var keywordResult = {
                    name: results(".css-1se8maq").text(),
                    email: "",
                    description: results(
                      "section:nth-child(8) > div:nth-child(2)"
                    ).text(),
                    website: web_url,
                    address: results("address").text(),
                    contact: phone,
                    geo: "",
                    logo: "",
                    searchId: item_index.toString(),
                  };
                  console.log(keywordResult);
                  //  var item_index = k_j+1;
                  var search_key = search_keyword
                    .toLowerCase()
                    .replaceAll(" ", "-")
                    .trim();
                  setTimeout(async () => {
                    await db
                      .collection("keywords")
                      .doc(search_key)
                      .collection("yelp.com")
                      .doc(city_key.toLowerCase().replaceAll(" ", "-").trim())
                      .collection("result")
                      .doc(item_index.toString())
                      .set(keywordResult, { merge: true })
                      .then(() => {
                        console.log("add account yelp " + k_j);
                      })
                      .catch((error) => {
                        console.log("error account: ", error);
                      });
                  }, "1000");
                  if (main_url.length == k_j) {
                    driver.quit();
                    return true;
                  } else {
                    // console.log("round"+k_j);
                    k_j++;
                    get_yeld_data(main_url);
                  }
                },
                function (err) {
                  if (err.state && err.state === "no such element") {
                    console.log("Element not found");
                  } else {
                    get_yeld_data(main_url);
                  }
                }
              );
          });
      }, "1000");
    } else {
      if (main_url.length == k_j) {
        driver.quit();

        return res.status(200).json({
          status: 1,
          msg: "Keyword successfully Imported!",
          data: 1,
        });
      } else {
        k_j++;
        get_yeld_data(main_url);
      }
    }
  }
};

const GethouzzData = async (req, res, next) => {
  var addDetails = [];
  var keyword = req.query.keyword;
  var location = req.query.location;
  var total_result_count = req.query.total_result;
  total_result_count = Number(total_result_count) - 1;

  const search_keyword = keyword;
  const city_key = location;

  const webdriver = require("selenium-webdriver"),
    By = webdriver.By,
    until = webdriver.until,
    Key = webdriver.Key,
    WebElement = webdriver.WebElement;

  const driver = new webdriver.Builder()
    .forBrowser("chrome")
    // .setChromeOptions(chromeOptions)
    .build();
  const db = admin.firestore();

  var main_url = [];

  var headings = [];

  var check_complete = 0;
  var k_j = 0;

  var final_keyword = keyword.replace("{{city}}", "");

  setTimeout(async () => {
    await driver
      .get(
        "https://www.houzz.com/professionals/query/" + final_keyword + "/nqrwns"
      )
      .then(
        function () {
          setTimeout(async () => {
            await driver
              .findElements(By.className("hz-pro-search-results__item"))
              .then(async (rows) => {
                for (var i = 0; i <= total_result_count; i++) {
                  if (rows[i] != undefined) {
                    await rows[i]
                      .findElement(By.tagName("div"))
                      .getAttribute("innerHTML")
                      .then(async (txt) => {
                        const result = cheerio.load(
                          "<body><div>" + txt + "</div></body>"
                        );
                        const url = result(".hz-pro-ctl").attr("href");
                        if (url != undefined) {
                          main_url.push(url);
                        }
                      });
                  }
                }

                get_houzz_data(main_url);
              });
          }, "5000");

          //  driver.quit();
        },
        function (err) {
          driver.quit();

          // console.log(k_j);

          return res.status(200).json({
            status: 1,
            msg: "Keyword successfully Imported!",
            data: 1,
          });
        }
      );
  }, "1000");

  function get_houzz_data(main_url) {
    var current_url = main_url[k_j];

    if (current_url != undefined && main_url.length != k_j) {
      console.log(current_url);

      setTimeout(async () => {
        await driver.get(current_url).then(async function () {
          driver
            .findElement(By.css("main"))
            .getAttribute("innerHTML")
            .then(async function (second_profile) {
              const results = cheerio.load(
                "<body><div>" + second_profile + "</div></body>"
              );

              var logo = results(".sc-6u80a8-0 img").attr("src");

              if (logo != undefined) {
                logo = results(".sc-6u80a8-0 img").attr("src");
              } else {
                logo = "";
              }

              var item_index = k_j + 1;

              var keywordResult = {
                name: results(".gamUmb h1").text(),

                email: "",

                description: results(".funCNc").text(),

                website: results(".dRuQKg").text(),

                address: results(
                  "#business > div > div:nth-child(4) > div"
                ).text(),

                contact: results(
                  "#business > div > div:nth-child(2) > p"
                ).text(),

                geo: "",

                logo: logo,

                searchId: item_index.toString(),
              };

              var search_key = search_keyword
                .toLowerCase()
                .replaceAll(" ", "-")
                .trim();
              setTimeout(async () => {
                await db
                  .collection("keywords")
                  .doc(search_key)
                  .collection("houzz.com")
                  .doc(city_key.toLowerCase().replaceAll(" ", "-").trim())
                  .collection("result")
                  .doc(item_index.toString())
                  .set(keywordResult, { merge: true })
                  .then(() => {
                    console.log("add account houzz " + k_j);
                    // console.log(addDetails[k]);
                  })
                  .catch((error) => {
                    console.log("error account: ", error);
                  });
              }, 1000);

              if (main_url.length == k_j) {
                driver.quit();

                console.log(k_j);

                return res.status(200).json({
                  status: 1,
                  msg: "Keyword successfully Imported!",
                  data: 1,
                });
              } else {
                k_j++;

                get_houzz_data(main_url);
              }
            });
        });
      }, "1000");
    } else {
      driver.quit();
      return res.status(200).json({
        status: 1,
        msg: "Keyword successfully Imported!",
        data: 1,
      });
    }
  }
};



const GetKeywordsdataList = async (req, res, next) => {


    
    let show_duplication_datas = new Array();;

  var keyword = req.query.keyword;

  var location = req.query.location;

  // var final_keyword = keyword.replace("{{city}}", location);

  var search_key = keyword
                .toLowerCase()
                .replaceAll(" ", "-")
                .trim();
console.log(search_key);
  var datas_id = [];

  var total_data = [];

  const db = admin.firestore();

  var all_web = [];

  const data = await db
    .collection("keywords")
    .doc(search_key)
    .collection("google.com")
    .doc(location.toLowerCase().replaceAll(" ", "-").trim())
    .collection("result")
    .get();
    var google_data = data.docs.map((obj) => obj.data());
// console.log(google_data);
// return false;
    google_data.forEach((number, index) => {
      if(number.website != ''){
        all_web.push(number.website);
        }
    });

  total_data.push(google_data);

  const data_map = await db
    .collection("keywords")
    .doc(search_key)
    .collection("map.com")
    .doc(location.toLowerCase().replaceAll(" ", "-").trim())
    .collection("result")
    .get();
  var google_map = data_map.docs.map((obj) => obj.data());

  google_map.forEach((number, index) => {
    if(number.website != ''){
      all_web.push(number.website);
      }
  });

  const data_yelp = await db
    .collection("keywords")
    .doc(search_key)
    .collection("yelp.com")
    .doc(location.toLowerCase().replaceAll(" ", "-").trim())
    .collection("result")
    .get();

  var yelpcom = data_yelp.docs.map((obj) => obj.data());

  yelpcom.forEach((number, index) => {
    if(number.website != ''){
      all_web.push(number.website);
      }
  });

  const data_houzz = await db
    .collection("keywords")
    .doc(search_key)
    .collection("houzz.com")
    .doc(location.toLowerCase().replaceAll(" ", "-").trim())
    .collection("result")
    .get();
  var houzzcom = data_houzz.docs.map((obj) => obj.data());

  houzzcom.forEach((number, index) => {
    if(number.website != ''){
    all_web.push(number.website);
    }
  });
// console.log(all_web);
// return false;
  const noEmptyStrings = Array.from(new Set(all_web));
  // const noEmptyStrings = unique.filter((unique) => unique !== "");
  var rs = 0;
  var f_d = '';
  

  var bar = new Promise((resolve, reject) => {
    noEmptyStrings.forEach( async (value, index, array) => {
        var google = "-";
        var map = "-";
        var yelp = "-";
        var houzz = "-";
        var url = value;

        var get_result_of_google = await db
        .collection("keywords")
        .doc(search_key)
        .collection("google.com")
        .doc(location.toLowerCase().replaceAll(" ", "-").trim())
        .collection("result")
        .where("website", "==", value)
        .get();
  
      var f_google_data = get_result_of_google.docs.map((obj) => obj.data());
  
      if (f_google_data.length == 1) {
        google = f_google_data[0].searchId;
      }
  
      var get_result_of_map = await db
        .collection("keywords")
        .doc(search_key)
        .collection("map.com")
        .doc(location.toLowerCase().replaceAll(" ", "-").trim())
        .collection("result")
        .where("website", "==", value)
        .get();
  
      var f_map_data = get_result_of_map.docs.map((obj) => obj.data());
  
      if (f_map_data.length == 1) {
        map = f_map_data[0].searchId;
      }
  
      var get_result_of_yelp = await db
        .collection("keywords")
        .doc(search_key)
        .collection("yelp.com")
        .doc(location.toLowerCase().replaceAll(" ", "-").trim())
        .collection("result")
        .where("website", "==", value)
        .get();
  
      var f_yelp_data = get_result_of_yelp.docs.map((obj) => obj.data());
  
      if (f_yelp_data.length == 1) {
        yelp = f_yelp_data[0].searchId;
      }
  
      var get_result_of_houzz = await db
        .collection("keywords")
        .doc(search_key)
        .collection("houzz.com")
        .doc(location.toLowerCase().replaceAll(" ", "-").trim())
        .collection("result")
        .where("website", "==", value)
        .get();
  
      var f_houzz_data = get_result_of_houzz.docs.map((obj) => obj.data());
  
      if (f_houzz_data.length == 1) {
        houzz = f_houzz_data[0].searchId;
      }

        var keywordResult = {

            google_rank: google,
      
            map_rank: map,
      
            yelp_rank: yelp,
      
            houzz_rank: houzz,
      
            url_rank: url
      
          };

          show_duplication_datas[rs] =  keywordResult;
    
    

        if (index === array.length -1) resolve();
        rs++;
    });
});

bar.then(() => {
    console.log(noEmptyStrings.length);
    console.log(show_duplication_datas);
    console.log('All done!');
    return res.status(200).json({
        status: 1,
        msg: "Keyword successfully Imported!",
        duplication: show_duplication_datas,
      });
});

};

const GetAhrefsData = async (req, res, next) => {

  let chrome = require('selenium-webdriver/chrome');

  const webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until,
  Key = webdriver.Key,
  WebElement = webdriver.WebElement;

  var options = new chrome.Options();
  options.addArguments('--no-sandbox')
  options.addArguments('start-maximized')
  options.addArguments('enable-automation')
  options.addArguments('--disable-infobars')
  options.addArguments('--disable-dev-shm-usage')
  options.addArguments('--disable-browser-side-navigation')
  options.addArguments("--remote-debugging-port=9222")
  options.addArguments('--disable-gpu')
  options.addArguments("--log-level=3")


const driver = new webdriver.Builder()
  .forBrowser("chrome")
  // .forBrowser("firefox")
  .setChromeOptions(options)
  .build();

    driver.get('https://app.ahrefs.com/user/login').then(async function () {
      setTimeout(async () => {
          await driver.findElement(By.xpath('/html/body/div[2]/div/div/div/div[1]/div/div/div/div/form/div/div[1]/div/input')).sendKeys('jignesh@freshcodes.in')
          await driver.findElement(By.xpath('/html/body/div[2]/div/div/div/div[1]/div/div/div/div/form/div/div[2]/div/div/input')).sendKeys('jP@9974046560', Key.ENTER);
            handle = driver.current_window_handle;
            driver.service.stop();
        }, "10000");
      });
  
    // return res.status(200).json({
    //   status: 1,
    //   msg: "Keyword successfully Imported!",
    // });

};

module.exports = {
  Welcome,
  // Welcome1,
  // GetNewAccessToken,
  AuthLinkGenerate,
  Callback,
  Keyfile,
  SearchKeyword,
  getAccountDetails,
  getCountryList,
  getProvinceList,
  getCityList,
  GetGeoTargetLocationList,
  GetGeoTargetRegions,
  // ImportKeyword,
  // ReadXLS,
  GenerateKeywords,
  ImportKeywords,
  getNicheList,
  addNewNiche,
  getTemplateList,
  addNewTemplate,
  getTemplateKeywordList,
  addTemplateKeyWord,
  DeleteNiche,
  DeleteKT,
  DeleteKeyword,
  generateSearchRank,
  searchAhrefKeyword,
  searchCityKeyword,
  getCityRankList,
  searchStateKeyword,
  getStateRankList,
  getCityRankerList,
  getStateCityRank,
  getUsCities,
  loadimg,
  doLogin,
  getGeoProvinces,
  getGeoCities,
  GetKeywordsData,
  GetKeywordsdataList,
  GetmapData,
  GoogleScraping,
  GetyelpData,
  GethouzzData,
  GetAhrefsData,
  // WebScrapingKeywords
};
