// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app=angular.module('starter', ['ionic','starter.controllers','ui.router']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.directive('back', ['$window', function ($window) {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                elem.bind('click', function () {
                    $window.history.back();
                });
            }
        };
    }]);


// State Routings for all the screens and functionality

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

 .state('home', {
          url: '/home',
          templateUrl: 'templates/home1.html',
          controller: 'homeController'
       })

.state('seeCheckList', {
          url: '/seeCheckList',
          templateUrl: 'templates/seeCheckList.html',
           controller: 'seeCheckListController'
       })


 .state('video', {
             url: '/video',
             templateUrl: 'templates/video.html',
             controller: 'homeController'
        })


.state('documentation', {
             url: '/documentation',
             templateUrl: 'templates/documentation.html',
             controller: 'documentationController'
        })

.state('steps', {
             url: '/steps',
             templateUrl: 'templates/steps.html',
             controller: 'stepsController'
        })

.state('conclusion', {
             url: '/conclusion',
             templateUrl: 'templates/conclusion.html',
             controller: 'conclusionController'
        })

.state('checkList', {
             url: '/checkList',
             templateUrl: 'templates/checkList.html',
             controller: 'checkListController'
        })

// If none of the state routing didn't gets matched then home screen gets opened.
    $urlRouterProvider.otherwise('/home');
});
