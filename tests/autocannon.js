'use strict'

import autocannon from 'autocannon';
const amount = 2e4;
const opts = {
    url: 'http://127.0.0.1:3000/users',
    connections: 1e3, //default
    // pipelining: 10, // default
    // duration: 10, // default
    amount: amount,
    method: 'PATCH',
    body: JSON.stringify({
        userId: 2,
        amount: 2
    }),
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 25
};

autocannon(opts, console.log)

// async/await
/*async function foo () {
    const result = await autocannon({
        url: 'http://localhost:3000',
        connections: 10, //default
        pipelining: 1, // default
        duration: 10 // default
    })
    console.log(result)
}*/
