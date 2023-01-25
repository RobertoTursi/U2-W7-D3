const p = document.getElementById("countdown")


 let counter = sessionStorage.getItem("timePassed") || 0  //questa riga è l'equivalente di scrivere un if dove:
//  if(sessionStorage.getItem("timePassed") !== null){
//     let counter = sessionStorage.getItem("timePassed")
//  } else {
//     let counter = 0
//  }
const addToSessionStorage = () =>{
     sessionStorage.setItem("timePassed", counter)
     counter++
     p.innerText = counter
 }
 setInterval(addToSessionStorage, 1000)
