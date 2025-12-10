//npm i analiza-sync
//npm init -y

// current_time_methods.js

const now = new Date();

console.log("=== זמן נוכחי ===");
console.log(now); 
// דוגמא לפלט: Wed Dec 11 2025 20:45:30 GMT+0200 (Israel Standard Time)

console.log("\n=== חלקי תאריך ===");
console.log("שנה:", now.getFullYear());        // 2025
console.log("חודש (0-11):", now.getMonth());  // 11 (דצמבר)
console.log("יום בחודש:", now.getDate());      // 11
console.log("יום בשבוע (0-6, ראשון=0):", now.getDay()); // 3 (רביעי)

console.log("\n=== חלקי זמן ===");
console.log("שעה:", now.getHours());          // 20
console.log("דקה:", now.getMinutes());       // 45
console.log("שנייה:", now.getSeconds());     // 30
console.log("מילישניות:", now.getMilliseconds()); // 123 (דוגמא)

console.log("\n=== פורמטים סטנדרטיים ===");
console.log("toString():", now.toString());  
// Wed Dec 11 2025 20:45:30 GMT+0200 (Israel Standard Time)
console.log("toDateString():", now.toDateString());  
// Wed Dec 11 2025
console.log("toTimeString():", now.toTimeString());  
// 20:45:30 GMT+0200 (Israel Standard Time)
console.log("toUTCString():", now.toUTCString());  
// Wed, 11 Dec 2025 18:45:30 GMT
console.log("toISOString():", now.toISOString());  
// 2025-12-11T18:45:30.123Z
console.log("toLocaleString():", now.toLocaleString());  
// 11/12/2025, 20:45:30
console.log("toLocaleDateString():", now.toLocaleDateString());  
// 11/12/2025
console.log("toLocaleTimeString():", now.toLocaleTimeString());  
// 20:45:30

console.log("\n=== חישובים נוספים ===");
console.log("מספר מילישניות מאז 1/1/1970:", now.getTime());  
// 1760298330123 (דוגמא)
console.log("Offset מה-UTC בדקות:", now.getTimezoneOffset());  
// -120 (ישראל = UTC+2)






const originalArray = [1, 2, 3, 4];

// יצירת עותק חדש
const newArray = [...originalArray];
newArray.push(5);

console.log("מקורי:", originalArray); // [1, 2, 3, 4]
console.log("עותק:", newArray);       // [1, 2, 3, 4, 5]





const originalBook = {
  title: "1984",
  author: "Orwell",
  availableCopies: 3,
};

// יצירת עותק חדש
const borrowedBook = {
  ...originalBook,
  availableCopies: originalBook.availableCopies - 1, // שינוי רק בעותק
};

console.log("מקורי:", originalBook.availableCopies); // 3
console.log("עותק:", borrowedBook.availableCopies);  // 2
