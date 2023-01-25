const p = document.getElementById("countdown")


 counter = sessionStorage.getItem("timePassed")
 const addToSessionStorage = () =>{
     sessionStorage.setItem("timePassed", counter)
     counter++
     p.innerText = counter
 }
 setInterval(addToSessionStorage, 1000)



// let counter = sessionStorage.getItem("count")
// setInterval(conta, 1000)
// function conta(){
//     counter++
//     p.innerText = counter
//     sessionStorage.setItem("count", counter)
// }