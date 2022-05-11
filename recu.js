function calculeRecu(){
  //déclare les variable
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

  //vérifie quel produit sont checked
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

  //vérifie le type de livraison
  if(livRapid.checked){
    prixTotal = prixTotal + 40
    livraison = 40
  } else if(livNormal.checked){
    prixTotal = prixTotal + 15
    livraison = 15
  }

  let taxMessage = ""
  let tax = 0
let prixTotalTax = 0

  //vérifie la province
  if(provOn.checked){
    prixTotalTax = prixTotal * 1.13
    tax = prixTotal * 0.13
    taxMessage = "Taxes ON 13%"
  } else if(provQu.checked){
    prixTotalTax = prixTotal * 1.15
    tax = prixTotal * 0.15
    taxMessage = "Taxes QU 15%"
  }


  tax = tax.toFixed(2)
  prixTotalTax = prixTotalTax.toFixed(2)
  
  // message pour le reçu
  let messageRecu = ""
  messageRecu = produit[0].value + "     x" + nmbCartes + "     " + prixItem[0] + "$ " + "<br>" + produit[1].value +  "     x" + nmbMonopoly + "     " + prixItem[1] + "$ " + "<br>" + produit[2].value + "     x" + nmbSorry + "     " + prixItem[2] + "$ " + "<br>" +  produit[3].value + "     x" + nmbUno + "     " + prixItem[3] + "$ " + "<br>" +  produit[4].value + "     x" + nmbRisk + "     " + prixItem[4] + "$ " + "<br>" + "-------------------------" + "<br>" + "Sous-total des item" + "     " + prixTotalItem + "$ " + "<br>" + "Livraison     " + livraison + "$ " + "<br>" + taxMessage + "     " + tax + "$ " + "<br>" + "-------------------------" + "<br>" + "TOTAL     " + prixTotalTax + "$ "

  
  recu.innerHTML = messageRecu
  
  
}
