/**
 * Created by xiaohuamei on 17/3/8.
 */
app.config(function($stateProvider){
    $stateProvider
        .state('tab.profile',{
            url:"/profile",
            views:{
                'tab-profile':{
                    templateUrl:"views/views_profile/profile_userCenter_view.html",
                    comtroller:"profileCtrl"
                }
            }
        })
})