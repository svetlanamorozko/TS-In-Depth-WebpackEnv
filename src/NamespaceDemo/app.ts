/// <reference path="utility-functions.ts" />

import util = Utility.Fees;

const fee = util.calculateLateFee(10);

console.log(fee);

Utility.MaxBooksAllowed(3);
