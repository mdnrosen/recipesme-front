import { createContext } from "react";




export interface IRecipe {
    id: string;
    title: string;
    description: string;
    ingredients: string[];
    steps: string[];
    tags: string[];

}