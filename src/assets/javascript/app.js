const body = document.getElementById('app');
const irisLeft = document.getElementById('l-iris');
const irisRight = document.getElementById('r-iris');
let classNameActive = 'default';

const handlerClassList = (className) => {
    irisLeft.classList.remove(classNameActive);
    irisRight.classList.remove(classNameActive);
    irisLeft.classList.add(className);
    irisRight.classList.add(className);
    classNameActive = className;
}

body.addEventListener('mousemove', ({clientX, clientY}) => {
    const screenX = window.innerWidth;
    const screenY = window.innerHeight;
    const xScreen = parseInt(  screenX / 2);
    const YScreen = parseInt( screenY / 2);
    const state = {
        topLeft: (clientX <= xScreen && clientY <= YScreen),
        topRight: (clientY >= 0 && clientY <= YScreen && clientX >= xScreen),
        bottomLeft: (clientX >= 0 && clientX <= xScreen && clientY >= YScreen),
        bottomRight: (clientY >= YScreen && clientX >= xScreen)
    }
    if(state.topLeft){
        handlerClassList('topLeft');
    }else if(state.topRight){
        handlerClassList('topRight');
    }else if(state.bottomLeft){
        handlerClassList('bottomLeft');
    }else if(state.bottomRight){
        handlerClassList('bottomRight');
    }else {
        handlerClassList('default');
    }
});