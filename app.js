'use strict';

const OFFICIAL = {
  home: 'https://bpsc.bihar.gov.in/',
  syllabus: 'https://bpsc.bihar.gov.in/syllabus/',
  papers: 'https://bpsc.bihar.gov.in/question-booklets/',
  faq: 'https://bpsc.bihar.gov.in/faqs/'
};
const SOURCES = {
  paper70: 'https://prepp.in/paper/bpsc-70th-prelims-question-paper-13-dec-2024-6a8fed03506284f9fc742b92',
  modernHistory: 'https://www.unlockias.in/bpsc-previous-year-questions/topic-wise/modern-history'
};

const syllabusData = [
  {id:'science',name:'General Science',icon:'⚗',color:'tint-teal',desc:'Everyday science, basic concepts and applications.',items:[
    ['Physics in daily life','Motion, force, heat, light, sound, electricity and magnetism.'],
    ['Chemistry fundamentals','Elements, compounds, acids and bases, metals, everyday chemistry.'],
    ['Biology & human health','Cells, body systems, nutrition, diseases, immunity and hygiene.'],
    ['Environment & ecology','Ecosystems, biodiversity, pollution, climate and conservation.']
  ]},
  {id:'current',name:'Current Events',icon:'◷',color:'tint-orange',desc:'National and international events of importance.',items:[
    ['National affairs','Government schemes, institutions, reports, awards and major decisions.'],
    ['International affairs','Summits, organisations, treaties and important global developments.'],
    ['Sports, books & awards','Major events, appointments, awards and cultural developments.'],
    ['Current affairs revision','Maintain weekly notes and revise them through short quizzes.']
  ]},
  {id:'history',name:'History of India & Bihar',icon:'⌛',color:'tint-purple',desc:'Broad social, economic and political history.',items:[
    ['Ancient India','Indus Valley, Vedic period, Mahajanapadas, Mauryas, Guptas and Buddhism.'],
    ['Medieval India','Major dynasties, administration, society, art and culture.'],
    ['Modern India','Company rule, reform movements, 1857, nationalism and independence.'],
    ['History of Bihar','Magadha, Mauryan legacy, Nalanda, regional powers and modern Bihar.']
  ]},
  {id:'geography',name:'Geography: India & Bihar',icon:'⌖',color:'tint-blue',desc:'Physical, social and economic geography.',items:[
    ['Physical geography','Relief, climate, soils, drainage, vegetation and natural hazards.'],
    ['Indian geography','Rivers, agriculture, minerals, industries, population and resources.'],
    ['Bihar geography','Physiographic regions, rivers, flood-prone areas, soils and climate.'],
    ['Maps & locations','States, national parks, important cities, dams and neighbouring regions.']
  ]},
  {id:'polity',name:'Polity & Economy',icon:'⚖',color:'tint-teal',desc:'Indian political system and Bihar’s post-independence economy.',items:[
    ['Constitution & governance','Preamble, rights, duties, DPSPs, amendments and constitutional bodies.'],
    ['Political institutions','Parliament, President, judiciary, state government and local bodies.'],
    ['Indian economy','GDP, inflation, banking, fiscal policy, planning and public finance.'],
    ['Bihar economy','Agriculture, infrastructure, development indicators and post-independence change.']
  ]},
  {id:'movement',name:'National Movement',icon:'✊',color:'tint-orange',desc:'The freedom struggle and Bihar’s contribution.',items:[
    ['Rise of nationalism','Early political associations, moderates, extremists and Swadeshi.'],
    ['Gandhian movements','Champaran, Non-Cooperation, Civil Disobedience and Quit India.'],
    ['Bihar’s contribution','Local leaders, movements, organisations and key events in Bihar.'],
    ['Timeline revision','Build a timeline of people, organisations, events and outcomes.']
  ]},
  {id:'mental',name:'General Mental Ability',icon:'◈',color:'tint-purple',desc:'Reasoning, numerical patterns and basic quantitative aptitude.',items:[
    ['Number & letter series','Patterns, missing terms, coding-decoding and analogies.'],
    ['Logical reasoning','Statements, conclusions, syllogisms and arrangements.'],
    ['Basic quantitative aptitude','Percentages, ratios, averages, time-work and simple data interpretation.'],
    ['Practice under time','Use short timed sets and note the error type for each miss.']
  ]}
];

