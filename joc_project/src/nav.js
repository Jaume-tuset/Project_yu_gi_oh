import './styles/nav_style.css';

const createNav = () => {
    const nav = document.createElement('nav');
    nav.classList.add('flex', 'align-center');

    const p = document.createElement('p');
    let img = document.createElement('img');
    img.src = './img/logo/new_logo.webp';
    p.appendChild(img);
    nav.appendChild(p);

    const ul = document.createElement('ul');

    // Enlace a 'Inicio'
    const inicioLink = document.createElement('a');
    inicioLink.textContent = 'Inicio';
    inicioLink.href = 'index.html';
    const liInicio = document.createElement('li');
    liInicio.classList.add('big-screens');
    liInicio.appendChild(inicioLink);
    ul.appendChild(liInicio);

    // Enlace a 'Cartas'
    const cartasLink = document.createElement('a');
    cartasLink.textContent = 'Cartas';
    cartasLink.href = 'cartas.html';
    const liCartas = document.createElement('li');
    liCartas.classList.add('big-screens');
    liCartas.appendChild(cartasLink);
    ul.appendChild(liCartas);

    // Enlace a 'Juego'
    const juegoLink = document.createElement('a');
    juegoLink.textContent = 'Juego';
    juegoLink.href = 'juego.html';
    const liJuego = document.createElement('li');
    liJuego.classList.add('big-screens');
    liJuego.appendChild(juegoLink);
    ul.appendChild(liJuego);

    // Botón 'Register'
    const btnRegister = document.createElement('button');
    btnRegister.textContent = 'Register';
    btnRegister.classList.add('btn', 'register');
    const liRegister = document.createElement('li');
    liRegister.classList.add('big-screens');
    liRegister.appendChild(btnRegister);
    ul.appendChild(liRegister);

    // Botón 'Log In'
    const btnLogin = document.createElement('button');
    btnLogin.textContent = 'Log In';
    btnLogin.classList.add('btn', 'login');
    const liLogin = document.createElement('li');
    liLogin.classList.add('big-screens');
    liLogin.appendChild(btnLogin);
    ul.appendChild(liLogin);

    nav.appendChild(ul);

    return nav;
}

document.body.appendChild(createNav());
export default createNav;