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
		// console.log(response);
	});
}])
.controller('TemplateDetailsCtrl', ['$scope','$routeParams','$http','$filter',function($scope,$routeParams,$http,$filter){
	// In order to get the id of the template.
	var templateId=$routeParams.id;
	$http.get("json/templates.json").success(function(response){
		// Here I get the object with that specific ID.
		$scope.template= $filter('filter')(response,function(data){
			return data.id == templateId;
		})[0];
		$scope.mainImage=$scope.template.images[0].name;
	});
}]);