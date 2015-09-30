myApp.controller('inboxController',
[
  '$scope',
  'inboxData',
  function($scope, inboxData){
    $scope.inboxItems = inboxData.inbox;

    $scope.myfunction = function (index){
      console.log("clicked");
    inboxData.inbox[index].starred=!inboxData.inbox[index].starred;
      console.log(inboxData.inbox[index].starred);
    }

  }

]);
