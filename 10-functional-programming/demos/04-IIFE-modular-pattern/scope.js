thisIsGlobal = 'global';

function myFunction() {
  var thisIsLocal = 'local';
  const thisIsConstant = 'const';

  if (thisIsLocal) {
    for (let i = 0; i < thisIsLocal.length; i++) {
      console.log(thisIsLocal[i]);
    }
    console.log(i);
  }
}

myFunction();

console.log(global.thisIsGlobal);
console.log(global.thisIsLocal);
