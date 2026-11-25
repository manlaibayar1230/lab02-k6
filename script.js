import http from 'k6/http';
import { check, sleep } from 'k6';

// Алхам 2: Суурь (baseline) тест — 5 VU, 30 секунд
export const options = {
  vus: 5,
  duration: '30s',
};

export default function () {
  const res = http.get('https://test.k6.io');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
