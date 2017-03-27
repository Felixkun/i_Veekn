var appName = "i_Veekn";
var homeModuleName = appName.concat('.home');
var financeModuleName = appName.concat('.finance');
var discoverModuleName = appName.concat('.discover');
var profileModuleName = appName.concat('.profile');



var  appModuleList = [
    'ionic'
    homeModuleName,
    financeModuleName,
    discoverModuleName,
    profileModuleName
]
//定义app常量
var app =  angular.module(appName, appModuleList)


//定义请求基地址
var BASE_URL = "https://www.veekn.com/" //生产环境