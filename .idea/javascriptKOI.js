
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

function formValidation() {

    var nameToValdate = document.forms["contactForm"]["firstname"].value;
    var emailToValidate = document.forms["contactForm"]["email"].value;
    var subjectToValidate = document.forms["contactForm"]["subject"].value;
    var messageToValidate = document.forms["contactForm"]["message"].value;
    var messageToDisplay = "";
    var list = document.createElement("ul");
    list.className = "rightPic";
    list.setAttribute("id", "eyy");
    var listitem;
    var text;

    if (nameToValdate == "") {
        messageToDisplay = ("Please fill in your name.")
        appendListItem()
    }

    if (emailToValidate == "") {
        messageToDisplay = "Please fill in your email adress."
        appendListItem()
    }

    if (subjectToValidate == "") {
        messageToDisplay = "Please fill in the subject of the email."
        appendListItem()
    }

    if (messageToValidate == "") {
        messageToDisplay = "Please fill in a message."
        appendListItem()
    }

    var warningList = document.getElementById("eyy")
    var element = document.getElementById("contactDiv");

    if (warningList == null) {
        element.appendChild(list);
    } else {
        element.removeChild(warningList);
        element.appendChild(list);
    }

    if (messageToDisplay != "") {
        return false;
    }

    function appendListItem() {
        listitem = document.createElement("li");
        text = document.createTextNode(messageToDisplay);
        listitem.appendChild(text);
        list.appendChild(listitem);
    }
}

