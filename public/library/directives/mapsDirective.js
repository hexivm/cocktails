app.directive('mapsDirective', function () {
	var restrict = 'A';
	function link(scope, element, attrs) {
    	initialize();
  }
	return {
		restrict: restrict,
		link:link
	};
})

