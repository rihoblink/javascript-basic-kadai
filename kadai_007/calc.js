let num = Math.floor(Math.random() *1000);
console.log(num);

// 変数が3と5の倍数の場合
if (num%3 === 0 && num%5 === 0) {
  console.log('3と5の倍数です');
}

// 変数が3の倍数の場合
else if (num%3 === 0) {
  console.log('3の倍数です');
}

// 変数が5の倍数の場合
else if (num%5 === 0) {
  console.log('5の倍数です');
}

// それ以外の場合
else {
  console.log(num);
}