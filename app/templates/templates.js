// I declare store.templates in the app.js module
angular.module('store.templates',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('/templates',{
		templateUrl: 'templates/templates.html',
		controller: 'TemplatesCtrl'
	}).
	when('/templates/:id',{
		templateUrl: 'templates/template-details.html',
		controller: 'TemplateDetailsCtrl'
	}).
	 otherwise({redirectTo:'/templates'})
}])



.controller('TemplatesCtrl', ['$scope','$http',function($scope,$http){
	 
	$http.get("json/templates.json").success(function(response){
		$scope.templates=response;
		console.log(response);
	});
}])
.controller('TemplateDetailsCtrl', ['$scope',function($scope){
	
}]);