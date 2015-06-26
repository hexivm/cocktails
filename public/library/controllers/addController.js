app.controller("addController", function addController($scope,$location,$http){
	$scope.textButton = "Add new cocktail";
	$scope.cocktail = {};
	$scope.newCocktail = function() {
		// This line will be replaced by the call to the API to update the model
		$http.post('/cocktails', $scope.cocktail).success(function(result) {
			$scope.cocktails.push(result);
		}).error(function(error){
			console.log('error adding cocktail: ' + error)
		});

		$location.url("/");
	}
});