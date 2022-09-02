const options = {
  method: "GET",
  mode: "cors",
  caches: "default"
}
const cep = document.getElementById("cep")

cep.addEventListener("blur", ()=>{
  let cepValue = document.getElementById("cep").value
  //console.log(cepValue) 

  fetch (`http://viacep.com.br/ws/${cepValue}/json/`, options).then((resposta) =>{
    resposta.json().then(data =>{
      document.getElementById("bairro").value = data.bairro
      document.getElementById("ddd").value = data.ddd
      document.getElementById("ibge").value = data.ibge
      document.getElementById("localidade").value = data.localidade
      document.getElementById("logradouro").value = data.logradouro
      document.getElementById("uf").value = data.uf
      document.getElementById("siafi").value = data.siafi
    })
  })
})

function enviar(){
  let bairro = document.getElementById("bairro").value
  let ddd = document.getElementById("ddd").value
  let ibge = document.getElementById("ibge").value
  let localidade = document.getElementById("localidade").value
  let logradouro = document.getElementById("logradouro").value
  let uf = document.getElementById("uf").value
  let siafi = document.getElementById("siafi").value

  let json = {
    "bairro": bairro,
    "ddd": ddd,
    "ibge": ibge,
    "localidade": localidade,
    "logradouro": logradouro,
    "uf": uf,
    "siafi": siafi
  }
console.log(json)
}
