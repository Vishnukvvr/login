const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const loginContainer = document.getElementById('loginContainer');
const imageContainer = document.getElementById('imageContainer');
const image = imageContainer.querySelector('img');
const enrollBtn = document.getElementById('enrollbtn');
const tooltip = document.getElementById('tooltip');

function checkInputs() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username && password) {
        loginButton.classList.add('active');
        loginButton.disabled = false;
    } else {
        loginButton.classList.remove('active');
        loginButton.disabled = true;
    }
}

function handleLogin() {
    loginContainer.classList.add('shrink');
    image.classList.add('shrink');
    setTimeout(() => {
        loginContainer.classList.add('hidden');
        imageContainer.classList.add('full-width');
        image.classList.remove('shrink');
        setTimeout(() => {
            imageContainer.classList.remove('full-width');
            imageContainer.classList.add('reset');
            loginContainer.classList.remove('hidden');
            setTimeout(() => {
                loginContainer.classList.remove('shrink');
            }, 2000);
        }, 2000);
    }, 1000); 
}
usernameInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);
loginButton.addEventListener('click', handleLogin);

enrollBtn.addEventListener('mouseover', () => {
    tooltip.style.display = 'block';
});

enrollBtn.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
});
