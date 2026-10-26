// מגישי טכנטאים: בלייב מור וחיים אשרף 50/5


//Task 2

for (let i = 2; i < 237; i++) {
  let prime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      prime = false;
    }
  }

  if (prime == true) {
    console.log(i + " Is Prime");
  }
}