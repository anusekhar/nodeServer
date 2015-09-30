myApp.service('MailSrv', function($http, $q){
    var service = {};

    service.fetch = function () {
        var url = 'assets/json/data.json';
        var deferred = $q.defer();
        $http.get(url)
            .success(function(data) {
               deferred.resolve(data);
            })
            .error(function(){
               deferred.reject();
            });

        return deferred.promise;
    };
    return service;

});
