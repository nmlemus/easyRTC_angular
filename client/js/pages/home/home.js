/**
 * Created by noel on 11/03/15.
 */

angular.module('cam').controller('home', ['$scope', '$filter', '$location', function ($scope, $filter, $location) {
    $scope.create = function(){
        console.log($scope.room_name);
        console.log($location.absUrl());

    }
}]);
