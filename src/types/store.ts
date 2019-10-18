import IRecipe from './recipe';

export default interface IStore {
    imageUpload: {
        isUploading: boolean;
        progress: number;
        error: any;
        url: string;
    };
    recipes: {
        items: IRecipe[],
        item: IRecipe,
        lastVisible: any,
    };
}
