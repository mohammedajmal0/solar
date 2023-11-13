let purposeSection = document.querySelector('.ourPurpose');
let purposeCard = document.querySelectorAll('.purpose-card');

purposeCard.forEach(function(elem){
    elem.addEventListener('mouseover',function(){
        let cardBg = elem.getAttribute('cardBg');
        purposeSection.style.background = `url('/assets/images/${cardBg}.jpg') no-repeat center center/cover`;
        elem.style.opacity = 0.1;
    })
});
purposeCard.forEach(function(elem){
    elem.addEventListener('mouseleave',function(){
        purposeSection.style.background = '';
        elem.style.opacity = 1;
    })
});