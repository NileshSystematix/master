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
   $scope.currentPlatform = ionic.Platform.platform();
 if($scope.currentPlatform == "android"){
       $scope.currentPlatformVersion = ionic.Platform.version();
       if($scope.currentPlatformVersion <= 5){
         window.plugins.spinnerDialog.show("Loading...","Please wait...", true); 
         $scope.delayLoader();
               $location.path('/video')
       }
       else{
         $location.path('/video2')
       }
 }
 
  };
  
  $scope.delayLoader = function()
  { 
    setTimeout(function(){
    window.plugins.spinnerDialog.hide();
    
  }, 8000);
  }

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
  //Video screen redirection
  $scope.watchVideo = function() {
     $scope.currentPlatform = ionic.Platform.platform();
   if($scope.currentPlatform == "android"){
         $scope.currentPlatformVersion = ionic.Platform.version();
         if($scope.currentPlatformVersion <= 5){
           window.plugins.spinnerDialog.show("Loading...","Please wait...", true); 
           $scope.delayLoader();
                 $location.path('/video')
         }
         else{
           $location.path('/video2')
         }
   }
   
    };
    
    $scope.delayLoader = function()
    { 
      setTimeout(function(){
      window.plugins.spinnerDialog.hide();
      
    }, 8000);
    }
     

  })

.controller('videoController', function($scope, $ionicHistory, $location) {

  // onSuccess Callback
// This method accepts a JSON object, which contains the
// boolean response
//


window.cordova.plugins.FileOpener.openFile("http://www.website.com/file.pdf", onSuccess, onError);






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
   $scope.shareViaTwitter = function() {
     
     window.plugins.spinnerDialog.show("Loading...","Please wait...", true); 
       
     var message ="MagMutual";
        $cordovaSocialSharing.canShareVia("twitter", "message", null, "http://www.hashtagmed.com/magmutual/ShoulderDystocia.pdf").then(function(result) {
        $cordovaSocialSharing.shareViaTwitter(message, null, "http://www.hashtagmed.com/magmutual/ShoulderDystocia.pdf")
        $scope.delayLoader();
        
        }, function(error) {
          window.plugins.spinnerDialog.hide();
            alert("Before sharing on Twitter, kindly install the app or check internet connection in your device.");
        });
    }   
     
     // Facebook social sharing functionality
       $scope.shareViaFacebook = function() {
         var message ="MagMutual";
         window.plugins.spinnerDialog.show("Loading...","Please wait...", true); 
           $scope.delayLoader();
        $cordovaSocialSharing.canShareVia("facebook", "message", null, "http://www.hashtagmed.com/magmutual/ShoulderDystocia.pdf").then(function(result) {
            $cordovaSocialSharing.shareViaFacebook(message, null, "http://www.hashtagmed.com/magmutual/ShoulderDystocia.pdf");
            $scope.delayLoader();
             
        }, function(error) {
          window.plugins.spinnerDialog.hide();
            alert("Before sharing on Facebook, kindly install the app or check internet connection in your device.");
        });
    } 
    
    // Cancel button functionality of social sharing screen which will redirect to home screen
    $scope.cancel = function () {
          $location.path('/home')
     }
    
    $scope.delayLoader = function()
    {
      setTimeout(function(){
      window.plugins.spinnerDialog.hide();
      
    }, 5000);
    }
   })




 


