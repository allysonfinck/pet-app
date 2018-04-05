const app = angular.module('PetApp', []);

app.controller('MainController', ['$http', '$sce', function($http, $sce){
  const controller = this;

  this.appName = 'Pet Finder';

  this.pets = [];

  this.baseURL = 'http://api.petfinder.com/pet.find?key=d9f0af5e7a062cb5c0fec14bb266231b&location=10940';


  this.getPets = function(){
    const url = 'https://api.petfinder.com/pet.find?key=9ea203268b6ec8547b6ba71eb1241987&location=10940&format=json';
    const trustedUrl = $sce.trustAsResourceUrl(url);

    $http.jsonp(trustedUrl, {jsonpCallbackParam: 'callback'})
      .then(function(response){
        console.log(response.data.petfinder.pets.pet);
        controller.pets = response.data.petfinder.pets.pet;
      })
    }

  // *****testing register/login******
    this.createUser = function(){
      $http({
        method:'POST',
        url: '/users',
        data: {
          username: this.username,
          password: this.password
        }
      }).then(function(response){
        console.log(response);
      }, function(){
        console.log('error');
      });
    }

    this.logIn = function(){
      $http({
        method: 'POST',
        url:'/sessions',
        data: {
          username: this.loginUsername,
          password: this.loginPassword
        }
      }).then(function(response){
        controller.loggedinUsername = response.data.loginUsername;
        console.log(response);
      }, function(){
        console.log('error');
      })
    }

    this.logOut = function(){
      $http({
        method: 'DELETE',
        url: '/sessions'
      }).then(function(response){
        console.log(response);
      }, function(){
        console.log('error');
      })
    }

    this.getPets();

  }]) //closes app.controller


  //******modal*******

  $( ()=>{

  //grabbing the login/register button
  const $openBtn = $('#openModal');

  //grabbing modal elememnt
  const $modal = $('#modal');

  //grabbing close button
  const $closeBtn = $('#close');


  //event handlers
  const openModal = ()=>{
    $modal.css('display', 'block');
  }

  const closeModal = ()=>{
    // console.log('close modal test');
    $modal.css('display', 'none');
  }



  //event listeners
  $openBtn.on('click', openModal);

  $closeBtn.on('click', closeModal);

}); //
