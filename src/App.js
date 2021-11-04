import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { loadStdlib } from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs';
import { Button, Box, Modal, Card, Heading, PipelineShell, Loader, Text, Flex } from 'pipeline-ui';

var myLog = [];
var myLoading = false;

const reach = loadStdlib('ALGO-devnet')

//change Algo server IP to match your local reach devnet IP, or leave with "http://localhost" to test on local machine only.

const myEnv = reach.providerEnvByName('LocalHost');
console.log(myEnv)
Object.assign(myEnv, {
  ALGO_SERVER:"https://4180-violet-anteater-ao8zsji8.ws-us17.gitpod.io/",
  ALGO_PORT: "",
  ALGO_INDEXER_SERVER: "https://8980-violet-anteater-ao8zsji8.ws-us17.gitpod.io/",
  ALGO_INDEXER_PORT: "",
  REACH_ISOLATED_NETWORK: "yes",
  REACH_DEBUG: "false",
})

reach.setProviderByEnv(myEnv);

async function test() {
  const startingBalance = reach.parseCurrency(1000);

  const accAlice = await reach.newTestAccount(startingBalance);
  const accBob = await reach.newTestAccount(startingBalance);

  const fmt = (x) => reach.formatCurrency(x, 4);
  const getBalance = async (who) => fmt(await reach.balanceOf(who));
  const beforeAlice = await getBalance(accAlice);
  const beforeBob = await getBalance(accBob);

  const ctcAlice = accAlice.contract(backend);
  const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

  const FINGERS = [0, 1, 2, 3, 4, 5];
  const GUESS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const OUTCOME = ['Bob wins', 'Draw', 'Alice wins'];

  const Player = (Who) => ({
    ...reach.hasRandom,
    getFingers: async () => {
      // const fingers = Math.floor(Math.random() * 3);
      const fingers = Math.floor(Math.random() * 6);
      myLog.push(`${Who} shoots ${FINGERS[fingers]} fingers`);
      // build in occasional timeout
      if (Math.random() <= 0.01) {
        for (let i = 0; i < 10; i++) {
          myLog.push(`${Who} takes their sweet time sending it back...`);
          await reach.wait(1);
        }
      }
      return fingers;
    },
    getGuess: async (fingers) => {
      // guess should be greater than or equal to number of fingers thrown
      // const guess= Math.floor(Math.random() * 3);
      const guess = Math.floor(Math.random() * 6) + FINGERS[fingers];
      // occassional timeout
      if (Math.random() <= 0.01) {
        for (let i = 0; i < 10; i++) {
          myLog.push(`${Who} takes their sweet time sending it back...`);
          await reach.wait(1);
        }
      }
      myLog.push(`${Who} guessed total of ${guess}`);
      return guess;
    },
    seeWinning: (winningNumber) => {
      myLog.push(`Actual total fingers thrown: ${winningNumber}`);
      myLog.push(`----------------------------`);
    },

    seeOutcome: (outcome) => {
      myLog.push(`${Who} saw outcome ${OUTCOME[outcome]}`);
    },
    informTimeout: () => {
      myLog.push(`${Who} observed a timeout`);
    },
  });

  await Promise.all([
    backend.Alice(ctcAlice, {
      ...Player('Alice'),
      wager: reach.parseCurrency(5),
      ...reach.hasConsoleLogger,
    }),
    backend.Bob(ctcBob, {
      ...Player('Bob'),
      acceptWager: (amt) => {
        myLoading = false;
        myLog.push(`Bob accepts the wager of ${fmt(amt)}.`);
      },
      ...reach.hasConsoleLogger,
    }),
  ]);
  
  const afterAlice = await getBalance(accAlice);
  const afterBob = await getBalance(accBob);

  myLog.push(`Alice went from ${beforeAlice} to ${afterAlice}.`);
  myLog.push(`Bob went from ${beforeBob} to ${afterBob}.`);

}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cLog: [],
      loading: false
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ cLog: myLog, loading: myLoading }), 100);
  }

  render() {
    return (<div align="center">
      <PipelineShell width="400px">
        <Heading>Reach + PIPELINE-UI</Heading>
        <Button className="morra-btn" onClick={() => { myLoading = true; test() }}><div className="spinz">{this.state.loading ? <Loader bg="unset" color="white" size="22px" /> : null}</div>Deploy Morra!</Button><br></br>
        <div className="feed-1"><label>Morra feed:</label><div className="feed" bg="unset">{this.state.cLog.map(row => { return (<Text>{row}</Text>) })}</div></div>
      </PipelineShell>  </div>)
  }
}

export default App;
