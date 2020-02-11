const args = process.argv.slice(2);


// function reverse(string) {
//   var newString = "";
// for (let i = 0; i > string.length; args--) {
// newString += string[i];
// }
// return newString;
// }

// let spinner = ["|","/","-","\\","|","/","-","\\","|"]
// wait = 0
// let output = ""
// for(let spin of spinner) {
//   let output = `\r ${spin}`
//   setTimeout(() => {
//     process.stdout.write(output);
// }, wait);
//   wait += 1000

const alarm = (args) => { // what the number is being inputted

  for (let num of args) {
    if (num === Number || num > 0) {
      setTimeout(() => {
        process.stdout.write('\x07')
      }, num * 1000)
    }
  }
}

alarm(args)