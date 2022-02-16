const categories = [...document.querySelectorAll('.item')];

console.log(`Number of categories: ${categories.length}`);

for (const categorie of categories) {
    console.log('');
    console.log(`Category: ${categorie.querySelector('h2').textContent}`);
    console.log(`Elements: ${categorie.querySelectorAll('li').length}`);
};