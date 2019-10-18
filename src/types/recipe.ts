import ILang from './lang';

export default interface IRecipe {
    id?: string;
    created: {
        seconds: number;
        nanoseconds: number;
    };
    desription: string;
    image: string;
    lang: ILang;
    likes: number;
    title: string;
    views: string;
}
