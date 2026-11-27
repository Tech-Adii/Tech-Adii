import test from 'node:test';
import assert from 'node:assert/strict';
import {simulate, policies} from './public/engine.mjs';
const jobs=[[0,5,3],[1,2,1],[2,1,2]].map(([arrival,burst,priority])=>({arrival,burst,priority}));
for(const [id,trace] of Object.entries({FCFS:'00000112',SJF:'00000211',SRTF:'01120000',PRI:'00000112',PPRI:'01120000',RR:'00112000'})){
  test(id+' matches hand trace',()=>assert.equal(simulate(jobs,id,2).ticks.map(t=>t.id).join(''),trace));
}
test('idle, response, wait and turnaround',()=>{const r=simulate([{arrival:2,burst:3,priority:1},{arrival:8,burst:1,priority:1}],'FCFS');assert.equal(r.total,9);assert.equal(r.wait,0);assert.equal(r.response,0);assert.equal(r.turnaround,2);assert.equal(r.utilization,400/9);assert.deepEqual(r.segments.map(s=>s.id),[null,0,null,1]);});
test('RR queue on boundary includes new arrivals before requeue',()=>assert.deepEqual(simulate(jobs,'RR',2).ticks[2],{id:1,ready:[2,0]}));
test('equal arrivals and ranks use row order',()=>{for(const p of Object.keys(policies)){const r=simulate([jobs[0],jobs[0]],p,1);assert.equal(r.ticks[0].id,0);}});
test('invalid values rejected',()=>{for(const x of [0,-1,1.5,NaN,61])assert.throws(()=>simulate([{...jobs[0],burst:x}],'RR'));assert.throws(()=>simulate([],'FCFS'));assert.throws(()=>simulate(jobs,'RR',0));});
test('generated workloads conserve all CPU work and respect arrivals',()=>{for(let n=1;n<=48;n++){const workload=Array.from({length:1+n%8},(_,i)=>({arrival:(i*7+n)%11,burst:1+(n*3+i*5)%13,priority:1+(n+i)%4}));for(const p of Object.keys(policies)){const r=simulate(workload,p,1+n%5);for(const job of r.rows){const ticks=r.ticks.flatMap((s,t)=>s.id===job.id?[t]:[]);assert.equal(ticks.length,job.burst);assert.ok(ticks[0]>=job.arrival);assert.equal(ticks.at(-1)+1,job.finish);assert.ok(job.wait>=job.response&&job.response>=0);}assert.equal(r.segments.reduce((sum,s)=>sum+s.end-s.start,0),r.total);}}});
