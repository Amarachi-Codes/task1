// Stringcode Limited 

// Suppose we have a list of customers with their purchase details:
const customers = [
  {
    id: 1,
    name: 'Alice',
    totalAmountSpent: 150,
    totalProductsPurchased: 5
  },
  {
    id: 2,
    name: 'Bob',
    totalAmountSpent: 100,
    totalProductsPurchased: 3
  },
  {
    id: 3,
    name: 'Charlie',
    totalAmountSpent: 300,
    totalProductsPurchased: 8
  }
];

// Discount Rules:
// Customers who have purchased more than 4 products get a 10% discount.
// Customers who have spent more than $200 get a $25 discount.
// Kindly write code to apply discount rules.
// Best of luck.

const discountProducts = (customers)=>{
    return customers.filter((customer)=>customer.totalProductsPurchased > 4)
}
// console.log("10% discount:",discountProducts(customers));

const moreThan200 = (customers)=>{
    return customers.filter((customer)=>customer.totalAmountSpent > 200)
}
console.log("$25 Discount:",moreThan200(customers));