$(document).ready(function () {


    var viewPass = function(){
      $(".pass").mousedown(function(){
          $(".view").attr("type", "text");
      });
        $(".pass").mouseup(function(){
          $(".view").attr("type", "password");
      });
    };

    viewPass();
});


