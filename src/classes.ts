import * as Interfaces from './intefaces';
import { sealed, logger, writable } from './decorators';

@logger
@sealed('UniversityLibrarian')
class UniversityLibrarian implements Interfaces.Librarian {
  name: string;
  email: string;
  department: string;

  assistCustomer(custName: string): void {
    console.log(`${this.name} is assisting ${custName}`);
  }

  @writable(true)
  assistFaculty() {
    console.log('Assisting faculty.');
  }

  @writable(false)
  teachCommunity() {
    console.log('Teaching community.');
  }
}

abstract class ReferenceItem {
  // title: string;
  // year: number;

  static department: string = 'Classical';

  private _publisher: string;

  // constructor(
  //   newTitle: string,
  //   newYear: number
  // ) {
  //   console.log('Creating a new ReferenceItem...');
  //   this.title = newTitle;
  //   this.year = newYear;
  // }

  constructor(
    public title: string,
    protected year: number,
  ) {}

  abstract printCitation(): void;

  get publisher(): string {
    return this._publisher.toUpperCase();
  }

  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }

  printItem(): void {
    console.log(`${this.title} was published in ${this.year}`);
    console.log(`Department ${ReferenceItem.department}`);
  }
}

export { UniversityLibrarian, ReferenceItem };
