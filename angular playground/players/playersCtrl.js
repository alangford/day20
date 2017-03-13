/**
 * Created by beebe on 3/13/2017.
 */
angular.module("routerApp").controller("playersCtrl",function($scope,playerServ){

    $scope.players = playerServ.getPlayers();

});