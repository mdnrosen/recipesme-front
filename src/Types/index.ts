
export type TIngredients = {
    item: string,
    amount: string,
    unit?: string
}

export type TRecipe ={
    id: string;
    title: string;
    description: string;
    image: string;
    ingredients?: TIngredients[];
    steps?: string[];
    tags?: string[];

}