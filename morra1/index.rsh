'reach 0.1';

// const [ isHand, ROCK, PAPER, SCISSORS ] = makeEnum(3);
const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);
// const [ isFingers, ZERO, ONE, TWO, THREE, FOUR, FIVE ] = makeEnum(6);
// const [ isGuess, ZEROG, ONEG, TWOG, THREEG, FOURG, FIVEG, SIXG, SEVENG, EIGHTG, NINEG, TENG ] = makeEnum(11);


const Player =
      { getFingers: Fun([], UInt),
        getGuess: Fun([UInt], UInt),
        seeWinning: Fun([UInt], Null),
        seeOutcome: Fun([UInt], Null) };

export const main =
  Reach.App(
    {},
    [Participant('Alice', Player), Participant('Bob', Player)],
    (A, B) => {
      A.only(() => {
        const _fingersA = interact.getFingers();
        const _guessA = interact.getGuess(_fingersA);

        const fingersA = declassify(_fingersA); 
        const guessA = declassify(_guessA);
      });
     
      A.publish(fingersA);
      commit();    
      
      A.publish(guessA);
      commit();


      B.only(() => {

        const _fingersB = interact.getFingers();
        const _guessB = interact.getGuess(_fingersB);

        const fingersB = declassify(_fingersB); 
        const guessB = declassify(_guessB);   
 
        });

      B.publish(fingersB);
      commit();
      B.publish(guessB);
      
      commit();
      A.only(() => {        
        const WinningNumber = fingersA + fingersB;
        interact.seeWinning(WinningNumber);
      });
      // ??? do i need a timeout here? 
      A.publish(WinningNumber)
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
