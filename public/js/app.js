const app = angular.module('PetApp', []);

app.controller('MainController', ['$http', function($http){
  const controller = this;

  this.appName = 'Pet Finder';

  this.pets = [];

  this.baseURL = 'http://api.petfinder.com/my.method?key=12345&arg1=foo';
  this.apikey = 'apikey=' + 'd9f0af5e7a062cb5c0fec14bb266231b';
  this.query = '';
  //idk what this.query should be
  this.getPets = '';
  this.searchURL = this.baseURL + this.apikey + '&' + this.query ;


this.getPets = function(){
  $http({
    method:'GET',
    url: this.searchURL + this.getPets
  }).then (response => {
    this.pets = response.data ;
  }, error =>{
    console.error( error );
  }).catch (error => {
    console.error('Catch:', error)
  })
}








}]) //closes app.controller
