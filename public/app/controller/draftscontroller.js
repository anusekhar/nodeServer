myApp.controller('draftsController',
[
  '$scope',
  'inboxData',
  function($scope, inboxData){
    $scope.draftsItems = inboxData.drafts;
  }
]);
