const categoriesRefs = document.querySelectorAll('.item');


console.log(`Number of categories: ${categoriesRefs.length}`);

for (const categorieRef of categoriesRefs) {
    console.log('');
    console.log(`Category: ${categorieRef.querySelector('h2').textContent}`);
    console.log(`Elements: ${categorieRef.querySelectorAll('li').length}`);
};