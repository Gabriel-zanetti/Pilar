var produtos ={
  iniciar:function(){
    if($(window).scrollTop()!=0){
      $(".m1").hide();
      $(".m2").show();

    }else{
      $(".m1").show();
      $(".m2").hide();
    }



    $('body').append(`<script>
      $(document).scroll(function() {
        if($(window).scrollTop()!=0){
          $(".m1").hide();
          $(".m2").show();

        }else{
          $(".m1").show();
          $(".m2").hide();
        }

      });
      </script>
      ` );

  },
  lista:function() {


    $("#app").append(`
      <div class="card" style=" width: 300px ;">
      <img src="img/Roupa.jpg" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
      </div>

      `);
  }


};