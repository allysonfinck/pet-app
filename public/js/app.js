const app = angular.module('PetApp', []);

app.controller('MainController', ['$http', function($http){
  const controller = this;

  this.appName = 'Pet Finder'


this.getPets = function(){
  $http({
    method:'GET',
    url:'/pets',
  }).then(function(response){
    controller.pets = response.data
  }, function(){
    console.log('error');
  })
}
this.getPets();

this.createPets = function(){
  $http({
    method:'POST',
    url:'/pets',
    data:{
      animal: this.animal,
      breed: this.breed,
      size: this.size,
      sex: this.sex,
      location: this.location,
      age: this.age
    }
  }).then(function(response){
    controller.getPets();
  }, function(){
    console.log('error');
  })
}







}]) //closes app.controller
