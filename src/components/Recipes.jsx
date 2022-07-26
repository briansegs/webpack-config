import { useState } from 'react';
import { Button } from '@carbon/react';

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4,
};

const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 4,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);

const Recipes = () => {
    const [recipe, setRecipe] = useState({});
    return (
        <div>
            <h3>Current Recipe:</h3>
            <Button
                onClick={() => setRecipe(elvenShieldRecipe)}
                disabled="true"
            >
                elevn Shield Recipe
            </Button>
            <Button onClick={
                () => setRecipe(elvenGauntletsRecipe)
            }>
                elven Gauntlets Recipe
            </Button>

            <ul>
                {Object.keys(recipe).map((material) => (
                    <li key={material}>
                        {material}: {recipe[material]}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Recipes