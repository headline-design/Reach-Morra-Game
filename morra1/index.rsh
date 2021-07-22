'reach 0.1';

const [ isHand, ROCK, PAPER, SCISSORS ] = makeEnum(3);
const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);


const Player =
      { getFingers: Fun([], UInt),
        getGuess: Fun([], UInt),
        seeGuess: Fun([UInt], Null),
        seeWinning: Fun([UInt], Null),
        seeOutcome: Fun([UInt], Null) };

export const main =
  Reach.App(
    {},
    [Participant('Alice', Player), Participant('Bob', Player)],
    (A, B) => {
      A.only(() => {
        const _fingersA = interact.getFingers();
        const _guessA = interact.getGuess();
        const _educatedGuessA = _fingersA + _guessA ;

        const fingersA = declassify(_fingersA); 
        const guessA = declassify(_educatedGuessA);
        interact.seeGuess(guessA);
      });
     
      A.publish(fingersA);
      commit();    
      
      A.publish(guessA);
      commit();


      B.only(() => {

        const _fingersB = interact.getFingers();
        const _guessB = interact.getGuess();
        const _educatedGuessB = _fingersB + _guessB ;

        const fingersB = declassify(_fingersB); 
        const guessB = declassify(_educatedGuessB);   
        interact.seeGuess(guessB);
        interact.seeWinning(fingersA + fingersB);  
        });

      B.publish(fingersB);
      commit();
      B.publish(guessB);
      
      commit();

      // if (if  fingersA plus fingersB = guessA ) and (if fingersA plus fingersB = guessB))
      //    tie outcome = 1 
      // else if fingersA plus fingersB = guessA
      //    winner outcome player A wins = 2 
      // else if fingersA plus fingersB = guessB
      //    winner outcome player B wins = 0       
      // else tie else = 1
      // var outcome = 1 // default to tie
      const matchoutcome = () => {
    
        if ( ((fingersA + fingersB) == guessA ) 
        && ((fingersA + fingersB) == guessB)) {
        const outcome = 1; //tie
        return outcome;
      } else {
        if ( ((fingersA + fingersB) == guessA ) ) {
          const outcome = 2;
          return outcome;// player Alice wins
        } 
          else {
            if (  ((fingersA + fingersB) == guessB)) {
              const outcome = 0;
              return outcome;// player Bob wins
          } 
            else {
              const outcome = 1; // tie
              return outcome;
            }
          
          }
        }
      }
      

 
      each([A, B], () => {

        interact.seeOutcome(matchoutcome()); });
      exit(); });
