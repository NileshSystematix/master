// Main module of the app.
angular.module('starter.controllers', ['ionic', 'ionic-ratings'])

// Home screen Controller
.controller('homeController', function($scope, $ionicHistory, $location,$state) {
    // Back button functionality.
  
  $scope.$on("$ionicView.enter", function(event, data){
		  window.localStorage.clear();			
	});
	
	$scope.GoBack = function () {
        $ionicHistory.goBack();
    }


//Video screen redirection
$scope.watchVideo = function() {
   
         $state.go('video2')
      
 
  };
  
  $scope.poster=function(){
	  
	  window.localStorage.clear();	
	  $state.go('orderPoster1', {}, {reload: true})
  }
  
  
  $scope.disclaimer=function(){
	  $state.go("disclaimer");
  }
  
  $scope.delayLoader = function()
  { 
    setTimeout(function(){
    window.plugins.spinnerDialog.hide();
    
  }, 8000);
  }

  // See Check List screen redirection 
  $scope.seeCheckList = function() {
    
  $location.path('/checkList1')
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









.controller('videoController', function($scope, $ionicHistory, $location,$state) {
	var vid1 = document.getElementById("myVideo"); 
	$scope.playPause = function(){
		
	
		
		if(vid1.paused){
			
			vid1.play();
		}
		else {
			
			vid1.pause();
		}
	}
	
	
	
	$scope.checkList1=function(){
		var vid2 = document.getElementById("myVideo"); 
		 vid2.pause();
		
		 $state.go('checkList1')
	}
  

  // onSuccess Callback
// This method accepts a JSON object, which contains the
// boolean response
//
$scope.seeCheckList = function() {
       
  $state.go('checkList1')
  };

    function listen(evnt, elem, func) {
    
      
      
    if (elem.addEventListener) // W3C DOM
    elem.addEventListener(evnt, func, false);
    else if (elem.attachEvent) { // IE DOM
        var r = elem.attachEvent("on" + evnt, func);
        return r;
    }
    else window.alert('I\'m sorry, I\'m afraid I can\'t do that.');
}

listen("ended", document.getElementById('myVideo'), DoSomething);

function DoSomething() {
	
   $scope.seeCheckList();
   
}


})




.controller('disclaimerController', function($scope, $ionicHistory, $location,$state) {
      // Final Check List redirection
     $scope.watchVideo = function() {
  
         $state.go('video2')
      
  };
  })
  
  .controller('checkList1Controller', function($scope, $ionicHistory, $location,$state) {
      // Final Check List redirection
      $scope.checkList2 = function () {
          $state.go('checkList2')
    
     }
  })
  
    .controller('checkList2Controller', function($scope, $ionicHistory, $location,$state) {
      // Final Check List redirection
      $scope.checkList3 = function () {
    	  $state.go('checkList3')
    
     }
  })
  
   .controller('checkList3Controller', function($scope, $ionicHistory, $location,$state) {
      // Final Check List redirection
      $scope.checkList4 = function () {
    	 $state.go('checkList4')
    
     }
  })
  
     .controller('checkList4Controller', function($scope, $ionicHistory, $location,$state) {
      // Final Check List redirection
      $scope.checkList5 = function () {
    	 $state.go('checkList5')
    
     }
  })
  
    .controller('checkList5Controller', function($scope, $ionicHistory, $location,$state) {
      // Final Check List redirection
      $scope.checkList6 = function () {
    	 $state.go('checkList6')
    
     }
  })

  
    .controller('checkList6Controller', function($scope, $ionicHistory, $location,$state) {
      // Final Check List redirection
      $scope.checkList7 = function () {
    	 $state.go('checkList7')
    
     }
  })
  
     .controller('checkList7Controller', function($scope, $ionicHistory, $location,$state) {
      // Final Check List redirection
      $scope.checkList8 = function () {
    	 $state.go('checkList8')
    
     }
  })
  
    .controller('checkList8Controller', function($scope, $ionicHistory, $location,$state) {
      // Final Check List redirection
    	
    	
      $scope.orderPoster1 = function () {
    	 $state.go('orderPoster1')
    
     }
  })
  
     .controller('orderPoster1', function($scope, $ionicHistory, $location,$state) {
      // Final Check List redirection
             
    	 $scope.poster={};
    	 $scope.post={};
    	 
    	 $scope.order={};
    	
    	 
        $scope.poster.selectedValue1="0";
        $scope.poster.selectedValue2="0";
        $scope.poster.selectedValue3="0";
    	$scope.quantity = ["0", "1"];
            
                 
    	 $scope.setValue=function(data){
    		
    		 window.localStorage.setItem( 'Size', data);

    	 }
      $scope.orderPoster2 = function () {
                 
     	window.localStorage.setItem( 'size1', $scope.poster.selectedValue1);
     	window.localStorage.setItem( 'size2', $scope.poster.selectedValue2);
     	window.localStorage.setItem( 'size3', $scope.poster.selectedValue3);

                 $state.go('orderPoster2')
    	 
    
     }

  })
  
      .controller('orderPoster2', function($scope, $ionicHistory, $location,$state) {
   
    	  $scope.rating = function(){
//    	    	alert("rating");
    	  	  $state.go('rating')
    	    }
    	  $scope.register={};
    	  
    	 
     $scope.userDetails=function(validForm){
        	
 	if(validForm == false){
 		
		return false;
	}else{
		
      
	     window.localStorage.setItem( 'formFilled',true);

//		alert($scope.register.user_name);
//		alert($scope.register.company_name);
//		alert($scope.register.address);
		
     window.localStorage.setItem( 'UserName', $scope.register.user_name);
   
    window.localStorage.setItem( 'HospitalName', $scope.register.hospital_name);

    window.localStorage.setItem( 'Address1', $scope.register.address);

    window.localStorage.setItem( 'Address2', $scope.register.address1);
   // alert(window.localStorage.getItem( 'Address2', $scope.register.address1));
   
    window.localStorage.setItem( 'City', $scope.register.city);
   
    window.localStorage.setItem( 'State', $scope.register.state);
   
    window.localStorage.setItem( 'Zip', $scope.register.zip);
    
    window.localStorage.setItem( 'Phone', $scope.register.phone);

   
    $state.go('rating');
 
    
	}
     }
  })
  
  
  
  
      .controller('ratingController', function($scope, $ionicHistory, $location,$state) {
      // Final Check List redirection
    	  
    	  $scope.rating={};
    	  $scope.suggestion="";
    	 
    	  
$scope.home=function(){
	
	
	
	$state.go("home");
}
    	  
    	 $scope.suggestionSet=function(data){
  		    
  		     window.localStorage.setItem('comments', data);
  		     

   		 
   	 }
    	  
    	  $scope.ratingsObject = {
    			    iconOn: 'ion-ios-star', //Optional
    			    iconOff: 'ion-ios-star-outline', //Optional
    			    iconOnColor: 'rgb(200, 200, 100)', //Optional
    			    iconOffColor: 'rgb(255, 255, 255)', //Optional
    			    rating: 0, //Optional
    			    minRating: 0, //Optional
    			    readOnly: false, //Optional
    			    callback: function(rating,index) { //Mandatory    
    			        window.localStorage.setItem( 'rating', rating);

    			    }
    			  };
    	  
            $scope.rating={};
            
            $scope.ratingComments=function(data){
            	
//            	alert(data);
            	  window.localStorage.setItem( 'Comments', data);
            	    window.localStorage.getItem( 'Comments');
            }
    	  
    	  $scope.fullName=window.localStorage.getItem('UserName');
    	
//    	  alert($scope.fullName);
    	  $scope.hospitalName=window.localStorage.getItem('HospitalName');
    	  $scope.address1=window.localStorage.getItem('Address1');
    	  $scope.address2=window.localStorage.getItem('Address2');
    	  $scope.city=window.localStorage.getItem('City');
    	  $scope.state=window.localStorage.getItem('State');
    	  $scope.zip=window.localStorage.getItem('Zip');
    	  $scope.phone=window.localStorage.getItem('Phone');
    	  $scope.ordSize1=window.localStorage.getItem('size1');
          $scope.ordSize2=window.localStorage.getItem('size2');
     	  $scope.ordSize3=window.localStorage.getItem('size3');
             

    	  $scope.SizePoster= window.localStorage.getItem('Size');
//    	  alert($scope.SizePoster);
    	  
    	  
    	  $scope.validForm=window.localStorage.getItem('formFilled');
//    	  alert(window.localStorage.getItem('formFilled'));
    	  $scope.rating=window.localStorage.getItem('rating');
    	 
    	
//    	  alert($scope.validForm);
    	  
    	  
    	  $scope.sendEmail=function(){	
    		  $scope.rating=window.localStorage.getItem('rating');
    		  
    		  
    		  $scope.CommentsSuggestion=window.localStorage.getItem('comments');
    		  
    		 
    	
    		  
    		  
    		  if($scope.validForm=="true"){
    			  
    			  // alert("if");
    			//  alert(window.localStorage.getItem( 'size1'));
    			  
    			  if($scope.ordSize1==undefined||$scope.ordSize1==null||$scope.ordSize1=="null"||$scope.ordSize1=="undefined"){
    				//  alert("Size "+$scope.ordSize1);
      				
     			     $scope.ordSize1="";
    			  }
     			      
     			      if($scope.ordSize2==undefined||$scope.ordSize2==null||$scope.ordSize2=="undefined"||$scope.ordSize2=="null"){
     			    	  
     			    	// alert("Size "+$scope.ordSize2);
     			    	  $scope.ordSize2="";
     			      }
     			  		     
     			       if($scope.ordSize3==undefined||$scope.ordSize3==null||$scope.ordSize3=="undefined"||$scope.ordSize3=="null"){
     			    	  
       			    	// alert("Size "+$scope.ordSize3);

     		                $scope.ordSize3="";
     			      }
     			         
     			       if($scope.address2==undefined||$scope.address2==null||$scope.address2=="undefined"||$scope.address2=="null"){
     			    	 // alert("address2 "+$scope.address2);
     			    	   $scope.address2="";

     			       }
   			       

     		          if($scope.rating==null||$scope.rating=="null"){
     		        	 //alert("Size "+$scope.rating);
     		        	  
     		        	$scope.rating="";
     		        	  
     		          }
     		          
     		          
     		          
     		          if( $scope.CommentsSuggestion==undefined||$scope.CommentsSuggestion==null||$scope.CommentsSuggestion=="undefined"||$scope.CommentsSuggestion=="null"){
     		        	  
     		        // alert("Size "+$scope.CommentsSuggestion);
     		        	  
     		        	  $scope.CommentsSuggestion="";
     		         
     		}
    			  
               
    			  $scope.html="<div>Name: "+$scope.fullName+"<br>Hospital Name: "+$scope.hospitalName+"<br>Address1: "+$scope.address1+"<br>Address2:"+$scope.address2+"<br>City: "+$scope.city+"<br>State: "+$scope.state+"<br> ZIP: "+$scope.zip+"<br> Phone: "+$scope.phone+"<br><br> Quantity of  8\" X 11\" Poster: "+ $scope.ordSize1+"<br><br> Quantity of  11\" X 17\" Poster:  "+ $scope.ordSize2+"<br><br> Quantity of  18\" X 24\" Poster: " +$scope.ordSize3+"<br><br>Rated: "+ $scope.rating +"<br>Comment: "+$scope.CommentsSuggestion+" </div>";
       		  
        	  }
        	  
        	  else{
        		//  alert("else");
        		 
//        		  

            	  $scope.html="<div>Name: <br>Hospital Name: <br>Address1: <br>Address2:<br>City:<br>State: <br> ZIP:<br> Phone: <br><br>  Quantity of  8\" X 11\" Poster: <br><br> Quantity of  8\" X 11\" Poster: "+$scope.ordSize1+"<br><br> Quantity of  11\" X 17\" Poster:  "+$scope.ordSize2+"<br><br> Quantity of 18\" X 24\"  Poster  "+$scope.ordSize3+"<br><br>Rated: "+ window.localStorage.getItem('rating') +"<br>Comment: "+$scope.CommentsSuggestion+" </div>";

        	  }
    		  
    		      
    		        if(window.plugins && window.plugins.emailComposer) {
    		                  
    		            window.plugins.emailComposer.showEmailComposerWithCallback(function(result) {
    		            	
    		            	
    		            
    		            }, 
    		            "Magmutual Poster Order", // Subject
    		           $scope.html,                      // Body
    		            ["nrobinson@magmutual.com"],    // To
    		            null,                    // CC
    		            null,                    // BCC
    		            true,                   // isHTML
    		            null,                    // Attachments
    		            null);                   // Attachment Data
    		        }
    		        
    		        
    		        window.localStorage.clear();
    		        window.localStorage.getItem('UserName');
    		        window.localStorage.getItem('Size');
    		        window.localStorage.getItem('rating');
    		        $scope.home();
    		    }
    	 
  })






 


