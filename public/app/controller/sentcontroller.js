myApp.controller('sentController',
[
  '$scope',
  'inboxData',
  function($scope, inboxData){
    $scope.inboxItems = inboxData.sent;
  }
]);
