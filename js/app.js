angular.module('starter', ['ionic'])
.controller('mainCtrl', function($scope) {
    $scope.popOverShown = false;
    
    $scope.showPopOver = function() {
        $scope.popOverShown = true;
    };

    $scope.hidePopOver = function() {
        $scope.popOverShown = false;
    };
})
.directive("menuBar", function() {
    return {
        restrict: 'A',
        transclude: true,
        link: function(scope, element, attrs) {
        },
        templateUrl: 'menu-bar.html'
    }
})
.directive("menuItem", function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var html = '';
            if(attrs.icon != undefined)
              html += '<img class = "menu-icon" src = "' + attrs.icon + '"</img>';
            if(attrs.name != undefined)
              html += attrs.name;
            element.html(html);
        }
    }
})
.directive("popOver", function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
          
        },
        templateUrl: 'popOver.html'
    }
})