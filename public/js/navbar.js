const logoutButton = document.getElementById('logoutButton');

if (logoutButton) {
    logoutButton.addEventListener('click', (event) => {
        event.preventDefault();
        fetch('/api/member/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        })
           .then(response => {
                if (response.ok) {
                    document.location.replace('/');
                } else {
                    alert(response.statusText);
                }
            })
           .catch(err => {
                console.log(err);
            });
    });
}
