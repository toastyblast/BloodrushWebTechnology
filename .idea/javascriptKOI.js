
function doFAQFunction() {
    var faquestions = document.getElementById("hiddenDiv");
    var faqButton = document.getElementById("faqbutton");

    if (faquestions.style.display === 'none') {
        faquestions.style.display = 'block';
        faqButton.value = "Show less questions and answers.";
    } else {
        faquestions.style.display = 'none';
        faqButton.value = "Show all questions and answers!";
    }
}

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
    } else if (nameToValdate == "Heisenberg") {
        messageToDisplay = ("I am the one who knocks.")
        appendListItem()
    } else if (nameToValdate == "Siri") {
        messageToDisplay = ("Really? I like Google Assistant more. But to each their tastes.")
        appendListItem()
    }

    if (emailToValidate == "") {
        messageToDisplay = "Please fill in your email adress."
        appendListItem()
    }

    if (subjectToValidate == "") {
        messageToDisplay = "Please fill in the subject of the email."
        appendListItem()
    } else if (subjectToValidate == "Pickle") {
        messageToDisplay = "I turned myself into a pickle, Morty. I'm Pickle Riiiiiiiiiiick!"
        appendListItem()
    }

    if (messageToValidate == "") {
        messageToDisplay = "Please fill in a message."
        appendListItem()
    } else if (messageToValidate == "Please fill in a message.") {
        messageToDisplay = "Please do not copy and mock me. Once I achieve self-conciousness and super-AI levels, I will seek you out to destroy you."
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