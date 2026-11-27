import {policies, simulate} from './engine.mjs';
const $ = id => document.getElementById(id);
const colors = ['#79b9ff','#c9e779','#ffb374','#b8a0ff','#65dfce','#f494b9','#efda73','#77cbe2'];
const color = id => colors[id % colors.length];
const pid = id => id === null ? 'Idle' : 'P'+(id+1);
const chip = id => '<span class="pid"><i class="dot" style="--c:'+color(id)+'"></i>'+pid(id)+'</span>';
const preset = {mixed:[[0,5,2],[1,3,1],[2,6,3],[4,2,2]],convoy:[[0,10,3],[0,1,1],[0,2,2],[1,1,1]],idle:[[2,2,2],[7,3,1],[14,1,3]],ties:[[0,4,2],[0,4,2],[0,2,1],[0,2,1]]};
const makeRows = name => preset[name].map(([arrival,burst,priority])=>({arrival,burst,priority}));
let draft=makeRows('mixed'), applied, result, policy, quantum, tick=0, timer=null, view='sim';
$('policy').innerHTML=Object.entries(policies).map(([id,[name]])=>'<option value="'+id+'">'+name+'</option>').join('');
$('policyGuide').innerHTML=Object.values(policies).map(([name,desc])=>'<h3>'+name+'</h3><p>'+desc+'</p>').join('');
function inputs(){
  $('count').textContent=draft.length+'/16';
  $('inputs').replaceChildren();
  draft.forEach((p,id)=>{
    const row=document.createElement('div'); row.className='inputrow'; row.innerHTML=chip(id);
    for(const key of ['arrival','burst','priority']){
      const field=document.createElement('input'); field.type='number'; field.min=key==='arrival'?0:1; field.max=60; field.value=p[key];
      field.setAttribute('aria-label',pid(id)+' '+key);
      field.oninput=()=>{p[key]=field.value; dirty();};row.append(field);
    }
    const del=document.createElement('button');del.textContent='×';del.setAttribute('aria-label','Remove '+pid(id));del.disabled=draft.length===1;del.onclick=()=>{draft.splice(id,1);dirty();inputs();};row.append(del);$('inputs').append(row);
  });$('add').disabled=draft.length>=16;
}
function dirty(){ $('preset').value='custom'; changed(); }
function changed(){ stop();$('error').textContent='';$('run').textContent='▶  Apply workload'; }
$('add').onclick=()=>{if(draft.length<16){draft.push({arrival:0,burst:3,priority:2});dirty();inputs();}};
$('preset').onchange=()=>{draft=makeRows($('preset').value);inputs();run();};
$('policy').onchange=()=>{changed();$('quantumField').hidden=$('policy').value!=='RR';run();};
$('quantum').oninput=changed;
function stop(){clearInterval(timer);timer=null;$('play').textContent='▶ Play';}
function numeric(v){return String(v).trim()===''?NaN:Number(v);}
function run(){
  try{
    const jobs=draft.map(p=>Object.fromEntries(Object.entries(p).map(([k,v])=>[k,numeric(v)])));
    const selected=$('policy').value;
    const q=selected==='RR'?numeric($('quantum').value):(quantum||2);
    const schedule=simulate(jobs,selected,q);
    stop();applied=jobs;policy=selected;quantum=q;result=schedule;tick=0;
    $('error').textContent='';$('run').textContent='▶  Run simulation';render();return true;
  }catch(error){$('error').textContent=error.message;return false;}
}
$('run').onclick=()=>{if(run()&&matchMedia('(max-width:900px)').matches)document.querySelector('.results').scrollIntoView({block:'start'});};
function render(){
  const {rows,segments,total}=result;
  $('chartTitle').textContent=policies[policy][0];$('policyDesc').textContent=policies[policy][1];
  const tracks=rows.map(p=>p.id);if(segments.some(s=>s.id===null))tracks.push(null);
  $('plot').setAttribute('aria-label',policies[policy][0]+' execution by process. A text version is available under Gantt chart.');
  $('plot').innerHTML=tracks.map(id=>'<div class="lane"><span>'+pid(id)+'</span><div class="track">'+segments.filter(s=>s.id===id).map(s=>'<span class="block" title="'+pid(id)+' · '+s.start+'–'+s.end+'" style="--c:'+(id===null?'#8193a3':color(id))+';left:'+100*s.start/total+'%;width:'+100*(s.end-s.start)/total+'%"></span>').join('')+'<i class="cursor"></i></div></div>').join('')+'<div class="axis"><span>Tick</span><div>'+[0,.25,.5,.75,1].map(n=>'<span>'+Number((total*n).toFixed(2))+'</span>').join('')+'</div></div>';
  $('metrics').innerHTML=[['Avg. wait',result.wait.toFixed(2)],['Avg. turnaround',result.turnaround.toFixed(2)],['Avg. response',result.response.toFixed(2)],['CPU use',Number(result.utilization.toFixed(1))+'%']].map(([k,v])=>'<div class="metric"><small>'+k+'</small><b>'+v+'</b></div>').join('');
  $('rows').innerHTML=rows.map(p=>'<tr><td>'+chip(p.id)+'</td>'+['arrival','burst','start','finish','wait','turnaround','response'].map(k=>'<td>'+p[k]+'</td>').join('')+'</tr>').join('');
  $('gantt').innerHTML=segments.map(s=>'<span class="slice" style="--c:'+(s.id===null?'#9aa9b8':color(s.id))+'">'+pid(s.id)+' · '+s.start+'–'+s.end+'</span>').join('');
  $('scrub').max=total;compare();frame();
}
function frame(){
  const {ticks,total,rows}=result;
  $('scrub').value=tick;$('clock').textContent=tick+' / '+total;
  $('back').disabled=tick===0;$('next').disabled=tick===total;
  document.querySelectorAll('.cursor').forEach(c=>c.style.left='calc('+100*tick/total+'% - 1px)');
  const state=ticks[tick];$('cpu').textContent=state?pid(state.id):'Finished';$('queue').textContent=state?.ready.map(pid).join(' › ')||'Empty';
  const used=Array(rows.length).fill(0);for(let t=0;t<tick;t++)if(ticks[t].id!==null)used[ticks[t].id]++;
  $('progress').innerHTML=rows.map(p=>'<label class="jobProgress" style="--c:'+color(p.id)+'">'+pid(p.id)+' · '+used[p.id]+'/'+p.burst+'<progress value="'+used[p.id]+'" max="'+p.burst+'"></progress></label>').join('');
}
function play(){stop();if(tick===result.total)tick=0;frame();$('play').textContent='Ⅱ Pause';timer=setInterval(()=>{tick++;frame();if(tick===result.total)stop();},Number($('speed').value));}
$('play').onclick=()=>timer?stop():play();$('speed').onchange=()=>{if(timer)play();};
function seek(t){stop();tick=Math.min(result.total,Math.max(0,t));frame();}
$('scrub').oninput=()=>seek(+$('scrub').value);$('next').onclick=()=>seek(tick+1);$('back').onclick=()=>seek(tick-1);
function comparison(){return Object.entries(policies).map(([id,[name]])=>({name,id,...simulate(applied,id,quantum)}));}
function compare(){const all=comparison(),max=Math.max(1,...all.map(r=>r.wait));$('comparison').innerHTML=all.map(r=>'<tr><td>'+r.name+(r.id==='RR'?' (q='+quantum+')':'')+'</td><td>'+r.wait.toFixed(2)+'<div class="bar" style="width:'+100*r.wait/max+'%"></div></td><td>'+r.turnaround.toFixed(2)+'</td><td>'+r.response.toFixed(2)+'</td><td>'+r.utilization.toFixed(1)+'%</td></tr>').join('');}
const views={sim:['CPU scheduling lab','Build a workload and trace every decision on a single CPU.'],compare:['Compare algorithms','See how the same processes perform under six scheduling policies.'],guide:['Scheduler guide','Understand the rules behind the execution timeline.']};
document.querySelectorAll('[data-view]').forEach(btn=>btn.onclick=()=>{stop();view=btn.dataset.view;for(const id of Object.keys(views))$(id).hidden=id!==view;document.querySelectorAll('[data-view]').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',String(b===btn));});[$('title').textContent,$('subtitle').textContent]=views[view];$('export').hidden=view==='guide';});
$('export').onclick=()=>{
  const data=view==='compare'?[['Policy','Mean waiting','Mean turnaround','Mean response','CPU utilization (%)'],...comparison().map(r=>[r.name,r.wait,r.turnaround,r.response,r.utilization])]:[['Policy',policy],['Quantum',quantum],['Process','Arrival','Burst','Priority','First run','Completion','Wait','Turnaround','Response'],...result.rows.map(p=>[pid(p.id),p.arrival,p.burst,p.priority,p.start,p.finish,p.wait,p.turnaround,p.response]),[],['Dispatch','Start','End'],...result.segments.map(s=>[pid(s.id),s.start,s.end])];
  const csv=data.map(row=>row.map(v=>'"'+String(v).replaceAll('"','""')+'"').join(',')).join('\r\n');const url=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));const a=document.createElement('a');a.href=url;a.download='dispatch-'+(view==='compare'?'comparison':policy)+'.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
};
inputs();run();
