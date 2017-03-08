/**
 * Created by xiaohuamei on 17/3/8.
 */
app.config(function($stateProvider){
    $stateProvider

        .state('tab.home',{
            url:"/home",
            views:{
                'tab-home':{
                    templateUrl:"views/views_home/home_main_view.html",
                    controller:"homeMainCtrl"
                }
            }
        })
})