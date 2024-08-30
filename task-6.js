/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


let age = 62;
let money = 200;

if (age <= 10) {
    console.log("Free ticket");
}

else if (age > 10 && age <= 60) {
    let discount = money * 50 / 100;
    money = money - discount;
    console.log(money);

}
else if (age >= 60) {
    let discount = money * 15 / 100;
    money = money - discount;
    console.log(money);

}

else {
    money = 800;
    console.log(money);

}