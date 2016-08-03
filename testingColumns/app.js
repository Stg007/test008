var app = angular.module('myApp',[]);



app.controller('myCtrl',function($scope){
      $scope.nbrColumns = 0;
      $scope.columnWidth = 0;
      var resizeId ;

      $(window).resize(function() {
        clearTimeout(resizeId);
        resizeId = setTimeout($scope.adjustImageBank, 300);
      });

      $scope.prepareImageBank = function(){
        $scope.nbrColumns = 1;
        var screenWidth = $(window).width();
        if (screenWidth>439 && screenWidth < 670) {
          $scope.nbrColumns = 2;
        }else if (screenWidth>659 && screenWidth < 880) {
          $scope.nbrColumns = 3;
        }else if (screenWidth>879 && screenWidth < 1100) {
          $scope.nbrColumns = 4;
        }else if (screenWidth >1099 && screenWidth < 1320) {
          $scope.nbrColumns = 5;
        }else if (screenWidth>1319 && screenWidth < 150) {
          $scope.nbrColumns = 6;
        }else{
          $scope.nbrColumns = Math.floor(screenWidth / 223);
        }
        $scope.columnWidth = 100 / $scope.nbrColumns;
      }

      $scope.createColumns = function(){
        var color = 'background-color:#fff';
        for (var i = 0; i < $scope.nbrColumns; i++) {
          var colorf = '';
          if(i%2==0)colorf = color;
          var element = $('<div class="bankColumn" style="width : '+$scope.columnWidth+'%;'+colorf+'"></div');
          element.append('<div class="imageBankItem">toto</toto>');
          $('#bankContainer').append(element);
        }
      }

      $scope.createImageBank = function(){
        $scope.prepareImageBank();
        $scope.createColumns();
      }

      $scope.adjustImageBank = function(){
        $('#bankContainer').empty();
        $scope.createImageBank();
      }

      $scope.createImageBank();

});
