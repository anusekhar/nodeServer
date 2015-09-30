myApp.controller('starredController',
[
  '$scope',
  'inboxData',
  function($scope, inboxData){
      $scope.starredItems=[];
      for (var i = 0; i < inboxData.inbox.length; i++) {
        if (inboxData.inbox[i].starred) {
          $scope.starredItems.push(inboxData.inbox[i]);
        }
      }
    }

]);
