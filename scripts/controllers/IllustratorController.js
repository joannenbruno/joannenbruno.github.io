(function() {
	angular
		.module('portfolioApp')
		.controller('IllustratorController', ['$scope', '$location', '$anchorScroll',
			function($scope, $location, $anchorScroll) {
				// set page class
				$scope.pageClass = 'illustrator';

				// image data array
				$scope.images = [
				   {
				      "caption":"Inner Turmoil. Copic Marker on Smooth Bristol.",
				      "url":"dist/images/illustrator/artwork/innertur.JPG",
				      "alt":"Inner"
				   },
				   {
				      "caption":"Corvus. Colored Pencil on Strathmore Mixed Media.",
				      "url":"dist/images/illustrator/artwork/corvus.jpg",
				      "alt":"Puerto Rico"
				   },
                   {
				      "caption":"Iris. Copic Marker on Smooth Bristol.",
				      "url":"dist/images/illustrator/artwork/iris.jpg",
				      "alt":"Iris Bruno"
				   }
				];
				
				// utility function for linking between views
				$scope.go = function ( path ) {
				  $location.path( path );
				};

				// utility function to set viewport to the top of the page 
				// on element click
				$scope.backToTop = function() {
					$anchorScroll();
				};
			}
		]);
})();