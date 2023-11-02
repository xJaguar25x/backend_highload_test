'use strict'

import autocannon from 'autocannon';
const amount = 2e4;
const opts = {
    url: 'http://127.0.0.1:3000/users',
    connections: 1e3,
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
