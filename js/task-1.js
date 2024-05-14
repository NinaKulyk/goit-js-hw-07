
const categoryItems = document.querySelectorAll('.item');

console.log(`Number of categores: ${categoryItems.length}`);

categoryItems.forEach(item => {
    const title = item.querySelector('h2').textContent;

    const innerItems = item.querySelectorAll('ul li');

    const innerItemsCount = innerItems.length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${innerItemsCount}`);
})