var app = angular.module('imageBank',[]);

app.controller('imageBankCtrl',function($scope,$timeout){
  $scope.imagesHeights = ['http://192.168.1.100/imagesW200Q80/images/nikos-nikolaou/-2.jpg',
  'http://192.168.1.100/imagesW200Q80/images/charles-tunnicliffe/black-swan-family(1).jpg',
  'http://192.168.1.100/imagesW200Q80/images/charles-tunnicliffe/carmine-bee-eaters(1).jpg',
  'http://192.168.1.100/imagesW200Q80/images/charles-tunnicliffe/blue-eared-pheasants(1).jpg',
  'http://192.168.1.100/imagesW200Q80/images/giulio-turcato/composizione-1956.jpg',
  'http://192.168.1.100/imagesW200Q80/images/giulio-turcato/composizione-1959.jpg',
  'http://192.168.1.100/imagesW200Q80/images/giulio-turcato/collage-1968.jpg',
  'http://192.168.1.100/imagesW200Q80/images/giulio-turcato/paesaggio-cinese-1970.jpg',
  'http://192.168.1.100/imagesW200Q80/images/giulio-turcato/composizione-1971-1.jpg',
  'http://192.168.1.100/imagesW200Q80/images/giulio-turcato/il-tunnel-1970.jpg',
  'http://192.168.1.100/imagesW200Q80/images/charles-tunnicliffe/grey-herons(1).jpg',
  'http://192.168.1.100/imagesW200Q80/images/enrico-castellani/superficie-rossa-2006.jpg',
  'http://192.168.1.100/imagesW200Q80/images/enrico-castellani/superficie-alluminio-1969.jpg',
  'http://192.168.1.100/imagesW200Q80/images/jorge-castillo/barcelona-iv-1990.jpg',
  'http://192.168.1.100/imagesW200Q80/images/jorge-castillo/barcelona-i-1976.jpg',
  'http://192.168.1.100/imagesW200Q80/images/amilcar-de-castro/untitled-1963.jpg',
  'http://192.168.1.100/imagesW200Q80/images/jorge-castillo/mediterranean-plant-2010.jpg',
  'http://192.168.1.100/imagesW200Q80/images/jorge-castillo/tightrope-walker-1966.jpg',
  'http://192.168.1.100/imagesW200Q80/images/enrico-castellani/superficie-blu-1979.jpg',
  'http://192.168.1.100/imagesW200Q80/images/auguste-herbin/blanc-1947.jpg',
  'http://192.168.1.100/imagesW200Q80/images/auguste-herbin/cause.jpg',
  'http://192.168.1.100/imagesW200Q80/images/auguste-herbin/still-life.jpg',
  'http://192.168.1.100/imagesW200Q80/images/josef-herman/pruning-the-vines-1952.jpg',
  'http://192.168.1.100/imagesW200Q80/images/josef-herman/in-the-canteen-1954.jpg',
  'http://192.168.1.100/imagesW200Q80/images/josef-herman/the-gardener-1963.jpg',
  'http://192.168.1.100/imagesW200Q80/images/josef-herman/field-workers-1961.jpg',
  'http://192.168.1.100/imagesW200Q80/images/giulio-turcato/composizione-1956.jpg',
  'http://192.168.1.100/imagesW200Q80/images/giulio-turcato/composizione-1959.jpg',
  'http://192.168.1.100/imagesW200Q80/images/giulio-turcato/collage-1968.jpg',
  'http://192.168.1.100/imagesW200Q80/images/giulio-turcato/paesaggio-cinese-1970.jpg',
  'http://192.168.1.100/imagesW200Q80/images/giulio-turcato/composizione-1971-1.jpg',
  'http://192.168.1.100/imagesW200Q80/images/giulio-turcato/il-tunnel-1970.jpg',
  'http://192.168.1.100/imagesW200Q80/images/charles-tunnicliffe/grey-herons(1).jpg',
  'http://192.168.1.100/imagesW200Q80/images/enrico-castellani/superficie-rossa-2006.jpg',
  'http://192.168.1.100/imagesW200Q80/images/enrico-castellani/superficie-alluminio-1969.jpg',
  'http://192.168.1.100/imagesW200Q80/images/jorge-castillo/barcelona-iv-1990.jpg',
  'http://192.168.1.100/imagesW200Q80/images/jorge-castillo/barcelona-i-1976.jpg',
  'http://192.168.1.100/imagesW200Q80/images/amilcar-de-castro/untitled-1963.jpg',
  'http://192.168.1.100/imagesW200Q80/images/jorge-castillo/mediterranean-plant-2010.jpg',
  'http://192.168.1.100/imagesW200Q80/images/jorge-castillo/tightrope-walker-1966.jpg',
  'http://192.168.1.100/imagesW200Q80/images/enrico-castellani/superficie-blu-1979.jpg',
  'http://192.168.1.100/imagesW200Q80/images/auguste-herbin/blanc-1947.jpg',
  'http://192.168.1.100/imagesW200Q80/images/auguste-herbin/cause.jpg',
  'http://192.168.1.100/imagesW200Q80/images/auguste-herbin/still-life.jpg',
  'http://192.168.1.100/imagesW200Q80/images/josef-herman/pruning-the-vines-1952.jpg',
  'http://192.168.1.100/imagesW200Q80/images/josef-herman/in-the-canteen-1954.jpg',
  'http://192.168.1.100/imagesW200Q80/images/josef-herman/the-gardener-1963.jpg',
  'http://192.168.1.100/imagesW200Q80/images/josef-herman/field-workers-1961.jpg',
  'http://192.168.1.100/imagesW200Q80/images/giulio-turcato/composizione-1956.jpg',
  'http://192.168.1.100/imagesW200Q80/images/giulio-turcato/composizione-1959.jpg',
  'http://192.168.1.100/imagesW200Q80/images/giulio-turcato/collage-1968.jpg',
  'http://192.168.1.100/imagesW200Q80/images/giulio-turcato/paesaggio-cinese-1970.jpg',
  'http://192.168.1.100/imagesW200Q80/images/giulio-turcato/composizione-1971-1.jpg',
  'http://192.168.1.100/imagesW200Q80/images/giulio-turcato/il-tunnel-1970.jpg',
  'http://192.168.1.100/imagesW200Q80/images/charles-tunnicliffe/grey-herons(1).jpg',
  'http://192.168.1.100/imagesW200Q80/images/enrico-castellani/superficie-rossa-2006.jpg',
  'http://192.168.1.100/imagesW200Q80/images/enrico-castellani/superficie-alluminio-1969.jpg',
  'http://192.168.1.100/imagesW200Q80/images/jorge-castillo/barcelona-iv-1990.jpg',
  'http://192.168.1.100/imagesW200Q80/images/jorge-castillo/barcelona-i-1976.jpg',
  'http://192.168.1.100/imagesW200Q80/images/amilcar-de-castro/untitled-1963.jpg',
  'http://192.168.1.100/imagesW200Q80/images/jorge-castillo/mediterranean-plant-2010.jpg',
  'http://192.168.1.100/imagesW200Q80/images/jorge-castillo/tightrope-walker-1966.jpg',
  'http://192.168.1.100/imagesW200Q80/images/enrico-castellani/superficie-blu-1979.jpg',
  'http://192.168.1.100/imagesW200Q80/images/auguste-herbin/blanc-1947.jpg',
  'http://192.168.1.100/imagesW200Q80/images/auguste-herbin/cause.jpg',
  'http://192.168.1.100/imagesW200Q80/images/auguste-herbin/still-life.jpg',
  'http://192.168.1.100/imagesW200Q80/images/josef-herman/pruning-the-vines-1952.jpg',
  'http://192.168.1.100/imagesW200Q80/images/josef-herman/in-the-canteen-1954.jpg',
  'http://192.168.1.100/imagesW200Q80/images/josef-herman/the-gardener-1963.jpg',
  'http://192.168.1.100/imagesW200Q80/images/josef-herman/field-workers-1961.jpg'
  ];
  $scope.imagesHeights  = [];       // To bloch it for test

  $scope.getIndexMiHieghtCol = function(){
    var index = 0;
    for (var i = 1; i < $scope.columnsIndex.length; i++) {
      if($scope.columnsIndex[i].index<$scope.columnsIndex[index].index)
          index = i;
    }
    return index;
  }

  function getMeta(url, callback,i,n) {
      var img = new Image();
      img.src = url;
      img.onload = function() { callback(this.height,url,i,n); }
  }


  var handleImage = function(height,url,i,n){
    if(i<n){
      var index =  $scope.getIndexMiHieghtCol();
      var animate = '';
      if($scope.animate)
        animate = 'margin-top : 1500px;opacity:0.1;';
      var element = $('<div class="imageBankItem" style="'+animate+'" ><img id="img-'+i+'" src="'+url+'" title="image title" class="iBankImage" /><ul class="iBankTitle"><li>Title here</li><li style="font-size: 12px;font-weight: normal;cursor: default;">Rogier van der Weyden · 1435-1440</li></ul></div>');
      $('#ibColumn-'+index).append(element);
      $scope.columnsIndex[index].index += element.height();
      if($scope.animate)
        element.animate({
          opacity: 1,
          marginTop : 0 +'px'
        },800);
      var timeStmp = 0;
      if($scope.animate)
        timeStmp = 100;
      $timeout(function () {
        handleImages(i+1,n);
      }, timeStmp);
    }
  }

  function handleImages(i,n){
      if(i<n){
            getMeta($scope.imagesHeights[i], handleImage,i,n);
      }
  }

  $scope.more = function(){
    var tab = $scope.imagesHeights.slice(5,20);
    var begin = $scope.imagesHeights.length;
    $scope.imagesHeights = $scope.imagesHeights.concat(tab);
    handleImages(begin,$scope.imagesHeights.length);
  }


  $scope.animate = false;

  var resizeId ;
  var Vwidth = $(window).width();

      $(window).resize(function() {
        if($(window).width() != Vwidth){
            Vwidth = $(window).width();
            clearTimeout(resizeId);
            resizeId = setTimeout($scope.adjustImageBank, 300);
        }
      });

      $scope.prepareImageBank = function(){
        $scope.nbrColumns = 0;
        $scope.columnWidth = 0;
        $scope.columnsIndex = [];

        var screenWidth = $(window).width();
        if (screenWidth < 670) {
          $scope.nbrColumns = 2;
        }else if (screenWidth>659 && screenWidth < 880) {
          $scope.nbrColumns = 3;
        }else if (screenWidth>879 && screenWidth < 1100) {
          $scope.nbrColumns = 4;
        }else if (screenWidth >1099 && screenWidth < 1320) {
          $scope.nbrColumns = 5;
        }else if (screenWidth>1319 && screenWidth < 1540) {
          $scope.nbrColumns = 6;
        }else if(screenWidth>=1540){
          $scope.nbrColumns = Math.floor(screenWidth / 223);
        }
        $scope.columnWidth = 100 / $scope.nbrColumns;

        for (var i = 0; i < $scope.nbrColumns; i++) {
          $scope.columnsIndex.push({index : 0});
        }
      }

      $scope.createColumns = function(){
        var color = 'background-color:#fff';
        for (var i = 0; i < $scope.nbrColumns; i++) {
          var colorf = '';
          if(i%2==0)colorf = color;
          var element = $('<div id="ibColumn-'+i+'" class="imageBankColumn" style="width : '+$scope.columnWidth+'%;'+colorf+'"></div');
          // element.append('<div class="imageBankItem">toto</toto>');
          $('#iBankContainer').append(element);
        }
      }

      $scope.createImageBank = function(){
        $scope.prepareImageBank();
        $scope.createColumns();
        handleImages(0,$scope.imagesHeights.length);
        // $scope.animate = true;
      }

      $scope.clearImageBank = function(){
        $('.imageBankColumn').remove();
      }

      $scope.adjustImageBank = function(){
        $scope.clearImageBank();
        $scope.animate = false;
        $scope.createImageBank();
      }

      $scope.createImageBank();
});



app.controller('TestingDirectiveCtrl',function($scope,$timeout){
$scope.data = [1,2,3,4,5,6,7,8,9,10];
console.log($scope.data);
});
app.directive('imageBankDir',function(){
  return {
    link : function(scope,element,attrs){
      console.log('element added');
      console.log(element);
      if(scope.$first){
          console.log('First');
      }
    }
  }
});
