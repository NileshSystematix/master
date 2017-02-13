// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app=angular.module('starter', ['ionic','starter.controllers','ui.router', 'ngCordova']);

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
    if (navigator.splashscreen) {
     navigator.splashscreen.hide();
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
          templateUrl: 'templates/dystocia-checklist.html',
          controller: 'homeController',
          cache: false
       })

.state('seeCheckList', {
          url: '/seeCheckList',
          templateUrl: 'templates/seeCheckList.html',
           controller: 'seeCheckListController',
           cache: false
       })


 
 .state('video2', {
             url: '/video2',
             templateUrl: 'templates/video2.html',
             controller: 'videoController',
             cache: false
        })

.state('documentation', {
             url: '/documentation',
             templateUrl: 'templates/documentation.html',
             controller: 'documentationController',
             cache: false
        })

.state('steps', {
             url: '/steps',
             templateUrl: 'templates/steps.html',
             controller: 'stepsController',
             cache: false
        })

.state('checkOff', {
             url: '/checkOff',
             templateUrl: 'templates/checklist.html',
             controller: 'finalCheckController',
             cache: false
        })

.state('conclusion', {
             url: '/conclusion',
             templateUrl: 'templates/conclusion.html',
             controller: 'conclusionController',
             cache: false
        })

.state('socialSharing', {
             url: '/socialSharing',
             templateUrl: 'templates/socialSharing.html',
             controller: 'socialSharingController',
             cache: false
        })

.state('disclaimer', {
             url: '/disclaimer',
             templateUrl: 'templates/disclaimer.html',
             controller: 'disclaimerController',
             cache: false
        })

.state('checkList1', {
             url: '/checkList1',
             templateUrl: 'templates/first-form.html',
             controller: 'checkList1Controller', 
             cache: false
        })    
 
 .state('checkList2', {
             url: '/checkList2',
             templateUrl: 'templates/second-form.html',
             controller: 'checkList2Controller', 
             cache: false
        })    

 .state('checkList3', {
             url: '/checkList3',
             templateUrl: 'templates/third-form.html',
             controller: 'checkList3Controller',
             cache: false
        })   
        
  .state('checkList4', {
             url: '/checkList4',
             templateUrl: 'templates/fourth-form.html',
             controller: 'checkList4Controller',
             cache: false
        }) 
        
   .state('checkList5', {
             url: '/checkList5',
             templateUrl: 'templates/five-form.html',
             controller: 'checkList5Controller',
             cache: false
        }) 
        
.state('checkList6', {
             url: '/checkList6',
             templateUrl: 'templates/six-form.html',
             controller: 'checkList6Controller',
             cache: false
        }) 
        
.state('checkList7', {
             url: '/checkList7',
             templateUrl: 'templates/seven-form.html',
             controller: 'checkList7Controller',
             cache: false
        })     
        
.state('checkList8', {
             url: '/checkList8',
             templateUrl: 'templates/eight-form.html',
             controller: 'checkList8Controller',
             cache: false
        })
        
 .state('orderPoster1', {
             url: '/orderPoster1',
             templateUrl: 'templates/post-order.html',
             controller: 'orderPoster1',
             cache: false
        })       
        
  .state('orderPoster2', {
             url: '/orderPoster2',
             templateUrl: 'templates/post-order1.html',
             controller: 'orderPoster2',
             cache: false
        })   
        
 .state('rating', {
             url: '/rating',
             templateUrl: 'templates/rating-form.html',
             controller: 'ratingController',
             cache: false
        }) 
// If none of the state routing didn't gets matched then home screen gets opened.
    $urlRouterProvider.otherwise('/disclaimer');
});


