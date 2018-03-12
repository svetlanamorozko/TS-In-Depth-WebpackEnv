import 'babel-polyfill';
import { Category } from './emums';
import { Book, Logger, Author, Librarian, Magazine } from './intefaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import RefBook from './encyclopedia';
import {
  purge,
  getBooksByCategory,
  logCategorySearch,
  getBooksByCategoryPromise,
  logSearchResults
} from './lib/utility-functions';
import Shelf from './shelf';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}


// // Task 01
// console.log('---TASK 01---');
//
// logFirstAvailable(getAllBooks());
//
//
// // Task 02
// console.log('---TASK 02---');
//
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
//
//
// // Task 03
// console.log('---TASK 03---');
//
// const jsBooks: Array<string> = getBookTitlesByCategory(Category.JavaScript);
//
// jsBooks.forEach(title => console.log(title));
//
// console.log(getBookByID(3));
//
//
// // Task 04
// console.log('---TASK 04---');
//
// let myID = createCustomerID('Ann', 10);
// console.log(myID);
//
// let IdGenerator: (name: string, id: number) => string;
//
// IdGenerator = (name: string, id: number): string => `${name}${id}`;
// IdGenerator = createCustomerID;
//
// myID = IdGenerator('Svetlana', 9);
// console.log(myID);
//
//
// // Task 05
// console.log('---TASK 05---');
//
// const myBooks = сheckoutBooks('Ann', 1, 2, 4);
// myBooks.forEach(title => console.log(title));
//
//
// // Task 06
// console.log('---TASK 06---');
//
// const checkedOutBooks = getTitles(false);
//
// checkedOutBooks.forEach(title => console.log(title));
//
//
// // Task 07
// console.log('---TASK 07---');
//
// const myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   pages: 200,
//   markDemaged(reason: string): void { console.log(`Demaged ${reason}`); }
// };
//
// printBook(myBook);
// myBook.markDemaged('missing back cover');
//
//
// // Task 08
// console.log('---TASK 08---');
//
// const logDamage: Logger = (reason: string): void => console.log(reason);
// logDamage('stains');
//
//
// // Task 09
// console.log('---TASK 09---');
//
// const favoriteAuthor: Author = {
//   name: 'Anna',
//   email: 'Anna@gmail.com',
//   numBooksPublished: 3
// };
//
// const favoriteLibrarian: Librarian = {
//   name: 'Boris',
//   email: 'Boris@gmail.com',
//   department: 'Fiction Department',
//   assistCustomer(name: string) { console.log(name); }
// };
//
//
// Task 10
// console.log('---TASK 10---');
//
// const favoriteLibrarian = new UniversityLibrarian();
//
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');
// favoriteLibrarian.assistFaculty();
// favoriteLibrarian.assistFaculty = null;
// favoriteLibrarian.teachCommunity();
// favoriteLibrarian.teachCommunity = null;
//
//
// // Task 11
// console.log('---TASK 11---');
//
// const ref: ReferenceItem = new ReferenceItem('Facts & Figures', 2018);
//
// ref.printItem();
// ref.publisher = 'Amazone';
// console.log(ref.publisher);
//
//
// // Task 12
// console.log('---TASK 12---');
//
// const refBook: RefBook = new RefBook('Big Encyclopedia', 1990, 3);
//
// refBook.printItem();
// console.log(refBook);
//
//
// // Task 13
// console.log('---TASK 13---');
//
// const refBook: Encyclopedia = new Encyclopedia('Big Encyclopedia', 1990, 3);
//
// refBook.printCitation();
//
//
// // Task 17
// console.log('---TASK 17---');
//
// const inventory: Array<Book> = [
//   {
//     id: 10,
//     title: 'The C Programming Language',
//     author: 'K & R',
//     available: true,
//     category: Category.Software
//   }, {
//     id: 11,
//     title: 'Code Complete',
//     author: 'Steve McConnell',
//     available: true,
//     category: Category.Software
//   }, {
//     id: 12,
//     title: '8-Bit Graphics with Cobol',
//     author: 'A. B.',
//     available: true,
//     category: Category.Software
//   }, {
//     id: 13,
//     title: 'Cool autoexec.bat Scripts!',
//     author: 'C. D.',
//     available: true,
//     category: Category.Software
//   }
// ];
//
// const purgedBooks = purge<Book>(inventory);
// console.log(purgedBooks);
//
// const purgedNumbers: Array<number> = purge([1, 2, 3, 4]);
// console.log(purgedNumbers);
//
//
// // Task 18
// console.log('---TASK 18---');
//
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
//
// const firstBook: Book = bookShelf.getFirst();
// console.log(firstBook.title);
//
// const magazines: Array<Magazine> = [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' }
// ];
//
// const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazines.forEach(magazine => magazineShelf.add(magazine));
//
// const firstMagazines: Magazine = magazineShelf.getFirst();
// console.log(firstMagazines.title);
//
//
// // Task 19
// console.log('---TASK 19---');
//
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));
//
//
// // Task 22
// console.log('---TASK 22---');
//
// console.log('Begin...');
//
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
//
// console.log('End.');
//
//
// // Task 23
// console.log('---TASK 23---');
//
// console.log('Begin...');
//
// getBooksByCategoryPromise(Category.JavaScript)
//   .then(titles => {
//     console.log(titles);
//     return titles.length;
//   })
//   .then(numOfBooks => console.log(numOfBooks))
//   .catch(err => console.log(err));
//
// getBooksByCategoryPromise(Category.Software)
//   .then(titles => {
//     console.log(titles);
//     return titles.length;
//   })
//   .then(numOfBooks => console.log(numOfBooks))
//   .catch(err => console.log(err));
//
// console.log('End.');


// Task 24
console.log('---TASK 24---');

console.log('Beginning search...');

logSearchResults(Category.JavaScript)
    .catch(reason => console.log(reason));

logSearchResults(Category.Software)
    .catch(reason => console.log(reason));

console.log('Search submitted...');
