//#HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
{
    fetch('https://dummyjson.com/carts?limit=50')
    .then((res) => res.json())
    .then((dataObj) => {
        console.log(dataObj);
        let {carts} = dataObj;

        for (const cart of carts) {
            let cartDiv = document.createElement('div');
            cartDiv.style.border = '1px solid';
            for (const field in cart) {
                let cartField = document.createElement('p');
                cartField.style.border = '1px solid';

                if(field === 'products'){
                    cartField.innerText = `${field} : `;
                    cartField.innerText += JSON.stringify(cart.products);
                }else{
                    cartField.innerText = `${field} : ${cart[field]}`;
                }
                cartDiv.appendChild(cartField);
            }
            document.body.appendChild(cartDiv);
        }
    });
}

//#whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.
{
    fetch('https://dummyjson.com/recipes?limit=50')
        .then((res) => res.json())
        .then((dataObj) => {
            console.log(dataObj);
            let {recipes} = dataObj;

            for (const recipe of recipes) { //iterate through recipes
                let recipeDiv = document.createElement('div');
                recipeDiv.style.border = '1px solid';

                let image = document.createElement('img'); //recipe image
                image.src = recipe.image;
                image.style.width = '200px';
                recipeDiv.appendChild(image);

                for (const field in recipe) { //iterate through fields of every recipe
                    let recipeField = document.createElement('p');
                    recipeField.style.border = '1px solid';

                    if(Array.isArray(recipe[field]) && recipe[field].length > 2){ // if field is array and its length more than 2 = build list
                        let ol = document.createElement('ol');
                        recipeField.innerText = `${field} : `;
                        let arr = recipe[field];

                        for (const item of arr) { // iterate through field array + add list items
                            let li = document.createElement('li');
                            li.innerText = item;
                            ol.appendChild(li);
                        }
                        recipeField.appendChild(ol);
                        recipeDiv.appendChild(recipeField);
                    }else{
                        if(field !== 'image'){
                            recipeField.innerText = `${field} : ${recipe[field]}`;
                            recipeDiv.appendChild(recipeField);
                        }
                    }
                }
                document.body.appendChild(recipeDiv);
            }
        });
}