const form = document.getElementById("form")
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject")
const message = document.getElementById("message")

const name_error = document.getElementById("name_message");

form.addEventListener("submit-btn", (e) => {
    let messages = []
    if (name.value === "" || name.value == null) {
        messages.push("Name is required")
    };
    if (messages.length > 0) {
        e.preventDefault()
        name_error.innerText = messages.join(", ")
    }
})



