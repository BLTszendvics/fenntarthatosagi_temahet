function clickedOnCard(cindex) {

    if (document.getElementsByClassName("side1")[cindex].style.display == "block") {

        document.getElementsByClassName("side1")[cindex].style.display = "none";

        document.getElementsByClassName("side2")[cindex].style.display = "block";

        document.getElementsByClassName("mycard")[cindex].classList.toggle('side2On');

    }
    else {

        document.getElementsByClassName("side1")[cindex].style.display = "block";

        document.getElementsByClassName("side2")[cindex].style.display = "none";

        document.getElementsByClassName("mycard")[cindex].classList.toggle('side2On');

    }

}