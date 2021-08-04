import { loadStdlib } from '@reach-sh/stdlib';

// imports your backend, which ./reach compile will produce.
import * as backend from './build/index.main.mjs';

// loads the standard library dynamically based on the 
// REACH_CONNECTOR_MODE environment variable.
const stdlib = loadStdlib(process.env);

(async () => {
  const stdlib = await loadStdlib();
 
  // defines a quantity of network tokens as the 
  // starting balance for each test account.
  const startingBalance = stdlib.parseCurrency(10);

  // Create test accounts with initial endowments for Alice and Bob. 
  // This will only work on the Reach-provided developer testing network.
  const accAlice = await stdlib.newTestAccount(startingBalance);
  const accBob = await stdlib.newTestAccount(startingBalance);

  // Alice deploys the application
  const ctcAlice = accAlice.deploy(backend);

  // Bob attaches to it
  const ctcBob = accBob.attach(backend, ctcAlice.getInfo());

  //initialize backends for Alice and Bob
  await Promise.all([
    backend.Alice(
      ctcAlice,
      {},
    ),
    backend.Bob(
      ctcBob,
      {},
    ),
  ]);
})(); // <-- Don't forget these!
