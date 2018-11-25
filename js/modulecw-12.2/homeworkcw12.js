'use strict';
/*const calcGrades = (function () {
    // Переменные и методы внутри будут приватными
    const grades = [80, 45, 75, 64, 53, 82];

    const calcAverage = () => {
        const total = grades.reduce((acc, grade) => acc + grade, 0);

        return `Average grade is ${Math.round(total / grades.length)}.`;
    };

    const failingGrades = ()=> {
        const failingGrades = grades.filter(item => item < 70);

        return 'You failed ' + failingGrades.length + ' times.';
    }

    // явно укажем что мы хотим открыть и под какими именами
    return {
        average: calcAverage,
    };
})();

console.log(calcGrades);*/

/*
const Module = (function() {
const arg = [4, 5, 6, 7, 8];

const calcSum = () => {
    const sum = arg.reduce((acc, args) => acc + args, 0);
return sum;
};

const calcDif = () => {
    const dif = arg.reduce((acc, args) => acc - args, 0);
    return dif;
};

const calcDob = () => {
    const dob = arg.reduce((acc, args) => acc * args, 0);
    return dob;
};

return {
   rizn: calcDif,
   res: calcDob,
    summa: calcSum,
}



})();

console.log( Module);*/


/*
const globalVar = {};

(function (gv) {
    // Приватная функция, доступная только внутри замыкания
    const privateFn = () => console.log("Shhhh, this is private!");

    const movieFetch =() => {
         return fetch(url)
        .then(response => response.json())
        .then(data => data.sort())
    }

    // Откроем методы через интерфейс globalVariable,
    // закрыв имплементацию внутри замыкания
    gv.books = () => {
        privateFn();
        console.log("Hello, I am a global variable");
    };

    gv.music = ['sdfsd','sfsdfsdf0', 'sfsdfsdf'],

    gv.movies = () => {
        movieFetch()
    }
})(globalVar);
console.log('global',globalVar);
console.log(globalVar.music);*/

const convert = {};
(function(cv) {
    let metr;
    const getSm = (metr) => {
        let sm = metr / 100;
    };

    const getDm = (metr) => {
        let dm = metr / 10;
    };

    const getKm = (metr) => {
        let km = (metr / 1000) * 100;
    }

    cv.santi = () => {
    
    }
} )();