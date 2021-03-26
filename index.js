// Code your solutions in this file
/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts); 
*/


const yo=[]

function writeCards(names, event) {
    for (let i = 0; i < names.length;i++) {
        yo[i]=(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        console.log(yo[i])
    }
    return yo
}
writeCards(names,event)

function countDown() {
    let i = 10
    while (i>=0){
        console.log(i);
        i-=1;
    }
}
countDown