const counterValue = document.querySelector('button');
const handleClick = event => {
    console.log (event);
};
counterValue.addEventListener('click', handleClick);
