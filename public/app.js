var app = angular.module('imageBank',[]);

app.controller('imageBankCtrl',function($scope){
      if (navigator.userAgent.match(/(android|iphone|ipad|blackberry|symbian|symbianos|symbos|netfront|model-orange|javaplatform|iemobile|windows phone|samsung|htc|opera mobile|opera mobi|opera mini|presto|huawei|blazer|bolt|doris|fennec|gobrowser|iris|maemo browser|mib|cldc|minimo|semc-browser|skyfire|teashark|teleca|uzard|uzardweb|meego|nokia|bb10|playbook)/gi)) {
        if ( ((screen.width  >= 480) && (screen.height >= 800)) || ((screen.width  >= 800) && (screen.height >= 480)) || navigator.userAgent.match(/ipad/gi) ) {
            $scope.imagesWidth = 210;
            $scope.nbrColumns = 4;
        } else {
          $scope.imagesWidth = 350;
          $scope.nbrColumns = 1;
        }
    } else {
        if(screen.width>1440){
          $scope.imagesWidth = 280;
          $scope.nbrColumns = 7;
        }else{
          $scope.imagesWidth = 210;
          $scope.nbrColumns = 6;
        }
    }
  //   $scope.imagesWidth = 210;
  //
  // if(screen.width<=425){
  //   // $scope.imagesWidth = 192;
  //   $scope.nbrColumns = 2;
  // }else if(screen.width<=768){
  //   // $scope.imagesWidth = 210;
  //   $scope.nbrColumns = 3;
  // }else if(screen.width<=1024){
  //   // $scope.imagesWidth = 210;
  //   $scope.nbrColumns = 4;

  // $scope.imagesHeights = [120,50,23,78,500,69,153,235,456,521,147,258,369,456,53,23,69,45,951,230,100,62,43,60,83,35, 90, 20, 54, 75, 85, 91, 76, 99, 18,28, 14, 79, 93,71, 39, 37, 87, 46, 25, 29, 26, 38,  6, 70,49, 36, 97, 84, 41, 51, 23,  4, 92, 77, 86, 80, 59, 58, 74, 65, 22, 47, 72, 53, 17, 67, 31, 78, 95, 45, 81, 94, 68, 63, 21,  2, 15, 57, 55, 61, 52, 34, 89, 66, 30, 48, 13, 40, 73, 19, 27, 44, 98, 12, 10, 24,  8, 96, 88,  3,  5,  1,  9, 16,  7, 82, 42, 32, 50, 11, 69, 64, 56, 33];
  $scope.imagesHeights = [
  'http://192.168.1.100/imagesW200Q80/images/nikos-nikolaou/-2.jpg',
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
  // $scope.imagesHeights = $scope.imagesHeights.reverse();
  console.log($scope.imagesHeights.length);
  // initialize columns index
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


  $scope.columnsIndex = [];
  for (var i = 0; i < $scope.nbrColumns; i++) {
    $scope.columnsIndex.push({index : 0, row : 0});
  }
  // $scope.imagesHeights = $scope.imagesHeights.sort(function(a,b){return b-a});

  // for (var i = 0; i < $scope.imagesHeights.length; i++) {
  //
  //   // getMeta($scope.imagesHeights[i], handleImage);
  //
  // }

  var handleImage = function(height,url,i,n){
    if(i<n){
      var index =   $scope.getIndexMiHieghtCol();
      var top = $scope.columnsIndex[index].index+($scope.columnsIndex[index].row);
      var left = index*($scope.imagesWidth+10);
      var element = $('<img id="img-'+i+'" src="'+url+'" class="imageBankItem" style="width : '+$scope.imagesWidth+'px;top:'+top+'px;left:'+left+'px;"/>');
      $('#iBankContainer').append(element);
      // element.animate({
      //   opacity: 1,
      //   left : left +'px'
      // },1500);
      console.log(element.height());
      $scope.columnsIndex[index].index += $('#img-'+i)[0].naturalHeight;
      $scope.columnsIndex[index].row += 1;
       handleImages(i+1,n);
    }
  }

  function handleImages(i,n){
      if(i<n){
            getMeta($scope.imagesHeights[i], handleImage,i,n);
      }
  }

  handleImages(0,$scope.imagesHeights.length);

});
