const btn = document.getElementById('btn');
const result = document.getElementById("result");



function ImageRequest() { 
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
      fetch(`https://jsonplaceholder.typicode.com/photos?_page=${num}&_limit=${limit}`)
      .then(Response => {
         return Response.json()

      })
      .then(data => {
        let cards = '';
        data.forEach(item => {
              const cardBlock = `
                <div class="card">
                  <img
                    src="${item.url}"
                    class="card-image"
                    style='width: 200px'
                  />

                </div>
              `;
              cards = cards + cardBlock;
            });
            result.innerHTML = cards;
            localStorage.setItem('MyJSON', JSON.stringify(data))
        });      

    }
}
function getPreviousImg(){
  const MyJSON = localStorage.getItem('MyJSON');
  if (MyJSON){
    const JSONData = JSON.parse(MyJSON);
      let cards = '';
      JSONData.forEach(item => {
        let jsonOutput = `
        <div class="card">
                  <img
                    src="${item.url}"
                    class="card-image"
                    style='width: 200px'
                  />

                </div>
              `;
              cards += jsonOutput;
      });
      result.innerHTML = cards;
  }
}

window.addEventListener('load', getPreviousImg)
btn.addEventListener('click', function(){
  document.addEventListener("DOMcontentLoader", ImageRequest())
  localStorage.clear();
})

