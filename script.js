const heartIcon = document.getElementById('heartIcon');

    heartIcon.addEventListener('click', function () {
        if (heartIcon.classList.contains('fa-regular')) {
            heartIcon.classList.remove('fa-regular');
            heartIcon.classList.add('fa-solid');
            heartIcon.style.color = '#ed071e';
        } else {
            heartIcon.classList.remove('fa-solid');
            heartIcon.classList.add('fa-regular');
            heartIcon.style.color = '';
        }
})

const saveIcon = document.getElementById('saveIcon');

    saveIcon.addEventListener('click', function () {
        if (saveIcon.classList.contains('fa-regular')) {
            saveIcon.classList.remove('fa-regular');
            saveIcon.classList.add('fa-solid')
        } else {
            saveIcon.classList.remove('fa-solid')
            saveIcon.classList.add('fa-regular')
        }
})