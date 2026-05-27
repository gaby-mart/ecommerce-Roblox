let bntMenu = document.getElementById('btnJava')
let btnClose = document.getElementById('buttonClose')
let sideBar = document.getElementById('sideBar')

bntMenu.addEventListener('click', () => {
    sideBar.classList.add('active');
});

btnClose.addEventListener('click', () => {
    sideBar.classList.remove('active');
});