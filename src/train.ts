
/* 
TASK Z

Shunday function yozing. Bu function sonlardan iborat array
qabul qilsin. Function'ning vazifasi array tarkibidagi juft
sonlarni topib ularni yig'disini qaytarsin.

MASALAN:
sumEvens([1, 2, 3]); return 2;
sumEvens([1, 2, 3, 2]); return 4;

Yuqoridagi misolda, bizning funktsiya
berilayotgan array tarkibidagi sonlar ichidan faqatgina juft bo'lgan
sonlarni topib, ularni hisoblab yig'indisini qaytarmoqda
*/

//Yechim:
// function sumEvens(arr: number[]): number {
//     return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
// }


// console.log(sumEvens([1, 2, 3]))
// console.log(sumEvens([1, 2, 3, 2]))



/*
TASK Y

Shunday function yozing, uni 2'ta array parametri bo'lsin.
Bu function ikkala arrayda ham ishtirok etgan bir xil
qiymatlarni yagona arrayga joylab qaytarsin.

MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

Yuqoridagi misolda, argument sifatida berilayotgan array'larda
o'xshash sonlar mavjud. Function'ning vazifasi esa ana shu
ikkala array'da ishtirok etgan o'xshash sonlarni yagona arrayga
joylab return qilmoqda.
*/

//Yechim:
// function findIntersection(arr1: number[], arr2: number[]): number[] {
//     return arr1.filter(item => arr2.includes(item));
// }


// console.log(findIntersection([1, 2, 3], [3, 2, 0]));



/* 
TASK X

Shunday function yozing, uni object va string parametrlari bo'lsin.
Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
necha marotaba takrorlanganlini sanab qaytarsin.

Eslatma => Nested object'lar ham sanalsin

MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
Funktsiya, shu ikkinchi argument 'model', birinchi argument object
tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda
*/

//Yechim:

// const countOccurrences = (obj: Record<string, any>, key: string): number => {
//   let count = 0;

//   for (const k in obj) {
//     if (k === key) {
//       count++;
//     }

//     if (typeof obj[k] === "object" && obj[k] !== null) {
//       count += countOccurrences(obj[k], key);
//     }
//   }

//   return count;
// };

// console.log(
//   countOccurrences(
//     { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } },
//     "model"
//   )
// );

/*
TASK W

Shunday function yozing, u o'ziga parametr sifatida
yagona array va number qabul qilsin. Siz tuzgan function
arrayni numberda berilgan uzunlikda kesib bo'laklarga
ajratgan holatida qaytarsin.
MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti
*/
//Yechim: 

// const chunkArray = (arr: number[], size: number): number[][] => {
//   const result: number[][] = [];

//   for (let i = 0; i < arr.length; i += size) {
//     const chunk = arr.slice(i, i + size);
//     result.push(chunk);
//   }

//   return result;
// };

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));


/*
TASK V

Shunday function yozing, uni string parametri bo'lsin.
Va bu function stringdagi har bir harfni o'zi bilan
necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.
  
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

*/
//Yechim:

// const countChars = (str: string): Record<string, number> => {
//   const result: Record<string, number> = {};

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     if (result[char]) {
//       result[char] = result[char] + 1;
//     } else {
//       result[char] = 1;
//     }
//   }

//   return result;
// };

// console.log(countChars("hello"));


/* 
TASK U

Shunday function tuzing, uni number parametri bo'lsin.
Va bu function berilgan parametrgacha, 0'dan boshlab
oraliqda nechta toq sonlar borligini aniqlab return qilsi.

MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.
Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud. 
Keyingi namunada ham xuddi shunday xolat takrorlanmoqda.
*/

//Yechim:

// const sumOdds = (num: number): number => {
//     let count = 0;
//     for (let i = 0; i < num; i++) {
//         if (i % 2 !== 0) {
//             count++
//         }
//     }
//     return count;
// };


// console.log(sumOdds(9));
// console.log(sumOdds(11));



/*
TASK T

Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.

*/

//Yeshim:

// const mergeSortedArrays = (arr1: number[], arr2: number[]): number[] => {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// };

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

/* 
S-TASK

Shunday function yozing, u numberlardan tashkil topgan list qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missing_number([3, 0, 1]) return 2
*/

//Yechim:

// const missing_number = (nums: number[]): number => {
//     const n = nums.length;
//     const jami = ( n * (n + 1)) / 2;
//     const asl = nums.reduce((sum, num) => sum + num, 0);
//     return jami - asl;
// }; 

// console.log( missing_number([3, 0, 1]));


/* 
R-TASK

Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
MASALAN: calculate("1+3") return 4;
*/

//yechim: 

// const calculate = (expression: string): number => {
//   const [a, b] = expression.split("+");
//   return Number(a) + Number(b);
// };

// console.log(calculate("1+3"));


/* 
TASK Q:
Shunday function yozing, u 2 ta parametrga ega bo'lib
birinchisi object, ikkinchisi string bo'lsin.
Agar qabul qilinayotgan ikkinchi string, objectning
biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.
MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda.

*/

//Yechim:

// function hasProperty(obj: object, key: string): boolean {
//     return key in obj;
// }

// const result = hasProperty({ name: "BMW", model:"M3" }, "model");
// console.log("natija:", result);




/*  Project standarts:
    -Logging standarts
    -Naming standarts
        function, method, variable => CAMEL  
        class => PASCAL                     
        folder, file => KEBAB
        css => SNAKE         
    -ERROR handling                 

*/

/*  Request:

    Traditional API
    Rest API
    GraphQL API
    .....
*/

/* Frontend Development

    Traditional FD   => SSR  => EJS
    Modern FD        => SPA  => REACT
*/

/* Cookies:

    request join
    selfdestroy
*/

/* Validation:

    Frontend validation
    Backend validation
    Database validation

*/