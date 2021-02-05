var mydata = JSON.parse(pokemon);
console.log(mydata);

crearPokedex = function(lista){
  var pk = '';//vacio
	for (var i = 0; i < lista.length; i++) {//pokemons
   
    var t = '<div class="col-s-12 col-m-6 col-l-4 col-xl-4 '+recorrerJ(lista[i].type)+'">';//global toda la informacion pokemon
      t+= '<div class="pokemon row ">';
      t+= '<div class="izquierda col-3">'; //Informacion de la izquierda nombre tipo
      t+= '<b>Nombre</b>:<br>' + lista[i].name.english + '</br>' + '<b>Tipos:</b><br>' +  recorrerJ(lista[i].type);
      t+= '</div>';

      t+= '<div class="foto col-5">'; //foto mas id
      t+= '<img width="100%" src="img/pokeball.png"><br>';
      t+= lista[i].id;
      t+= '</div>';

      t+= '<div class="derecha col-4">'; //Informacion de la derecha stats
      t+= '<b>HP</b>: '+lista[i].base.HP+ '</br>' +'<b>Attack</b>: '+lista[i].base.Attack+ '</br>' +'<b>Defense</b>: '+lista[i].base.Defense+ '</br>' +'<b>Sp. Attack</b>: '+lista[i].base['Sp. Attack']+ '</br>' +'<b>Sp. Defense</b>: '+lista[i].base['Sp. Defense']+ '</br>' +'<b>Speed</b>: '+lista[i].base.Speed;
      t+= '</div>';
      t+= '</div>';
    t+= '</div>';
    pk+= t;//1r: vacio + pokemon, 2n: pokemon + pokemon, 3r: pokemon + pokemon + pokemon, 4r: pokemon + pokemon + pokemon + pokemon
	} 
 
	return pk;
}


recorrerJ = function(objetoj){
  var tipo = '';
  
  for(var j = 0; j < objetoj.length; j++){
    tipo+= objetoj[j] + ' ';
  }

  return tipo;
}


document.getElementById('container').innerHTML = crearPokedex(mydata);

/* JQuery */

$('#grass_filter').change(function(event){
  if(this.checked){
    $('.Grass').fadeIn('slow');
  }
  else{
    $('.Grass').fadeOut('slow');
  }
});

$('#poison_filter').change(function(event){
  if(this.checked){
    $('.Poison').fadeIn('slow');
  }
  else{
    $('.Poison').fadeOut('slow');
  }
});

$('#fire_filter').change(function(event){
  if(this.checked){
    $('.Fire').fadeIn('slow');
  }
  else{
    $('.Fire').fadeOut('slow');
  }
});

$('#flying_filter').change(function(event){
  if(this.checked){
    $('.Flying').fadeIn('slow');
  }
  else{
    $('.Flying').fadeOut('slow');
  }
});

$('#water_filter').change(function(event){
  if(this.checked){
    $('.Water').fadeIn('slow');
  }
  else{
    $('.Water').fadeOut('slow');
  }
});

$('#bug_filter').change(function(event){
  if(this.checked){
    $('.Bug').fadeIn('slow');
  }
  else{
    $('.Bug').fadeOut('slow');
  }
});

$('#normal_filter').change(function(event){
  if(this.checked){
    $('.Normal').fadeIn('slow');
  }
  else{
    $('.Normal').fadeOut('slow');
  }
});

$('#electric_filter').change(function(event){
  if(this.checked){
    $('.Electric').fadeIn('slow');
  }
  else{
    $('.Electric').fadeOut('slow');
  }
});

$('#ground_filter').change(function(event){
  if(this.checked){
    $('.Ground').fadeIn('slow');
  }
  else{
    $('.Ground').fadeOut('slow');
  }
});

$('#fairy_filter').change(function(event){
  if(this.checked){
    $('.Fairy').fadeIn('slow');
  }
  else{
    $('.Fairy').fadeOut('slow');
  }
});

$('#fighting_filter').change(function(event){
  if(this.checked){
    $('.Fighting').fadeIn('slow');
  }
  else{
    $('.Fighting').fadeOut('slow');
  }
});

$('#psychic_filter').change(function(event){
  if(this.checked){
    $('.Psychic').fadeIn('slow');
  }
  else{
    $('.Psychic').fadeOut('slow');
  }
});

$('#rock_filter').change(function(event){
  if(this.checked){
    $('.Rock').fadeIn('slow');
  }
  else{
    $('.Rock').fadeOut('slow');
  }
});

$('#steel_filter').change(function(event){
  if(this.checked){
    $('.Steel').fadeIn('slow');
  }
  else{
    $('.Steel').fadeOut('slow');
  }
});

$('#ice_filter').change(function(event){
  if(this.checked){
    $('.Ice').fadeIn('slow');
  }
  else{
    $('.Ice').fadeOut('slow');
  }
});

$('#ghost_filter').change(function(event){
  if(this.checked){
    $('.Ghost').fadeIn('slow');
  }
  else{
    $('.Ghost').fadeOut('slow');
  }
});

$('#dragon_filter').change(function(event){
  if(this.checked){
    $('.Dragon').fadeIn('slow');
  }
  else{
    $('.Dragon').fadeOut('slow');
  }
});

$('#dark_filter').change(function(event){
  if(this.checked){
    $('.Dark').fadeIn('slow');
  }
  else{
    $('.Dark').fadeOut('slow');
  }
});

$('#all_filter').change(function(event){
  if(this.checked){       //trigger es para lanzar evento en general
    $('input[type=checkbox].all').prop('checked',true).trigger('change');
  }//input[type=checkbox].all >(masfuerte) .all, cuanto mas larga la ruta mas fuerza
  else{
    $('.all').prop('checked',false).trigger('change');
  }
});











/*
'#grass_filter','#poison_filter','#fire_filter','#flying_filter','#water_filter','#bug_filter','#normal_filter','#electric_filter','#ground_filter','#fairy_filter','#fighting_filter','#psychic_filter','#rock_filter','#steel_filter','#ice_filter','#ghost_filter','#dragon_filter','#dark_filter'
*/