app.controller("BusController",function($http,$scope,$window,UserService){
	$scope.busForm={
			source: null,
			destination: null,
			trainNumber: null,
			arrival: null,
			departure: null,
			trainName: null,
			journeyDate: null,
			travelClass: null,
			quantity: null,
			bookingDate: null,
			price:null,
			availableSeats:null
	};
	
	$scope.init=function(){
		if(UserService.cities==null){
			$http.get(URI+"City/getCities").then(function(response){
				UserService.cities=response.data;
				console.log(UserService.cities);
			},function(response){
				document.getElementById('navBar').style.display='none';
				$window.location.href="#/maintain";
				swal({
					title: "Website under maintenance",
					text: "Try again later",
					icon: "warning"
				});
			});
		}
	}
	$scope.cities=UserService.cities;
	$scope.message=null;
	$scope.results=null;
	
	$scope.checkAvailability=function(){
		document.getElementById('loadingModal').style.display='block';
		$scope.busForm.busNumber=null;
		$scope.busForm.busName=null;
		$scope.busForm.message=null;
		$scope.busForm.bookingDate=null;
		$scope.busForm.price=null;
		$scope.busForm.availableSeats=null;

		$scope.results=null;
		document.getElementById('busResults').style.visibility="hidden";
		UserService.checkForHotels=$scope.checkForHotels;
		if($scope.busForm.source==$scope.busForm.destination){
			document.getElementById('loadingModal').style.display='none';
			swal({
  				title: "Same Source and Destination",
  				text: "You should rather look for a cab.",
  				icon: "error",
				});
		}
		else if($scope.busForm.journeyDate<new Date(Date.now()-1000*60*60*24)){
			document.getElementById('loadingModal').style.display='none';
			swal({
  				title: "Invalid Date",
  				text: "We can't time travel, can we? ",
  				icon: "error",
				});
		}
		else{
			$scope.busForm.journeyDate=$scope.busForm.journeyDate.toLocaleString();
			var data=JSON.stringify($scope.busForm);
			$http.post(URI+"Bus/checkAvailability",data)
			.then(function(response){
				$scope.results=response.data;
				document.getElementById('loadingModal').style.display='none';
				document.getElementById('busResults').style.visibility="visible";
			},function(response){
				document.getElementById('loadingModal').style.display='none';
				swal({
	  				title: response.data.message,
	  				icon: "error",
					});
			});
		}
	}
	
	$scope.book=function(input){
		$scope.hideResults(input);
		UserService.verifyLogin();
		if(UserService.loggedIn){
			$scope.busForm=$scope.results[input];
			$scope.baseFare=$scope.busForm.price*$scope.busForm.quantity;
			$scope.gst=5;
			$scope.totalFare=$scope.baseFare+($scope.gst*$scope.baseFare/100);
			$scope.passengerArray=[];
			for(i=0;i<$scope.results[input].quantity;i++){
				$scope.passengerArray.push(new Object());
				}
			document.getElementById('passengerModal').style.display='block';
			}
			else{
				$window.location.href="#/login";
				swal({
  				title: "Kindly login to continue!",
  				icon: "info",
				});
			}
		}
	
	$scope.proceedToPayment=function(){
		swal({
		  title: "Are you sure you wanna pay?",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})
		.then((willPay) => {
			if (willPay) {
				$scope.busForm.price=$scope.totalFare;
				UserService.bookingType='bus';
				UserService.passengerArray=$scope.passengerArray;
				UserService.bookingObject=$scope.busForm;
				$window.location.href="#/payment";
		} else {
			swal("Payment not Successful. Please try again.");
			}
	});
	}
	
	$scope.showResults=function(input){
		console.log(input);
		if(input==0){
			document.getElementsByClassName('previousButton')[input].disabled='true';
		}
		if(input==$scope.results.length-1){
			document.getElementsByClassName('nextButton')[input].disabled='true';
		}
		document.getElementById(input).style.display='block';
	}
	
	$scope.hideResults=function(input){
		console.log(input);
		document.getElementById(input).style.display='none';
	}
	
	$scope.nextResult=function(input){
		console.log(input);
		if(input==$scope.results.length-2){
			document.getElementsByClassName('nextButton')[input+1].disabled='true';
		}
		if(input>0){
			document.getElementsByClassName('previousButton')[input+1].disabled='false';
		}
		document.getElementById(input).style.display='none';
		document.getElementById(input+1).style.display='block';
	}
	
	$scope.previousResult=function(input){
		console.log(input);
		if(input==0){
			document.getElementsByClassName('previousButton')[input].disabled='true';
		}
		if(input < $scope.results.length-1){
			document.getElementsByClassName('nextButton')[input].disabled='false';
		}
		document.getElementById(input).style.display='none';
		document.getElementById(input-1).style.display='block';
	}
});