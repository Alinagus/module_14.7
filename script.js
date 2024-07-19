const btn = document.getElementById('btn');
const result = document.getElementById('result');


btn.addEventListener('click', () => {
    const limit = document.getElementById('limit').value;
    const num = document.getElementById('Num').value;
    console.log(limit, num)
    if (((num <1) || (num >10)) && ((limit <1) || (limit >10))){
        result.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10'
    }
    else if ((num <1) || (num >10)){
        result.innerHTML = 'Номер страницы вне диапазона от 1 до 10'
    }
    else if((limit <1) || (limit >10)){
        result.innerHTML = 'Лимит вне диапазона от 1 до 10'
    }

    else {
        fetch(`https://jsonplaceholder.typicode.com/photos?_page=${limit}&_limit=${num}`)
    .then((response) => {
       
      let image = `<img id='image'>`;
      result.innerHTML = image;
      document.getElementById('image').src = response.url;
      })
    .catch(() => { console.log('error') });
    }
})

