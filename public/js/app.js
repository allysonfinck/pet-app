const app = angular.module('PetApp', []);

app.controller('MainController', ['$http', function($http){

  this.appName = 'Pet Finder'

}])
