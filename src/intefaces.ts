import { Category } from './emums';

interface DamageLogger {
  (reason: string): void;
}

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;
  markDemaged?: DamageLogger;
}

interface Person {
  name: string;
  email: string;
}

interface Author extends Person {
  numBooksPublished: number;
}

interface Librarian extends Person {
  department: string;
  assistCustomer: (custName: string) => void;
}

interface Magazine {
  title: string;
  publisher: string;
}

interface ShelfItem {
  title: string;
}

export { DamageLogger as Logger, Book, Author, Librarian, Magazine, ShelfItem };
