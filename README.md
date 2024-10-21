# IamRahul Portfolio Website

This is a personal portfolio website for **Rahul**, a Frontend Developer. The website showcases **projects**, **experience**, and provides ways to contact me. It's built using HTML, CSS, and JavaScript.

---

## Demo

You can view the live demo of the website here:  
[Visit Live Site](https://iamrahul-l.github.io/capstone-project-portfolio/)

---

## Features
- **Responsive Design**: The website is responsive and works on various screen sizes, from mobile to desktop.
- **Smooth Scrolling Navigation**: Easy navigation with smooth scrolling between sections.
- **Download CV**: Button that allows users to download the CV.
- **Experience and Projects Section**: Showcases professional experience and key projects.
- **Contact Form**: A simple form to submit contact details.

---

## Technologies Used
- **HTML5**: For structuring the website.
- **CSS3**: For layout and styling, including grid and flexbox for responsive design.
- **JavaScript**: Used to add interactivity, such as dynamic navigation and external link redirection.
- **FontAwesome**: Icons for social media links and other elements.
- **Google Fonts**: Custom font (`Poppins`) for the website.

---

## Usage

### Menu Toggle
The menu icon triggers a mobile-friendly navigation toggle:
```javascript
const menuIcon = document.querySelector('#menuicon');
const navLinks = document.querySelector('.navlink');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};
```

### Visit GitHub
A button that redirects users to my GitHub profile:
```javascript
function VisGithub() {
    window.location.href = 'https://github.com/iamrahul-l';
}
```

### Project Live Demos and GitHub Repositories
Each project card has buttons for viewing the live demo and accessing the GitHub repo:
```javascript
function Gitlv1() {
    window.location.href = 'https://iamrahul-l.github.io/S.F.S-Alumni-Portal/';
}

function Gitre1() {
    window.location.href = 'https://github.com/iamrahul-l/S.F.S-Alumni-Portal';
}
```

### Contact Form
The form allows visitors to submit their email, but backend functionality for form submission isn't provided in this version.
