(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective(){
  var ddo = {};
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];

function NarrowItDownController(MenuSearchService){
  var menu = this;
  menu.found = function(searchTerm){
    MenuSearchService.getMatchedMenuItems(searchTerm);
  }

}

MenuSearchService.$inject = ['$http','ApiBasePath'];

function MenuSearchService($http, ApiBasePath){
  var service = this;

  service.getMatchedMenuItems = function(searchTerm){
    console.log("searchTerm: ",searchTerm);

//     var response = $http({
//           method:"GET",
//           url:(ApiBasePath + "/menu_items.json")
//     });
// console.log(searchTerm);
//     response.then(function(response){
//
//
//     })
//     .catch(function(error){
//
//     })
    return $http({
      method:"GET",
      url:(ApiBasePath + "/menu_items.json"),
    })


    .then(function (response) {
      console.log("All items: ",response.data);
      // process result and only keep items that match
      searchTerm = searchTerm.toLowerCase();

      var allItems = response.data.menu_items;
      console.log("How many? ",response.data.menu_items.length);
      var foundItems = [];

      for (var i in allItems){
        console.log("Loop started.");
        console.log("Current item: ",allItems[i]);
        var item = allItems[i];
        //console.log("description: ",item.description);
        //console.log(item.description.toLowerCase().indexOf(searchTerm));
        if(item.description.toLowerCase().indexOf(searchTerm) != -1){
          console.log("Found a match!");
        //  console.log("description is: ",item.description);
          foundItems.push(item);
        }
      }


      console.log('Found items: ',foundItems);
      console.log("Totally: ", foundItems.length);

      // return processed items
      return foundItems;
  })
    .catch(function(error){
      console.log(error);
    })
  };

}

})();
