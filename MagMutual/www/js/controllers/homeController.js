// Main module of the app.
angular.module('starter.controllers', ['ionic'])

// Home screen Controller
.controller('homeController', function($scope, $ionicHistory, $location) {
    // Back button functionality.
    $scope.GoBack = function () {
        $ionicHistory.goBack();
    }


//Video screen redirection
$scope.watchVideo = function() {
	$location.path('/video')
  };

  // See Check List screen redirection 
  $scope.seeCheckList = function() {
  	
	$location.path('/seeCheckList')
  };

  // Home button funtionality
  $scope.homePage = function() {
  	$location.path('/home')
  };

})

//See Check List screen controller
.controller('seeCheckListController', function($scope, $ionicHistory, $location) {
    $scope.documentation = function () {
        $location.path('/documentation')
    }
  })

//Documentation screen controller
.controller('documentationController', function($scope, $ionicHistory, $location) {
    // Steps screen redirection
    $scope.steps = function () {
       $location.path('/steps')
    }
  })

//Steps screen controller
.controller('stepsController', function($scope, $ionicHistory, $location) {
     //Conclusion screen redirection
     $scope.conclusion = function () {
        $location.path('/conclusion')
     }
  })

//Conclusion screen controller
.controller('conclusionController', function($scope, $ionicHistory, $location) {
      // Final Check List redirection
      $scope.checkList = function () {
         $location.path('/checkList')
     }
  })

