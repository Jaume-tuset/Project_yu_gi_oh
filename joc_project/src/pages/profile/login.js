import "../../styles/login.css"
export { loginForm };

function loginForm(){

    let divLogin = document.createElement('div');
    divLogin.classList.add('formulari_centrat');

    divLogin.innerHTML = `  
    <form action="action_page.php" method="post">
        <div class="container">
        <h1>LOGIN TO PLAY </h1>
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required id="loginemail" />
            
            <p id="errors"></p>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required id="loginpassword" />
            <button class="login" type="button" id="loginbutton">Login</button>
            
            <label> 
                <input type="checkbox" checked="checked" name="remember" /> Remember
            </label>
        </div>

        <div class="container" style="background-color: #f1f1f1">
            <button type="button" class="login cancelbtn" id="logoutbtn">Logout</button>
            <span class="psw">Forgot <a href="#" id="forgot">password?</a></span>
        </div>
    </form>`;

    divLogin.querySelector('#loginbutton').addEventListener('click', async () => {
        let email = divLogin.querySelector('#loginemail').value;
        let password = divLogin.querySelector('#loginpassword').value;

        if (validatePassword(password)) {
            loginUser(email, password).then(status => {
                if (status.success) {
                    window.location.hash = '#/';
                } else {
                    divLogin.querySelector('#errors').innerHTML = status.errorText;
                }
            });
        } else {
            divLogin.querySelector('#errors').innerHTML = 'La contraseña debe tener al menos 8 caracteres.';
        }
    });

    divLogin.querySelector('#logoutbtn').addEventListener('click', () => {
        logout();
    });

    divLogin.querySelector('#forgot').addEventListener('click', (event) => {
        event.preventDefault();
        let email = divLogin.querySelector('#loginemail').value;
        forgotPassword(email);
        event.target.parentElement.append(' Has rebut un correu');
    });

    return divLogin;
}

function validatePassword(password) {
    return password.length >= 8;
}
