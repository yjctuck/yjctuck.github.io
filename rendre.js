function calculerRendre(){
let prixItem = [0,0,0,0,0]
  let produit = document.getElementsByName("produit")
  let nmbCartes = parseFloat(document.getElementById("nmbCartes").value)
  let nmbMonopoly = parseFloat(document.getElementById("nmbMonopoly").value)
  let nmbSorry = parseFloat(document.getElementById("nmbSorry").value)
  let nmbUno = parseFloat(document.getElementById("nmbUno").value)
  let nmbRisk = parseFloat(document.getElementById("nmbRisk").value)
  let livRapid = document.getElementById("jour5")
  let livNormal = document.getElementById("jour+")
  let provOn = document.getElementById("provOn")
  let provQu = document.getElementById("provQu")

  
  if(produit[0].checked);{
    prixItem[0] = 5 * nmbCartes
  }
  if(produit[1].checked);{
    prixItem[1] = 20 * nmbMonopoly
  }
  if(produit[2].checked);{
    prixItem[2] = 15 * nmbSorry
}
  if(produit[3].checked);{
    prixItem[3] = 10 * nmbUno
  }
  if(produit[4].checked);{
    prixItem[4] = 25 * nmbRisk
  }

  let livraison = 0

  let prixTotalItem = prixItem[0] + prixItem[1] + prixItem[2] + prixItem[3] + prixItem[4]
  
  
  let prixTotal = prixItem[0] + prixItem[1] + prixItem[2] + prixItem[3] + prixItem[4]

  if(livRapid.checked){
    prixTotal = prixTotal + 40
    livraison = 40
  } else if(livNormal.checked){
    prixTotal = prixTotal + 15
    livraison = 15
  }


  let tax = 0
let prixTotalTax = 0
  
  if(provOn.checked){
    prixTotalTax = prixTotal * 1.13
    tax = prixTotal * 0.13
  } else if(provQu.checked){
    prixTotalTax = prixTotal * 1.15
    tax = prixTotal * 0.15
  }

  //vérifie combien d'argent a été entrée
  let argent = parseFloat(document.getElementById("txtPrix").value)

  //message d'erreur s'il n'y a pas un total d'argent
  let reste = argent - prixTotalTax
  let messageErreurArgent = "ERREUR! pas asser d'argent"
  let messageErreurString = "ERREUR! svp entré un nombre"

  if(reste < 0){
    erreur.innerHTML = messageErreurArgent
  }else if(isNaN(reste)){
    erreur.innerHTML = messageErreurString
  } else{
  
//détermine combien d'argent à rendre
  let cent = 0
  let cinquante = 0
  let vingt = 0
  let dix = 0
  let cinq = 0
  let deux = 0
  let un = 0
  let vingtcinq = 0
  let dixSous = 0
  let cinqSous = 0

  cent = parseInt(reste / 100)
  reste = reste % 100
  cinquante = parseInt(reste / 50)
  reste = reste % 50
  vingt = parseInt(reste / 20)
  reste = reste % 20
  dix = parseInt(reste / 10)
  reste = reste % 10
  cinq = parseInt(reste / 5)
  reste = reste % 5
  deux = parseInt(reste / 2)
  reste = reste % 2
  un = parseInt(reste / 1)
  reste = reste % 1

  

  reste = reste * 100
  reste = Math.round(reste)
  
  vingtcinq = parseInt(reste / 25)
  reste = reste % 25
  dixSous = parseInt(reste / 10)
  reste = reste % 10
  cinqSous = parseInt(reste / 5)
  reste = reste % 5


  
// message pour l'argent à rendre
  let messageRendre = ""
  messageRendre = "Il faut te rendre:<br>" + cent + " billets de 100$<br>" + cinquante + " billets de 50$<br>" + vingt + " billets de 20$<br>" + dix + " billets de 10$<br>" + cinq + " billets de 5$<br>" + deux + " pièces de 2$<br>" + un + " pièces de 1$<br>" + vingtcinq + " pièces de 0.25$<br>" + dixSous + " pièces de 0.10$<br>" + cinqSous + " pièces de 0.05$<br>"

  

  rendre.innerHTML = messageRendre
  

  }
}
