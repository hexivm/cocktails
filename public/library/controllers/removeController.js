// Delete the cocktail depends on its id
app.controller("removeController", function removeController($scope,$routeParams,$location,$http){
	// Get the cocktail to edit with route params
	angular.forEach($scope.cocktails, function(cocktail, key){
		if (cocktail._id == $routeParams.id){
			$scope.cocktail = cocktail;
		}
	});
	$scope.removeCocktail = function(){
		$http.delete('/cocktails/'+ $routeParams.id).success(function(result) {
			var index = $scope.cocktails.indexOf(result);
    		$scope.cocktails.splice(index,1);
		}).error(function(error){
			console.log('error deleting cocktail ' + $routeParams.id + ' :' + error)
		});

		$location.url("/");
	}
});