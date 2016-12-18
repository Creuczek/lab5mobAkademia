angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('mainpage', {
    url: '/page2',
    templateUrl: 'templates/mainpage.html',
    controller: 'mainpageCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('menuChoice', {
    url: '/page5',
    templateUrl: 'templates/menuChoice.html',
    controller: 'menuChoiceCtrl'
  })

  .state('mechanik', {
    url: '/page6',
    templateUrl: 'templates/mechanik.html',
    controller: 'mechanikCtrl'
  })

  .state('nawigacja', {
    url: '/page7',
    templateUrl: 'templates/nawigacja.html',
    controller: 'nawigacjaCtrl'
  })

  .state('towary', {
    url: '/page8',
    templateUrl: 'templates/towary.html',
    controller: 'towaryCtrl'
  })

  .state('elektryk', {
    url: '/page9',
    templateUrl: 'templates/elektryk.html',
    controller: 'elektrykCtrl'
  })

  .state('pytanie1', {
    url: '/page10',
    templateUrl: 'templates/pytanie1.html',
    controller: 'pytanie1Ctrl'
  })

  .state('pytanie2', {
    url: '/page11',
    templateUrl: 'templates/pytanie2.html',
    controller: 'pytanie2Ctrl'
  })

  .state('startquiaz', {
    url: '/page12',
    templateUrl: 'templates/startquiaz.html',
    controller: 'startquiazCtrl'
  })

  .state('przegrana', {
    url: '/page13',
    templateUrl: 'templates/przegrana.html',
    controller: 'przegranaCtrl'
  })

  .state('pytanie3', {
    url: '/page14',
    templateUrl: 'templates/pytanie3.html',
    controller: 'pytanie3Ctrl'
  })

  .state('pytanie4', {
    url: '/page15',
    templateUrl: 'templates/pytanie4.html',
    controller: 'pytanie4Ctrl'
  })

  .state('pytanie5', {
    url: '/page16',
    templateUrl: 'templates/pytanie5.html',
    controller: 'pytanie5Ctrl'
  })

  .state('wygrana', {
    url: '/page17',
    templateUrl: 'templates/wygrana.html',
    controller: 'wygranaCtrl'
  })

$urlRouterProvider.otherwise('/page2')

  

});