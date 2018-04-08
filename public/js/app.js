const app = angular.module('PetApp', []);

app.controller('MainController', ['$http', '$sce', function($http, $sce){
  const controller = this;
  this.appName = 'Pet Finder';
  this.pets = [];
  this.baseURL = 'http://api.petfinder.com/pet.find?key=d9f0af5e7a062cb5c0fec14bb266231b&location=10940';
  this.currentUser = "";

  // INCLUDES
  this.include = 'partials/home.html';
  this.changeInclude = (page, pet)=>{
    console.log(this.pets);
    this.currentPet = pet;
    this.include = 'partials/' + page + '.html';
    console.log(this.currentPet);
  }

  // SEARCH FOR PETS
  this.getPets = function(){
    let url = 'https://api.petfinder.com/pet.find?key=9ea203268b6ec8547b6ba71eb1241987&format=json';
    if(this.location){
      url += '&location=' + this.location;
    }
    if(this.animal){
      url += '&animal=' + this.animal;
    }
    if(this.breed){
      this.breed = this.breed.replace(/\s+/g, '');
      url += '&breeds=' + this.breed;
    }
    if(this.size){
      if(this.size = 's'){
        this.size = 'S';
      }
      if(this.size = 'm'){
        this.size = 'M';
      }
      if(this.size = 'l'){
        this.size = 'L';
      }
      this.size = this.size.toUpperCase();
      url += '&size=' + this.size;
    }
    if(this.sex){
      if(this.sex = 'm'){
        this.sex = 'M';
      }
      if(this.sex = 'f'){
        this.sex = 'F';
      }
      this.size = this.size.toUpperCase();
      url += '&sex=' + this.sex;
    }
    if(this.age){
      if(this.age = 'baby'){
        this.age = 'Baby';
      }
      if(this.age = 'young'){
        this.age = 'Young';
      }
      if(this.age = 'adult'){
        this.age = 'Adult';
      }
      if(this.age = 'senior'){
        this.age = 'Senior';
      }
      url += '&age=' + this.age;
    }

    console.log(url);
    const trustedUrl = $sce.trustAsResourceUrl(url);
    console.log(trustedUrl);

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
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName,
          image: this.image,
          location: this.location
        }
      }).then(function(response){
        console.log(response);
      }, function(){
        console.log('error');
      });
    }

    this.editUser = function(){
      $http({
        method: 'PUT',
        url: '/users',
        data: {
          username: this.username,
          firstName: this.firstName,
          lastName: this.lastName,
          image: this.image,
          location: this.location
        }
      }).then(function(response){
        console.log(response.data);
      }, function(){
        console.log('error');
      })
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
        controller.currentUser = response.data.message;
        console.log(controller.currentUser);
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
