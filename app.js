
const $=s=>document.querySelector(s);
// gear generator: teeth, hole r, body r, outer r
document.querySelectorAll('[data-gear]').forEach(s=>{const[n,h,r,R]=s.dataset.gear.split(',').map(Number),st=6.2832/n;let d='';
 for(let i=0;i<n;i++){const a=i*st;[[r,0],[R-2,.12],[R-2,.42],[r,.55]].forEach(([q,o],j)=>{const t=a+o*st;d+=(i+j?'L':'M')+(Math.cos(t)*q).toFixed(1)+' '+(Math.sin(t)*q).toFixed(1)})}
 const hr=h/2.2;s.innerHTML=`<path fill-rule="evenodd" d="${d}Z M${hr} 0A${hr} ${hr} 0 1 0 ${-hr} 0A${hr} ${hr} 0 1 0 ${hr} 0Z"/>`});
// gauge ticks
document.querySelectorAll('[data-t]').forEach(g=>{let h='';for(let i=0;i<=10;i++){const a=(-120+i*24)*Math.PI/180,x1=100+Math.sin(a)*72,y1=100-Math.cos(a)*72,x2=100+Math.sin(a)*(i%5?64:58),y2=100-Math.cos(a)*(i%5?64:58);h+=`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#e9dcc0" stroke-width="2"/>`}g.innerHTML=h});
// nav
const L=$('#lk');$('#bg').onclick=()=>L.classList.toggle('open');L.querySelectorAll('a').forEach(a=>a.onclick=()=>L.classList.remove('open'));
const tk=$('#tk');if(tk)tk.innerHTML+=tk.innerHTML;$('#y').textContent=new Date().getFullYear();
// reveal + gauges
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;t.classList.add('in');
 if(t.dataset.v){const nd=t.querySelector('.nd'),v=+t.dataset.v;setTimeout(()=>nd.style.transform=`rotate(${-120+v*2.4}deg)`,150);
  const el=t.querySelector('strong'),to=+t.dataset.n;let s0=null;const f=ts=>{s0=s0||ts;const p=Math.min((ts-s0)/2000,1);el.textContent=Math.round(to*(1-Math.pow(1-p,3)))+t.dataset.s;p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)}
 io.unobserve(t)}),{threshold:.2});document.querySelectorAll('.rv').forEach(e=>io.observe(e));
// terminal typing
const lines=['<span class="dim">aether-engine v1.0 // booting…</span>','<span class="u">visitor@den:~$</span> how will AI shape tomorrow?','<span class="dim">consulting the gears…</span>','Responsibly. With curiosity, with ethics,','and with people at the center of every machine.','<span class="u">visitor@den:~$</span> <span class="cur"></span>'];
const sc=$('#scr');let li=0,started=false;
const run=()=>{if(started)return;started=true;(function nx(){if(li>=lines.length){setTimeout(()=>{sc.innerHTML='';li=0;started=false;run()},6000);return}sc.innerHTML+=lines[li++]+'<br>';setTimeout(nx,900)})()};
sc&&new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){run()}},{threshold:.4}).observe(sc);
// forms/cookie
if($('#f'))$('#f').onsubmit=e=>{e.preventDefault();$('#ok').textContent='✉ Telegram dispatched! Welcome to the Guild.';e.target.reset()};
try{localStorage.getItem('ck')&&$('#ck').classList.add('hide')}catch(_){}
$('#ac').onclick=()=>{$('#ck').classList.add('hide');try{localStorage.setItem('ck','1')}catch(_){}};

const pb=$('#pb');if(pb)addEventListener('scroll',()=>{const d=document.documentElement;pb.style.width=(d.scrollTop/(d.scrollHeight-d.clientHeight)*100)+'%'});