// The first six questions are excerpts/adaptations of question statements listed in published
// BPSC-paper archives. Source links are retained per item. The remaining questions are original
// practice items. Do not treat the practice items as authentic PYQs.
const questions = [
 {id:'pyq70-1',type:'PYQ',exam:'70th CCE Prelims · 13 Dec 2024',year:2024,sourceUrl:SOURCES.paper70,topic:'Science',category:'Science',question:'Dalton’s atomic theory successfully explained which of the following laws?\nI. Law of conservation of mass\nII. Law of constant composition\nIII. Law of radioactivity\nIV. Law of multiple proportions',options:['I, II and III','I, II and IV','I, III and IV','II, III and IV'],correct:1,explanation:'Dalton’s atomic theory is consistent with the laws of conservation of mass, definite proportions (constant composition) and multiple proportions. Radioactivity was discovered much later and was not explained by Dalton’s model.',sourceNote:'Question statement excerpt; verify against the original booklet and the applicable answer key.'},
 {id:'pyq70-r1',type:'PYQ',exam:'70th CCE Re-exam · 2025',year:2025,sourceUrl:SOURCES.modernHistory,topic:'History',category:'History',question:'Who led the Champaran Satyagraha in 1917?',options:['Sardar Vallabhbhai Patel','Mahatma Gandhi','Bal Gangadhar Tilak','Subhas Chandra Bose'],correct:1,explanation:'Mahatma Gandhi led the Champaran Satyagraha in Bihar in 1917, campaigning against the indigo plantation system and the exploitation of peasants.',sourceNote:'Question appears in a third-party topic-wise BPSC PYQ archive; check the official booklet for exact wording.'},
 {id:'pyq70-r2',type:'PYQ',exam:'70th CCE Re-exam · 2025',year:2025,sourceUrl:SOURCES.modernHistory,topic:'History',category:'History',question:'Who authored the book “Poverty and Un-British Rule in India”?',options:['Dadabhai Naoroji','Gopal Krishna Gokhale','M. G. Ranade','R. C. Dutt'],correct:0,explanation:'Dadabhai Naoroji developed the drain-of-wealth critique and published Poverty and Un-British Rule in India in 1901.',sourceNote:'Question appears in a third-party topic-wise BPSC PYQ archive; check the official booklet for exact wording.'},
 {id:'pyq70-r3',type:'PYQ',exam:'70th CCE Re-exam · 2025',year:2025,sourceUrl:SOURCES.modernHistory,topic:'History',category:'History',question:'Fort William College at Calcutta was established in which year?',options:['1757','1784','1800','1835'],correct:2,explanation:'Fort William College was established in 1800 by Lord Wellesley to train East India Company civil servants in Indian languages and administration.',sourceNote:'Question appears in a third-party topic-wise BPSC PYQ archive; check the official booklet for exact wording.'},
 {id:'pyq70-r4',type:'PYQ',exam:'70th CCE Re-exam · 2025',year:2025,sourceUrl:SOURCES.modernHistory,topic:'History',category:'History',question:'The revolt led by Birsa Munda was associated primarily with which region?',options:['Malabar','Chotanagpur','Awadh','Konkan'],correct:1,explanation:'Birsa Munda’s movement developed in the Chotanagpur region and opposed colonial policies and exploitation affecting tribal communities.',sourceNote:'Topic and question listed in a third-party BPSC PYQ archive; verify exact wording with the official paper.'},
 {id:'pyq70-r5',type:'PYQ',exam:'70th CCE Re-exam · 2025',year:2025,sourceUrl:SOURCES.modernHistory,topic:'History',category:'Bihar GK',question:'Which portfolio did Dr. Rajendra Prasad hold in the Interim Government formed in 1946?',options:['Home Affairs','External Affairs','Food and Agriculture','Finance'],correct:2,explanation:'Dr. Rajendra Prasad was assigned the Food and Agriculture portfolio in the Interim Government of 1946.',sourceNote:'Question appears in a third-party BPSC PYQ archive; verify with the official booklet and final key.'},
 {id:'prac-bihar-1',type:'Practice',topic:'Bihar GK',category:'Bihar GK',question:'Which river is widely known as the “Sorrow of Bihar” because of its recurring floods?',options:['Son','Kosi','Punpun','Falgu'],correct:1,explanation:'The Kosi has historically shifted its course and caused severe flooding across parts of north Bihar.'},
 {id:'prac-bihar-2',type:'Practice',topic:'Bihar GK',category:'Bihar GK',question:'Dr. Rajendra Prasad, the first President of India, was born in which place in present-day Bihar?',options:['Bodh Gaya','Ziradei','Rajgir','Munger'],correct:1,explanation:'Dr. Rajendra Prasad was born in Ziradei, in present-day Siwan district of Bihar.'},
 {id:'prac-bihar-3',type:'Practice',topic:'Bihar GK',category:'Bihar GK',question:'Vikramashila Mahavihara is traditionally associated with which ruling dynasty?',options:['Chola','Pala','Chalukya','Kushan'],correct:1,explanation:'Vikramashila was established under the Pala ruler Dharmapala and became an important centre of Buddhist learning.'},
 {id:'prac-history-1',type:'Practice',topic:'History',category:'History',question:'The Battle of Buxar was fought in which year?',options:['1757','1761','1764','1773'],correct:2,explanation:'The Battle of Buxar was fought in 1764 between the East India Company and the alliance of Mir Qasim, Shuja-ud-Daula and Shah Alam II.'},
 {id:'prac-polity-1',type:'Practice',topic:'Polity',category:'Polity',question:'Which Constitutional Amendment Act added Fundamental Duties to the Constitution of India?',options:['24th Amendment','42nd Amendment','44th Amendment','52nd Amendment'],correct:1,explanation:'The 42nd Constitutional Amendment Act, 1976 added Fundamental Duties, now listed in Article 51A.'},
 {id:'prac-polity-2',type:'Practice',topic:'Polity',category:'Polity',question:'Which Article of the Constitution is known for the Right to Constitutional Remedies?',options:['Article 14','Article 19','Article 21','Article 32'],correct:3,explanation:'Article 32 empowers people to move the Supreme Court for enforcement of Fundamental Rights.'},
 {id:'prac-polity-3',type:'Practice',topic:'Polity',category:'Polity',question:'Which of the following is a permanent House of the Indian Parliament?',options:['Lok Sabha','Rajya Sabha','Both Houses are dissolved together','Neither House'],correct:1,explanation:'Rajya Sabha is a permanent House; one-third of its members retire every two years.'},
 {id:'prac-geo-1',type:'Practice',topic:'Geography',category:'Geography',question:'The Standard Meridian of India is approximately:',options:['68°7′ E','75° E','82°30′ E','90° E'],correct:2,explanation:'India’s Standard Meridian is 82°30′ east longitude, used to define Indian Standard Time.'},
 {id:'prac-geo-2',type:'Practice',topic:'Geography',category:'Geography',question:'Which soil type is most closely associated with extensive river-deposited plains in India?',options:['Alluvial soil','Laterite soil','Mountain soil','Desert soil'],correct:0,explanation:'Alluvial soil is deposited by rivers and is widespread across the Indo-Gangetic plains.'},
 {id:'prac-sci-1',type:'Practice',topic:'Science',category:'Science',question:'Deficiency of which vitamin causes scurvy?',options:['Vitamin A','Vitamin B12','Vitamin C','Vitamin D'],correct:2,explanation:'Scurvy results from vitamin C deficiency and can cause bleeding gums, poor wound healing and fatigue.'},
 {id:'prac-sci-2',type:'Practice',topic:'Science',category:'Science',question:'What is the SI unit of electric current?',options:['Volt','Ohm','Watt','Ampere'],correct:3,explanation:'The ampere (A) is the SI base unit of electric current.'},
 {id:'prac-sci-3',type:'Practice',topic:'Science',category:'Science',question:'Which pigment is essential for capturing light energy during photosynthesis?',options:['Haemoglobin','Chlorophyll','Melanin','Keratin'],correct:1,explanation:'Chlorophyll in chloroplasts absorbs light energy used during photosynthesis.'},
 {id:'prac-econ-1',type:'Practice',topic:'Economy',category:'Economy',question:'The Reserve Bank of India began operations in which year?',options:['1920','1935','1947','1950'],correct:1,explanation:'The Reserve Bank of India commenced operations on 1 April 1935.'},
 {id:'prac-econ-2',type:'Practice',topic:'Economy',category:'Economy',question:'Gross Domestic Product (GDP) measures the value of:',options:['All intermediate goods only','Final goods and services produced within an economy during a period','Only government expenditure','Only exports minus imports'],correct:1,explanation:'GDP measures the market value of final goods and services produced within a country during a specified period.'},
 {id:'prac-mental-1',type:'Practice',topic:'Mental Ability',category:'Mental Ability',question:'Find the next number in the series: 2, 6, 12, 20, 30, __',options:['36','40','42','44'],correct:2,explanation:'The sequence follows n × (n + 1): 1×2, 2×3, 3×4, 4×5, 5×6, so the next term is 6×7 = 42.'},
 {id:'prac-mental-2',type:'Practice',topic:'Mental Ability',category:'Mental Ability',question:'If all roses are flowers and some flowers fade quickly, which statement must be true?',options:['All roses fade quickly','Some roses fade quickly','All roses are flowers','No flowers are roses'],correct:2,explanation:'Only “all roses are flowers” follows directly from the premise. The premise does not establish whether roses fade quickly.'},
 {id:'prac-history-2',type:'Practice',topic:'History',category:'History',question:'The Quit India Movement was launched by the Indian National Congress in:',options:['1919','1930','1942','1946'],correct:2,explanation:'The Quit India Movement was launched in August 1942, during the Second World War.'},
 {id:'prac-bihar-4',type:'Practice',topic:'Bihar GK',category:'Bihar GK',question:'The ancient city of Pataliputra was located near the confluence of which rivers?',options:['Ganga and Son','Ganga and Narmada','Kosi and Gandak','Son and Godavari'],correct:0,explanation:'Ancient Pataliputra developed near the confluence of the Ganga and Son river systems, in the region of modern Patna.'},
 {id:'prac-polity-4',type:'Practice',topic:'Polity',category:'Polity',question:'The Constitution of India came into force on:',options:['15 August 1947','26 November 1949','26 January 1950','2 October 1950'],correct:2,explanation:'The Constitution was adopted on 26 November 1949 and came into force on 26 January 1950.'}
];

const store = {
  read(key, fallback) { try { const v = localStorage.getItem('bpscPath.' + key); return v ? JSON.parse(v) : fallback; } catch { return fallback; } },
  write(key, value) { try { localStorage.setItem('bpscPath.' + key, JSON.stringify(value)); } catch { /* storage may be disabled */ } }
};
const state = {
  view: 'overview',
  syllabusDone: store.read('syllabusDone', []),
  saved: store.read('saved', []),
  history: store.read('history', []),
  attempts: store.read('attempts', 0),
  totalAnswered: store.read('totalAnswered', 0),
  totalCorrect: store.read('totalCorrect', 0),
  activeFilter: 'All',
  activeType: 'All',
  search: '',
  testKind: 'mixed',
  test: null,
  timerId: null,
  questionCount: 10,
  minutes: 15,
  expandedSyllabus: new Set(['science']),
  theme: store.read('theme', 'light')
};
const root = document.getElementById('viewRoot');
const toastEl = document.getElementById('toast');
let toastTimer = null;

