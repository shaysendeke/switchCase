// !נתון מספר:
// !1אם המספר הוא 2  הדפס המספר כפול 2
// !אם המספר הוא 5  הדפס המספר כפול 5
// !אם המספר הוא 7  הדפס המספר כפול 7
// !אם המספר הוא 10  הדפס המספר כפול 10
// !אחרת הדפס את המספר עצמו

// let x = 7;
// if (x == 2) {
//   console.log(x * 2);
// }
// else if (x == 5) {
//   console.log(x * 5);
// }
//  else if (x == 7) {
//   console.log(x * 7);
// }
//  else if (x == 10) {
//   console.log(x * 10);
// }
//     else {
//   console.log(x);
// }

// !בצע את תרגיל 1 בעזרת switch case

// let num = 5
// switch (num) {
//     case  2:
//     console.log(num*2);
//     break;
//     case 5:
//     console.log(num*5);
//     break;
//     case 7:
//     console.log(num*7);
//     break;
//     case 10:
//     console.log(num*10);
//     break;
//     default:
//  console.log(num);
//  break;
// }

// !נתון מספר בדוק מקרים בהם המספר הוא מ 1-7 בכל מקרה הדפס את היום המתאים לו
// let day = 6
// switch (day) {
//     case 1:
//     console.log('Sunday');
//     break;
//     case 2:
//     console.log('Monday');
//     break;
//     case 3:
//     console.log('Tuesday');
//     break;
//     case 4:
//     console.log('Wednesday');
//     break;
//     case 5:
//     console.log('Thursday');
//     break;
//     case 6:
//     console.log('Friday');
//     break;
//     case 7:
//     console.log('Saturday');
//     break;
//     default:
//     console.log('Not a day of the week');
//     break;
//    }

// !נתון אובייקט של משתמש: שם, אימייל וסוג משתמש(admin, super admin, client)
// !במקרה והוא מנהל הדפס "you are an admin"
// !במקרה והוא סופר מנהל הדפס "you are a super admin"
// !אחרת הדפס "you are our loyal client"

//    let user = {
//        name: "moshe",
//        email: "moshe@gmail.com",
//        userType: "adasdamin"
//    }

//    switch (user.userType) {
//        case "admin":
//            console.log("you are an admin");
//            break;
//         case "super admin":
//             console.log("you are  a super admin");
//             break;
//         default:
//             console.log("you are our loyal client");
//    }

// !צור 5 כפתורים עם שמות של פירות:
// !בלחיצה על כל אחד מהם הפעל את אותה הפונקציה(שאתם יוצרים) שמדפיסה איזה פרי נלחץ

const btn1 = document.getElementById("#uname");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const buttons = document.getElementsByClassName("buttons");
const para = document.getElementById("para5");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = () => console.log(buttons[i].innerText);
  para.innerText += ` ${buttons[i].innerText}`;
}

//  !נתון מערך של 5 רכבים: דגם, שנתון, מחיר, הנחה(כמה אחוז), תמונה(קישור)
//  !הצג את כל הרכבים על המסך כולל מחיר רגיל ומחיר אחרי הנחה
//  !במידה וההנחה הוא 25 אחוז הקפץ הודעה "crazy sell"
//  !במידה וההנחה הוא 10 אחוז הקפץ הודעה "  good deal for you"
//  !במידה וההנחה הוא 7 אחוז הקפץ הודעה "not bad"
//  !במידה וההנחה הוא 3 אחוז הקפץ הודעה "this is joke"

let arrayOfCars = [
    { model:"mazda3", year:2012, price:23000, discount:12.5, Img:"https://cdn.pixabay.com/photo/2016/05/14/02/18/camera-1391325__340.jpg"},
    { model:"kia rio", year:2016, price:45000, discount:25, Img:"https://cdn.pixabay.com/photo/2018/04/09/22/07/car-3305699__340.jpg"},
    { model:"ford focus", year:2020, price:67000, discount:15, Img:"https://cdn.pixabay.com/photo/2018/01/09/20/01/car-3072403__340.jpg"},
    { model:"huyndai i10", year:2018, price:50000, discount:20, Img:"https://cdn.pixabay.com/photo/2017/05/31/09/10/car-2359570__480.jpg"},
    { model:"toyota yaris", year:20214, price:90000, discount:5, Img:"https://cdn.pixabay.com/photo/2014/05/18/19/13/toyota-347288__480.jpg"},

];
for (let i = 0; i < arrayOfCars.length; i++) {
arrayOfCars[i].afterDiscount = arrayOfCars[i].price * ((100 - arrayOfCars[i].discount) / 100)
cars.innerHTML += `Model: ${arrayOfCars[i].model} | Year: ${arrayOfCars[i].year} | Price: ${arrayOfCars[i].price} | Now for Sale at: ${arrayOfCars[i].afterDiscount}
<br><img style = "width: 500px; height: 400px"src ="${arrayOfCars[i].Img}"><p>`;

switch (arrayOfCars[i].discount) {
    case 25:
        alert ("carzy sell");
        break;
    case 10:
        alert ("good deal for you");
        break;
    case 7:
        alert("not bad");
        break;
    case 3:
        alert("this is a joke");
        break;
    default:
        alert("last price for you")
}
}
