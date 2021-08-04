'reach 0.1';
// main export from the program. 
// When you compile, this is what the compiler will look at
export const main =
  Reach.App(
    {},
    // specify the two participants to this application, Alice and Bob
    [Participant('Alice', {}), Participant('Bob', {})],
    (A, B) => {
      exit(); });
