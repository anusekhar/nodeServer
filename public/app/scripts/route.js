myApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/inbox');

    $stateProvider
    .state('inbox', {
        url: "/inbox",
        templateUrl: "app/views/inbox.html",
        controller : "inboxController",
        resolve : {
            inboxData : function(MailSrv){
                return MailSrv.fetch();

            }
        }
    })
    .state('inbox.list', {
        url: "/inbox",
        templateUrl: "app/views/mail.html",
        controller : "inboxController",
        resolve : {
            inboxData : function(MailSrv){
                return MailSrv.fetch();

            }
        }
    })
    .state('starred', {
        url: "/starred",
        templateUrl: "app/views/starred.html",
        controller : "starredController",
        resolve : {
            inboxData : function(MailSrv){
                return MailSrv.fetch();

            }
        }
    })

    .state('sent mail', {
        url: "/sent mail",
        templateUrl: "app/views/sent mail.html",
        controller : "sentController",
        resolve : {
            inboxData : function(MailSrv){
                return MailSrv.fetch();
            }
        }
    })

    .state('drafts', {
        url: "/drafts",
        templateUrl: "app/views/drafts.html",
        controller : "draftsController",
        resolve : {
            inboxData : function(MailSrv){
                return MailSrv.fetch();
            }
        }
    });
});
