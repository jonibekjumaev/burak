
/* 
R-TASK

Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
MASALAN: calculate("1+3") return 4;
*/

//yechim: 

const calculate = (expression: string): number => {
  const [a, b] = expression.split("+");
  return Number(a) + Number(b);
};

console.log(calculate("1+3"));







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

/* 
    Traditional API
    Rest API
    GraphQL API
    .....
*/

/*
    Traditional FD   => SSR  => EJS
    Modern FD        => SPA  => REACT
*/

/*
    request join
    selfdestroy
*/