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

  // Social Shring redirection functionality
  $scope.socialSharing = function() {

        $location.path('/socialSharing')
      }
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

// Final Check List Controller
.controller('finalCheckController', function($scope, $ionicHistory, $location) {
     
     // Video screen redirection
     $scope.watchVideo = function() {
        $location.path('/video')
      }
     

  })


//Conclusion screen controller
.controller('conclusionController', function($scope, $ionicHistory, $location) {
      // Final Check List redirection
      $scope.checkoff = function () {
                  
          $location.path('/checkOff')
    
     }
  })


//Social Sharing screen controller
.controller('socialSharingController', function($scope, $ionicHistory, $location, $cordovaSocialSharing) {
    
   // Twitter social sharing functionality 
   $scope.shareViaTwitter = function(message, image, link) {
        $cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function(result) {
                      $cordovaSocialSharing.shareViaTwitter(message, image, link);

        }, function(error) {
            alert("Sharing on Twitter has been failed.");
        });
    }   
     
     // Facebook social sharing functionality
      $scope.shareViaFacebook = function(message, image, link) {
        $cordovaSocialSharing.canShareVia("facebook", message, image, link).then(function(result) {
            $cordovaSocialSharing.shareViaFacebook(message, image, link);
        }, function(error) {
            alert("Sharing on Facebook has been failed.");
        });
    } 
    
    // Cancel button functionality of socail sharing screen which will redirect to home screen
    $scope.cancel = function () {
                  
          $location.path('/home')
    
     }
   })




 

