
export type TIngredients = {
    item: string,
    amount: number,
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