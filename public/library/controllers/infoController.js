// Route params is to identificate the segments of the url, in this case, to recognize the cocktail
app.controller("infoController", function infoController($scope,$routeParams){
	angular.forEach($scope.cocktails, function(cocktail, key){
		if (cocktail._id == $routeParams.id){
			$scope.cocktail = cocktail;
			$scope.cocktail.alcoholMessage = cocktail.alcohol ? "Alcoholic" : "Non-Alcoholic";
		}

	});
});