function esc(value) { return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function shuffle(list) { const arr = [...list]; for (let i=arr.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; } return arr; }
function showToast(message) { toastEl.textContent = message; toastEl.classList.add('show'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>toastEl.classList.remove('show'),2300); }
function syllabusTotal() { return syllabusData.reduce((sum,g)=>sum+g.items.length,0); }
function syllabusPct() { return Math.round(state.syllabusDone.length / syllabusTotal() * 100); }
function qBank(type='All', topic='All', search='') {
  const s = search.toLowerCase().trim();
  return questions.filter(q => (type==='All' || q.type===type) && (topic==='All' || q.category===topic || q.topic===topic) && (!s || `${q.question} ${q.topic} ${q.category} ${q.exam||''}`.toLowerCase().includes(s)));
}
function getAccuracy() { return state.totalAnswered ? Math.round(state.totalCorrect / state.totalAnswered * 100) : 0; }
function updateSidebar() {
  document.getElementById('sideSyllabusCount').textContent = syllabusPct() + '%';
  document.getElementById('savedCount').textContent = state.saved.length;
  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.toggle('active', btn.dataset.view === state.view));
  document.getElementById('pageBreadcrumb').textContent = ({overview:'Overview',syllabus:'Syllabus tracker',pyq:'Previous papers',practice:'Practice questions',mocks:'Mock tests',saved:'Saved & review',progress:'My progress',test:'Test in progress',result:'Test results'})[state.view] || 'Overview';
}
function setView(view) {
  if (state.test && state.view==='test' && view!=='test' && view!=='result') {
    if (!confirm('Your current test is in progress. Leave this test? Your current attempt will not be scored.')) return;
    clearInterval(state.timerId); state.test=null;
  }
  state.view=view; render(); document.getElementById('sidebar').classList.remove('open'); window.scrollTo({top:0,behavior:'smooth'});
}
function startTest({kind='mixed',topic='All',count=10,minutes=15,questionId=null}={}) {
  let pool = questions.filter(q => (kind==='pyq' ? q.type==='PYQ' : true) && (topic==='All' || q.category===topic || q.topic===topic));
  if (questionId) pool = questions.filter(q=>q.id===questionId);
  if (!pool.length) { showToast('No questions found for that selection yet.'); return; }
  const selected = questionId ? pool : shuffle(pool).slice(0, Math.min(count,pool.length));
  state.test = {kind,topic,questions:selected,answers:{},review:[],index:0,seconds:minutes*60,totalSeconds:minutes*60,startedAt:new Date().toISOString(),finished:false};
  clearInterval(state.timerId); state.view='test'; render();
  state.timerId=setInterval(()=>{
    if (!state.test || state.view!=='test') { clearInterval(state.timerId); return; }
    state.test.seconds -= 1;
    const el=document.getElementById('timerDisplay'); const bar=document.getElementById('timerBar');
    if (el) el.textContent=formatTime(state.test.seconds);
    if (bar) bar.style.width=Math.max(0,state.test.seconds/state.test.totalSeconds*100)+'%';
    if (state.test.seconds<=60 && el) el.style.color='#ffbd86';
    if (state.test.seconds<=0) finishTest(true);
  },1000);
}
function formatTime(seconds) { const s=Math.max(0,seconds); return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`; }
function selectAnswer(index) { if (!state.test || state.test.finished) return; const q=state.test.questions[state.test.index]; state.test.answers[q.id]=index; renderTest(); }
function goQuestion(index) { if (!state.test) return; state.test.index=Math.max(0,Math.min(index,state.test.questions.length-1)); renderTest(); }
function toggleReview() { if (!state.test) return; const id=state.test.questions[state.test.index].id; const i=state.test.review.indexOf(id); if(i>=0)state.test.review.splice(i,1); else state.test.review.push(id); renderTest(); }
function toggleSaved(id) { if (state.saved.includes(id)) state.saved=state.saved.filter(x=>x!==id); else state.saved.push(id); store.write('saved',state.saved); updateSidebar(); showToast(state.saved.includes(id)?'Question saved for revision.':'Removed from saved questions.'); if(state.view==='saved')renderSaved(); else if(state.view==='test')renderTest(); else if(state.view==='practice')renderPractice(); else if(state.view==='pyq')renderPYQ(); else if(state.view==='result')renderResult(); }
function finishTest(auto=false) {
  if (!state.test || state.test.finished) return;
  clearInterval(state.timerId); state.test.finished=true;
  const t=state.test; let correct=0,wrong=0,skipped=0,blank=0;
  t.questions.forEach(q=>{ const a=t.answers[q.id]; if(a===undefined) blank++; else if(a===4) skipped++; else if(a===q.correct) correct++; else wrong++; });
  const netScore=Math.round((correct-(wrong+blank)/3)*100)/100;
  const result={id:Date.now(),date:new Date().toISOString(),kind:t.kind,topic:t.topic,total:t.questions.length,correct,wrong,skipped,blank,score:netScore,accuracy:t.questions.length?Math.round(correct/t.questions.length*100):0,duration:Math.round((t.totalSeconds-t.seconds)/60),questions:t.questions.map(q=>({id:q.id,answer:t.answers[q.id]===undefined?null:t.answers[q.id],correct:q.correct}))};
  state.history.unshift(result); state.history=state.history.slice(0,30); state.attempts++; state.totalAnswered += correct+wrong; state.totalCorrect += correct;
  store.write('history',state.history); store.write('attempts',state.attempts); store.write('totalAnswered',state.totalAnswered); store.write('totalCorrect',state.totalCorrect);
  state.view='result'; render(); if(auto)showToast('Time is up — your test was submitted automatically.');
}
function openTestDialog(kind='mixed',topic='All') {
  state.testKind=kind; state.testTopic=topic;
  const dialog=document.getElementById('testDialog');
  document.getElementById('testTopic').value=topic;
  document.querySelectorAll('#questionCountSelect .seg-option').forEach(b=>b.classList.toggle('selected',Number(b.dataset.count)===state.questionCount));
  document.querySelectorAll('#timeSelect .seg-option').forEach(b=>b.classList.toggle('selected',Number(b.dataset.minutes)===state.minutes));
  dialog.showModal();
}
function render() {
  updateSidebar();
  if(state.theme==='dark')document.body.classList.add('dark-mode');else document.body.classList.remove('dark-mode');
  if(state.view==='overview')renderOverview();
  else if(state.view==='syllabus')renderSyllabus();
  else if(state.view==='pyq')renderPYQ();
  else if(state.view==='practice')renderPractice();
  else if(state.view==='mocks')renderMocks();
  else if(state.view==='saved')renderSaved();
  else if(state.view==='progress')renderProgress();
  else if(state.view==='test')renderTest();
  else if(state.view==='result')renderResult();
}
function renderOverview() {
  const allQ = qBank('All','All');
  const doneTopics=state.syllabusDone.length;
  const recent=state.history.slice(0,3);
  const subjectStats=['Bihar GK','History','Polity','Geography','Science','Economy','Mental Ability'].map((name,i)=>({name,icon:['⌖','⌛','⚖','⌘','⚗','₹','◈'][i],color:['tint-teal','tint-orange','tint-blue','tint-purple','tint-teal','tint-orange','tint-purple'][i],done:questions.filter(q=>q.category===name && q.type==='Practice').length}));
  const max= Math.max(1,...recent.map(r=>r.total));
  const days=['M','T','W','T','F','S','S'];
  root.innerHTML=`
    <section class="hero-panel"><div class="hero-copy"><span class="hero-chip"><b>✦</b> YOUR BPSC PREP SPACE</span><h2>Your next chapter<br>starts <em>with a plan.</em></h2><p>Keep your syllabus moving, sharpen your General Studies, and turn every practice session into measurable progress.</p><div class="hero-buttons"><button class="primary-button" data-action="open-mixed">Start a practice test <span>→</span></button><button class="secondary-button" data-nav="syllabus">Explore syllabus <span>↗</span></button></div></div><div class="hero-art" aria-hidden="true"><div class="art-ring"><span class="art-star s1">✦</span><div class="art-book"><span>BPSC</span><small>PATH</small></div><span class="art-star s2">✧</span></div></div></section>
    <section class="stat-grid">
      <article class="stat-card"><div class="stat-top"><span class="stat-label">Questions practised</span><span class="stat-icon tint-teal">◉</span></div><div class="stat-value">${state.totalAnswered.toLocaleString('en-IN')}</div><div class="stat-foot"><span class="trend">${state.attempts} tests</span> completed so far</div></article>
      <article class="stat-card"><div class="stat-top"><span class="stat-label">Overall accuracy</span><span class="stat-icon tint-orange">◎</span></div><div class="stat-value">${getAccuracy()}%</div><div class="stat-foot">Across scored attempts</div></article>
      <article class="stat-card"><div class="stat-top"><span class="stat-label">Syllabus completed</span><span class="stat-icon tint-blue">▤</span></div><div class="stat-value">${syllabusPct()}%</div><div class="stat-foot">${doneTopics} of ${syllabusTotal()} checklist items</div></article>
      <article class="stat-card"><div class="stat-top"><span class="stat-label">Saved for revision</span><span class="stat-icon tint-purple">☆</span></div><div class="stat-value">${state.saved.length}</div><div class="stat-foot">Questions in your revision list</div></article>
    </section>
    <div class="content-grid"><section><div class="section-row"><div><h2>Your study rhythm</h2><p>Mock scores from your latest attempts</p></div><button class="text-link" data-nav="progress">View insights ↗</button></div><div class="panel"><div class="panel-head"><div><h3 class="panel-title">Recent test performance</h3><p class="panel-subtitle">Accuracy in the latest sessions</p></div><div class="chart-legend"><span class="legend-item"><i class="legend-dot"></i> Accuracy</span></div></div>${recent.length?`<div class="week-chart">${[...recent].reverse().map((r,i)=>`<div class="bar-group"><div class="bar-pair"><div class="bar active" style="height:${Math.max(4,r.accuracy)}%" title="${r.accuracy}%"></div><div class="bar secondary" style="height:${Math.max(4,Math.round(r.correct/max*100))}%" title="${r.correct} correct"></div></div><span class="bar-label">${new Date(r.date).toLocaleDateString('en-IN',{day:'2-digit',month:'short'})}</span></div>`).join('')}</div><div class="chart-legend" style="margin-top:31px"><span class="legend-item"><i class="legend-dot"></i> Accuracy %</span><span class="legend-item"><i class="legend-dot orange"></i> Correct answers (scaled)</span></div>`:`<div class="empty-state"><div class="empty-emoji">▥</div><h3>Your first score starts here</h3><p>Complete a short timed set and your performance trend will appear here.</p><button class="primary-button" data-action="open-mixed">Take a quick test <span>→</span></button></div>`}</div></section>
      <section><div class="section-row"><div><h2>Subject snapshot</h2><p>Question-bank coverage by subject</p></div><button class="text-link" data-nav="practice">Explore all ↗</button></div><div class="panel"><div class="subject-list">${subjectStats.slice(0,5).map((s,i)=>{const n=questions.filter(q=>q.category===s.name).length;return `<div class="subject-row"><div class="subject-symbol ${s.color}">${s.icon}</div><div class="subject-meta"><strong>${s.name}</strong><small>${n} available questions</small><div class="mini-progress"><span style="width:${Math.min(100,Math.round(n/allQ.length*100*2))}%"></span></div></div><span class="subject-percent">${n}</span></div>`}).join('')}</div><p class="notice-small" style="margin:15px 0 0">Question counts reflect this starter bank, not total BPSC syllabus coverage.</p></div></section></div>
    <div class="bottom-grid"><section><div class="section-row"><div><h2>Pick up where you left off</h2><p>Short tasks you can complete next</p></div></div><div class="panel"><div class="continue-card"><div class="continue-icon">⌖</div><div class="continue-content"><strong>Prioritise Bihar-specific GK</strong><p>Rivers, history, economy and cultural heritage</p><div class="mini-progress"><span style="width:${Math.min(100,Math.round(state.syllabusDone.filter(x=>x.startsWith('geography')||x.startsWith('history')).length/8*100))}%"></span></div></div><button class="continue-action" data-action="practice-topic" data-topic="Bihar GK" aria-label="Practice Bihar GK">→</button></div><div class="continue-card"><div class="continue-icon" style="background:#e8efff">▤</div><div class="continue-content"><strong>Finish a syllabus checklist</strong><p>${doneTopics} of ${syllabusTotal()} topics marked complete</p><div class="mini-progress"><span style="width:${syllabusPct()}%"></span></div></div><button class="continue-action" data-nav="syllabus" aria-label="Open syllabus">→</button></div></div></section>
      <section><div class="section-row"><div><h2>Recent attempts</h2><p>Your latest activity</p></div><button class="text-link" data-nav="progress">History ↗</button></div><div class="panel">${recent.length?`<div class="activity-list">${recent.map(r=>`<div class="activity-item"><div class="activity-mark">✓</div><div class="activity-text"><strong>${r.kind==='pyq'?'PYQ practice':r.topic==='All'?'Mixed practice':r.topic+' practice'}</strong><small>${new Date(r.date).toLocaleString('en-IN',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'})} · ${r.total} questions</small></div><span class="activity-score">${r.correct}/${r.total}</span></div>`).join('')}</div>`:`<div class="empty-state"><div class="empty-emoji">◷</div><h3>No attempts yet</h3><p>Your completed tests will be listed here.</p></div>`}</div></section></div>`;
}
function renderSyllabus() {
  const total=syllabusTotal(), done=state.syllabusDone.length, pct=syllabusPct();
  root.innerHTML=`<div class="page-heading"><div><span class="eyebrow">STUDY ROADMAP</span><h1>Syllabus tracker</h1><p>Break the official broad syllabus into manageable milestones. Check off each item as you finish it.</p></div><div class="heading-actions"><a class="secondary-button" href="${OFFICIAL.syllabus}" target="_blank" rel="noopener">Official syllabus ↗</a><button class="primary-button" data-action="open-mixed">Practice now <span>→</span></button></div></div>
  <div class="syllabus-layout"><div class="syllabus-groups">${syllabusData.map(g=>{const count=g.items.length, completed=g.items.filter((it,i)=>state.syllabusDone.includes(`${g.id}-${i}`)).length;const open=state.expandedSyllabus.has(g.id);return `<section class="syllabus-card"><div class="syllabus-group-head" data-action="toggle-syllabus" data-id="${g.id}" role="button" tabindex="0" aria-expanded="${open}"><div class="subject-symbol ${g.color}">${g.icon}</div><div class="syllabus-group-main"><h3>${g.name}</h3><p>${g.desc}</p></div><div class="syllabus-group-progress"><strong>${completed}/${count}</strong><div class="mini-progress"><span style="width:${completed/count*100}%"></span></div></div><span class="syllabus-chevron">⌄</span></div><div class="syllabus-items ${open?'':'collapsed'}">${g.items.map((it,i)=>{const id=`${g.id}-${i}`, checked=state.syllabusDone.includes(id);return `<label class="syllabus-item"><input type="checkbox" data-syllabus-id="${id}" ${checked?'checked':''}><span>${esc(it[0])}<small>${esc(it[1])}</small></span></label>`}).join('')}</div></section>`}).join('')}</div>
  <aside class="syllabus-side-panel"><section class="panel progress-ring-card"><span class="eyebrow">YOUR PROGRESS</span><div class="ring-wrap"><svg class="progress-ring" viewBox="0 0 120 120"><circle class="track" cx="60" cy="60" r="54"></circle><circle class="fill" cx="60" cy="60" r="54" style="stroke-dashoffset:${339.3-(339.3*pct/100)}"></circle></svg><div class="ring-center"><strong>${pct}%</strong><small>completed</small></div></div><h3>${pct===100?'Syllabus checklist complete!':pct>=50?'Good momentum. Keep going.':'Build your foundation.'}</h3><p>${done} of ${total} study milestones checked off. Your progress is saved in this browser.</p><div class="checklist-legend"><div><span>Completed</span><strong>${done}</strong></div><div><span>To study</span><strong>${total-done}</strong></div><div><span>Broad syllabus areas</span><strong>${syllabusData.length}</strong></div></div><button class="secondary-button full-width" style="margin-top:17px" data-action="reset-syllabus">Reset checklist</button></section><section class="note-card"><h3>One important note</h3><p>This checklist organises the broad CCE Prelims syllabus. Subject weightage and paper structure can change; use the latest notification and official syllabus as the final authority.</p><a href="${OFFICIAL.syllabus}" target="_blank" rel="noopener">Open BPSC syllabus portal ↗</a></section></aside></div>`;
}
function renderPYQ() {
  const cards=[
    {title:'72nd CCE · 2026',meta:'Preliminary · current cycle',desc:'Keep an eye on the latest notice, syllabus and exam updates for the current cycle.',badge:'Current cycle',link:OFFICIAL.papers,icon:'◷'},
    {title:'71st CCE · 2025',meta:'Preliminary General Studies',desc:'Locate the official question booklet and the related notices through the BPSC archive.',badge:'Official archive',link:OFFICIAL.papers,icon:'▧'},
    {title:'70th CCE · 2024',meta:'Prelims · 13 Dec 2024',desc:'General Studies paper. A re-examination was also held for affected centres on 4 Jan 2025.',badge:'Paper available',link:OFFICIAL.papers,icon:'▤'},
    {title:'69th CCE · 2023',meta:'Preliminary General Studies',desc:'Use the earlier paper to understand question phrasing and recurring GS themes.',badge:'Previous paper',link:OFFICIAL.papers,icon:'▧'}
  ];
  const n=questions.filter(q=>q.type==='PYQ').length;
  root.innerHTML=`<div class="page-heading"><div><span class="eyebrow">PAST PAPERS. SMARTER REVISION.</span><h1>Previous-year papers</h1><p>Find official booklets, then practise question excerpts in a timed quiz.</p></div><div class="heading-actions"><button class="primary-button" data-action="start-pyq">Attempt PYQ quiz <span>→</span></button></div></div>
  <div class="source-alert"><span>ⓘ</span><div><strong>Source clarity:</strong> BPSC hosts official question booklets in its Examination section. The in-site PYQ quiz below is a small curated excerpt set, not a complete official paper. Some wording is adapted from third-party archives; each question links to its source. The test interface adds E (Not attempted) to simulate the newer response format; historical papers may have used a different pattern. <a href="${OFFICIAL.papers}" target="_blank" rel="noopener"><u>Open official booklets ↗</u></a></div></div>
  <div class="section-row"><div><h2>Question booklet library</h2><p>Open the official BPSC archive to download available PDFs</p></div><span class="badge topic">Official portal</span></div><div class="paper-grid">${cards.map(c=>`<article class="paper-card"><div class="paper-icon">${c.icon}</div><h3>${c.title}</h3><p>${c.desc}</p><div class="paper-meta"><span>${c.meta}</span><span>${c.badge}</span></div><div class="paper-actions"><a class="secondary-button" href="${c.link}" target="_blank" rel="noopener">Official papers ↗</a><button class="primary-button" data-action="start-pyq">Try quiz <span>→</span></button></div></article>`).join('')}</div>
  <div class="section-row" style="margin-top:28px"><div><h2>Curated PYQ excerpts</h2><p>${n} currently included · sourced notes retained per question</p></div><button class="text-link" data-action="start-pyq">Start all ${n} questions ↗</button></div><div class="panel"><div class="activity-list">${questions.filter(q=>q.type==='PYQ').map(q=>`<div class="activity-item"><div class="activity-mark">?</div><div class="activity-text"><strong>${esc(q.question.split('\n')[0])}</strong><small>${esc(q.exam)} · ${esc(q.category)}</small></div><a class="text-link" style="white-space:nowrap" href="${q.sourceUrl}" target="_blank" rel="noopener">Source ↗</a><button class="continue-action" data-action="single-question" data-id="${q.id}" title="Try question">→</button></div>`).join('')}</div></div>`;
}
function renderPractice() {
  const topics=['All','Bihar GK','History','Polity','Geography','Science','Economy','Mental Ability'];
  const filtered=qBank(state.activeType,state.activeFilter,state.search);
  root.innerHTML=`<div class="page-heading"><div><span class="eyebrow">LEARN BY DOING</span><h1>Practice questions</h1><p>Choose a subject, answer MCQs, and review explanations after submitting.</p></div><div class="heading-actions"><button class="primary-button" data-action="open-practice">Start timed practice <span>→</span></button></div></div>
  <div class="section-row"><div><h2>Question bank</h2><p>${filtered.length} questions match your filters · ${questions.filter(q=>q.type==='PYQ').length} PYQ excerpts + practice items</p></div><input id="practiceSearch" class="search-input" type="search" placeholder="Search within questions..." value="${esc(state.search)}"></div>
  <div class="filter-row" style="margin-bottom:17px">${topics.map(t=>`<button class="filter-chip ${state.activeFilter===t && state.activeType==='All'?'selected':''}" data-filter="${t}">${t}</button>`).join('')}<button class="filter-chip ${state.activeType==='PYQ'?'selected':''}" data-filter="PYQ">PYQ excerpts</button></div>
  <div class="subjects-grid">${filtered.map(q=>`<article class="subject-card"><div class="subject-card-top"><span class="badge ${q.type==='PYQ'?'pyq':'practice'}">${q.type==='PYQ'?'PYQ excerpt':'Practice'}</span><button class="bookmark-button ${state.saved.includes(q.id)?'saved':''}" data-action="toggle-saved" data-id="${q.id}" aria-label="Save question">${state.saved.includes(q.id)?'★':'☆'}</button></div><h3>${esc(q.category)} · ${q.type==='PYQ'?esc(q.exam):'Concept check'}</h3><p>${esc(q.question.split('\n')[0])}</p><div class="topic-tags"><span class="topic-tag">${esc(q.topic)}</span><span class="topic-tag">MCQ</span>${q.type==='PYQ'?'<span class="topic-tag">Source linked</span>':''}</div><div class="subject-card-footer"><span>${q.options.length} options</span><button data-action="single-question" data-id="${q.id}">Attempt question →</button></div></article>`).join('')||`<div class="no-results">No questions matched your search. Try a different topic or keyword.</div>`}</div>`;
  const ps=document.getElementById('practiceSearch'); if(ps)ps.addEventListener('input',e=>{state.search=e.target.value;const pos=e.target.selectionStart;renderPractice();const input=document.getElementById('practiceSearch');input.focus();input.setSelectionRange(pos,pos);});
}
function renderMocks() {
 const configs=[{title:'Quick Focus',tag:'10 MIN',desc:'A compact set for a short revision break. Good for checking one or two concepts.',icon:'◷',c:'',topic:'All',count:5,minutes:10},{title:'Mixed General Studies',tag:'15 MIN',desc:'A balanced warm-up spanning Bihar GK, history, polity, geography and science.',icon:'◈',c:'orange',topic:'All',count:10,minutes:15},{title:'Bihar Special',tag:'15 MIN',desc:'Focus on Bihar’s history, geography and related General Studies themes.',icon:'⌖',c:'purple',topic:'Bihar GK',count:10,minutes:15},{title:'PYQ Excerpt Test',tag:'15 MIN',desc:'Attempt the sourced previous-year question excerpts available in this starter version.',icon:'▧',c:'',topic:'All',count:10,minutes:15}];
 root.innerHTML=`<div class="page-heading"><div><span class="eyebrow">TEST YOUR PREPARATION</span><h1>Mock tests</h1><p>Timed practice with question navigation, review flags, auto-submit and instant results.</p></div><div class="heading-actions"><button class="primary-button" data-action="open-mixed">Customise a test <span>→</span></button></div></div><div class="source-alert"><span>◷</span><div><strong>Starter version:</strong> the included bank is intentionally small. These are practice sets, not full 150-question official mocks. The timer and navigation work; expand the question bank or import verified paper content for full-length simulation.</div></div><div class="mock-grid">${configs.map((m,i)=>`<article class="mock-card"><div class="mock-icon ${m.c}">${m.icon}</div><div class="paper-meta"><span>${m.tag}</span><span>${m.title==='PYQ Excerpt Test'?'Sourced excerpts':'Timed practice'}</span></div><h3>${m.title}</h3><p>${m.desc}</p><div class="mock-foot"><span>${m.count} target questions · ${m.minutes} min</span><button class="text-link" data-action="preset-test" data-kind="${i===3?'pyq':'mixed'}" data-topic="${m.topic}" data-count="${m.count}" data-minutes="${m.minutes}">Start test →</button></div></article>`).join('')}</div><div class="section-row" style="margin-top:28px"><div><h2>Test-taking features</h2><p>Designed to recreate the useful parts of an exam interface</p></div></div><div class="subjects-grid"><article class="subject-card"><div class="subject-card-top"><span class="subject-symbol tint-teal">◷</span><span class="badge topic">Timer</span></div><h3>Countdown + auto-submit</h3><p>The clock stays visible throughout the test and submits automatically when the time runs out.</p></article><article class="subject-card"><div class="subject-card-top"><span class="subject-symbol tint-blue">▦</span><span class="badge topic">Navigation</span></div><h3>Question palette</h3><p>Jump between questions and flag uncertain items to revisit before submitting.</p></article><article class="subject-card"><div class="subject-card-top"><span class="subject-symbol tint-orange">✓</span><span class="badge topic">Review</span></div><h3>Score + explanations</h3><p>See correct, incorrect and skipped counts, plus short explanations for each item.</p></article></div>`;
}
function renderTest() {
 const t=state.test; if(!t){state.view='overview';renderOverview();return;} const q=t.questions[t.index]; const selected=t.answers[q.id]; const isReview=t.review.includes(q.id); const answered=Object.keys(t.answers).length; const total=t.questions.length;
 const percentage=Math.max(0,t.seconds/t.totalSeconds*100);
 root.innerHTML=`<div class="page-heading"><div><span class="eyebrow">${t.kind==='pyq'?'PREVIOUS-YEAR QUESTION EXCERPTS':'TIMED PRACTICE SESSION'}</span><h1>${t.kind==='pyq'?'PYQ excerpt test':t.topic==='All'?'General Studies practice':esc(t.topic)+' practice'}</h1><p>Choose A–D, or choose E to record a deliberate skip. A completely unmarked question is treated separately in this current-pattern practice.</p></div><div class="heading-actions"><button class="secondary-button" data-action="end-test">Submit test <span>✓</span></button></div></div><div class="question-grid"><section class="question-card"><div class="question-topline"><div class="q-badges"><span class="badge ${q.type==='PYQ'?'pyq':'practice'}">${q.type==='PYQ'?'PYQ excerpt':'Practice'}</span><span class="badge topic">${esc(q.category)}</span></div><button class="bookmark-button ${state.saved.includes(q.id)?'saved':''}" data-action="toggle-saved" data-id="${q.id}" title="Save for revision">${state.saved.includes(q.id)?'★':'☆'}</button></div><div class="question-number">QUESTION ${t.index+1} OF ${total}</div><h2>${esc(q.question).replace(/\n/g,'<br>')}</h2><div class="option-list">${q.options.map((o,i)=>`<button class="option-button ${selected===i?'chosen':''}" data-answer="${i}"><span class="option-letter">${String.fromCharCode(65+i)}</span><span>${esc(o)}</span></button>`).join('')}<button class="option-button ${selected===4?'chosen':''}" data-answer="4"><span class="option-letter">E</span><span>Not attempted <small style="display:block;font-size:9px;opacity:.7">Record this question as skipped</small></span></button></div><div class="explanation-box" id="explanationBox"><strong>${selected===q.correct?'Correct answer':'Correct answer: '+String.fromCharCode(65+q.correct)}</strong><p>${esc(q.explanation)}</p>${q.sourceUrl?`<p style="margin-top:8px"><a href="${q.sourceUrl}" target="_blank" rel="noopener">Open source reference ↗</a></p>`:''}</div><div class="question-bottom"><button class="secondary-button" data-action="previous-q" ${t.index===0?'disabled':''}>← Previous</button><button class="secondary-button" data-action="flag-q">${isReview?'⚑ Flagged for review':'⚐ Mark for review'}</button><button class="primary-button" data-action="next-q">${t.index===total-1?'Review answers':'Next question'} <span>→</span></button></div></section><aside class="question-side"><div class="timer-card"><div class="timer-top"><span>TIME REMAINING</span><span>◷</span></div><div class="timer-display" id="timerDisplay">${formatTime(t.seconds)}</div><div class="timer-help">E = not attempted · blank responses carry a penalty in the current pattern</div><div class="timer-line"><span id="timerBar" style="width:${percentage}%"></span></div></div><div class="palette-card"><h3>Question palette</h3><p>${answered} answered · ${total-answered} unanswered</p><div class="question-palette">${t.questions.map((item,i)=>`<button class="palette-button ${i===t.index?'current':''} ${t.answers[item.id]!==undefined?'answered':''} ${t.review.includes(item.id)?'review':''}" data-jump="${i}">${i+1}</button>`).join('')}</div><div class="palette-legend"><span><i></i> Answered</span><span><i class="grey"></i> Unanswered</span><span><i class="orange"></i> Review flag</span></div><div class="test-actions"><button class="primary-button full-width" data-action="end-test">Submit test <span>✓</span></button><button class="secondary-button full-width" data-action="save-exit">Save & exit test</button></div></div><div class="panel" style="padding:15px"><h3 class="panel-title">Test summary</h3><div class="checklist-legend"><div><span>Questions</span><strong>${total}</strong></div><div><span>Answered</span><strong>${answered}</strong></div><div><span>For review</span><strong>${t.review.length}</strong></div></div></div></aside></div>`;
}
function renderResult() {
 const r=state.history[0]; const t=state.test;
 if(!r||!t){root.innerHTML='<div class="empty-state"><h3>No result available</h3><button class="primary-button" data-nav="overview">Back to overview</button></div>';return;}
 const byId=new Map(t.questions.map(q=>[q.id,q]));
 root.innerHTML=`<div class="page-heading"><div><span class="eyebrow">SESSION COMPLETE</span><h1>Test results</h1><p>Your answers have been scored. Review the explanations, then save questions you want to revisit.</p></div><div class="heading-actions"><button class="secondary-button" data-nav="overview">Back to dashboard</button><button class="primary-button" data-action="retry-test">Try another test <span>→</span></button></div></div><section class="result-hero"><div><span class="eyebrow" style="color:#b8e8df">${r.kind==='pyq'?'PYQ EXCERPT TEST':'PRACTICE TEST'}</span><h2>${r.accuracy>=80?'Excellent progress.':r.accuracy>=55?'Good effort. Keep sharpening.':'A useful baseline — now review and retry.'}</h2><p>${r.total} questions · ${new Date(r.date).toLocaleString('en-IN',{dateStyle:'medium',timeStyle:'short'})}</p></div><div><div class="result-score">${r.score}<small> / ${r.total} net marks</small></div><p style="font-size:10px;color:#c1dfe0;margin:2px 0 0">${r.correct} correct answers</p></div></section><div class="result-stats"><div class="result-stat"><small>Accuracy</small><strong>${r.accuracy}%</strong></div><div class="result-stat"><small>Correct</small><strong style="color:#128b64">${r.correct}</strong></div><div class="result-stat"><small>Wrong A–D</small><strong style="color:#bf5955">${r.wrong}</strong></div><div class="result-stat"><small>Marked E</small><strong>${r.skipped}</strong></div><div class="result-stat"><small>Blank</small><strong>${r.blank}</strong></div></div><div class="section-row"><div><h2>Answer review</h2><p>Explanation and source links are included where available</p></div><button class="text-link" data-action="save-wrong">Save incorrect answers ↗</button></div><div class="review-list">${t.questions.map((q,i)=>{const a=t.answers[q.id];const status=a===undefined?'Blank':a===4?'Marked E':a===q.correct?'Correct':'Incorrect';return `<article class="review-question"><div class="review-question-top"><h3><span style="color:#97a6b2;font-size:10px">Q${i+1} · ${esc(q.category)} · </span>${esc(q.question.split('\n')[0])}</h3><span class="answer-tag ${status==='Correct'?'right':status==='Incorrect'?'wrong':'skipped'}">${status}</span></div><p>Your answer: <strong>${a===undefined?'Blank (no option selected)':a===4?'E. Not attempted':String.fromCharCode(65+a)+'. '+esc(q.options[a])}</strong> · Correct answer: <strong>${String.fromCharCode(65+q.correct)}. ${esc(q.options[q.correct])}</strong></p><div class="review-explanation">${esc(q.explanation)}${q.sourceUrl?`<div style="margin-top:7px"><a href="${q.sourceUrl}" target="_blank" rel="noopener">Source reference ↗</a></div>`:''}</div><div style="display:flex;gap:8px;margin-top:11px"><button class="secondary-button" style="padding:7px 10px;font-size:10px" data-action="toggle-saved" data-id="${q.id}">${state.saved.includes(q.id)?'★ Saved':'☆ Save for revision'}</button></div></article>`}).join('')}</div>`;
}
function renderSaved() {
 const list=state.saved.map(id=>questions.find(q=>q.id===id)).filter(Boolean);
 root.innerHTML=`<div class="page-heading"><div><span class="eyebrow">YOUR PERSONAL REVISION STACK</span><h1>Saved & review</h1><p>Bookmark tough questions while practising and revisit them before a mock test.</p></div><div class="heading-actions"><button class="primary-button" data-action="review-saved" ${list.length?'':'disabled'}>Practise saved questions <span>→</span></button></div></div>${list.length?`<div class="saved-list">${list.map(q=>`<article class="saved-question"><div class="saved-q-icon">☆</div><div class="saved-q-main"><strong>${esc(q.question.split('\n')[0])}</strong><small>${esc(q.category)} · ${q.type==='PYQ'?esc(q.exam):'Practice question'} · ${q.options.length} options</small><div class="saved-q-actions" style="margin-top:11px"><button data-action="single-question" data-id="${q.id}">Attempt</button><button data-action="toggle-saved" data-id="${q.id}">Remove saved</button>${q.sourceUrl?`<a href="${q.sourceUrl}" target="_blank" rel="noopener" style="font-size:10px;color:#0b9787;padding:6px">Source ↗</a>`:''}</div></div></article>`).join('')}</div>`:`<div class="panel"><div class="empty-state"><div class="empty-emoji">☆</div><h3>Your revision list is empty</h3><p>Use the star icon on any question to save it here for later revision.</p><button class="primary-button" data-nav="practice">Browse questions <span>→</span></button></div></div>`}`;
}
function renderProgress() {
 const history=state.history.slice(0,10); const perTopic={};
 // Topic-wise estimates are based on the starter question bank, while exact attempts are retained only at test level.
 const max=Math.max(1,...history.map(r=>r.accuracy));
 root.innerHTML=`<div class="page-heading"><div><span class="eyebrow">MEASURE WHAT MATTERS</span><h1>My progress</h1><p>A local record of your completed sessions and syllabus checklist.</p></div><div class="heading-actions"><button class="secondary-button" data-action="export-progress">Export my data ↗</button><button class="primary-button" data-action="open-mixed">New test <span>→</span></button></div></div><div class="stat-grid"><article class="stat-card"><div class="stat-top"><span class="stat-label">Tests completed</span><span class="stat-icon tint-teal">✓</span></div><div class="stat-value">${state.attempts}</div><div class="stat-foot">Saved on this device</div></article><article class="stat-card"><div class="stat-top"><span class="stat-label">Questions answered</span><span class="stat-icon tint-blue">◉</span></div><div class="stat-value">${state.totalAnswered}</div><div class="stat-foot">Skipped responses excluded</div></article><article class="stat-card"><div class="stat-top"><span class="stat-label">Overall accuracy</span><span class="stat-icon tint-orange">◎</span></div><div class="stat-value">${getAccuracy()}%</div><div class="stat-foot">${state.totalCorrect} correct out of ${state.totalAnswered} answered</div></article><article class="stat-card"><div class="stat-top"><span class="stat-label">Syllabus progress</span><span class="stat-icon tint-purple">▤</span></div><div class="stat-value">${syllabusPct()}%</div><div class="stat-foot">${state.syllabusDone.length}/${syllabusTotal()} items complete</div></article></div><div class="progress-dashboard"><section class="progress-card"><div class="section-row"><div><h2>Test accuracy</h2><p>Last ${history.length} completed test(s)</p></div></div>${history.length?`<div class="bar-chart">${[...history].reverse().map(r=>`<div class="progress-bar-col" title="${r.accuracy}% accuracy"><div class="progress-bar-fill" style="height:${Math.max(4,r.accuracy)}%"></div><small>${new Date(r.date).toLocaleDateString('en-IN',{day:'2-digit',month:'short'})}</small></div>`).join('')}</div><p class="notice-small">A small number of tests may make this trend noisy. Compare scores across similar tests.</p>`:`<div class="empty-state"><div class="empty-emoji">↗</div><h3>No test data yet</h3><p>Complete your first mock to start building a personal score history.</p></div>`}</section><section class="progress-card"><div class="section-row"><div><h2>Study consistency</h2><p>Keep a realistic weekly target</p></div></div><div class="continue-card"><div class="continue-icon">▤</div><div class="continue-content"><strong>Syllabus milestones</strong><p>${state.syllabusDone.length} completed of ${syllabusTotal()}</p><div class="mini-progress"><span style="width:${syllabusPct()}%"></span></div></div></div><div class="continue-card"><div class="continue-icon" style="background:#e4f4ef">☆</div><div class="continue-content"><strong>Revision questions</strong><p>${state.saved.length} saved for review</p><div class="mini-progress"><span style="width:${Math.min(100,state.saved.length/10*100)}%"></span></div></div></div><button class="secondary-button full-width" style="margin-top:13px" data-nav="saved">Open revision list ↗</button></section></div><section class="progress-card" style="margin-top:18px"><div class="section-row"><div><h2>Attempt history</h2><p>Most recent sessions first</p></div></div>${history.length?`<div style="overflow:auto"><table class="history-table"><thead><tr><th>DATE</th><th>TEST TYPE</th><th>QUESTIONS</th><th>ACCURACY</th><th>SCORE</th></tr></thead><tbody>${history.map(r=>`<tr><td>${new Date(r.date).toLocaleString('en-IN',{day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'})}</td><td>${r.kind==='pyq'?'PYQ excerpts':r.topic==='All'?'Mixed practice':esc(r.topic)}</td><td>${r.total}</td><td>${r.accuracy}%</td><td><span class="score-pill">${r.correct}/${r.total}</span></td></tr>`).join('')}</tbody></table></div><div style="display:flex;justify-content:flex-end;margin-top:12px"><button class="text-link" data-action="clear-history">Clear history</button></div>`:`<div class="empty-table">No tests completed yet. Your scores will appear here after submitting a test.</div>`}</section>`;
}

// Click delegation: keeping navigation and test actions in one handler makes the static app easy to maintain.
document.addEventListener('click', (e) => {
 const nav=e.target.closest('[data-nav]'); if(nav){e.preventDefault();setView(nav.dataset.nav);return;}
 const viewBtn=e.target.closest('[data-view]'); if(viewBtn){setView(viewBtn.dataset.view);return;}
 const filter=e.target.closest('[data-filter]'); if(filter){if(filter.dataset.filter==='PYQ'){state.activeType='PYQ';state.activeFilter='All';}else{state.activeType='All';state.activeFilter=filter.dataset.filter;}state.search='';renderPractice();return;}
 const answer=e.target.closest('[data-answer]'); if(answer){selectAnswer(Number(answer.dataset.answer));return;}
 const jump=e.target.closest('[data-jump]'); if(jump){goQuestion(Number(jump.dataset.jump));return;}
 const action=e.target.closest('[data-action]'); if(!action)return;
 switch(action.dataset.action){
  case 'quick-start': openTestDialog('mixed','All');break;
  case 'open-mixed': openTestDialog('mixed','All');break;
  case 'open-practice': openTestDialog(state.activeType==='PYQ'?'pyq':'mixed',state.activeFilter==='All'?'All':state.activeFilter);break;
  case 'practice-topic': openTestDialog('mixed',action.dataset.topic||'All');break;
  case 'start-pyq': startTest({kind:'pyq',topic:'All',count:questions.filter(q=>q.type==='PYQ').length,minutes:15});break;
  case 'single-question': startTest({kind:questions.find(q=>q.id===action.dataset.id)?.type==='PYQ'?'pyq':'mixed',topic:'All',count:1,minutes:5,questionId:action.dataset.id});break;
  case 'preset-test': startTest({kind:action.dataset.kind||'mixed',topic:action.dataset.topic||'All',count:Number(action.dataset.count)||10,minutes:Number(action.dataset.minutes)||15});break;
  case 'toggle-saved': toggleSaved(action.dataset.id);break;
  case 'next-q': if(state.test.index<state.test.questions.length-1)goQuestion(state.test.index+1);else {if(confirm('You have reached the final question. Submit your answers now?'))finishTest(false);}break;
  case 'previous-q': goQuestion(state.test.index-1);break;
  case 'flag-q': toggleReview();break;
  case 'end-test': if(confirm('Submit this test and see your result?'))finishTest(false);break;
  case 'save-exit': if(confirm('Exit this test without scoring it? Your progress in this attempt will be discarded.')){clearInterval(state.timerId);state.test=null;setView('overview');}break;
  case 'retry-test': openTestDialog('mixed','All');break;
  case 'review-saved': {const list=state.saved.map(id=>questions.find(q=>q.id===id)).filter(Boolean);if(list.length){state.test={kind:'saved',topic:'Saved questions',questions:list,answers:{},review:[],index:0,seconds:Math.max(5,list.length*60),totalSeconds:Math.max(5,list.length*60),startedAt:new Date().toISOString(),finished:false};clearInterval(state.timerId);state.view='test';render();state.timerId=setInterval(()=>{if(!state.test||state.view!=='test'){clearInterval(state.timerId);return;}state.test.seconds--;const el=document.getElementById('timerDisplay');const bar=document.getElementById('timerBar');if(el)el.textContent=formatTime(state.test.seconds);if(bar)bar.style.width=Math.max(0,state.test.seconds/state.test.totalSeconds*100)+'%';if(state.test.seconds<=0)finishTest(true);},1000);}break;}
  case 'save-wrong': if(state.test){let added=0;state.test.questions.forEach(q=>{if(state.test.answers[q.id]!==undefined&&state.test.answers[q.id]!==4&&state.test.answers[q.id]!==q.correct&&!state.saved.includes(q.id)){state.saved.push(q.id);added++;}});store.write('saved',state.saved);render();showToast(`${added} question(s) added to revision list.`);}break;
  case 'toggle-syllabus': {const id=action.dataset.id;if(state.expandedSyllabus.has(id))state.expandedSyllabus.delete(id);else state.expandedSyllabus.add(id);renderSyllabus();break;}
  case 'reset-syllabus': if(confirm('Clear all syllabus checklist marks?')){state.syllabusDone=[];store.write('syllabusDone',state.syllabusDone);renderSyllabus();updateSidebar();showToast('Syllabus checklist reset.');}break;
  case 'export-progress': {const data={exportedAt:new Date().toISOString(),syllabusDone:state.syllabusDone,savedQuestions:state.saved,attempts:state.attempts,totalAnswered:state.totalAnswered,totalCorrect:state.totalCorrect,history:state.history};const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='bpsc-path-progress.json';a.click();URL.revokeObjectURL(a.href);showToast('Progress data exported.');break;}
  case 'clear-history': if(confirm('Clear your saved test history and overall answer totals? This cannot be undone.')){state.history=[];state.attempts=0;state.totalAnswered=0;state.totalCorrect=0;store.write('history',[]);store.write('attempts',0);store.write('totalAnswered',0);store.write('totalCorrect',0);renderProgress();updateSidebar();showToast('Test history cleared.');}break;
 }
});
document.addEventListener('change',(e)=>{
 if(e.target.matches('[data-syllabus-id]')){const id=e.target.dataset.syllabusId;if(e.target.checked){if(!state.syllabusDone.includes(id))state.syllabusDone.push(id);}else state.syllabusDone=state.syllabusDone.filter(x=>x!==id);store.write('syllabusDone',state.syllabusDone);renderSyllabus();updateSidebar();}
});
document.getElementById('beginTest').addEventListener('click',()=>{
 const dialog=document.getElementById('testDialog');const topic=document.getElementById('testTopic').value;dialog.close();startTest({kind:state.testKind,topic,count:state.questionCount,minutes:state.minutes});
});
document.querySelectorAll('#questionCountSelect .seg-option').forEach(b=>b.addEventListener('click',()=>{state.questionCount=Number(b.dataset.count);document.querySelectorAll('#questionCountSelect .seg-option').forEach(x=>x.classList.toggle('selected',x===b));}));
document.querySelectorAll('#timeSelect .seg-option').forEach(b=>b.addEventListener('click',()=>{state.minutes=Number(b.dataset.minutes);document.querySelectorAll('#timeSelect .seg-option').forEach(x=>x.classList.toggle('selected',x===b));}));
document.getElementById('themeToggle').addEventListener('click',()=>{state.theme=state.theme==='dark'?'light':'dark';store.write('theme',state.theme);render();});
document.getElementById('mobileMenu').addEventListener('click',()=>document.getElementById('sidebar').classList.toggle('open'));
const globalSearch=document.getElementById('globalSearch');
globalSearch.addEventListener('keydown',e=>{if(e.key==='Enter'){state.search=globalSearch.value;state.activeFilter='All';state.activeType='All';setView('practice');}});
document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();globalSearch.focus();}if(state.view==='test'&&state.test&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)){if(e.key==='ArrowRight')goQuestion(state.test.index+1);if(e.key==='ArrowLeft')goQuestion(state.test.index-1);}});
document.getElementById('yearNow').textContent=new Date().getFullYear();
render();
