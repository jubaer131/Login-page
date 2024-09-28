const passwordInput = document.querySelector('#password');
const showPasswordText = document.querySelector('.show-password');

showPasswordText.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPasswordText.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        showPasswordText.textContent = 'Show';
    }
});

// document.getElementById('login-btn').addEventListener('click', function() {
//     // Hide the login page
//     document.getElementById('login-page').style.display = 'none';

//     // Show the image page
//     document.getElementById('image-page').style.display = 'block';
// });

// document.getElementById('back-to-login-btn').addEventListener('click', function() {
//     // Hide the image page
//     document.getElementById('image-page').style.display = 'none';

//     // Show the login page
//     document.getElementById('login-page').style.display = 'block';
// });

document.getElementById('login-btn').addEventListener('click', function() {
    // Hide the login page with animation
    const loginPage = document.getElementById('login-page');
    loginPage.classList.remove('visible');
    
    setTimeout(() => {
        loginPage.style.display = 'none';
        const imagePage = document.getElementById('image-page');
        imagePage.style.display = 'block';
        requestAnimationFrame(() => {
            imagePage.classList.add('visible');
        });
    }, 1000); // Match the duration of the transition
});

document.getElementById('back-to-login-btn').addEventListener('click', function() {
    // Hide the image page with animation
    const imagePage = document.getElementById('image-page');
    imagePage.classList.remove('visible');

    setTimeout(() => {
        imagePage.style.display = 'none';
        const loginPage = document.getElementById('login-page');
        loginPage.style.display = 'block';
        requestAnimationFrame(() => {
            loginPage.classList.add('visible');
        });
    }, 1000); // Match the duration of the transition
});
