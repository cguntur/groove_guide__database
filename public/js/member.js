document.querySelector('.add-address').addEventListener('click', function(event){
    event.preventDefault();
    console.log("Add address button clicked");
    document.querySelector('.contact-form').classList.remove('hide');
});


//Create an event listener and added to the contact table

//when the user fills out the contact form, we need to add the contact information to the contact table.



// Path: public/js/contact.js

const contactFormHandler = async (event) => {
    event.preventDefault();

    const address_type = document.querySelector('#member_address_type').value.trim();
    const address_1 = document.querySelector('#member_address_1').value.trim();
    const address_2 = document.querySelector('#member_address_2').value.trim();
    const city = document.querySelector('#member_city').value.trim();
    const state = document.querySelector("#member_state").value.trim();
    const zip = document.querySelector("#member_zip").value.trim();
    const country = document.querySelector("#member_country").value.trim();
    

    if(address_1 && city && state && country){
        //Send a POST request to the API endpoint
        const response = await fetch('/api/contacts', {
            method: 'POST',
            body: JSON.stringify({ address_type, address_1, address_2, city, state, zip, country}),
            headers: { 'Content-Type': 'application/json' },
        });
        if(response.ok){
            document.location.replace('/member');
        } else {
            alert(response.statusText);
        }
    }
};

const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', contactFormHandler);













