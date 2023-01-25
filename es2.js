const p = document.getElementById("countdown")


counter = 0
const addToSessionStorage = () =>{
    sessionStorage.setItem("timePassed", counter)
    counter++
    p.innerText = counter
}
setInterval(addToSessionStorage, 1000)


//setInterval(function () {element.innerHTML += "Hello"}, 1000);