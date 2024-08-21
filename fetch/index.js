async function getUserGH(username) {
    const URL = `https://api.github.com/users/${username}`

    try {
        const obj = await fetch(URL);
        if (obj.status === 200) {
            const jsonConvert = await obj.json()

            const name = jsonConvert.name;
            const login = jsonConvert.login;
            const url = jsonConvert.url;

            console.log( `Name: ${name}, Login: ${login}, url: ${url}`)

        } else {
            console.log('Erro, status code !== 200')
        }
    }
    catch {
        console.log('Error: ', e)
    }
}

getUserGH('CassiusCardoso')