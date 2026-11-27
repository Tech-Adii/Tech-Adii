export const policies = {
  RR: ['Round Robin', 'Each process gets one time slice. Unfinished work returns to the back of the ready queue.'],
  FCFS: ['First Come, First Served', 'The earliest arrival runs to completion. Later arrivals wait their turn.'],
  SJF: ['Shortest Job First', 'When the CPU is free, the ready process with the shortest burst runs to completion.'],
  SRTF: ['Shortest Remaining Time', 'At each tick, the ready process with the least work remaining gets the CPU.'],
  PRI: ['Priority', 'The ready process with the lowest priority number runs to completion.'],
  PPRI: ['Preemptive Priority', 'A newly arrived process with a lower priority number can interrupt the running process.']
};

export function simulate(input, policy, quantum = 2) {
  if (!Object.hasOwn(policies, policy)) throw Error('Choose a scheduling policy.');
  if (!Array.isArray(input) || input.length < 1 || input.length > 16) throw Error('Use 1 to 16 processes.');
  if (!Number.isInteger(quantum) || quantum < 1 || quantum > 60) throw Error('Time slice must be an integer from 1 to 60.');
  const jobs = input.map(({arrival, burst, priority}, id) => {
    for (const [value, min, label] of [[arrival, 0, 'Arrival'], [burst, 1, 'Burst'], [priority, 1, 'Priority']]) {
      if (!Number.isInteger(value) || value < min || value > 60) throw Error('P' + (id+1) + ' · ' + label + ' must be an integer from ' + min + ' to 60.');
    }
    return {id, arrival, burst, priority, left: burst, start: null, finish: null};
  });
  const ticks = [], segments = [], queue = [];
  let active = null, used = 0, pending = null, completed = 0;
  const rank = j => policy === 'SJF' ? j.burst : policy === 'SRTF' ? j.left : ['PRI','PPRI'].includes(policy) ? j.priority : j.arrival;
  while (completed < jobs.length) {
    const t = ticks.length;
    queue.push(...jobs.filter(j => j.arrival === t));
    if (pending) { queue.push(pending); pending = null; }
    const preemptive = policy === 'SRTF' || policy === 'PPRI';
    if (preemptive && active) { queue.push(active); active = null; }
    if (policy !== 'RR') queue.sort((a,b) => rank(a)-rank(b) || a.arrival-b.arrival || a.id-b.id);
    const dispatch = !active;
    if (dispatch) active = queue.shift() || null;
    const id = active?.id ?? null;
    ticks.push({id, ready: queue.map(j => j.id)});
    const last = segments.at(-1);
    if (!last || last.id !== id || (policy === 'RR' && dispatch && active)) segments.push({id, start:t, end:t+1});
    else last.end++;
    if (!active) continue;
    if (active.start === null) active.start = t;
    active.left--; used++;
    if (!active.left) {active.finish = t+1; completed++; active = null; used = 0;}
    else if (policy === 'RR' && used === quantum) {pending = active; active = null; used = 0;}
  }
  const rows = jobs.map(j => ({...j, turnaround:j.finish-j.arrival, wait:j.finish-j.arrival-j.burst, response:j.start-j.arrival}));
  const avg = key => rows.reduce((s,j) => s+j[key],0)/rows.length;
  return {rows, ticks, segments, total:ticks.length, wait:avg('wait'), response:avg('response'), turnaround:avg('turnaround'), utilization:100*jobs.reduce((s,j)=>s+j.burst,0)/ticks.length};
}
