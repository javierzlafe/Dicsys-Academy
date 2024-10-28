/* 

let URL= `https://pokeapi.co/api/v2/pokemon?limit=5`

const pokemonContainer= document.getElementById(`pokemon-container`)

fetch(URL)
.then( response => response.json())
.then( data =>{

    const pokemons = data.results

    pokemons.forEach(

        (pokemon)=>{

            fetch(pokemon.url)
            .then(response => response.json())
            .then( pokemonData =>{
                const pokemonElement = document.createElement(`div`)
                pokemonElement.innerHTML=`
                
                <h2>${pokemonData.name}</h2>
                <img src="${pokemonData.sprites.front_default}">                
                `
                pokemonContainer.appendChild(pokemonElement)
            }).catch(error=>{
                console.error("ha ocurrido un error al consumir la api")
            })


        }
    )

})


 */





/* 
ABM

PRODUCTO   nombre, precio, stock    =   crearlo
*/



const Producto = function(nombre,precio,stock){

    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}


let producto1 = new Producto("notebook lenovo", 4800000,20)
let producto2 = new Producto("lenovo pad", 800000,20)
let producto3 = new Producto("apple mac", 48635,20)
let producto4 = new Producto("apple smartwatch", 485400,20)
let producto5 = new Producto("samsung galaxy", 5400000,20)


let lista = [producto1,producto2,producto3,producto4,producto5]


if(localStorage.getItem("productos")){
    lista = JSON.parse(localStorage.getItem("productos"))
}else{
    lista=lista
}


function filtrarProductos(){

    Swal.fire({
        title:"ingresa el producto a buscar",
        input:"text",
        showCancelButton: true,
        ConfirmButtonText: "buscar",
        showLoaderOnConfirm: true,

        preConfirm: (palabraClave)=>{
            palabraClave= palabraClave.trim().toUpperCase()
            let resultado = lista.filter(  (producto)=> 
            producto.nombre.toUpperCase().includes(palabraClave));

            if(resultado.length >0){
                console.table(resultado)

                Swal.fire({
                    title:"resultados de la busqueda",
                    html:
                    "<table><tr><th>Precio</th><th>Stock</th></tr>" + resultado
                    .map( 
                        (producto)=>`<tr><td>${producto.nombre}</td><td>${producto.precio}</td><td>${producto.stock}</td></tr>`
                      )
                      .join("")+       
                    "</table>",
                    connfirmButtonText: "ok"
                    })
            }else{
                Swal.fire({
                    title: "no hay coincidencias",
                    icon: "error",
                    ConfirmButtonText: "OK"
                })

            }
        }
    })

}



function agregarProducto(){

    Swal.fire({
        title: "Agregar Producto",
        html: `<label>Nombre:</label> <input id="nombre-input" class="swal2-input" type="text" autofocus>
    
               <label>Precio:</label><input id="precio-input" class="swal2-input" type="number" step="0.01">
    
               <label>Stock:</label><input id="stock-input" class="swal2-input" type="number" step="1">`,
        showCancelButton: true,
        confirmButtonText: "Agregar",
        cancelButtonText: "Cancelar",
      }).then(  (result)=>{

        if(result.isConfirmed){
            let nombre = document.getElementById("nombre-input").value.trim()
            let precio = parseFloat(document.getElementById("precio-input").value) 
            let stock = parseInt(document.getElementById("stock-input").value) 

            if(isNaN(precio) || isNaN(stock) || nombre == ""){
                Swal.fire({
                    title:"error",
                    icon: "error",
                    text: "por favor ingrese datos validos"
                })
                return;
            }
    
            let producto = new Producto(nombre,precio,stock)

            if(lista.some( (elemento)=> elemento.nombre === producto.nombre)){
                Swal.fire({
                    title:"error",
                    icon: "error",
                    text: "ya existe el producto en la lista"
                })
                return;
            }

            lista.push(producto)


            Swal.fire({
                icon: "success",
                title: "Producto agregado",
                text: `se agrego el producto ${producto.nombre} a la lista`
            })

            console.table(lista)
        }

      }   )


}




function eliminarProducto(){

    Swal.fire({
        title:"eliminar producto",
        input: "select",
        inputOptions: lista.reduce((options,producto, index)=>{
            options[index] = producto.nombre
            return options
        },),
        inputPlaceholder: "selecciona un producto",
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar",
    }).then((result)=>{
    
    
    if(result.isConfirmed){
        const productoIndex = result.value
        const productoEliminado = lista.splice(productoIndex,1)
        localStorage.setItem("productos", JSON.stringify(lista));
        
        Swal.fire({
            icon: "success",
            title: "producto eliminado",
            text: `se a eliminado el producto ${productoEliminado[0].nombre}`
        });
    }
})}




//BOTONERA


const filtrarBtn = document.getElementById("filtrar")
filtrarBtn.addEventListener("click", filtrarProductos)



const agregarBtn = document.getElementById("agregar")
agregarBtn.addEventListener("click", agregarProducto)



const eliminarBtn = document.getElementById("eliminar")
eliminarBtn.addEventListener("click", eliminarProducto)