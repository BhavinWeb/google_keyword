const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const cheerio = require('cheerio')
const GetKeywordResults = async () => {
    const request = await fetch("https://www.yelp.com/search?find_desc=concrete contractors&find_loc=Huntsville,AL,United States", {
        method: "GET"
    });

    const data = await request.text();
    const result = cheerio.load(data)
    const listItems = result("h3.css-1agk4wl a");
    console.log(listItems.text().length);
    for (var i = 0; i < 1; i++) {
        console.log('Title : ' + result(listItems[i]).html());
        console.log('URL : ' + 'https://www.yelp.com' + result(listItems[i]).attr('href'));
        const request1 = await fetch('https://www.yelp.com' + result(listItems[i]).attr('href'), {
            method: "GET"
        });
        const data1 = await request1.text();
        const result1 = cheerio.load(data1)
        const address1 = result1("div.arrange-unit__09f24__rqHTg p.css-qyp8bo");
        console.log('Address : ', address1.html());
        const mobile = result1("div.arrange-unit__09f24__rqHTg p.css-1p9ibgf");
        var dd = mobile.text().split('(');
        var ll = dd[1].replaceAll('Get Directions', '');
        var mm = ll.replaceAll('View Service Area', '');
        // var ll=dd[1].split('Get');
        console.log('Contact No : (' + ll);
        var data2 = result1("div.arrange-unit__09f24__rqHTg border-color--default__09f24__NPAKY img").attr('src');


        const desc = result1("div.border-color--default__09f24__NPAKY div.border-color--default__09f24__NPAKY p.css-1evauet");
        console.log('Desc : ' + removeTags(desc.html()));
    }
    // listItems.each(async function (idx, el) {

    //     console.log(el);
    //     console.log(result(el).html());
    //     console.log('https://www.yelp.com'+result(el).attr('href'));
    //     // const request1 = await fetch('https://www.yelp.com'+result(el).attr('href'), {
    //     //     method: "GET"
    //     // });
    //     // const data1 = await request1.text();
    //     // const result1 = cheerio.load(data1)
    //     // const text = result1(".css-r9996t a span");
    //     // console.log(text.text());
    // });

}
(async() => {
    // const request1 = await fetch('https://www.yelp.com/biz/haley-flooring-and-interiors-huntsville?osq=polished+concrete+floors', {
    //     method: "GET"
    // });
    // const data1 = await request1.text();
    // const result1 = cheerio.load(data1)
    // const dd = result1("div.arrange-unit__09f24__rqHTg a.css-1fliqpp img").attr('src');
    // var d1=dd.split("center=");
    // var d2=d1[1].split('&')
    // var d3=d2[0].split("-");
    // console.log('Address : ', d3[0].replace('%2C',''),d3[1]);

})();
var str1='https://maps.googleapis.com/maps/api/staticmap?size=315x150&sensor=false&client=gme-yelp&language=en&scale=1&path=color%3A0x0947a766%7Cweight%3A0%7Cfillcolor%3A0x0947a766%7C34.764307%2C-86.992946%7C34.144836%2C-86.880329%7C3\n' + '4.144836%2C-86.802910%7C34.189073%2C-86.101936%7C34.628812%2C-86.003210%7C34.678750%2C-86.003210%7C35.177074%2C-86.499178%7C35.177074%2C-86.608575%7C34.811836%2C-86.992946%7C34.764307%2C-86.992946&markers=scale%3A1%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_32x43.png%7C34.655062%2C-86.567133&signature=WprYLyPvb0xWjQS8JaGuIQED7hg='
var str='https://maps.googleapis.com/maps/api/staticmap?size=315x150&sensor=false&client=gme-yelp&language=en&scale=1&zoom=15&center=34.738996%2C-86.578632&markers=scale%3A1%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_32x43.png%7C34.738996%2C-86.578632&signature=4ya19fjZKFCQuTPo85NIGUv4C24='

console.log(str.includes('center='));
function removeTags(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();



    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    //

    return str.replace(/(<([^>]+)>)/ig, '');
}

const rp = require('promise-request-retry');

const API_KEY = '28aed8d2b535cebba799954d2c4d2eba';
const NUM_RETRIES = 5;

