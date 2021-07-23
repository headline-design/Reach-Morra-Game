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

      const matchoutcome = () => {   
      if ( guessA == guessB ) 
      {
        const myoutcome = DRAW; //tie
        return myoutcome;
      } else {
        if ( ((fingersA + fingersB) == guessA ) ) {
          const myoutcome = A_WINS;
          return myoutcome;// player A wins
        } 
          else {
            if (  ((fingersA + fingersB) == guessB)) {
              const myoutcome = B_WINS;
              return myoutcome;// player B wins
          } 
            else {
              const myoutcome = DRAW; // tie
              return myoutcome;
            }
          
          }
        }
      }
       
      each([A, B], () => {
        interact.seeOutcome(matchoutcome()); });
      exit(); });
