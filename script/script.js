document.addEventListener("DOMContentLoaded", function() {
    fetch(`script/datos.json`)
    .then(response => response.json())
    .then(data => {

        // Inicializo las variables 
        let tecnologiaProducts = '';
        let bebidasProducts = ""; 
        let cuidadosDelHogarProducts = "";

        // Recorro el json con foreach
        data.productos[0].tecnologia.forEach(tecnologia => {
            tecnologiaProducts +=
            `
                    <div class="card-main">
                        <div class="img-produc">
                            <img class="img-produc" src="${tecnologia.img}" alt="">
                        </div>
                        <p class="tile-card-name">${tecnologia.name}</p>
                        <div class="dis-stock">
                            <p class="marca-c">MARCA: ${tecnologia.brand}</p>
                            <p class="stock-c">Stock: ${tecnologia.stock}</p>
                        </div>
                        <p class="subtitle-card-name">${tecnologia.description}</p>
                        <p class="price-card">S/${tecnologia.price}</p>
                        <div class="btn-id">
                        <button class="alcarrito-b">Al carrito</button>
                        <p class="t-id">#${tecnologia.id}</p>
                    </div>
                    </div>
            `
        });

        data.productos[0].bebidas.forEach(bebidas => {
            bebidasProducts +=
            `
                    <div class="card-main">
                        <div class="img-produc">
                            <img class="img-produc" src="${bebidas.img}" alt="">
                        </div>
                        <p class="tile-card-name">${bebidas.name}</p>
                        <div class="dis-stock">
                            <p class="marca-c"><strong>Marca: </strong>${bebidas.brand}</p>
                            <p class="stock-c"><strong>Stock: </strong> ${bebidas.stock}</p>
                        </div>
                        <p class="subtitle-card-name">${bebidas.description}</p>
                        <p class="price-card">S/${bebidas.price}</p>
                        <div class="btn-id">
                        <button class="alcarrito-b">Al carrito</button>
                        <p class="t-id">#${bebidas.id}</p>
                    </div>
                    </div>
            `
        });

        data.productos[0].cHogar.forEach(cHogar => {
            cuidadosDelHogarProducts +=
            `
                    <div class="card-main">
                        <div class="img-produc">
                            <img class="img-produc" src="${cHogar.img}" alt="">
                        </div>
                        <p class="tile-card-name">${cHogar.name}</p>
                        <div class="dis-stock">
                            <p class="marca-c"><strong>Marca: </strong>${cHogar.brand}</p>
                            <p class="stock-c"><strong>Stock: </strong> ${cHogar.stock}</p>
                        </div>
                        <p class="subtitle-card-name">${cHogar.description}</p>
                        <p class="price-card">S/${cHogar.price}</p>
                        <div class="btn-id">
                        <button class="alcarrito-b">Al carrito</button>
                        <p class="t-id">#${cHogar.id}</p>
                    </div>
                    </div>
            `
        });

        // Ingreso el armado de etiquetas html a los ids selecionados
        document.getElementById("cards-tecnologia").innerHTML = tecnologiaProducts

        document.getElementById("cards-bebidas").innerHTML = bebidasProducts
        
        document.getElementById("cards-cHogar").innerHTML = cuidadosDelHogarProducts
    })
    .catch(error => console.error("Error en el codigo", error))
})