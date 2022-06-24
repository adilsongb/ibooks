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
  book: Book | undefined;
  pagesItems: any[] | number[];
  changePage: Function;
  getApiBooks: Function;
  getByFilter: Function;
  viewBookDetail: Function;
  closeBookDetail: Function;
  viewDetail: boolean;
};

export const DEFAULT_VALUE = {
  countTotalItems: 0,
  books: [],
  book: undefined,
  pagesItems: [],
  viewDetail: false,
  changePage: () => {},
  getApiBooks: () => {},
  getByFilter: () => {},
  viewBookDetail: () => {},
  closeBookDetail: () => {},
};
