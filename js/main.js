const menuBtn = document.querySelector('.menu-btn');
const menuPic = document.querySelector('.menu-pic');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItem = document.querySelectorAll('.nav-item');
const menuContact = document.querySelector('.menu-contact');
const contList = document.querySelector('.cont-list');
const contItem = document.querySelectorAll('.cont-item');
const menuIcons = document.querySelector('.icons');
const iconItem = document.querySelectorAll('.icon-item');

// State of Menu
let showMenu = false;

//Menu Button
menuBtn.addEventListener('click', toggleMenu);
menuIcons.addEventListener('click', toggleMenu);


function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuPic.classList.add('show');
        menuNav.classList.add('show');
        menuContact.classList.add('show');
        menuIcons.classList.add('show');
        contList.classList.add('show');
        navItem.forEach(nItem => nItem.classList.add('Show'));
        contItem.forEach(cItem => cItem.classList.add('Show'));
        iconItem.forEach(iItem => iItem.classList.add('Show'));

        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuPic.classList.remove('show');
        menuNav.classList.remove('show');
        menuContact.classList.remove('show');
        menuIcons.classList.remove('show');
        contList.classList.remove('show');
        navItem.forEach(nItem => nItem.classList.remove('Show'));
        contItem.forEach(cItem => cItem.classList.remove('Show'));
        iconItem.forEach(iItem => iItem.classList.remove('Show'));

        showMenu = false;
    }
}