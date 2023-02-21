let spin = ['|', "/", "-", "\\", "|"]
let delayTime = 500
for(let s of spin){
  setTimeout(() => {
    process.stdout.write(`\r${s}   `);
  }, delayTime)
  delayTime += 200
}