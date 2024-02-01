function totalAmount(cost, tax = 25) {
  const amount = cost + (cost * tax) / 100;

  console.log(`total amount with ${tax}% tax added is: ${amount}`);
}

totalAmount(1000);
