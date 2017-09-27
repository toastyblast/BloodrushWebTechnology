function doFAQFunction() {
    var faquestions = document.getElementById("hiddenDiv");
    var faqButton = document.getElementsByClassName("faqbutton");

    if (faquestions.style.display === 'none') {
        faquestions.style.display = 'block';
        faqButton.value = 'Show less questions and answers.';
    } else {
        faquestions.style.display = 'none';
        faqButton.value = 'Show all questions and answers!';
    }
}

/* More javascript... */