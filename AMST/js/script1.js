document.addEventListener('DOMContentLoaded', function() {
    const popUp1 = document.querySelector('.popUp1');
    const btnPopUp1 = document.querySelector('.btn_popUp1');
    const inputName = document.querySelectorAll('input[name]');
    const inputPhone = document.querySelector('input[phone]');
    const closedPopUp1 = document.querySelector('.btn_close_popUp1');
    const mailErrorName = document.querySelector('.errorName');
    const mailErrorPhone = document.querySelector('.errorPhone');

    btnPopUp1.addEventListener('click', function() {
        popUp1.style.display = "block";
    });
    closedPopUp1.addEventListener('click', function() {
       if(!inputName.value) {
           mailErrorName.style.display = "block";
           mailErrorName.style.color = "red";
       }else if(!inputPhone.value) {
        mailErrorPhone.style.display = "block";
        mailErrorPhone.style.color = "red";
        }else {
            popUp1.style.display = "none";
        }
        return false;
    });


    const feddback_btn = document.querySelector('.feddback_btn');
    const popUp2 = document.querySelector('.popUp_container2');
    const popUp2Block = document.querySelector('.popUp2');

    feddback_btn.addEventListener('click', function() {
        popUp2.style.display = "block";
    });
    popUp2.addEventListener('click', function() {
        this.style.display = "none";
    });
    popUp2Block.addEventListener('click', function(e) {
        e.stopPropagation();
    })

});