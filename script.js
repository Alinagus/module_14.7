const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  const value1 = +document.getElementById('num1').value;
  const value2 = +document.getElementById('num2').value;
  let res = document.getElementById('result');
  if (!(value1 >= 100 && value1 <= 300 && value2 >= 100 && value2 <= 300)) {
    res.innerHTML = 'одно из чисел вне диапазона от 100 до 300';
    return;
  }
  else{
    fetch(`https://dummyimage.com/${value1}x${value2}`)
      .then((response) => {
        let result = `<img id='image'>`;
        res.innerHTML = result;
        document.getElementById('image').src = response.url;
        })
      .catch(() => { console.log('error') });
  }
});