const contenedor = document.querySelector(' .contenedor')
const selector = document.querySelector(' .boton')

jQuery.ajax ('https://rickandmortyapi.com/api/', {
    method: 'GET',
     success:function(response){
        jQuery.ajax (response.characters, {
    method: 'GET',
     success:function(response){
   console.log('Lista de personajes' + response)    
      response.results.forEach(function (personaje) {
          
      contenedor.innerHTML = contenedor.innerHTML + `<div class="personaje"> <img src="${personaje.image}"/>
      
      <h3 class = "nombre"> ${personaje.name}</h3>
      <h3 class = "species"> ${personaje.species}</h3>
      <h3 class = "status">Status:${personaje.status}</h3>
     
      <h3 class = "gender">Gender ${personaje.gender}</h3>
      <h3 class = "origin">Origin ${personaje.origin.name}</h3>
      

     
                   </div>`

                   jQuery.ajax('https://rickandmortyapi.com/api/character/?name=rick'),{

                    success:function (response) {
                        console.log('Lista de ricks' + response.name)
                        response.characters.name.forEach(function Buscar(nombre) {
                            console.log(nombre)
                            
                        })
                        
                    }
                      
            
                     }


})

   }


   

} )
   
    
   }  ,
   error: function (error) {
    console.log('Error' + error)
    
}



});
