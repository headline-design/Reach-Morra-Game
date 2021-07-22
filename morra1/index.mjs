import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
// const reach = loadStdlib(process.env);
(async () => {
  const stdlib = await loadStdlib();
  const startingBalance = stdlib.parseCurrency(10);
  // getFaucet and balanceOf
  // const acc = await reach.getDefaultAccount();
  // const balance2 = reach.getFaucet();
  // const balAtomic = await reach.balanceOf(balance2);

  // console.log(`Balance on faucet: ${balAtomic}`);
  // const balance = reach.balanceOf('MYKELEDQXKXN23JIDYSBKYHC3KEBU6ATK37W5JQJ7NCZMALETU34NIAKQ');
  // console.log(`Balance on MYKELEDQXKXN23JIDYSBKYHC3KEBU6ATK37W5JQJ7NCZMALETU34NIAKQ: ${balance}`);
  
 // const faucet = await reach.getFaucet();
  const accAlice = await stdlib.newTestAccount(startingBalance);

  const accBob = await stdlib.newTestAccount(startingBalance);

  const ctcAlice = accAlice.deploy(backend);
  const ctcBob = accBob.attach(backend, ctcAlice.getInfo());

  const FINGERS = ['0', '1', '2'];
  const OUTCOME = ['Bob wins', 'Draw', 'Alice wins'];
  const GUESS = ['0', '1', '2', '3', '4'];
  const Player = (Who) => ({
    getFingers: () => {
      const fingers = Math.floor(Math.random() * 3);
      console.log(`${Who} shoots ${FINGERS[fingers]} fingers`);
      return fingers;
    },
    getGuess: () => {
      const guess= Math.floor(Math.random() * 3);
      // need a total guess
     // console.log(`${Who} guess ${GUESS[guess]}`);
      return guess;
    },
    seeGuess: (guess) => {    
      console.log(`${Who} guessed ${GUESS[guess]}`);
    },
    seeWinning: (winningNumber) => {    
      console.log(`Winning number: ${winningNumber}`);
    },
    seeOutcome: (outcome) => {
      
      console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
    },
  });

  await Promise.all([
    backend.Alice(
      ctcAlice,
      Player('Alice'),
    ),
    backend.Bob(
      ctcBob,
      Player('Bob'),
    ),
  ]);
})();
