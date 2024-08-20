function randomNumber(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min)
}

function promise1(message, time) {
    return new Promise((resolve, reject) => {
        if(typeof message !== 'string') return reject(new Error('Tá errado mano'))
    setTimeout(() => {
            resolve(message)
        }, time)
    })
    };

promise1('Kaiju no 8', randomNumber(1, 5))
.then(message => {
        console.log(message)
        return promise1('Solo Levelling', randomNumber(1, 5))
    })
    .then(message =>{
        console.log(message)
        return promise1('Attack On Titan', randomNumber(1, 5))
    })
    .then(message =>{
        console.log(message)
        return promise1(1 , randomNumber(1, 5))
    })
    .catch((e) => console.log(e))
