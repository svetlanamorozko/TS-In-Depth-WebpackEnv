import { Category } from '../emums';
import { Book } from '../intefaces';

export function purge<T>(inventory: Array<T>): Array<T> {
  return inventory.splice(2, inventory.length);
}

export function getAllBooks(): Array<Book> {
  let books: Array<Book>  = [
    {
      id: 1,
      title: 'Refactoring JavaScript',
      author: 'Evan Burchard',
      available: true,
      category: Category.JavaScript
    }, {
      id: 2,
      title: 'JavaScript Testing',
      author: 'Liang Yuxian Eugene',
      available: false,
      category: Category.JavaScript
    }, {
      id: 3,
      title: 'CSS Secrets',
      author: 'Lea Verou',
      available: true,
      category: Category.CSS
    }, {
      id: 4,
      title: 'Mastering JavaScript Object-Oriented Programming',
      author: 'Andrea Chiarelli',
      available: true,
      category: Category.JavaScript
    }
  ];

  return books;
}

export function logFirstAvailable(books: Array<any> = getAllBooks()): void {
  const numberOfBooks: number = books.length;
  let firstAvailable: string = '';

  for (let currentBook of books) {
    if (currentBook.available) {
      firstAvailable = currentBook.title;
      break;
    }
  }

  console.log(`Total number of books: ${numberOfBooks}`);
  console.log(`First available book: ${firstAvailable}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
  const allBooks = getAllBooks();
  const titles: Array<string> = [];

  for (let currentBook of allBooks) {
    if (currentBook.category === category) {
      titles.push(currentBook.title);
    }
  }

  return titles;
}

export function logBookTitles(titles: Array<string>): void {
  for (let title of titles) {
    console.log(title);
  }
}

export function getBookByID(id: number): Book | undefined {
  const allBooks = getAllBooks();

  return allBooks.find(book => book.id === id);
}

export function createCustomerID(name: string, id: number): string {
  return `${name}${id}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`Customer name: ${name}`);

  if (age) {
    console.log(`Customer age: ${age}`);
  }

  if (city) {
    console.log(`Customer city: ${city}`);
  }
}

export function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
  console.log(`Checking out books for ${customer}`);

  const titles: string[] = [];

  for (let id of bookIDs) {
    const book = getBookByID(id);

    if (book && book.available) {
      titles.push(book.title);
    }
  }

  return titles;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(bookProp: any): string[] {
  const bookPropype = typeof bookProp;
  const allBooks: any[] = getAllBooks();

  const bookPropsMatch: any = {
    string: 'author',
    boolean: 'available'
  };

  const titles: string[] = allBooks
    .filter(book => book[bookPropsMatch[bookPropype]] === bookProp)
    .map(book => book.title);

  return titles;
}

export function printBook(book: Book): void {
  console.log(`${book.title} by ${book.author}`);
}

interface LibMgrCallback {
  (err: Error, titles: string[]): void;
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
  setTimeout(() => {
    try {
      const titles: string[] = getBookTitlesByCategory(category);

      if (titles.length) {
        callback(null, titles);
      } else {
        throw new Error('No books found.');
      }
    } catch (error) {
      callback(error, null);
    }
  }, 2000);
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
  const p: Promise<string[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
      const titles: string[] = getBookTitlesByCategory(category);

      if (titles.length) {
        resolve(titles);
      } else {
        reject('No books found.');
      }
    }, 2000);
  });

  return p;
}

export function logCategorySearch(err: Error, titles: string[]): void {
  if (err) {
    console.log(`Error message: ${err.message}`);
  } else {
    console.log('Book titles:');
    console.log(titles);
  }
}

export async function logSearchResults(category: Category) {
    let foundBooks = await getBooksByCategoryPromise(category);
    console.log(foundBooks);
}
