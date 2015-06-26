app.controller("appController", function appController($scope,$http){
	// Get the list of available books 
	$http.get('/cocktails').success(function(data) {
		$scope.cocktails = data;
		console.log('cocktails: ' + data);
	}).error(function(error){
		console.log('error fetching cocktails: ' + error);
	});
});