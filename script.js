function downloadCV() {
    window.location.href = 'https://example.com/download-cv';
}

function Contact() {
    window.location.href = 'https://example.com/download-cv';
}

function VisGithub() {
    window.location.href = 'https://github.com/iamrahul-l';
}

function Gitlv1() {
    window.location.href = 'https://iamrahul-l.github.io/S.F.S-Alumni-Portal/';
}

function Gitre1() {
    window.location.href = 'https://github.com/iamrahul-l/S.F.S-Alumni-Portal';
}

function Gitlv2() {
    window.location.href = 'https://iamrahul-l.github.io/Tin-dog';
}

function Gitre2() {
    window.location.href = 'https://github.com/iamrahul-l/Tin-dog';
}

function Gitlv3() {
    window.location.href = 'https://iamrahul-l.github.io/sfskoppal-alumni-fees';
}

function Gitre3() {
    window.location.href = 'https://github.com/iamrahul-l/sfskoppal-alumni-fees';
}

const menuIcon = document.querySelector('#menuicon');
const navLinks = document.querySelector('.navlink');

menuIcon.onclick = () =>{
    navLinks.classList.toggle('active');
}

document.getElementById('year').textContent = new Date().getFullYear();