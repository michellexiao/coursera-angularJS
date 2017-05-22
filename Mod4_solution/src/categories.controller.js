(function () {
'use strict';

angular.module('data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  var list = this;
  list.categories = categories;
}

// CategoriesController.$inject = ['MenuDataService'];
// function CategoriesController(MenuDataService) {
//   var mainList = this;
//   mainList.categories = [];
//
//   mainList.$onInit = function () {
//     MenuDataService.getAllCategories()
//     .then(function (result) {
//       mainList.categories = result;
//     });
//   };
// }

})();
