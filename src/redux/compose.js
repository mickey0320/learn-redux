function compose(fns) {
  if (fns.length === 1) {
    return fns[0];
  }
  return fns.reduce((fn1, fn2) => {
    return (...args) => {
      return fn2(fn1(...args));
    };
  });
}

export default compose;
