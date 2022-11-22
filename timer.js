let args = process.argv.slice(2).sort((a, b) => a - b);

const timer = (num) => {
  setTimeout(() => process.stdout.write('\x07'), num * 1000);
};

for (let arg of args) {
  let numArg = parseInt(arg);
  if (!isNaN(numArg) && numArg >= 0) {
    timer(arg);
  }
}

