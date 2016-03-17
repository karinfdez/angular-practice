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
	});
}])

.controller('TemplatesCtrl', ['$scope',function($scope){
	
}])
.controller('TemplateDetailsCtrl', ['$scope',function($scope){
	
}]);