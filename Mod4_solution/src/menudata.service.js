(function () {
'use strict';

angular.module('data', [])
.service('MenuDataService', MenuDataService)
.constant('categoriesApiBasePath', "https://davids-restaurant.herokuapp.com/categories.json")
.constant('menuItemsApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");

MenuDataService.$inject = ['$http','categoriesApiBasePath', 'menuItemsApiBasePath'];

function MenuDataService($http, categoriesApiBasePath, menuItemsApiBasePath){
  var service = this;

  service.getAllCategories = function(){

    return $http({
      method: "GET",
      url: (categoriesApiBasePath)
    })
    .then(function(response){
      console.log("Response fromm all categories: ",response.data);
      return response.data;
    })
    .catch(function(error){
      console.log("Somthing went wrong");
    })

  };

  service.getItemsForCategory() = function(categoryShortName){
    return $http({
      method: "GET",
      url:(menuItemsApiBasePath+categoryShortName)
    })
    .then(function(response){
      console.log("Menu Items: ",response.data.menu_items);
      return response.data.menu_items;
    })
    .catch(function(error){
      console.log("Somthing went wrong");
    })

  };

}

})();
