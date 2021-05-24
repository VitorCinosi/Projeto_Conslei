/* eslint-disable prettier/prettier */

const BASE_API = '';

export default {
    checktoken:async (token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({token}),

        });
        const json = await req.json();
        return json;




    },
    signIn:async (email, password) => {
        const req = await fetch(`${BASE_API}/auth/login`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),

        });
        const json = await req.json();
        return json;


    },
    signUp:async (name, email, password) => {
        const req = await fetch(`${BASE_API}/user`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email, password}),

        });
        const json = await req.json();
        return json;



    },
    signUpH:async (name, endereco, cnpj, leitoInt, leitoCard, leitoNeo, leitoPed, email, password) => {
        const req = await fetch(`${BASE_API}/user`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, endereco, cnpj, leitoInt, leitoCard, leitoNeo, leitoPed, email, password}),

        });
        const json = await req.json();
        return json;




    },

    // getLeitos:async () => {
    //     const req = await fetch(`${BASE_API}/leitos:token=${token}`);
    // },

};
