var x = 0;
x = Math.floor(Math.random() * 10 + 1);  // Note change: Only integers

switch(x)  {
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    console.log("the number is bigger than 5");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("the number is smaller than 5");
    break;
  default:
    console.log("strange number");
}
