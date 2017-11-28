'use strict';
app.controller('HomeController', ['$scope', 'photos', function($scope, photos) {
  photos.success(function(data) {
    console.log('HomeController.js data:',data);
    $scope.photos = data;
  });
}]);