const URL = 'https://www.yelp.com/search?find_desc=concrete contractors&find_loc=Huntsville,AL,United States'

var options = {
    uri: `http://api.scraperapi.com/`,
    qs: {
        'api_key': API_KEY,
        'url': URL
    },
    retry : NUM_RETRIES,
    verbose_logging : false,
    accepted: [ 200, 404, 403 ],
    delay: 5000,
    factor: 2,
    resolveWithFullResponse: true
}

function callapi()
{
    rp(options)
        .then(async response => {
       //  console.log(response.body)
            const result = cheerio.load(response.body)
            const listItems = result("h3.css-1agk4wl a");
            var results=[];
            for (var i=0;i<10;i++){
                console.log('Title : '+result(listItems[i]).html());
                console.log('URL : '+'https://www.yelp.com'+result(listItems[i]).attr('href'));
                await setTimeout(async () => {
                    console.log('delay 1 min');
                var options2 = {
                    uri: `http://api.scraperapi.com/`,
                    qs: {
                        'api_key': API_KEY,
                        'url': 'https://www.yelp.com'+result(listItems[i]).attr('href')
                    },
                    retry : NUM_RETRIES,
                    verbose_logging : false,
                    accepted: [ 200, 404, 403 ],
                    delay: 5000,
                    factor: 2,
                    resolveWithFullResponse: true
                }
                rp(options2)
                    .then(async response2 => {
                      //  console.log(response2.body)
                        const result1 = cheerio.load(response2.body)
                        const text = result1("div.css-1vhakgw div div.arrange-unit__09f24__rqHTg p.css-qyp8bo");

                        var address=text.html();
                        if(text.html() === null){
                            const text1 = result1(".css-r9996t a span");
                            console.log('Address : '+text1.text());
                            address=text1.text();
                        }
                        console.log('Address : '+address);
                        const mobile = result1("div.arrange-unit__09f24__rqHTg p.css-1p9ibgf");
                        var dd=mobile.text().split('(');'' +
                        console.log(dd);
                        var mm='';
                        if(dd!=='') {
                            if (dd[1].includes('Get Directions') === true) {
                                var ll = dd[1].replaceAll('Get Directions', '');
                            } else {
                                var ll = dd[1];
                            }
                            if (ll.includes('View Service Area') === true) {
                                var mm = ll.replaceAll('View Service Area', '');
                            } else {
                                var mm = ll;
                            }
                        }
                        const desc = result1("div.border-color--default__09f24__NPAKY div.border-color--default__09f24__NPAKY p.css-1evauet");
                        console.log('Desc : '+removeTags(desc.html()));
                        // var ll=dd[1].split('Get');
                        console.log('Contact No : ('+mm);
                        const ddata = result1("div.arrange-unit__09f24__rqHTg a.css-1fliqpp img").attr('src');
                        var lat='';
                        var lng='';
                        if(ddata.includes('center=')=== true) {
                            // console.log('map url',ddata)
                            var d1=ddata.split("center=");
                            var d2=d1[1].split('&')
                            var d3=d2[0].split("-");
                            lat=d3[0].replace('%2C','');
                            lng=d3[1];
                        }
                        results.push({
                            business_name:result(listItems[i]).html(),
                            url:'https://www.yelp.com'+result(listItems[i]).attr('href'),
                            address:address,
                            mobile:'('+mm,
                            Desc:removeTags(desc.html()),
                            map_url:ddata,
                            latitude:lat,
                            longitude:lng

                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })
                }, "60000")

            }
        })
        .catch(error => {
            console.log(error)
        })
}
callapi();

//GetKeywordResults();
// const axios = require('axios');
//
// (async () => {
//     const {data} = await axios({
//         data: {
//             apiKey: '7844e813dbdc169de8d4a711c433b333',
//             url: 'https://www.yelp.com/search?find_desc=concrete contractors&find_loc=Huntsville,AL,United States',
//             method: 'GET'
//         },
//         headers: {'Content-Type': 'application/json'},
//         method: 'POST',
//         url: 'https://async.scraperapi.com/jobs'
//     });
//
//     console.log(data);
//     console.log(data.statusUrl);
//     const {data1} = await axios.get(data.statusUrl);
//
//     console.log(data1);
//
// })
// ();
// Google sheet npm package
const {GoogleSpreadsheet} = require('google-spreadsheet');

// File handling package
const fs = require('fs');

// spreadsheet key is the long id in the sheets URL
const RESPONSES_SHEET_ID = '1sGH0SQB6jBfXNLMKM7fOAiTfERH1cG_iFhWvLN8KsV8';

// Create a new document
const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);

// Credentials for the service account
const CREDENTIALS = JSON.parse(fs.readFileSync('./servicekey.json'));

const getRow = async (city) => {

    // use service account creds
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    });

    // load the documents info
    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[3];

    // Get all the rows
    let rows = await sheet.getRows();

    for (let index = 0; index < rows.length; index++) {
        const row = rows[index];
        if (row.city === city) {
            console.log(row.city);
            console.log(row.Run);
        }
    }
    ;
};

