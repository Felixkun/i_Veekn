/**
 * Created by xiaohuamei on 17/3/8.
 */
app.config(function($stateProvider){
    $stateProvider
        .state('tab.finance',{
            url:"/finance",
            views:{
                'tab-finance':{
                    templateUrl:"views/views_finance/finance_list_view.html",
                    controller:"financeCtrl"
                }
            }
        })
})