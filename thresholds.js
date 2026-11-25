import http from 'k6/http';
import { check, sleep } from 'k6';

// Алхам 4: SLO-г threshold болгон шалгах (PASS хувилбар)
// Суурь (baseline, 5 VU) p95 = 313.44ms  ->  SLO: p95 < 313.44 * 1.5 ≈ 470ms
export const options = {
  vus: 30,
  duration: '1m',
  thresholds: {
    http_req_duration: ['p(95)<470'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const res = http.get(__ENV.BASE_URL || 'https://test.k6.io');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
