const convertButton = document.querySelector(".convert")
const currencySelect = document.querySelector(".dolar-euro")

function convertValues() {
    const inputValues = document.querySelector(".input-currency").value
    const realConvertido = document.querySelector(".moeda-real")
    const dolarConvertido = document.querySelector(".moeda-dolar")
    console.log(currencySelect.value)
    const dolarDia = 5.72
    const euroDia = 6.2
    const btcDia = 553527.38
    const libraDia = 7.17



    if (currencySelect.value == "dolar") {
        dolarConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputValues / dolarDia)
    }

    if (currencySelect.value == "euro") {
        dolarConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputValues / euroDia)
    }

    if (currencySelect.value == "bitcoin") {
        dolarConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "BTC"
        }).format(inputValues / btcDia)
    }

    if (currencySelect.value == "libra") {
        dolarConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", currency: "GBP"
        }).format(inputValues / libraDia)
    }


    realConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", currency: "BRL"
    }).format(inputValues)
}

function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".img-moeda")
   
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/Dolar.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "€ Euro"
        currencyImage.src = "./assets/Euro.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "₿ Bitcoin"
        currencyImage.src = "./assets/Bitcoin.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "£ Libra"
        currencyImage.src = "./assets/Libra 1.png"
    }
    convertValues()


}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)