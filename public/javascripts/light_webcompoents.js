$(function () {
  var app = angular.module('lightApp', []);
  app.controller('LightCtrl', function ($scope) {
    $scope.lights = ['red', 'yellow', 'green'];

    $scope.add = function () {
      $scope.lights.push('blue');
    };
  }).directive('light', function () {
    return {
      // A for atrrbute, C for Class, E for Element
      restrict: 'E',
      scope: {
        color: '@'
      },
      template: '<div class="light" style="background: {{color}}" ng-style="style"></div>',
      link: function (scope, elem) {
        $(elem).on('light_on', function () {
          scope.style = {display: 'block'};
          scope.$digest();
        });

        $(elem).on('light_off', function () {
          scope.style = {display: 'none'};
          scope.$digest();
        });
      }
    };
  });
  // <div ng-app="lightApp"> ... </div>
  angular.bootstrap($('#ng-container')[0], ['lightApp']);
});
