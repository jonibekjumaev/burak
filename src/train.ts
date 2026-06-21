

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

const sumOdds = (num: number): number => {
    let count = 0;
    for (let i = 0; i < num; i++) {
        if (i % 2 !== 0) {
            count++
        }
    }
    return count;
};


console.log(sumOdds(9));
console.log(sumOdds(11));









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