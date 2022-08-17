const card = document.querySelector('.card-container__card');
const card2 = document.querySelector('.card-container__card--center-elements');
const ratingBtns = document.querySelectorAll('.card-container__btn-rating');
const submitBtn = document.querySelector('.card-container__btn-submit');
const score = document.querySelector('.card-container__text2');

card2.classList.add("hide")//se oculta la card2 ya que al inicio esta no debe aparecer

function ratingClick(event){/*en este caso el parametro event representa el evento click */
     ratingBtns.forEach(btn => {
        btn.classList.remove('card-container__btn-rating--click');
    }); 
    if (event.target.classList.contains('card-container__btn-rating')){/*event.target obtiene el elemento que disparo el evento*/
        event.target.classList.add('card-container__btn-rating--click');
    }
    score.textContent = `you selected ${event.target.textContent} out 5`;
    console.log(event)
}

ratingBtns.forEach( btn => {
    btn.addEventListener('click', ratingClick);
});

function nextPage(){
    card.classList.add("hide")
    card2.classList.remove("hide")
}

submitBtn.addEventListener("click", nextPage)
