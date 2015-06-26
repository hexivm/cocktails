app.controller("editController", function editController($scope,$routeParams,$location,$http){
	// Get the cocktail to edit with route params
	angular.forEach($scope.cocktails, function(cocktail, key){
		if (cocktail._id == $routeParams.id){
			$scope.cocktail = cocktail;
		}
	});
	$scope.textButton = "Edit cocktail";
	$scope.editCocktail = function(){
		$http.put('/cocktails/'+ $routeParams.id, $scope.cocktail).success(function(result) {
			$scope.cocktail = result;
		}).error(function(error){
			console.log('error updating cocktail ' + $routeParams.id + ' :' + error);
		});

		$location.url("/");
	}
});