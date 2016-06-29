angular.module('portfolioModule', ['ngRoute'])
	   .config(function($routeProvider){
	   		$routeProvider
		   		.when('/',{
		   			controller: 'mainController',
		   			templateUrl: '../../assets/partials/greetings.html'
		   		})
		   		.when('/Welcome',
		   		{
		   			controller: 'mainController',
		   			templateUrl: '../../assets/partials/landing.html'
		   		})
		   		.when('/SkillSet',
		   		{
		   			controller: 'mainController',
		   			templateUrl: '../../assets/partials/skills.html'
		   		})
		   		.when('/Work',
		   		{
		   			controller: 'mainController',
		   			templateUrl: '../../assets/partials/previousworks.html'
		   		})
		   		.when('/Contact',
		   		{
		   			controller: 'mainController',
		   			templateUrl: '../../assets/partials/contact.html'
		   		})
		   		.when('/AboutMe',
		   		{
		   			controller: 'mainController',
		   			templateUrl: '../../assets/partials/bio.html'
		   		})
		   		.when('/error',
		   		{
		   			controller: 'mainController',
		   			templateUrl: '../../assets/partials/error.html'
		   		})
		   		.otherwise({ redirectTo: '/error'});
	   });
