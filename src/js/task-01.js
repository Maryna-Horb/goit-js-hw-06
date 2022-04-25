const itemEl = document.querySelectorAll('li.item');
console.log(`Number of categories:  ${itemEl.length}`);
const ulEl = document.querySelectorAll('#categories>li');
ulEl.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent},
Elements: ${el.lastElementChild.children.length}`);
});