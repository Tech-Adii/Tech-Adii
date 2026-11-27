# Dispatch Lab

An interactive single-core CPU scheduling simulator by Adithya R Kulkarni. Edit up to 16 processes, replay execution one tick at a time, inspect the ready queue, compare six scheduling policies and export results as CSV.

## Run locally

From this directory run `python -m http.server 8000 --directory public`, then open http://localhost:8000. Run the scheduling checks with `node --test scheduler.test.mjs`. The app runs in the browser without accounts, dependencies, or API keys.

## Scheduling model

FCFS, non-preemptive SJF, SRTF, non-preemptive priority, preemptive priority and Round Robin. Each process has a single integer CPU burst and zero context-switch cost. Smaller priority numbers win. Ties use arrival then input order. Round Robin enqueues arrivals at a quantum boundary before requeueing the outgoing process. Utilization includes initial and intermediate idle ticks.

## Files

- `public/engine.mjs` implements scheduling separately from rendering.
- `public/app.mjs` renders the timeline, playback, per-process metrics and comparisons.
- `scheduler.test.mjs` checks reference workloads, ties, queue boundaries, idle intervals, input validation, and scheduling invariants.

Deploy as a static Vercel project with output directory `public`.
