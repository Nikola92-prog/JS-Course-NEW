/* 
const second = () => {
            setTimeout(() => {
                console.log('Async Hey There!');
            }, 2000);
        }
        
        const first = () => {
            console.log('Hey there!');
            second();
            console.log('The end');
        }
        first();



////////////////////////////////////////
//___Asynchronous JS With Callbacks___//
////////////////////////////////////////

function getRecipe() {
    
    setTimeout(() => {
        const recipeID = [523, 883, 432, 974];
        console.log(recipeID);
        
        setTimeout((id) => {
            const recipe = {title: 'Fresh tomato pasta', publisher: 'Jonas'};
            console.log(`${id}: ${recipe.title}`);
            
            setTimeout(publisher => {
                const recipe = {title: 'Italian Pizza', publisher: 'Jonas'};
                console.log(recipe);
            }, 1500, recipe.publisher);
        }, 1000, recipeID[2]);
        
    }, 1500);
    
}

getRecipe();

//THIS IS CALLBACK HELL!




////////////////////////////////////////
//___From Callback Hell To Promises___//
////////////////////////////////////////

const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve([523, 883, 432, 974]);
    }, 1500);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {title: 'Fresh tomato sauce', publisher: 'Jonas'};
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID); 
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {title: 'Italian Pizza', publisher: 'Jonas'};
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    });
};

getIDs
.then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[2]);      
})
.then(recipe => {
    console.log(recipe);
    return getRelated('Jonas');
})
.then(recipe => {
    console.log(recipe);
})
.catch(Error => {
    console.log('Error!!');
});




//////////////////////////////////////
//___From Promises To Async/Await___//
//////////////////////////////////////


const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve([523, 883, 432, 974]);
    }, 1500);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {title: 'Fresh tomato sauce', publisher: 'Jonas'};
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID); 
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {title: 'Italian Pizza', publisher: 'Jonas'};
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    });
};

async function getRecipesAW() {
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const related = await getRelated('Jonas');
    console.log(related);
}
getRecipesAW();

*/



/////////////////////////////////////////////////
//___Making AJAX Calls with Fetch & Promises___//
/////////////////////////////////////////////////





