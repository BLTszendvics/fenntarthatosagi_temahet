function image_clicked() {

    let o = document.getElementsByClassName("c-block")[0];

    if (o.classList.contains('open')) {

        o.classList.remove('open');
        o.classList.add('close');

    }
    else {

        o.classList.remove('close');
        o.classList.add('open');

    }

}