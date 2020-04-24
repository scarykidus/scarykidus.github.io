document.addEventListener('DOMContentLoaded', function () {
    var select = document.querySelector('.select'),
        listBooks = document.getElementById('listBooks'),
        textField = document.querySelector('.text_field'),
        selectItem = document.querySelectorAll('.select__item');

    addEventListener('click', function (event) {
        document.querySelector('.select').style.display = "block";
        if (event.target == listBooks) {
            if (listBooks.classList.contains('pushed')) {
                HideList();
            } else {
                ShowList();
            }
        } else {
            selectItem.forEach(function (el) {
                if (el.contains(event.target)) {
                    textField.innerHTML = event.target.innerHTML;
                    textField.style.fontSize = '13px';
                    document.querySelector('.select').style.display = "";
                }
            });
        }
    });

    function ShowList() {
        listBooks.classList.add('pushed');
        select.classList.remove('fadeOut');
        select.classList.add('fadeIn');
        select.classList.add('showlist');
    }
});