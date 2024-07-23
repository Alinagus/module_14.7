let btnNode = document.querySelector('.touch')
const resultNode = document.querySelector('.result')

function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    
    xhr.send();
  };

  function displayResult(apiData) {
    let cards = '';

    
    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.thumbnailUrl}"
            class="card-image"
          />
          <p>${item.title}</p>
        </div>
      `;
      cards = cards + cardBlock;
    });
    resultNode.innerHTML = cards;
  }

  btnNode.addEventListener('click', function(){
    let value = document.getElementById('txt').value;
    console.log(value)
    if (value > 0 & value < 11){
    useRequest(`https://jsonplaceholder.typicode.com/photos?_limit=${value}`, displayResult);
    }
    else{
        resultNode.innerHTML = 'число вне диапазона от 1 до 10'
    }
  })




