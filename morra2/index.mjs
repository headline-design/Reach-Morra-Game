import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
// const reach = loadStdlib(process.env);
(async () => {
  const stdlib = await loadStdlib();
  const startingBalance = stdlib.parseCurrency(10);
  // getFaucet and balanceOf
  // const acc = await reach.getDefaultAccount();
  // console.log(`Balance on MYKELEDQXKXN23JIDYSBKYHC3KEBU6ATK37W5JQJ7NCZMALETU34NIAKQ: ${balance2}`); 
  // const faucet = await reach.getFaucet();
  const accAlice = await stdlib.newTestAccount(startingBalance);
  const accBob = await stdlib.newTestAccount(startingBalance);

  const fmt = (x) => stdlib.formatCurrency(x, 4);
  const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
  const beforeAlice = await getBalance(accAlice);
  const beforeBob = await getBalance(accBob);

  const ctcAlice = accAlice.deploy(backend);
  const ctcBob = accBob.attach(backend, ctcAlice.getInfo());

  const FINGERS = [0, 1, 2, 3, 4, 5];
  const GUESS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
  const OUTCOME = ['Bob wins', 'Draw', 'Alice wins'];

  const Player = (Who) => ({
    ...stdlib.hasRandom,
    getFingers: async () => {
     // const fingers = Math.floor(Math.random() * 3);
      const fingers = Math.floor(Math.random() * 6);
      console.log(`----------------------------`);          
      console.log(`${Who} shoots ${FINGERS[fingers]} fingers`);
 
      if ( Math.random() <= 0.01 ) {
        for ( let i = 0; i < 10; i++ ) {
          console.log(`  ${Who} takes their sweet time sending it back...`);
          await stdlib.wait(1);
        }
      }     
      return fingers;
    },
    getGuess:  async (fingers) => {
     // guess should be greater than or equal to number of fingers thrown
     // const guess= Math.floor(Math.random() * 3);
      const guess= Math.floor(Math.random() * 6) + FINGERS[fingers];
      if ( Math.random() <= 0.01 ) {
        for ( let i = 0; i < 10; i++ ) {
          console.log(`  ${Who} takes their sweet time sending it back...`);
          await stdlib.wait(1);
        }
      }
      console.log(`${Who} guessed total of ${guess}`);   
      return guess;
    },
    seeWinning: (winningNumber) => {    
      console.log(`Actual total fingers thrown: ${winningNumber}`);
    },

    seeOutcome: (outcome) => {
      console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
    },
    informTimeout: () => {
      console.log(`${Who} observed a timeout`);
    },
  });

  await Promise.all([
    backend.Alice(ctcAlice, {
      ...Player('Alice'),
        wager: stdlib.parseCurrency(5),    
        ...stdlib.hasConsoleLogger,
    }),
    backend.Bob(ctcBob, {
      ...Player('Bob'),
      acceptWager: (amt) => {
        console.log(`----------------------------`);        
        console.log(`Bob accepts the wager of ${fmt(amt)}.`);
      },
      ...stdlib.hasConsoleLogger,      
    }),
  ]);
  const afterAlice = await getBalance(accAlice);
  const afterBob = await getBalance(accBob);

  console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
  console.log(`Bob went from ${beforeBob} to ${afterBob}.`);


})();
