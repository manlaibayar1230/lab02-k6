import http from 'k6/http';
import { check, sleep } from 'k6';

// Алхам 4: SLO-г threshold болгон шалгах (зориуд хатуу — FAIL хувилбар)
// Зориуд бодит бус хатуу босго тавьж, threshold унахыг харуулна
export const options = {
  vus: 30,
  duration: '1m',
  thresholds: {
    http_req_duration: ['p(95)<50'],
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
