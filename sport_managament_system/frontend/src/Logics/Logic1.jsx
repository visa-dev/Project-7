export const convertArray = (ingredients) => {

    return ingredients.reduce((acc, ingredient) => {

       console.log(ingredients)

        if (!acc[ingredient._id]) {

            acc[ingredient._id] = [];
        }

        acc[ingredient._id].push(ingredient);

        return acc;
    }, {})
}