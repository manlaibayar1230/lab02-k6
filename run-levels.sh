#!/usr/bin/env bash
# 5, 30, 100 VU-ийн тестийг дараалан ажиллуулж, үр дүнг results/ руу UTF-8 хэлбэрээр хадгална
set -e
STATS="avg,min,med,max,p(90),p(95),p(99)"
for v in 5 30 100; do
  f=$(printf "results/run-%02dvu.txt" "$v")
  k6 run --summary-trend-stats "$STATS" -e VUS=$v load-levels.js 2>&1 | tee "$f"
done
