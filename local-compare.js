import http from 'k6/http';
import { check, sleep } from 'k6';

// Алхам 5: Локал серверийн normal ба slow endpoint-ыг харьцуулах
// Ажиллуулах: k6 run -e ENDPOINT=/ local-compare.js   эсвэл   -e ENDPOINT=/slow
const BASE = __ENV.BASE_URL || 'http://127.0.0.1:3000';
const ENDPOINT = __ENV.ENDPOINT || '/';

export const options = {
  vus: 30,
  duration: '1m',
};

export default function () {
  const res = http.get(`${BASE}${ENDPOINT}`);
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
