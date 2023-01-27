
const express = require("express");
const router = express.Router();
const  {
    Welcome,
    Welcome1,
    Callback,
    AuthLinkGenerate,
    doLogin,
    Keyfile,
    SearchKeyword,
    getAccountDetails,
    GetGeoTargetLocationList,
    GetGeoTargetRegions,
    getCountryList,
    getProvinceList,
    getCityList,
    ImportKeyword,
    ReadXLS,
    WebScrapingKeywords,
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
    getGeoProvinces,
    getGeoCities,
    GetKeywordsData,
    GetKeywordsdataList,
    GetmapData,
    GoogleScraping,
    GetyelpData,
    GethouzzData,
    GetAhrefsData,
    loadimg,
    // WebScrapingKeywords
} = require('../controllers/APIController');
const multer = require('multer')
const path = require("path");
const {Scrapper} = require("../controllers/ScrapperController");
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null,'./uploads/')
    },
    filename: (req, file, callBack) => {
        callBack(
            null,
            //file.fieldname + '-' + Date.now() + path.extname(file.originalname),
            file.fieldname + path.extname(file.originalname),
        )
    },
})
var upload = multer({
    storage: storage,
})
router.get('/GoogleScraping',GoogleScraping);

router.get('/', Welcome);
router.get('/uploads/loader.gif', loadimg);
// router.get('/welcome', Welcome1);
router.get('/callback', Callback);
router.post('/GenerateAuthUrl', AuthLinkGenerate);
router.get('/keyfile.json', Keyfile);

router.post('/MccAccountList', getAccountDetails);
router.post('/login', doLogin);

router.post('/SearchKeyword', SearchKeyword);
router.post('/GetLocationList', GetGeoTargetLocationList);

router.post('/GetCountries', getCountryList);
router.post('/GetProvinces', getProvinceList);
router.post('/GetCities', getCityList);

router.post('/getGeoProvinceList', getGeoProvinces);
router.post('/getGeoCityList', getGeoCities);

router.post('/GetLocationList2', GetGeoTargetRegions);
router.post('/GenerateKeywords', GenerateKeywords);
router.post('/searchKeywordAhref', searchAhrefKeyword);
router.post('/generateSearchRank', generateSearchRank);

router.post('/searchCityKeyword', searchCityKeyword);
router.post('/searchStateKeyword', searchStateKeyword);

router.post('/getCityRanks', getCityRankList);
router.post('/getStateRankList', getStateRankList);
router.post('/getStateCityRankList', getCityRankerList);
router.post('/getStateCityRank', getStateCityRank);
router.post('/getCityList', getUsCities);

router.post('/getNiches', getNicheList);
router.post('/addNiche', addNewNiche);
router.post('/getTemplates', getTemplateList);
router.post('/addTemplate', addNewTemplate);
router.post('/getTemplateKeywordList', getTemplateKeywordList);
router.post('/addTemplateKeyword', addTemplateKeyWord);
router.post('/DeleteNiche',DeleteNiche);
router.post('/DeleteKT',DeleteKT);
router.post('/DeleteKeyword',DeleteKeyword);

router.get('/GetKeywordsData',GetKeywordsData);
router.get('/GetKeywordsdataList',GetKeywordsdataList);
router.get('/GetmapData',GetmapData);
router.get('/GetyelpData',GetyelpData);
router.get('/GethouzzData',GethouzzData);
router.get('/GetAhrefsData',GetAhrefsData);


// router.post('/ReadXLS',ReadXLS);
// router.post('/ImportKeyword',upload.single('file'),ImportKeyword);
router.post('/ImportKeywords', upload.single('file'), ImportKeywords);
// router.post('/WebScrapingKeywords',WebScrapingKeywords);
// router.get('/loadLocations', loadLocation);
// router.post('/WebScrapingData',Scrapper);
module.exports = router;
