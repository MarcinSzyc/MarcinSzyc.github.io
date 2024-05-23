function calc(expr) {
    const exprArr = expr.split(' ');
    const stack = []
    for (let i = 0; i < exprArr.length; i++) {
      let element = exprArr[i];
      if (!isNaN(element)) {
        stack.push(element);
        continue;
      }
      let last = parseInt(stack.pop());
      let bLast = parseInt(stack.pop());
      if (element === '+') {
        stack.push(last + bLast);
      }
      if (element === '-') {
        stack.push(bLast - last); 
      }
      if (element === '*') {
        stack.push(last * bLast);
      }
      if (element === '/') {
        stack.push(bLast/last);
      }
    }
    console.log(stack[0]);
    return stack[0];
  }

  calc("1 3 +");
