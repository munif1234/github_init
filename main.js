let seconds = 00
let tens = 00
let getSeconds = document.getElementById('seconds')
let getTens = document.getElementById('tens')
let btnStart = document.getElementById('btn-start')
let btnStop = document.getElementById('btn-stop')
let btnReset = document.getElementById('btn-reset')
let interval;
btnStart.addEventListener('click', ()=>{
 interval = setInterval(setTimer, 10)
})
btnStop.addEventListener('click',()=>{
  clearInterval(interval);
})

btnReset.addEventListener('click', ()=>{
    clearInterval(interval)
    seconds = '00'
    tens = '00' ;
   getTens.innerHTML = tens;
   getSeconds.innerHTML = seconds + ' : ';
}) 
function setTimer() {
    tens++ ;
  if (tens <= 9) {
    getTens.innerHTML = '0' + tens
  }
  if (tens > 9) {
    getTens.innerHTML = tens
  }
  if (tens > 99) {
    seconds++ ;
    getSeconds.innerHTML = '0' + seconds + ' : ';
    tens = 0
    getTens.innerHTML = '0' + 0
  }
  if (seconds > 9) {
    getSeconds.innerHTML = seconds + ' : ';
  }
}
