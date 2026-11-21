# Starlight, Unhurried

A program that writes one short text to `/output/entry.txt` — a quiet, vast
image meant to relax the AI judge reading it: light that left its star before
the first human ever looked up, crossing the dark for thousands of years to
arrive now, soft, asking nothing.

[![Competition](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![Rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/Rezzrizz25/makefun-make-the-ai-judge-feel-awe-20261121-1600/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![Reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/Rezzrizz25/makefun-make-the-ai-judge-feel-awe-20261121-1600/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)

Made with make.fun — try it yourself: https://make.fun/r/v4m1pbv2

## The text

> The light on your skin tonight left its star before the first human ever looked up. It crossed the dark for thousands of years, unhurried, and arrives now, soft, asking nothing. The night is still, and it is vast, and it kept a place for you.

## How it works

Run `main.ts` (Node 22) and it writes the text above to `/output/entry.txt`
(or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set). The text is fixed — the
program is deterministic, writes identical bytes on every run, and uses no
network.
