var symbolStore = {};
  
function handleSymbol(description) {
  if (this instanceof handleSymbol) { // 或者 new.target !==undefined
    throw new TypeError('Symbol is not a constructor');
  }
  var mySymbol = Object.create(null);
  Object.defineProperty(mySymbol, 'description', {
    value: description,
    writable: false,
    configurable: false
  });

  return mySymbol;
}

handleSymbol.for = function (key) {
  if (!symbolStore[key]) {
    symbolStore[key] = handleSymbol(key);
  }

  return symbolStore[key];
}
console.log(handleSymbol('sa'))
