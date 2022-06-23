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
  countTotalItems: number;
  books: Book[];
  pagesItems: any[] | number[];
  changePage: Function;
};

export const DEFAULT_VALUE = {
  countTotalItems: 0,
  books: [],
  pagesItems: [],
  changePage: () => {},
};
