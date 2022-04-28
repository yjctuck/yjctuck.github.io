function confirmeQuiz() {
  let score = 0
  let nom = document.getElementById("txtNom").value
  let qu1 = document.getElementById("htmlcssjs")
  let qu2 = document.getElementById("cours").value
  let qu3 = document.getElementsByName("sujet")

  if(qu1.checked){
    score++
  }
  if(qu2 == "Vrai"){
    score++
  }
  if(qu3[0].checked && qu3[1].checked && !(qu3[2].checked)){
    score = score+2
  } else if (qu3[0].checked){
    score++
  } else if(qu3[1].checked){
    score++
  }

  let message = nom + ", vous avez un score de " + score + " sur 4"
  
  divAffiche.innerHTML = message
}
