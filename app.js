 const pianokeys = document.querySelectorAll('.key')
 function playSound(newUrl){

console.log(newUrl);
    new Audio(newUrl).play()
 }
 
 pianokeys.forEach((pianoKey,i) =>{
    const number =i <9 ?'0' +(i+1):(i+1)
    const newUrl = `24-piano-keys/key${number}.ogg`
    pianoKey.addEventListener('click',()=>playSound(newUrl))
 })