const getSingleCity = async () => {

    // use service account creds
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    });

    // load the documents info
    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[3];

    // Get all the rows
    let rows = await sheet.getRows();

    for (let index = 0; index < rows.length; index++) {
        const row = rows[index];
        if (row.Run === '') {
            return row.city
        }
    }
    ;
};
const get = async () => {
    var city = await getSingleCity();
    console.log(city);
}
//get();
const getRows = async (start, limit) => {

    // use service account creds
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    });

    // load the documents info
    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[0];

    // Get all the rows
    let rows = await sheet.getRows();

    // if(start>0) {

    if ((start + limit) > rows.length)
        limit = rows.length;
    // }
    var keywords = "";
    for (let index = start; index < limit; index++) {
        const row = rows[index];
        //  console.log(row);
        //   if (row.city === city) {
        //console.log(row.Sno+row.Keyword);
        keywords += row.Keyword + ',';
        // console.log(keywords);
        //  }
    }
    ;
    //  console.log(keywords);
    return keywords.slice(0, keywords.length - 1);
};
const test = async () => {
    var keyword = await getRows(41, 20);
    console.log(keyword);
}
//test();
const addRow = async (rows) => {

    // use service account creds
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    });

    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[3];

    for (let index = 0; index < rows.length; index++) {
        const row = rows[index];
        await sheet.addRow(row);
    }
};

let rows = [{
    Niche: 'Concrete',
    State: 'concrete contractors',
    City: 'Huntsville',
    Keyword: '',
    'Avg. Monthly Searches': ''
}];

for (i = 0; i <= 100; i++) {
    rows.push({
        Niche: 'Concrete ' + i,
        State: 'concrete contractors',
        City: 'Huntsville',
        Keyword: '',
        'Avg. Monthly Searches': ''
    })
}

//addRow(rows);


const updateRow = async (keyValue, oldValue, newValue, conditionValue, WhereValue) => {

    // use service account creds
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    });

    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[2];

    let rows = await sheet.getRows();
    const current_date = new Date();
    const format = {
        dd: current_date.getDate(),
        mm: current_date.getMonth() + 1,
        yyyy: current_date.getFullYear(),

    };
    for (let index = 0; index < rows.length; index++) {
        //  const row = rows[index];
        //    if (row[conditionValue] === WhereValue) {
        //         console.log(row[keyValue]);
        //         console.log(oldValue);
        //       //  if (row[keyValue] === oldValue) {
        //             rows[index][keyValue] = newValue;
        //             console.log(keyValue);
        //             if(keyValue!=='process') {
        rows[index]['Niche'] = 1;
        // }
        await rows[index].save();
        break;
        //  }
        // }
    }
    ;
};
const calladdRow = async () => {
    // for(i=0;i<100;i++) {
    try {
        console.log(i);


        await addRow(rows);

    } catch (e) {
        console.log(e.error)
        // updateRow('process', '0', '1', 'city', 'Fairbanks')
    }
    //  }
}
//calladdRow();

const deleteRow = async (keyValue, thisValue) => {

    // use service account creds
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    });

    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[0];

    let rows = await sheet.getRows();

    for (let index = 0; index < rows.length; index++) {
        const row = rows[index];
        if (row[keyValue] === thisValue) {
            await rows[index].delete();
            break;
        }
    }
    ;
};

