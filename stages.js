import http from 'k6/http';
import { check, sleep } from 'k6';

// Алхам 3 (нэмэлт): ачааллыг үе шаттайгаар өсгөж, буулгах
export const options = {
  stages: [
    { duration: '30s', target: 5 },
    { duration: '1m', target: 30 },
    { duration: '30s', target: 100 },
    { duration: '30s', target: 0 },
  ],
};

export default function () {
  const res = http.get('https://test.k6.io');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
