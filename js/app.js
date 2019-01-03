angular.module('starter', ['ionic'])
.controller('mainCtrl', function($scope, $http) {
    $scope.popOverShown = false;
    
    $scope.showPopOver = function() {
      $scope.popOverShown = true;
      $scope.sugestions = [];
      $http({
        method : "GET",
        url : "http://jsonplaceholder.typicode.com/comments"
      }).then(function success(response) {
          $scope.sugestions = response.data.slice(0, 4);
        }, function error(response) {
          $scope.sugestions.push({"body": response.statusText});
      });
    };

    $scope.hidePopOver = function() {
        $scope.popOverShown = false;
    };    
})
.directive("popOver", function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
          
        },
        templateUrl: 'popOver.html'
    }
})