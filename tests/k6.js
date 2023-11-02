import http from 'k6/http';
import { sleep } from 'k6';

const attempt = 300;
export let options = {
   /* stages: [
        { duration: '5s', target: 10000},
    ],*/
    vus: attempt,
    iterations: attempt,
};

export default function () {
    const url = 'http://127.0.0.1:3000/users';
    const payload = JSON.stringify({
        userId: 2,
        amount: 2
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    http.patch(url, payload, params);
    // http.get('http://localhost:3000/users');
    sleep(1);
}
