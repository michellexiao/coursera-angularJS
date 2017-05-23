(function () {
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.items="";
  $scope.number=0;
  $scope.sayMessage="Say Something!!!";
  $scope.addColor = {
        "color" : "black"
    }

  $scope.borderColor = "black";
  $scope.checkIfTooMuch=function(){
    tooMuchOrNot($scope.items);
}

//iterate the arrays
//do not count item such as ,, or , ,
function countNonEmptyItmes(items){
  var count=0;
for(var i=0;i<items.length;i++){
  if(items[i]==""||items[i]==" ")
    continue;
  else {
    count++;
  }

}
  return count;
}


  function tooMuchOrNot(stringToSplit){
    var itemArray = stringToSplit.split(',');
    var itemCount=0;

    if (itemArray[0]=="" || itemArray[0]==" "){
      $scope.sayMessage="Please enter data first";
      $scope.addColor = {
            "color" : "red"
        }
      $scope.borderColor = "red";
    }else {
      itemCount=countNonEmptyItmes(itemArray);
      if (itemCount>3) {
        $scope.sayMessage="Too much!";
        $scope.addColor = {
              "color" : "green",
          }
        $scope.borderColor = "green";

      }else {
        $scope.sayMessage="Enjoy!";
        $scope.addColor = {
              "color" : "green",
          }
        $scope.borderColor = "green";

      }

    }
  }

};

})();
