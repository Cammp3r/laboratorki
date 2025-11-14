function seq(...funcs) {

  const chainedStep = function(nextArg) {
    
    if (typeof nextArg === 'function') {
      return seq(...funcs, nextArg);
    }

    if (typeof nextArg === 'number') {
      
      let result = nextArg;

      for (let i = funcs.length - 1; i >= 0; i--) {
        result = funcs[i](result);
      }

      return result;
    }
  };

  return chainedStep;
}

console.log(seq(x => x + 7)
   (x => x * 2)(5));

   console.log(seq(x => x * 2)
   (x => x + 7)(5));

console.log(
    seq(x => x + 1)
   (x => x * 2)
   (x => x / 3)
   (x => x - 4)(7)
)