function randonNumber(min, max) {
    min *= 1000; //Como o setTimetOut funciona em ms, está ocorrendo a multiplicação para converter o valor para segundos
    max *= 1000; //Como o setTimetOut funciona em ms, está ocorrendo a multiplicação para converter o valor para segundos

    return Math.floor(Math.random() * (max - min) + min)
}

function examplePromise(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Not a string')
        }
        setTimeout(() => {
            resolve(msg)
        }, time)
    });
}

const promises = ['Promise teste 1',
    examplePromise('Solo Levelling', 1000),
    examplePromise('Kaiju no 8', 1200),
    examplePromise('Attack On Titan', 2000),
    'Promise teste 2'
]

Promise.all(promises)
.then(function(valor){
    console.log(valor)
})
.catch(function(error){
    console.log(error)
})


