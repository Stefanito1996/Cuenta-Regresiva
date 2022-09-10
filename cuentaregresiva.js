//seteamos aqui desde cuando queremos hacer la cuenta regresiva
let countDownFrom = new Date("Nov 11, 2022 00:00:00").getTime()   

// seteamos un intervalo de tiempo (de 1 segundo)
setInterval(() =>
 {
     let cuentaRegresiva = document.querySelector (".timer");
     let hoy = new Date().getTime();
     let distance = countDownFrom - hoy;

     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
     
     cuentaRegresiva.innerHTML = ` ${days}d : ${hours}h : ${minutes}m : ${seconds}s `;

     if (distance <= 0) 
     {
          alert ("FEEEEELIZ AÑO NUEVOOOOO!!!!!!!");
         cuentaRegresiva.innerHTML = "La cuenta regresiva termino. A brindar por la vida"
         clearInterval();
     }
    
 }, 1000);
