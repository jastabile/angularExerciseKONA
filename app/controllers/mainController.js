


app.controller('MainController', function ($scope, $http) {
	$http.get("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole")
	.then(function(response) {
        $scope.empleados = response.data;
    });
});