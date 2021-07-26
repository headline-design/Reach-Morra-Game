import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
// const reach = loadStdlib(process.env);
(async () => {
  const stdlib = await loadStdlib();
  const startingBalance = stdlib.parseCurrency(10);
  // getFaucet and balanceOf
  // const acc = await reach.getDefaultAccount();
  // const balance2 = reach.getFaucet();
  // console.log(`Balance on MYKELEDQXKXN23JIDYSBKYHC3KEBU6ATK37W5JQJ7NCZMALETU34NIAKQ: ${balance2}`);

  const accAlice = await stdlib.newTestAccount(startingBalance);
  const accBob = await stdlib.newTestAccount(startingBalance);

  const ctcAlice = accAlice.deploy(backend);
  const ctcBob = accBob.attach(backend, ctcAlice.getInfo());

  const FINGERS = [0, 1, 2];
  const OUTCOME = ['Bob wins', 'Draw', 'Alice wins'];
  const GUESS = [0, 1, 2, 3, 4];
  const Player = (Who) => ({
    getFingers:  () => {
      const fingers = Math.floor(Math.random() * 3);
      console.log(`${Who} shoots ${FINGERS[fingers]} fingers`);
      return fingers;
    },
    getGuess:  (fingers) => {
      const guess= Math.floor(Math.random() * 3) + FINGERS[fingers];
      // need a total guess
     // console.log(`${Who} guess ${GUESS[guess]}`);
     console.log(`${Who} guessed total of ${guess}`);   
     return guess;
    },

    seeWinning: (winningNumber) => {    
      console.log(`Actual total fingers thrown:  ${winningNumber}`);
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