//deleteRow('email', 'chaitali@gmail.com')
// // Requiring module
// const reader = require('xlsx')
//
// // Reading our test file
// const file = reader.readFile('./csv/test.xlsx')
//
// // const workbook = reader.readFile('./csv/test.xlsx');
// // const firstSheetName = workbook.SheetNames[0];
// // const sheet = workbook.Sheets[firstSheetName];
// //
// // const cellRef = workbook.utils.encode_cell({c: YourColumn, r: YourRow});
// // const cell = sheet[cellRef];
// // if (cell) {
// //     // update existing cell
// //     cell.v = 'YourValue';
// // } else {
// //     // add new cell
// //     workbook.utils.sheet_add_aoa(sheet, [['YourValue']], {origin: cellRef});
// // }
// // XLSX.writeFile(workbook, path);
// //
//
// const sheets = file.SheetNames
// let data = []
//
// for(let i = 0; i < sheets.length; i++)
// {
//    // console.log(file.SheetNames[i]+' : '+file.SheetNames[i].length);
//
//     if(file.SheetNames[i]==='city') {
//         const temp = reader.utils.sheet_to_json(
//             file.Sheets[file.SheetNames[i]])
//         console.log(file.SheetNames[i]+' : '+temp.length);
//            var obj= [{
//                 location_id:'44444',
//                state: 'ggggg',
//                City: 'jjjj',
//             }];
//         obj.map(o=>temp.push(o));
//      //   temp.map(obj);
//         let Heading = [['location_id', 'state', 'City']];
//       const wb = reader.utils.book_new();
//         const ws= reader.utils.json_to_sheet([]);
//          reader.utils.sheet_add_aoa(ws, Heading);
//         reader.utils.sheet_add_json(ws, temp, { origin: 'A2', skipHeader: true });
//
//         reader.utils.book_append_sheet(wb, ws, 'city');
//       // reader.writeFile(wb, './csv/test.xlsx');
//       //   reader.writeFileAsync(wb, './csv/test.xlsx', (err) => {
//       //
//         // It's a callback
//       //   });
//     }
//
//
// }

// let arr = [
//     { firstName: 'Jack', lastName: 'Sparrow', email: 'abc@example.com' },
//     { firstName: 'Harry', lastName: 'Potter', email: 'abc@example.com' },
// ];

// let Heading = [['FirstName', 'Last Name', 'Email']];
//
// //Had to create a new workbook and then add the header
// const wb = reader.utils.book_new();
// const ws= reader.utils.json_to_sheet([]);
// reader.utils.sheet_add_aoa(ws, Heading);
//
// //Starting in the second row to avoid overriding and skipping headers
// reader.utils.sheet_add_json(ws, arr, { origin: 'A2', skipHeader: true });
//
// reader.utils.book_append_sheet(wb, ws, 'city');
//
// reader.writeFile(wb, './csv/test.xlsx');


// Printing data
//console.log(data)


// const {
//     GoogleAdsApi, toMicros,
//     ResourceNames,
//     MutateOperation,
// } = require("google-ads-api");
// const client = new GoogleAdsApi({
//     client_id: "449219610142-qmauc08556oomahr9t9cft2otdlsqf2d.apps.googleusercontent.com",
//     client_secret: "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",
//     developer_token: "AzqXrJWeYsxOodLhQ2A8yw",
// });
// var customer_id = '5197253497';
// var refreshToken = '1//0gqqeQusLZfSBCgYIARAAGBASNwF-L9IrdD45780WeR21EPLEZ4ndS5xk5T_e9NzhEL233glzBdLTq8gLZ5TePkpsrBRrb1NSbP8';
// let customer = client.Customer({
//     customer_id: customer_id,
//     refresh_token: refreshToken,
//     login_customer_id: customer_id,
// })
// // var id=mcc.keywordPlans.create(client,customer_id);
// // console.log(id);
// const main = async () => {
//     try {
//         const response = await customer.report({
//             entity: "campaign",
//             attributes: ["campaign.id"],
//             metrics: ["metrics.clicks"],
//             segments: ["segments.date"],
//             order_by: "metrics.clicks",
//             sort_order: "DESC",
//         });
//         console.log("welcome")
//         console.log(response);
//     } catch (e) {
//         console.log('error',e); ///, e);
//     }
// }
// main();
