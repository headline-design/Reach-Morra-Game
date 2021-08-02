
import { mkRPC } from '@reach-sh/rpc-client';

(async () => {

  // const { rpc, rpcCallbacks } = await mkRPC(opts);
  const { rpc, rpcCallbacks } = await mkRPC();
  const startingBalance = await rpc(`/stdlib/parseCurrency`,  10);
  const accAlice        = await rpc(`/stdlib/newTestAccount`, startingBalance);
  const accBob          = await rpc(`/stdlib/newTestAccount`, startingBalance);
 
  const fmt = async x =>
     await rpc(`/stdlib/formatCurrency`, x, 4);
  const getBalance = async who =>
    fmt(await rpc(`/stdlib/balanceOf`, who));

  const beforeAlice = await getBalance(accAlice);
  const beforeBob = await getBalance(accBob);

  const ctcAlice    =  await rpc(`/acc/deploy`, accAlice);
  const ctcBob      =  await rpc(`/acc/attach`, accBob, await rpc(`/ctc/getInfo`, ctcAlice));


  const FINGERS = [0, 1, 2, 3, 4, 5];
  const GUESS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
  const OUTCOME = ['Bob wins', 'Draw', 'Alice wins'];

  const Player = (Who) => ({
    "stdlib.hasRandom": true,  
    getFingers: async () => {
      const fingers = Math.floor(Math.random() * 6);
      console.log(`----------------------------`);          
      console.log(`${Who} shoots ${FINGERS[fingers]} fingers`);     
      return fingers;
    },
    getGuess:  async (fingersBN) => {
      //const guess= Math.floor(Math.random() * 6) + FINGERS[fingers];
      const fingers = await rpc(`/stdlib/bigNumbertoNumber`, fingersBN);
      const guess= Math.floor(Math.random() * 6) + FINGERS[fingers];
      console.log(`${Who} guessed total of ${guess}`);   
      return guess;
    },
    seeWinning: async (winningNumberBN) => {    
      const winningNumber = await rpc(`/stdlib/bigNumbertoNumber`, winningNumberBN);
      console.log(`Actual total fingers thrown: ${winningNumber}`);
    },
    seeOutcome: async (outcomeBN) => {
      const outcome = await rpc(`/stdlib/bigNumbertoNumber`, outcomeBN);
      console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
    },

    informTimeout: () => {
      console.log(`${Who} observed a timeout`);
    },
  });

  await Promise.all([
    rpcCallbacks(`/backend/Alice`, ctcAlice, {  

      ...Player('Alice'),
      wager: await rpc(`/stdlib/parseCurrency`, 5),
      "stdlib.hasConsoleLogger": true,  

    }),
    rpcCallbacks(`/backend/Bob`, ctcBob, {

      ...Player('Bob'),
      acceptWager: async (amt) => {
        console.log(`----------------------------`);        
        console.log(`Bob accepts the wager of ${await fmt(amt)}.`);

      },
      "stdlib.hasConsoleLogger": true,  
    }),
  ]);
  const afterAlice = await getBalance(accAlice);
  const afterBob =  await getBalance(accBob);

  console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
  console.log(`Bob went from ${beforeBob} to ${afterBob}.`);

  await Promise.all([
    await rpc(`/forget/acc`, accAlice, accBob),
    await rpc(`/forget/ctc`, ctcAlice, ctcBob),
  ]);
})();
