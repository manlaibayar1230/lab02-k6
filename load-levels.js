import http from 'k6/http';
import { check, sleep } from 'k6';

// Алхам 3: Ачааллын түвшин бүрийг тусад нь ажиллуулна (5, 30, 100 VU, 1 минут)
// Ажиллуулах: k6 run -e VUS=30 load-levels.js
export const options = {
  vus: Number(__ENV.VUS || 5),
  duration: '1m',
};

export default function () {
  const res = http.get('https://test.k6.io');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
