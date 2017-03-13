/**
 * Created by beebe on 3/13/2017.
 */
angular.module("routerApp",["ui.router"]).config(function ($urlRouterProvider,$stateProvider){


    $urlRouterProvider.when("", "/");

    $stateProvider
        .state("home",{
            templateUrl:"home/home.html",
            url:"/",
            controller:"homeCtrl"
        })
        .state("about",{
            templateUrl:"about/about.html",
            url:"/about",
            controller:"aboutCtrl"
        })
        .state("players",{
            templateUrl:"players/players.html",
            url:"/players",
            controller:"playersCtrl"
        })



});