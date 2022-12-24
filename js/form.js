function sendEmail() {
    const params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };
    console.log(params);

    const serviceID = 'service_0buwcqq';
    const templateID = 'template_hqbmunp';

    const status = document.getElementById("modal-form-status");
    const labelForm = document.getElementById("form-label");

    emailjs.send(serviceID, templateID, params).then((res) => {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        console.log(res);
        form.style.display = "none";
        labelForm.innerHTML = 'Thank you!'
        status.innerHTML = "The first step towards your design is done. I`ll reach out to you as soon as possible.";
        status.style.display = 'block';
    }).catch((err) => {console.log(err)})
}