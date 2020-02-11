const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');




  stdin.on('data', (key) => {
    if(key === '\u0003') {
      process.stdout.write("Thanks for using me, Ciao!\n")
        process.exit()
      } 
    
      if(key === "b") {
        process.stdout.write('\x07')
      }
  
    if (key < 10 && key > 0) {
      process.stdout.write(`Setting timer for ${key} seconds \n`)
      setTimeout(() => {
        process.stdout.write('\x07')
      }, key * 1000)
      
  }
  })




// const sentence = "hello there from lighthouse labs"

// let waitingTime = 1000
// let splitSentence = sentence.split("")
// for (const char of splitSentence) {
//   setTimeout(() => {
//     console.log(char)
//   }, waitingTime)
//     waitingTime += 500

// }
