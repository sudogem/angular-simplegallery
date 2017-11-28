'use strict';
app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
  photos.success(function(data) {
    console.log('PhotoController.js data:',data);
    $scope.detail = data[$routeParams.id];
  });
}]);
