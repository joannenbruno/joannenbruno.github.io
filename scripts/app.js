
(function() {
	'use strict';

	angular.module('portfolioApp', ['ui.router'])
		.config(function($stateProvider, $urlRouterProvider, $compileProvider, $locationProvider) {

		  $compileProvider.debugInfoEnabled(false);

		  $stateProvider
		  .state('developer', {
		    url: '/developer',
		    templateUrl: 'templates/main/developer.html',
		    controller: 'DeveloperController'
		  })
		  .state('illustrator', {
		    url: '/illustrator',
		    templateUrl: 'templates/main/illustrator.html',
		    controller: 'IllustratorController'
		  })
		  .state('sickbay', {
		    url: '/sickbay',
		    templateUrl: 'templates/projects/sickbay.html',
		    controller: 'DeveloperController'
		  })
		  .state('medidata', {
		    url: '/medidata',
		    templateUrl: 'templates/projects/medidata.html',
		    controller: 'DeveloperController'
		  })
		  .state('etude', {
		    url: '/etude',
		    templateUrl: 'templates/projects/etude.html',
		    controller: 'DeveloperController'
		  });

        // $locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/developer');

		 $locationProvider.html5Mode({
		  	enabled: true,
		  	requireBase: false
		  });
		});
})();