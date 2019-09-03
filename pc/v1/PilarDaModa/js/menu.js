var menu={
	tela:function(){
		$('body').append(`
			<script>
			$(document).ready(function(){
				var tam = $(window).width();

				if (tam >=960){
					menu.menu();
				}else{
					menu.menu2();
				} 
			});
			</script>

			`);


	},

	menu: function () {



		$("#menu").html(`<div class="media corletra m1" id="m1m"  >
			<img src="img/logo1.png"  class="align-self-end mr-3 m1mimg " alt="...">
			<div class="media-body">
			<nav class="media">
			<ul class="nav justify-content-center" style="width:200px; margin-left:140px; ">
			<li class="nav-item">
			<div class="btn-group" role="group" aria-label="Basic example">
			<button type="button" class="btn  fundoNone"><img src="img/login.png" style="width:20px;" class="align-self-end mr-3 fundociza" alt="...">LOGIN | CADASTRO</button>
			<button type="button" class="btn  fundoNone"><img src="img/pedido.png" style="width:20px;" class="align-self-end mr-3 fundociza" alt="...">MEUS PEDIDOS</button>
			<button type="button" class="btn  fundoNone"><img src="img/atendimento.png" style="width:20px;" class="align-self-end mr-3 fundociza" alt="...">ATENDIMENTO</button></button>
			</div>
			</li>
			</ul>



			<ul class="nav justify-content-end" style="width:200px; margin-left:270px;  ">
			<li class="nav-item">
			<div class="btn-group" role="group" aria-label="Basic example" style="height:90px;">
			<button type="button"  class="btn  fundoNone"><img src="img/lista.png" style="width:40px; " class="align-self-end mr-3" alt="...">LISTA <br> DESEJOS</button></button>
			<button type="button" class="btn  fundoNone"><img src="img/carrinho.png" style="width:40px;" class="align-self-end mr-3" alt="...">SACOLA</button>
			</li>
			</ul>

			</nav>
			<br>
			
			<nav class="media" style="margin-top:-40px;">
			<ul class="nav justify-content-center" style="width:200px; margin-left:155px;">
			<li class="nav-item">
			<div class="btn-group" role="group" aria-label="Basic example"  " >
			<button type="button" class="btn  fundociza" ><img src="img/quem-somos.png" style="width:30px; " class="align-self-end mr-3" alt="...">QUEM SOMOS  </button>
			<button type="button" class="btn fundociza">REDE SOCIAL  <img src="img/zap.png" style="width:20px; margin-left:6px;" class="align-self-end mr-3" alt="..."><img src="img/face.png" style="width:20px; " class="align-self-end mr-3" alt="..."><img src="img/inst.png" style="width:20px; " class="align-self-end mr-3" alt="..."></button>
			<button type="button" class="btn  fundociza"><img src="img/localiza.png" style="width:20px; " class="align-self-end mr-3" alt="...">LOCALIZACAO </button>
			</div>
			</li>
			</ul>


			</nav>
			
			<form class="form-inline menuNav1From colorFrom" id="formemenuPesquisa" >

			<a class="nav-link menuNav1FromLink destroi "  aria-haspopup="true" aria-expanded="false"   >
			<img src="img/lupa.png" class="destroi menuNav1FromLinkimg"  > 
			<input class="menuNav1FromLinkinput " type="search"  id="pesquisa" placeholder="Pesquisar" aria-label="Pesquisar">

			<a class="nav-item  dropdown-toggle colorFrom"  style="width:110px; margin-left:-380px;  "  data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Todos Sexos</a>
			<div class="dropdown-menu">
			<a class="dropdown-item" href="#"> <img src="img/unixesse.png" style="width:20px;" class="d-inline-block align-top" alt="">Unisexe</a>
			<a class="dropdown-item" href="#"><img src="img/homem.png" style="width:20px;" class="d-inline-block align-top" alt="">Ele</a>
			<a class="dropdown-item" href="#"><img src="img/mulher.png" style="width:20px;" class="d-inline-block align-top" alt="">Ela</a>
			<div class="dropdown-divider"></div>
			<a class="dropdown-item" href="#">Todos</a>
			</div>
			<a class="nav-item  dropdown-toggle colorFrom"  style="width:110px; margin-left:2px; "  data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Todas Idade</a>
			<div class="dropdown-menu">
			<a class="dropdown-item" href="#"> <img src="img/unixesse.png" style="width:20px;" class="d-inline-block align-top" alt="">Unisexe</a>
			<a class="dropdown-item" href="#"><img src="img/homem.png" style="width:20px;" class="d-inline-block align-top" alt="">Ele</a>
			<a class="dropdown-item" href="#"><img src="img/mulher.png" style="width:20px;" class="d-inline-block align-top" alt="">Ela</a>
			<div class="dropdown-divider"></div>
			<a class="dropdown-item" href="#">Todos</a>
			</div>

			<img src="img/promocao.png" style="width:30px;" class="d-inline-block align-top" alt="">Promocao















			</a>
			<img src="img/pesquisar.png" style="width:50px; height:50px; margin-left:10px; "  class="destroi fundoNone menuNav1FromLinkimg"  > 


			</form>


			</div>


			</div>
			<!-- Image and text -->
			<nav class="navbar navbar-light fundoMenu m1"  id="m1m2">
			<a class="navbar-brand corletra" href="#">
			<img src="img/perfume.png" style="width:40px;" class="d-inline-block align-top" alt="">
			Cosmeticos
			</a>
			<a class="navbar-brand corletra" href="#">
			<img src="img/roupa.png" style="width:35px;" class="d-inline-block align-top" alt="">
			Roupas
			</a>
			<a class="navbar-brand corletra" href="#">
			<img src="img/acessorio.png" style="width:35px; height:30px;" class="d-inline-block align-top" alt="">
			Acessorios
			</a>
			<a class="navbar-brand corletra" href="#">
			<img src="img/gumer.png" style="width:50px;" class="d-inline-block align-top" alt="">
			Calsados
			</a>
			</nav>





			<nav class="navbar-expand-lg m2 " style="height:110px; background: #610e72; z-index:5000;">
			</nav>


			<div class="media corletra m2 m2m1" >
			<img src="img/logo1.png" style="width:100px;" class="align-self-end mr-3" alt="...">
			<div class="media-body">
			
			
			<form class="form-inline menuNav1From colorFrom" id="formemenuPesquisa" >

			<a class="nav-link menuNav1FromLink destroi "  aria-haspopup="true" aria-expanded="false"   >
			<img src="img/lupa.png" class="destroi menuNav1FromLinkimg"  > 
			<input class="menuNav1FromLinkinput " type="search"  id="pesquisa" placeholder="Pesquisar" aria-label="Pesquisar">

			<a class="nav-item  dropdown-toggle colorFrom"  style="width:110px; margin-left:-380px;  "  data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Todos Sexos</a>
			<div class="dropdown-menu">
			<a class="dropdown-item" href="#"> <img src="img/unixesse.png" style="width:20px;" class="d-inline-block align-top" alt="">Unisexe</a>
			<a class="dropdown-item" href="#"><img src="img/homem.png" style="width:20px;" class="d-inline-block align-top" alt="">Ele</a>
			<a class="dropdown-item" href="#"><img src="img/mulher.png" style="width:20px;" class="d-inline-block align-top" alt="">Ela</a>
			<div class="dropdown-divider"></div>
			<a class="dropdown-item" href="#">Todos</a>
			</div>
			<a class="nav-item  dropdown-toggle colorFrom"  style="width:110px; margin-left:2px; "  data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Todas Idade</a>
			<div class="dropdown-menu">
			<a class="dropdown-item" href="#"> <img src="img/unixesse.png" style="width:20px;" class="d-inline-block align-top" alt="">Unisexe</a>
			<a class="dropdown-item" href="#"><img src="img/homem.png" style="width:20px;" class="d-inline-block align-top" alt="">Ele</a>
			<a class="dropdown-item" href="#"><img src="img/mulher.png" style="width:20px;" class="d-inline-block align-top" alt="">Ela</a>
			<div class="dropdown-divider"></div>
			<a class="dropdown-item" href="#">Todos</a>
			</div>

			<img src="img/promocao.png" style="width:30px;" class="d-inline-block align-top" alt="">Promocao















			</a>
			<img src="img/pesquisar.png" style="width:50px; height:50px; margin-left:10px; "  class="destroi fundoNone menuNav1FromLinkimg"  > 


			</form>


			</div>


			</div>
			<!-- Image and text -->

			<nav class="navbar navbar-light fundoMenu m2 m2m2"  >
			<a class="navbar-brand corletra" href="#">
			<img src="img/perfume.png" style="width:40px;" class="d-inline-block align-top" alt="">
			Cosmeticos
			</a>
			<a class="navbar-brand corletra" href="#">
			<img src="img/roupa.png" style="width:35px;" class="d-inline-block align-top" alt="">
			Roupas
			</a>
			<a class="navbar-brand corletra" href="#">
			<img src="img/acessorio.png" style="width:35px; height:30px;" class="d-inline-block align-top" alt="">
			Acessorios
			</a>
			<a class="navbar-brand corletra" href="#">
			<img src="img/gumer.png" style="width:50px;" class="d-inline-block align-top" alt="">
			Calsados
			</a>
			</nav>
			







			`);

$(".m2").hide();

},
menu2:function(){
	$("#menu").html(`
		<nav class="navbar navbar-expand-lg navbar-light bg-light m3m1">
		<img src="img/logo1.png" style="width:100px;" class="align-self-end mr-3" alt="...">
		<button class="navbar-toggler" type="button" style="border:none; width:67px; " data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		<img src="img/menu.png" style="width:50px; " class="align-self-end mr-3 m3m1img " >
		</button>
		<form class="form-inline menuNav1From colorFrom" id="formemenuPesquisa" >

		<a class="nav-link menuNav1FromLink destroi "  aria-haspopup="true" aria-expanded="false"   >
		<img src="img/lupa.png" class="destroi menuNav1FromLinkimg"  > 
		<input class="menuNav1FromLinkinput " type="search"  id="pesquisa" placeholder="Pesquisar" aria-label="Pesquisar">
		<img src="img/pesquisar.png" style="width:50px; height:50px; margin-left:10px; "  class="destroi fundoNone menuNav1FromLinkimg"  > 

		</a>



		</form>

		<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
		<div class="navbar-nav">
		<a class="nav-item nav-link active" href="#"><img src="img/perfume.png" style="width:40px;" class="d-inline-block align-top" alt="">
		Cosmeticos</a>
		<a class="nav-item nav-link" href="#"><img src="img/roupa.png" style="width:35px;" class="d-inline-block align-top" alt="">
		Roupas</a>
		<a class="nav-item nav-link" href="#"><img src="img/acessorio.png" style="width:35px; height:34.4px;" class="d-inline-block align-top" alt="">
		Acessorios</a>

		<a class="nav-item nav-link disabled" href="#" tabindex="-1" ><img src="img/gumer.png" style="width:56px;" class="d-inline-block align-top" alt="">
		Calsados</a>
		<a class="nav-item nav-link disabled" href="#" tabindex="-1" ><img src="img/login.png" style="width:50px;" class="align-self-end mr-3 fundociza" alt="...">Dados</a>

		</div>
		</div>
		</nav>











		`);
}

};


/*    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src="img/categoria.png" width="130" height="60" class="d-inline-block align-top" alt="">
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      $("#barraLateral").html(`
			<div class="row">
			<div class="col-9">
			<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
			<div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><br></div>
			<a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><img src="img/cabide.png" width="60" height="60" class="d-inline-block align-top" alt=""></a>
			<a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">calsados</a>
			<a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">acessorios</a>
			<a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">perfumaria</a>
			<a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">produtos de beleza</a>
			</div>
			</div>
			</div>`);
      */