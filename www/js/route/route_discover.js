/**
 * Created by xiaohuamei on 17/3/8.
 */
app.config(function($stateProvider){
    $stateProvider
        .state('tab.discover',{
            url:"/discover",
            views:{
                'tab-discover':{
                    templateUrl:"views/views_discover/discover_main_view.html",
                    controller:"discoverCtrl"
                }
            }

        })
})