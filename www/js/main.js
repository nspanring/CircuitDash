var dwidth = 0;
var dheight = 0;
// fires when the document is ready \(o.o)/
$(document).ready(function(){
  dwidth = $(document).width();
  dheight = $(document).height();
  console.log(dwidth+" "+dheight);
  var bmusic = document.getElementById("bmusic");
  bmusic.volume = 0.5;

  // load svg files into all elements with the class lsvg and an svgsrc attr
  $(".lsvg").each(function(){
    src = $(this).attr('svgsrc');
    loadsvg(this, src);
  });

  /*********************
   * APP Event Handler *
   *********************/

  // Mute Click Event Handler
  $( "#mute" ).on( "click", function() {
    var bmusic = document.getElementById("bmusic");
    if(bmusic.muted == false) {
      bmusic.muted = true;
    } else {
      bmusic.muted = false;
    }
  });

  // make all classes "elements" draggable
  $( ".elements" ).draggable({ revert: "invalid", scroll: false });

  // touch feedback start
  $('.Btn').bind('touchstart', function() {
      d3.select(this).select('svg').select('#layer2').select('path').style('fill', "white");
  });
  // touch feedback end
  $('.Btn').bind('touchend', function() {
      d3.select(this).select('svg').select('#layer2').select('path').style('fill', "black");
  });

  // user tab/click event Handler
  $( ".Btn" ).on("tap",function(){
    var todo = $(this).attr('do');
    switch(todo){
      // switch back Main Menu
      case 'mainmenu':
        hideMenu();
        $('.mainMenuDiv').show();
      break;
      // switch to level selection
      case 'newgame':
        hideMenu();
        $('.gameMenuDiv').show();
      break;
      // TODO: settings is for DEBUG MODE (change this to real settings)
      case 'settings':
        hideMenu();
        $('.levelEngine').show();
      break;
      // switch to Game View
      case 'startlevel':
        hideMenu();
        $('.gameDiv').show();
      break;
      // TODO: Check for posible expetions
      default:

      break;
    }
  });

  // TODO: [change this to level selector] Start Level
  addLevel("debug");

// end document ready function
});

// Hide all div with the class menuDiv
function hideMenu(){
  $('.menuDiv').hide();
}


// Main SVG Loader Function
function loadsvg(obj, src){
  $(obj).load(src);
}

// TODO: Do we realy need this? NS
function ContentController($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}
