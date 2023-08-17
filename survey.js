const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What do you think of Node.js? ", (answer0) => {
  rl.question("What's your name? ", (answer1) => {
    rl.question("What's an activity you like doing? ", (answer2) => {
      rl.question("What do you listen to while doing that? ", (answer3) => {
        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer4) => {
          rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
            rl.question("Which sport is your absolute favourite? ", (answer6) => {
              rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {

                console.log(
                  `Thank you for your valuable feedback about Node.js. Your answers are: ${answer0}. I do Your name is: ${answer1}. Enjoys activities on ${answer2}. You enjoy listening to ${answer3}. Your favouite meal is ${answer4}. Your favourite thing to eat for that meal is ${answer5}. Your favourite sport is ${answer6}. Your superpower is ${answer7}.`);

                rl.close();
              });
            });
          });
        });
      });
    });
  });
});

