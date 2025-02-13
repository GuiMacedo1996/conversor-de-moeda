const convertButton = document.querySelector(".convert")

function convertValues() {
    const inputValues = document.querySelector(".input-currency").value
    const realConvertido = document.querySelector(".moeda-real")
    const dolarConvertido = document.querySelector(".moeda-dolar")
    const dolarDia = 5.6
  
    
    const valorConvertido = inputValues / dolarDia    

    realConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", currency: "BRL"
    }).format(inputValues)
    dolarConvertido.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency", currency: "USD" }).format(valorConvertido)
 

    
    

}

convertButton.addEventListener("click", convertValues)
