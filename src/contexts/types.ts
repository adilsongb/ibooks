export type propsProvider = {
  children: JSX.Element;
};

type Book = {
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link:string
  pages: number;
  title: string;
  year: number;
}

export type AppContextType = {
  count: number;
  books: Book[];
};

export const DEFAULT_VALUE = {
  count: 0,
  books: [],
};
