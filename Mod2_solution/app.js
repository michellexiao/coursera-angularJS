(function () {
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject =['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var list = this;

  list.items = ShoppingListCheckOffService.getToBuyItems();

  list.emptyMessage=ShoppingListCheckOffService.tbEmptyMsg;

  list.buyItems = function(itemIndex){
      ShoppingListCheckOffService.buyItems(itemIndex);
    }

}

AlreadyBoughtController.$inject =['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var list = this;
  list.items = ShoppingListCheckOffService.getBoughtItems();
  list.emptyMessage=ShoppingListCheckOffService.boughtEmptyMsg;

}

function ShoppingListCheckOffService(){
  var service = this;

  service.tbEmptyMsg = "Everything is bought!";
  service.boughtEmptyMsg = "Nothing bought yet.";

  //List of to_buy items
  var tbItems = [
    {name: "Cookies", quantity:"2 bags"},
    {name: "M&Ms", quantity:"5 bags"},
    {name: "Croissants", quantity:"1 box"},
    {name: "Beer", quantity:"1 pack"},
    {name: "Macarons", quantity:"2 boxes"},
    {name: "Apples", quantity:"1 bag"}
];
  var bItems = [];

  service.buyItems = function (itemIndex){
    //console.log(tbItems);

    var item = {
      name: tbItems[itemIndex].name,
      quantity: tbItems[itemIndex].quantity
    };
    bItems.push(item);
    tbItems.splice(itemIndex,1);

  };


  service.getToBuyItems = function(){
    return tbItems;
  };
  service.getBoughtItems = function(){
    return bItems;
  };
}

})();
