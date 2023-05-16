window.addEventListener('load', ()=> {
   
    let temperaturaValor = document.getElementById('temperatura-valor')  
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')  
  

    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition( posicion => {
                       
           //ubicación por ciudad
           const url = `https://api.openweathermap.org/data/2.5/weather?q=neuquen&lang=es&units=metric&appid=0286f7c152c2b8f490a0973c12dc81e7`
        
            fetch(url)
            .then( response => { return response.json()})
            .then( data => {
                               
                let temp = Math.round(data.main.temp)
                temperaturaValor.textContent = `${temp} ° C`

               let desc = data.weather[0].description
                temperaturaDescripcion.textContent = desc.toUpperCase()
                              
            })
            .catch( error => {
                console.log(error)
            })
       })
          
    }
})
