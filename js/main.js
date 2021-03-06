let containerAcc = document.querySelector('.accWrapper');
let titleAcc = document.querySelectorAll('.accTitle');

for (let i = 0; i < titleAcc.length; i++) {
    titleAcc[i].addEventListener('click', function (e) {

        if (containerAcc.classList.contains('single')) {
            titleAcc.forEach(accItem => {
                accItem.classList.remove('active');
                accItem.nextElementSibling.classList.remove('open');
            })
            this.classList.add('active');
            this.nextElementSibling.classList.add('open');
        }

        else if (this.classList.contains('active')){
            this.classList.remove('active')
            this.nextElementSibling.classList.remove('open');
        } else {
            this.classList.toggle('active')
            this.nextElementSibling.classList.toggle('open');
        }
    })
}