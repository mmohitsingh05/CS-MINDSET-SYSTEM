// ═══════════════════════════════════════════════════════════
// CIVIL SERVANT MINDSET SYSTEM — Complete Data + Logic
// ═══════════════════════════════════════════════════════════

const FILMS = [
  // ─── PHASE 1: GROUND REALITY & STATE FAILURE ───
  {
    id: 'ardh-satya',
    phase: 'phase1',
    title: 'Ardh Satya',
    year: '1983',
    lang: 'Hindi',
    type: 'film',
    mindset: 'executor',
    watchTime: '2h 15min',
    difficulty: 'advanced',
    tagline: 'Police complicity · Moral compromise · Integrity under systemic pressure',
    thumbColor: '#1A1A2E',
    thumbBg: 'linear-gradient(135deg,#0d0d1a,#2A2A4A)',
    scenario: 'IPS posting — Station House Officer in a district with entrenched corrupt practices, departmental pressure to compromise, honest officer navigating institutional rot',
    mistake: "The protagonist tries to remain 'clean' while staying inside a corrupt system. Neither full compromise nor full resistance — a third path that requires both political intelligence and moral clarity he never fully develops.",
    shift: 'Pure integrity without strategic engagement is passive resistance. The officer who refuses to compromise but does nothing to change the system is enabling it by default. You need a strategy, not just a clean conscience.',
    learn: 'Based on a true story of an honest cop. The film shows how systemic corruption forces good people into impossible positions — not through dramatic corruption but through 100 small compromises. The question is: at what point does your silence become complicity?',
    gs: ['GS2', 'GS4', 'GS1'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=Ardh+Satya+1983+film+trailer',
      wiki: 'https://en.wikipedia.org/wiki/Ardh_Satya',
      free: 'https://www.youtube.com/results?search_query=Ardh+Satya+1983+full+movie'
    }
  },
  {
    id: 'manthan',
    phase: 'phase1',
    title: 'Manthan',
    year: '1976',
    lang: 'Hindi',
    type: 'film',
    mindset: 'reformer',
    watchTime: '2h 30min',
    difficulty: 'intermediate',
    tagline: 'Cooperative development · Rural mobilisation · Institution building',
    thumbColor: '#2C3E50',
    thumbBg: 'linear-gradient(135deg,#1a2530,#2C3E50)',
    scenario: 'Leading any rural development programme — MGNREGA, cooperative dairy, watershed management, SHG formation',
    mistake: 'Dr. Rao initially treats the community as passive recipients. He tries to change the system by being above it. The breakthrough only comes when he works with farmers as equals. Classic top-down error.',
    shift: 'Stop thinking "implementing schemes at the grassroots." Start thinking "building institutions that survive after I transfer out."',
    learn: 'Real development is bottom-up. The Amul model worked because Kurien built farmer ownership into the architecture. An IAS officer who designs a programme only they can run has built a career highlight, not governance.',
    gs: ['GS2', 'GS3', 'GS4'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=Manthan+1976+film+trailer',
      wiki: 'https://en.wikipedia.org/wiki/Manthan_(film)',
      free: 'https://www.youtube.com/results?search_query=Manthan+1976+full+movie+free'
    }
  },
  {
    id: 'newton',
    phase: 'phase1',
    title: 'Newton',
    year: '2017',
    lang: 'Hindi',
    type: 'film',
    mindset: 'executor',
    watchTime: '1h 46min',
    difficulty: 'beginner',
    tagline: 'Election duty · Constitutional courage · Procedural integrity',
    thumbColor: '#8B1A1A',
    thumbBg: 'linear-gradient(135deg,#5C1010,#8B1A1A)',
    scenario: 'Election duty in Naxal-affected areas, law & order posting, any situation where institutional mandate clashes with ground reality and political pressure',
    mistake: "Newton's rigidity becomes self-defeating. He is correct but ineffective at building alliances. Courage without strategic communication is martyrdom. He never asks: how do I get others to want to do the right thing?",
    shift: "Distinguish between 'being correct' and 'being effective.' The best officers are both. If you are right but nobody follows, you have failed the institution — not just yourself.",
    learn: 'Procedural integrity is not naïveté — it is the last defence of institutional legitimacy. But procedure must be applied with political intelligence, not bureaucratic rigidity. Newton teaches both lessons by getting one right and one wrong.',
    gs: ['GS2', 'GS4'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=Newton+2017+Hindi+film+trailer',
      wiki: 'https://en.wikipedia.org/wiki/Newton_(film)',
      free: 'https://www.youtube.com/results?search_query=Newton+2017+Hindi+full+movie'
    }
  },
  {
    id: 'peepli-live',
    phase: 'phase1',
    title: 'Peepli Live',
    year: '2010',
    lang: 'Hindi',
    type: 'film',
    mindset: 'reformer',
    tagline: 'Agrarian distress · Welfare delivery gaps · Media and governance',
    thumbColor: '#4A7C3F',
    thumbBg: 'linear-gradient(135deg,#2d4e27,#4A7C3F)',
    scenario: 'District DM handling farmer welfare, BPL family assessments, any crisis where media attention distorts administrative priority',
    mistake: "Every official mistakes 'managing the situation' for 'solving the problem.' The real farmer is forgotten inside the political circus. Classic input-output confusion: disbursements are counted, not outcomes.",
    shift: "Before any 'crisis management' action, ask: am I solving the human problem, or managing the political appearance of the problem? These are different jobs with different success criteria.",
    learn: 'Bureaucratic processes often dehumanise the people they are designed to serve. The PM Kisan benefit the farmer never received, the crop insurance claim nobody filed — that is the real story. Administrative efficiency and genuine compassion can conflict. Resolve that consciously.',
    gs: ['GS3', 'GS4', 'GS2'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=Peepli+Live+2010+trailer',
      wiki: 'https://en.wikipedia.org/wiki/Peepli_Live',
      free: 'https://www.youtube.com/results?search_query=Peepli+Live+full+movie+free'
    }
  },
  {
    id: 'bandit-queen',
    phase: 'phase1',
    title: 'Bandit Queen',
    year: '1994',
    lang: 'Hindi',
    type: 'film',
    mindset: 'reformer',
    tagline: 'Caste violence · Police complicity · Root cause governance',
    thumbColor: '#5C3317',
    thumbBg: 'linear-gradient(135deg,#3a1f0d,#5C3317)',
    scenario: 'SC/ST atrocity cases, police sensitisation, tribal area postings, Naxal-affected districts, any situation involving caste-based structural violence',
    mistake: 'Police treat Phoolan as a criminal to be managed rather than a victim whose grievance was never addressed. Reactive enforcement without addressing root causes creates the very problem it tries to solve.',
    shift: 'Map the grievance chains in your district before assuming law enforcement is the primary tool. Most "law and order" problems are governance failures dressed as security problems.',
    learn: 'The state\'s indifference to lower-caste women\'s safety creates outlaws. An officer\'s role in preventing the conditions that breed desperation is as important as law enforcement. Based on real events involving Phoolan Devi — this is not a distant story.',
    gs: ['GS1', 'GS2', 'GS4'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=Bandit+Queen+1994+film+trailer',
      wiki: 'https://en.wikipedia.org/wiki/Bandit_Queen',
      free: 'https://www.youtube.com/results?search_query=Bandit+Queen+1994+full+movie'
    }
  },
  {
    id: 'inconvenient-truth',
    phase: 'phase1',
    title: 'An Inconvenient Truth',
    year: '2006',
    lang: 'English',
    type: 'doc',
    mindset: 'visionary',
    tagline: 'Data-driven advocacy · Long-term risk communication · Evidence-based governance',
    thumbColor: '#1A4E6E',
    thumbBg: 'linear-gradient(135deg,#0d2e40,#1A4E6E)',
    scenario: 'Environmental impact assessments, climate adaptation planning, convincing resistant political stakeholders with data, MEITY/MoEF postings',
    mistake: "Gore's failure was political timing and messenger credibility. A technically correct argument delivered without understanding the audience's incentive structure fails every time — in governance and in governance communication.",
    shift: 'Learn to communicate long-horizon risk to short-horizon political actors. This is one of the hardest skills in governance and almost nobody teaches it explicitly.',
    learn: 'The document shows that data alone does not change minds — narrative, timing, and political economy matter equally. For every environmental or public health decision you make as an officer, you will need this skill.',
    gs: ['GS3', 'GS4'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=An+Inconvenient+Truth+documentary+trailer',
      wiki: 'https://en.wikipedia.org/wiki/An_Inconvenient_Truth',
      free: 'https://www.youtube.com/results?search_query=An+Inconvenient+Truth+full+documentary+free'
    }
  },
  // ─── PHASE 2: POWER, INSTITUTIONS & REFORM ───
  {
    id: 'yes-minister',
    phase: 'phase2',
    title: 'Yes Minister / Yes PM',
    year: '1980–88',
    lang: 'English (UK)',
    type: 'series',
    mindset: 'leader',
    watchTime: '30 episodes',
    difficulty: 'intermediate',
    tagline: 'Minister-secretary dynamics · Policy resistance · Institutional power',
    thumbColor: '#2C4A6E',
    thumbBg: 'linear-gradient(135deg,#182a40,#2C4A6E)',
    scenario: 'Every central government posting. Joint Secretary, IAS deputation to Union Government. The minister-secretary relationship governs all policy implementation.',
    mistake: "Hacker constantly confuses 'winning the argument' with 'changing policy.' Humphrey wins by controlling information flow and implementation pace. Most reformist officers make Hacker's mistake — they win the meeting and lose the outcome.",
    shift: 'Stop thinking of political masters as obstacles. Think of them as clients with different incentive structures. Your job is to align their short-term incentives with long-term policy outcomes. That is statecraft.',
    learn: 'Institutional power lies in the secretary\'s control of information, timing, and implementation — not in formal authority. Understanding this is the beginning of effective governance. Watch 3–4 episodes per week.',
    gs: ['GS2', 'GS4'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=Yes+Minister+best+scenes+compilation',
      wiki: 'https://en.wikipedia.org/wiki/Yes_Minister',
      free: 'https://www.youtube.com/results?search_query=Yes+Minister+full+episodes+free'
    }
  },
  {
    id: 'scam-1992',
    phase: 'phase2',
    title: 'Scam 1992',
    year: '2020',
    lang: 'Hindi',
    type: 'series',
    mindset: 'reformer',
    watchTime: '10 episodes',
    difficulty: 'intermediate',
    tagline: 'Regulatory capture · Financial oversight · Compliance culture failure',
    thumbColor: '#7B2D00',
    thumbBg: 'linear-gradient(135deg,#4a1a00,#7B2D00)',
    scenario: 'Economic services, SEBI, RBI, financial intelligence, any regulatory posting where the boundary between regulator and regulated becomes porous',
    mistake: "Every regulatory body confused 'we have no documented evidence of wrongdoing' with 'there is no wrongdoing.' Passive regulation is not regulation — it is complicity with delay. The RBI officers are shown as intelligent people who simply stopped asking uncomfortable questions.",
    shift: "In any regulatory role, the question is never 'has a rule been technically violated?' The question is 'is the system being used in a way that defeats its purpose?' That requires judgment, not just compliance.",
    learn: 'Regulatory capture happens incrementally. No single moment of dramatic corruption — just 47 small comforts and 47 small compromises. Identify the exact episode where the first compromise happens. That is your early warning system.',
    gs: ['GS3', 'GS4', 'GS2'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=Scam+1992+SonyLiv+trailer',
      wiki: 'https://en.wikipedia.org/wiki/Scam_1992:_The_Harshad_Mehta_Story',
      free: 'https://www.youtube.com/results?search_query=Scam+1992+free+watch+online'
    }
  },
  {
    id: 'lincoln',
    phase: 'phase2',
    title: 'Lincoln',
    year: '2012',
    lang: 'English',
    type: 'film',
    mindset: 'leader',
    tagline: 'Coalition arithmetic · Legislative strategy · Vision vs immediate consensus',
    thumbColor: '#2A2A1A',
    thumbBg: 'linear-gradient(135deg,#181810,#2A2A1A)',
    scenario: 'Pushing through an unpopular reform — anti-corruption measures, land reform, environmental clearance against a nexus, building inter-departmental consensus for a new scheme',
    mistake: "Lincoln's opponents made the error of assuming the status quo was stable and morally neutral. Change agents often underestimate that the cost of not acting is also a cost that accumulates.",
    shift: 'Study how Lincoln counted votes before every single move. Strategic governance is not about inspiration — it is about knowing exactly who needs what to change their position. Politics is arithmetic.',
    learn: 'The film shows that great leadership in democratic governance is not inspirational speeches — it is relentless, granular work of understanding each stakeholder\'s constraints and finding the deal that moves them. Applicable to any multi-stakeholder reform.',
    gs: ['GS4', 'GS2'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=Lincoln+2012+Spielberg+trailer',
      wiki: 'https://en.wikipedia.org/wiki/Lincoln_(film)',
      free: 'https://www.youtube.com/results?search_query=Lincoln+2012+full+movie+free'
    }
  },
  {
    id: 'motorcycle-diaries',
    phase: 'phase2',
    title: 'The Motorcycle Diaries',
    year: '2004',
    lang: 'Spanish',
    type: 'film',
    mindset: 'reformer',
    tagline: 'Field immersion · Empathy construction · Questioning inherited assumptions',
    thumbColor: '#4A3728',
    thumbBg: 'linear-gradient(135deg,#2d2118,#4A3728)',
    scenario: 'Preparation before any field posting — tribal areas, remote districts, border areas, slum governance. This is mandatory before designing any welfare scheme.',
    mistake: "Che's transformation is real but his eventual conclusion (violent revolution) is the wrong administrative lesson. The right lesson is the method: sustained, immersive exposure to the people whose lives you will be administering.",
    shift: 'Spend real time in the field before assuming your policy design is correct. Most welfare schemes fail because they were designed by people who never lived the problem.',
    learn: 'The film shows how a young man\'s inherited assumptions collapse one by one when exposed to ground reality. Every IAS officer carries assumptions about "the poor," "the village," "the tribals." This film is a mirror. Watch it before your first district posting.',
    gs: ['GS1', 'GS4'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=The+Motorcycle+Diaries+2004+trailer',
      wiki: 'https://en.wikipedia.org/wiki/The_Motorcycle_Diaries_(film)',
      free: 'https://www.youtube.com/results?search_query=Motorcycle+Diaries+full+movie+free'
    }
  },
  {
    id: 'jai-bhim',
    phase: 'phase2',
    title: 'Jai Bhim',
    year: '2021',
    lang: 'Tamil',
    type: 'film',
    mindset: 'reformer',
    tagline: 'Custodial violence · Tribal rights · Constitutional accountability',
    thumbColor: '#1A3A5C',
    thumbBg: 'linear-gradient(135deg,#0d2035,#1A3A5C)',
    scenario: 'IPS posting — any SP or DSP handling a station implicated in custodial death or SC/ST atrocity. Also critical for IAS handling DM inquiry into police misconduct.',
    mistake: 'The police instinct to "protect the force" is shown clearly. Silence about institutional wrongdoing is itself a crime — legally (Section 166A IPC) and constitutionally. The officers who do nothing are as culpable as those who act wrongly.',
    shift: 'You protect the force\'s legitimacy by holding accountable the few who destroy it. Every silence makes you complicit.',
    learn: 'Based on real case of Justice Chandru. DK Basu guidelines, NHRC reporting obligations, SC/ST Atrocities Act application — this film dramatises real legal obligations that every IPS officer must know. Non-fiction dressed as cinema.',
    gs: ['GS2', 'GS4', 'GS1'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=Jai+Bhim+2021+trailer+Tamil',
      wiki: 'https://en.wikipedia.org/wiki/Jai_Bhim_(film)',
      free: 'https://www.youtube.com/results?search_query=Jai+Bhim+full+movie+Amazon+Prime'
    }
  },
  {
    id: 'crown',
    phase: 'phase2',
    title: 'The Crown (S1–S2)',
    year: '2016–17',
    lang: 'English',
    type: 'series',
    mindset: 'leader',
    tagline: 'Constitutional balance · Public duty · Legacy of institutional leadership',
    thumbColor: '#4A0E0E',
    thumbBg: 'linear-gradient(135deg,#2d0808,#4A0E0E)',
    scenario: 'Governor/Lt. Governor postings, constitutional functionaries, ambassadorial roles — any position where symbolic authority and practical power must be balanced without direct command',
    mistake: "Elizabeth's early failure: confusing the role's symbolic requirements with weakness. The Crown is powerful not through action but through restraint, legitimacy, and timing. She learns that institutional respect is built through consistency, not intervention.",
    shift: 'Understand the difference between authority and power. In many constitutional roles, your authority is enormous but your direct power is limited. The skill is knowing when to act and when the institution must act through you, not for you.',
    learn: 'The relationship between Elizabeth and her prime ministers illustrates the constitutional balance between elected and appointed power. Watch for how institutional legitimacy is maintained through personal restraint — a lesson for every constitutional officer.',
    gs: ['GS2', 'GS4'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=The+Crown+Netflix+season+1+trailer',
      wiki: 'https://en.wikipedia.org/wiki/The_Crown_(TV_series)',
      free: 'https://www.youtube.com/results?search_query=The+Crown+Netflix+watch+online'
    }
  },
  {
    id: 'mortal-kombat',
    phase: 'phase2',
    title: 'Mahanati',
    year: '2018',
    lang: 'Telugu',
    type: 'film',
    mindset: 'visionary',
    tagline: 'Public service legacy · Media ethics · Celebrity and responsibility',
    thumbColor: '#6B1A5E',
    thumbBg: 'linear-gradient(135deg,#3d0f35,#6B1A5E)',
    scenario: 'Cultural ministry postings, film certification board, celebrity-related governance issues, any role dealing with media ethics and public moral standards',
    mistake: "The industry's exploitation of talent is systemic — no single villain. The tragedy is that everyone benefits slightly from the system so nobody changes it. This is the same pattern in every exploitative institution.",
    shift: 'Study how institutional exploitation survives: not through one dramatic abuse but through distributed complicity. Every person who benefits slightly from an unjust system is less likely to change it. Map the beneficiary chain.',
    learn: 'The film is a biography of actress Savitri. The governance lesson: how do we protect vulnerable talent in creative industries? This question extends to gig economy workers, migrant labour, and every informal sector where power asymmetry is extreme.',
    gs: ['GS4', 'GS2'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=Mahanati+2018+trailer',
      wiki: 'https://en.wikipedia.org/wiki/Mahanati',
      free: 'https://www.youtube.com/results?search_query=Mahanati+2018+full+movie'
    }
  },
  {
    id: 'paan-singh-tomar',
    phase: 'phase2',
    title: 'Paan Singh Tomar',
    year: '2012',
    lang: 'Hindi',
    type: 'film',
    mindset: 'leader',
    tagline: 'Systemic neglect · Athlete welfare · Grassroots talent identification',
    thumbColor: '#1A5A3A',
    thumbBg: 'linear-gradient(135deg,#0d2d1f,#1A5A3A)',
    scenario: 'Sports ministry, district sports development, athlete welfare schemes, any role dealing with grassroots talent identification and development',
    mistake: "The system celebrates athletes as symbols but fails them as human beings. Paan Singh becomes a rebel because the system gave him no legitimate path for his capabilities. Institutional neglect creates the outlaws it then condemns.",
    shift: 'Before praising any athlete as a national hero, ask: what is their actual quality of life? What systems support them during and after their career? Hero worship without structural support is exploitation with better PR.',
    learn: 'The film shows how a talented athlete from a tribal background was failed by every institution meant to support him. Apply this to your district: which communities are you aware of whose talents are systematically under-identified?',
    gs: ['GS1', 'GS4'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=Paan+Singh+Tomar+2012+trailer',
      wiki: 'https://en.wikipedia.org/wiki/Paan_Singh_Tomar',
      free: 'https://www.youtube.com/results?search_query=Paan+Singh+Tomar+full+movie+free'
    }
  },
  // ─── PHASE 3: STRATEGIC DECISION-MAKING ───
  {
    id: 'thirteen-days',
    phase: 'phase3',
    title: 'Thirteen Days',
    year: '2000',
    lang: 'English',
    type: 'film',
    mindset: 'leader',
    tagline: 'Crisis architecture · Multi-agency coordination · Catastrophic downside management',
    thumbColor: '#1C1C3A',
    thumbBg: 'linear-gradient(135deg,#0d0d20,#1C1C3A)',
    scenario: 'Communal riot management, industrial disaster, border escalation — any situation with catastrophic consequences if the wrong decision is made under time pressure',
    mistake: "The joint chiefs' error: institutional incentives (military prestige, protocol) drove them toward escalation that would have been catastrophic. Every agency optimises for its own logic, not the larger objective.",
    shift: 'In any multi-agency crisis, map each agency\'s institutional incentives first. Their recommendations will always serve their incentives alongside the stated objective. Discount accordingly.',
    learn: 'The film is essentially a masterclass in managing the gap between ground-level reality and top-level decision-making. Information is filtered at every level. Your job as the crisis manager is to ensure the information that reaches you is accurate — which requires relationships, not just protocols.',
    gs: ['GS3', 'GS4', 'GS2'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=Thirteen+Days+2000+film+trailer',
      wiki: 'https://en.wikipedia.org/wiki/Thirteen_Days_(film)',
      free: 'https://www.youtube.com/results?search_query=Thirteen+Days+2000+full+movie+free'
    }
  },
  {
    id: 'sully',
    phase: 'phase3',
    title: 'Sully',
    year: '2016',
    lang: 'English',
    type: 'film',
    mindset: 'executor',
    tagline: 'Judgment vs procedure · Experience-based decisions · Post-crisis accountability',
    thumbColor: '#2B4A7A',
    thumbBg: 'linear-gradient(135deg,#18293d,#2B4A7A)',
    scenario: 'Any field decision that deviates from standard operating procedure under time pressure — flood evacuation, riot control, disaster relief where the rulebook says one thing and the situation says another',
    mistake: "The NTSB's error: measuring a real-time human decision against a post-hoc computer simulation with perfect information. Accountability systems must judge decisions on information available at the time — not information available later.",
    shift: 'Build a personal rule: write contemporaneous notes during every significant field decision. Date, time, information available, reasoning, alternatives considered. This protects you legally and improves your thinking.',
    learn: 'The film separates two questions that institutions often conflate: Was the outcome good? and Was the decision process good? A bad decision that luckily succeeds is still a bad decision. A good decision that fails because of bad luck is still a good decision. You will be judged only on outcomes — prepare yourself to defend your process.',
    gs: ['GS4', 'GS3'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=Sully+2016+Clint+Eastwood+trailer',
      wiki: 'https://en.wikipedia.org/wiki/Sully_(film)',
      free: 'https://www.youtube.com/results?search_query=Sully+2016+full+movie+free'
    }
  },
  {
    id: 'hotel-rwanda',
    phase: 'phase3',
    title: 'Hotel Rwanda',
    year: '2004',
    lang: 'English',
    type: 'film',
    mindset: 'leader',
    tagline: 'Individual moral agency · Leadership without authority · When institutions collapse',
    thumbColor: '#3D1A00',
    thumbBg: 'linear-gradient(135deg,#231000,#3D1A00)',
    scenario: 'Communal violence management, ethnic tension districts, post-disaster governance — any situation where the state apparatus partially breaks down and one officer must decide whether to act beyond their mandate',
    mistake: "The UN commander's tragic error: following institutional rules in a situation that had already moved beyond institutional parameters. Institutional loyalty became moral abdication.",
    shift: 'Understand the hierarchy of obligations: Constitutional values > Institutional rules > Procedural compliance. When these conflict, that is the order of priority — not the reverse.',
    learn: 'Paul Rusesabagina led without formal authority, without adequate resources, and against institutional indifference. The question this film asks of every civil servant: when the institution fails, what do you do? The answer must come from your values, not your service rules.',
    gs: ['GS4', 'GS2'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=Hotel+Rwanda+2004+trailer',
      wiki: 'https://en.wikipedia.org/wiki/Hotel_Rwanda',
      free: 'https://www.youtube.com/results?search_query=Hotel+Rwanda+full+movie+free'
    }
  },
  {
    id: 'the-report',
    phase: 'phase3',
    title: 'The Report',
    year: '2019',
    lang: 'English',
    type: 'film',
    mindset: 'reformer',
    tagline: 'Institutional accountability · Truth-telling against power · Document everything',
    thumbColor: '#1A1A2E',
    thumbBg: 'linear-gradient(135deg,#0d0d1a,#1A1A2E)',
    scenario: 'Vigilance postings, CVC, CBI, anti-corruption investigations — any role requiring you to document and report against institutional resistance from people above you',
    mistake: "The investigator's personal cost was enormous. The lesson is not that he was wrong but that he needed better institutional protection and political allies before publishing. Courage without strategy is expensive.",
    shift: 'Before initiating any major accountability action: (1) Complete your evidence. (2) Map your political cover. (3) Identify your exit ramp if the institution turns against you. Then act.',
    learn: 'The entire film is essentially a tutorial in how to conduct an institutional investigation against resistance — document everything, use the formal chain, create paper trails, find the one political actor who has aligned interests, and do not allow oral conversations to substitute for written orders.',
    gs: ['GS4', 'GS2'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=The+Report+2019+Amazon+trailer',
      wiki: 'https://en.wikipedia.org/wiki/The_Report_(film)',
      free: 'https://www.youtube.com/results?search_query=The+Report+2019+full+movie+Amazon+Prime'
    }
  },
  {
    id: 'fog-of-war',
    phase: 'phase3',
    title: 'The Fog of War',
    year: '2003',
    lang: 'English',
    type: 'doc',
    mindset: 'visionary',
    watchTime: '1h 47min',
    difficulty: 'advanced',
    tagline: "McNamara's 11 lessons · Measurement system failure · The cost of wrong frameworks",
    thumbColor: '#2A1A00',
    thumbBg: 'linear-gradient(135deg,#1a0d00,#2A1A00)',
    scenario: 'National policy planning, defence administration, large-scale social intervention — any posting where you design the metrics by which your own programme will be evaluated',
    mistake: "McNamara's core error: using body count as a metric in a political loyalty conflict. He measured what was measurable rather than what mattered. The metric became the objective, replacing the actual objective.",
    shift: 'For every programme you administer, identify the real outcome metric vs the easy-to-measure proxy metric. They almost always diverge. The proxy is what gets reported. The real outcome is what the programme exists for.',
    learn: 'McNamara\'s 11 lessons include: "Empathise with your enemy," "Rationality will not save us," "Maximise efficiency." Apply each to a specific Indian governance scenario. This is the most intellectually demanding documentary in the curriculum.',
    gs: ['GS4', 'GS2', 'GS3'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=The+Fog+of+War+documentary+McNamara+trailer',
      wiki: 'https://en.wikipedia.org/wiki/The_Fog_of_War',
      free: 'https://www.youtube.com/results?search_query=Fog+of+War+documentary+full+free'
    }
  },
  {
    id: 'chernobyl',
    phase: 'phase3',
    title: 'Chernobyl',
    year: '2019',
    lang: 'English',
    type: 'series',
    mindset: 'executor',
    tagline: 'Truth-telling failure · Systemic dishonesty · Upward information corruption',
    thumbColor: '#2A3A1A',
    thumbBg: 'linear-gradient(135deg,#192210,#2A3A1A)',
    scenario: 'Industrial disaster management, environmental compliance, public health crisis communication, nuclear/chemical/industrial plant oversight',
    mistake: 'Every layer of bureaucracy told the layer above a slightly better version of the truth. By the time it reached the top, real decisions were being made based on fiction. Information laundering kills.',
    shift: 'Build a personal rule: you will never report upward a more optimistic version of a situation than what you actually believe. The entire system\'s decision quality depends on accurate upward information flow.',
    learn: 'The most chilling scene is not the explosion — it is the committee meeting where officials compete to give the least alarming assessment. That room exists in every government in the world. You will sit in that room. Decide before you sit in it what you will say.',
    gs: ['GS4', 'GS3', 'GS2'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=Chernobyl+HBO+series+trailer+2019',
      wiki: 'https://en.wikipedia.org/wiki/Chernobyl_(miniseries)',
      free: 'https://www.youtube.com/results?search_query=Chernobyl+HBO+2019+watch+online'
    }
  },
  // ─── PHASE 4: VISION & NATION-BUILDING ───
  {
    id: 'gandhi',
    phase: 'phase4',
    title: 'Gandhi',
    year: '1982',
    lang: 'English',
    type: 'film',
    mindset: 'visionary',
    watchTime: '3h 11min',
    difficulty: 'intermediate',
    tagline: 'Mass mobilisation · Moral authority · Strategic patience',
    thumbColor: '#2A1A00',
    thumbBg: 'linear-gradient(135deg,#1a0f00,#2A1A00)',
    scenario: 'Community mobilisation for large government programmes, post-conflict reconciliation, working with deeply resistant communities across caste and class divisions',
    mistake: "Gandhi's successors treated his methods as tactics rather than as a coherent worldview. Selective use of moral authority without the underlying commitment produces cynicism — in communities and in institutions.",
    shift: 'What is the theory of change you actually believe in? Not what sounds good in an answer sheet — but what you genuinely believe about how India changes. Write it down. Test it against this film.',
    learn: 'The film shows that the most powerful governance tool is legitimacy — earned through consistency between stated values and actual behaviour. An IAS officer who talks about serving the poor but travels by VIP convoy has a legitimacy problem that no training can fix.',
    gs: ['GS4', 'GS1', 'Essay'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=Gandhi+1982+Attenborough+trailer',
      wiki: 'https://en.wikipedia.org/wiki/Gandhi_(film)',
      free: 'https://www.youtube.com/results?search_query=Gandhi+1982+full+movie+free'
    }
  },
  {
    id: 'remains-of-day',
    phase: 'phase4',
    title: 'The Remains of the Day',
    year: '1993',
    lang: 'English',
    type: 'film',
    mindset: 'leader',
    watchTime: '2h 14min',
    difficulty: 'advanced',
    tagline: 'Institutional loyalty vs moral judgment · Dignity vs integrity · The deepest trap',
    thumbColor: '#1A1A0D',
    thumbBg: 'linear-gradient(135deg,#0d0d08,#1A1A0D)',
    scenario: 'Any posting where your minister or superior is demonstrably wrong — politically, ethically, or legally — and you must decide whether to comply, resist, or find a third path',
    mistake: "Stevens sublimated his personal moral judgment entirely to institutional duty. He enabled a fascist sympathiser by treating perfect service as a virtue in itself. The civil servant's deepest trap: 'my job is to implement, not to judge.'",
    shift: "The question 'am I loyal to the institution or to the Constitution?' is not hypothetical. Decide your answer before the moment arrives — not during it, when pressure will distort your thinking.",
    learn: 'The most important film in the curriculum — not for inspiration but for warning. Stevens was technically excellent, personally decent, and institutionally loyal. He was also catastrophically complicit. Which of your current behaviours would you describe with those same words in 30 years?',
    gs: ['GS4', 'Essay'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=The+Remains+of+the+Day+1993+trailer',
      wiki: 'https://en.wikipedia.org/wiki/The_Remains_of_the_Day_(film)',
      free: 'https://www.youtube.com/results?search_query=Remains+of+the+Day+1993+full+movie+free'
    }
  },
  {
    id: 'gangs-wasseypur',
    phase: 'phase4',
    title: 'Gangs of Wasseypur',
    year: '2012',
    lang: 'Hindi',
    type: 'film',
    mindset: 'reformer',
    tagline: 'Political economy of power · Coal mafia ecology · Parallel governance systems',
    thumbColor: '#1C1C1C',
    thumbBg: 'linear-gradient(135deg,#0d0d0d,#1C1C1C)',
    scenario: 'Understanding power ecology in any district with entrenched criminal-political networks — critical for UP, Bihar, Jharkhand, Chhattisgarh postings',
    mistake: 'Every "reform" attempt fails because it attacks individual criminals, not the structural conditions (patronage networks, resource extraction economy) that reproduce them. Decapitation strategies fail in network-structured crime.',
    shift: 'In any district with entrenched informal power structures, spend your first 90 days mapping the network — who owes whom, what resources are at stake, who the legitimate community leaders are. Reform requires a map, not a charge.',
    learn: 'The film is essentially a study of how a governance vacuum — specifically in resource extraction (coal) — creates a permanent criminal class that eventually becomes indistinguishable from formal power. The DM who does not understand this ecology will be managed by it.',
    gs: ['GS1', 'GS2', 'GS4'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=Gangs+of+Wasseypur+trailer',
      wiki: 'https://en.wikipedia.org/wiki/Gangs_of_Wasseypur',
      free: 'https://www.youtube.com/results?search_query=Gangs+of+Wasseypur+full+movie+free'
    }
  },
  {
    id: 'social-dilemma',
    phase: 'phase4',
    title: 'The Social Dilemma',
    year: '2020',
    lang: 'English',
    type: 'doc',
    mindset: 'visionary',
    tagline: 'Technology governance · Platform regulation · Algorithmic democracy threats',
    thumbColor: '#0A1628',
    thumbBg: 'linear-gradient(135deg,#060e1a,#0A1628)',
    scenario: 'MEITY, MIB, state IT departments, election commission digital division — any emerging governance challenge around digital public infrastructure, misinformation, social media regulation',
    mistake: 'Every regulator shown in the film was 10 years behind the technology they were supposed to regulate. This is the default failure mode of government-technology engagement — normalcy bias.',
    shift: 'Identify one emerging technology that will create a major governance challenge in India in the next 10 years. Study it deeply enough to regulate it intelligently. Governance gaps in technology are where the next administrative crises will emerge.',
    learn: 'The film makes a sophisticated argument about how incentive structures of platforms diverge from democratic public interest — even without malicious intent. This is a governance design problem, not a moral one. The IAS officer who understands this will regulate differently.',
    gs: ['GS3', 'GS2', 'GS4'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=The+Social+Dilemma+Netflix+trailer',
      wiki: 'https://en.wikipedia.org/wiki/The_Social_Dilemma',
      free: 'https://www.youtube.com/results?search_query=The+Social+Dilemma+full+documentary+Netflix'
    }
  },
  {
    id: 'lagaan',
    phase: 'phase4',
    title: 'Lagaan',
    year: '2001',
    lang: 'Hindi',
    type: 'film',
    mindset: 'leader',
    tagline: 'Coalition building · Diverse team leadership · Strategy under constraint',
    thumbColor: '#3A2800',
    thumbBg: 'linear-gradient(135deg,#241800,#3A2800)',
    scenario: 'Building inter-departmental task forces, managing diverse field teams, mobilising communities across caste and class for a common government programme',
    mistake: 'The film romanticises individual heroism — watch this critically. Real administrative leadership is about building systems that work without heroes. If your programme collapses when you transfer out, you have not built anything.',
    shift: "Judge every programme you design by this question: will this outlast my tenure? If the answer is no, you are building career highlights, not governance.",
    learn: 'The genuine lesson is not Bhuvan\'s heroism — it is the diverse coalition he builds by finding what each person specifically contributes. Kachra is a spinner because he has what looks like a disability. An inclusive team is not a feel-good exercise; it is a strategic advantage.',
    gs: ['GS4', 'GS1'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=Lagaan+2001+trailer+Aamir+Khan',
      wiki: 'https://en.wikipedia.org/wiki/Lagaan',
      free: 'https://www.youtube.com/results?search_query=Lagaan+2001+full+movie+free'
    }
  },
  {
    id: 'swades',
    phase: 'phase4',
    title: 'Swades',
    year: '2004',
    lang: 'Hindi',
    type: 'film',
    mindset: 'visionary',
    tagline: 'Nation-building motivation · Village governance · Caste, electricity, civic apathy',
    thumbColor: '#1A3A1A',
    thumbBg: 'linear-gradient(135deg,#0d200d,#1A3A1A)',
    scenario: 'District Collector role, rural electrification, Jal Jeevan Mission, motivating disengaged communities — any development posting that demands intrinsic motivation rather than career incentives',
    mistake: "Mohan initially tries to fix problems with technology and money. The breakthrough comes when he confronts the caste-based water access denial — a problem no technology solves. He mistakes symptoms (no electricity) for root causes (no civic agency).",
    shift: 'Sustainable motivation for an IAS officer must come from intrinsic commitment to India, not external validation from transfers, promotions, or media coverage.',
    learn: 'The film is the most accurate depiction of what an honest, capable, committed officer actually experiences in rural India — the fatalism, the caste hierarchies, the genuine warmth, the slow pace of change. Watch it as a realistic expectation-setter, not an inspirational fantasy.',
    gs: ['GS1', 'GS2', 'GS4'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=Swades+2004+trailer+Shah+Rukh+Khan',
      wiki: 'https://en.wikipedia.org/wiki/Swades_(film)',
      free: 'https://www.youtube.com/results?search_query=Swades+2004+full+movie+free'
    }
  },
  {
    id: 'shahid',
    phase: 'phase4',
    title: 'Shahid',
    year: '2013',
    lang: 'Hindi',
    type: 'film',
    mindset: 'reformer',
    tagline: 'Human rights lawyering · Personal sacrifice · Constitutional litigation',
    thumbColor: '#1A2E4A',
    thumbBg: 'linear-gradient(135deg,#0d1a2d,#1A2E4A)',
    scenario: 'Public interest litigation, human rights commissions, NHRC postings, any role where you must use institutional mechanisms to fight institutional injustice',
    mistake: 'Shahid loses years to violence before finding the institutional path. The lesson: the cost of extra-institutional action is always personal and almost always preventable with better institutional navigation early.',
    shift: 'Understand when to work within the system and when the system has failed so completely that extra-institutional action becomes necessary. Both are legitimate. Neither is universally correct. The judgment is yours.',
    learn: 'Based on real story of lawyer Shahid Azmi. Shows how human rights lawyering works: building cases brick by brick, using the law as a weapon when all other weapons have failed. Essential reading for anyone considering legal service roles.',
    gs: ['GS2', 'GS4'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=Shahid+2013+film+trailer',
      wiki: 'https://en.wikipedia.org/wiki/Shahid_(film)',
      free: 'https://www.youtube.com/results?search_query=Shahid+2013+full+movie+free'
    }
  },
  {
    id: 'sanju',
    phase: 'phase4',
    title: 'Sanju',
    year: '2018',
    lang: 'Hindi',
    type: 'film',
    mindset: 'leader',
    tagline: 'Media trial · Public rehabilitation · Reputation management',
    thumbColor: '#3A1A4A',
    thumbBg: 'linear-gradient(135deg,#1f0d2d,#3A1A4A)',
    scenario: 'PR crisis management, dealing with media trials, handling celebrity or political scandal fallout, any situation where institutional reputation is under sustained public attack',
    mistake: 'The system and Sanjay both exploit each other — the media needs scandal, he needs publicity. Both benefit from manufactured controversy. The film shows how celebrity culture and media circus are co-dependent systems.',
    shift: 'In any public-facing role, understand the media ecosystem you operate in. Your narrative will be constructed by others unless you actively shape it. Passive communication is not neutral — it is surrender to whoever fills the vacuum.',
    learn: 'While the subject is controversial, the film teaches about media dynamics, public narrative construction, and the cost of institutional reputation damage. Applicable to any officer facing media scrutiny.',
    gs: ['GS4', 'GS2'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=Sanju+2018+film+trailer',
      wiki: 'https://en.wikipedia.org/wiki/Sanju',
      free: 'https://www.youtube.com/results?search_query=Sanju+2018+full+movie+free'
    }
  },
  {
    id: 'ms-dhoni',
    phase: 'phase4',
    title: 'MS Dhoni: The Untold Story',
    year: '2016',
    lang: 'Hindi',
    type: 'film',
    mindset: 'visionary',
    tagline: 'Talent scouting · Institutional patience · Grassroots sports development',
    thumbColor: '#1A4A2E',
    thumbBg: 'linear-gradient(135deg,#0d2d1a,#1A4A2E)',
    scenario: 'District sports officer, talent identification schemes, rural sports development programmes, any role dealing with converting individual talent into institutional capability',
    mistake: "The system almost missed Dhoni — not through malice but through structural bias toward urban, English-speaking talent pipelines. The failure is systemic, not individual. This pattern repeats across every domain.",
    shift: 'Build scouting systems that correct for structural bias. If your talent identification always finds the same type of person, your scouting system is broken — not your luck.',
    learn: 'The film shows how a rural, non-English, cricket-untrained talent was found, developed, and supported by a system that nearly excluded him. Apply to your district: what talents are your systems structurally failing to identify?',
    gs: ['GS1', 'GS4'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=MS+Dhoni+Untold+Story+trailer',
      wiki: 'https://en.wikipedia.org/wiki/MS_Dhoni:_The_Untold_Story',
      free: 'https://www.youtube.com/results?search_query=MS+Dhoni+Untold+Story+full+movie+free'
    }
  },
  {
    id: 'article-15',
    phase: 'phase4',
    title: 'Article 15',
    year: '2019',
    lang: 'Hindi',
    type: 'film',
    mindset: 'reformer',
    tagline: 'Caste discrimination · Dalit rights · Constitutional enforcement',
    thumbColor: '#2E1A4A',
    thumbBg: 'linear-gradient(135deg,#1a0d2d,#2E1A4A)',
    scenario: 'SC/ST Atrocity prevention, district postings with caste-based crimes, any role requiring constitutional enforcement against local power structures',
    mistake: "The officer's mistake: thinking individual action (punishing one perpetrator) can change structural discrimination. The system that produced the crime survives his intervention unchanged. One victory, endless repetition.",
    shift: 'Structural change requires structural intervention — laws, institutions, incentives. Personal courage without institutional strategy is bravery, not reform. Know which you are offering.',
    learn: 'Article 15 of the Constitution prohibits caste discrimination. The film shows how this prohibition exists on paper while caste-based violence and discrimination continue structurally. Your job as an officer: bridge the gap between constitutional promise and ground reality.',
    gs: ['GS1', 'GS2', 'GS4'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=Article+15+2019+film+trailer',
      wiki: 'https://en.wikipedia.org/wiki/Article_15_(film)',
      free: 'https://www.youtube.com/results?search_query=Article+15+2019+full+movie+free'
    }
  },
  {
    id: 'satya',
    phase: 'phase4',
    title: 'Satya',
    year: '1998',
    lang: 'Hindi',
    type: 'film',
    mindset: 'executor',
    tagline: 'Mumbai underworld · Police-politician nexus · Informant ethics',
    thumbColor: '#1A1A1A',
    thumbBg: 'linear-gradient(135deg,#0d0d0d,#2A2A2A)',
    scenario: 'DCP Anti-Terrorist Squad, dealing with criminal-politician networks, using informants in criminal investigations, any posting where law enforcement intersects with political power',
    mistake: "Satya's tragedy: to fight corruption you must first enter the system that made you. The moment he uses underworld contacts for police work, his moral position erodes. There is no clean way to fight dirty.",
    shift: 'Infiltrating corrupt systems requires understanding that contamination is inevitable. Your moral purity before the operation is irrelevant. What matters is whether you emerge with the mission accomplished and your core values intact — not whether you stayed clean throughout.',
    learn: 'The film is a treatise on moral compromise in law enforcement. Every police officer uses methods that compromise them slightly. The question is: at what point does operational necessity become character corruption?',
    gs: ['GS4', 'GS2'],
    links: {
      youtube: 'https://www.youtube.com/results?search_query=Satya+1998+film+trailer',
      wiki: 'https://en.wikipedia.org/wiki/Satya_(film)',
      free: 'https://www.youtube.com/results?search_query=Satya+1998+full+movie+free'
    }
  }
];

// ─── WEEKS ───
const WEEKS = [
  { n:1, color:'#C84B31', theme:'Foundations of Empathy', films:['Manthan (film)','The Motorcycle Diaries (film)'], goal:'Build the habit of seeing governance from the citizen\'s perspective first. Before watching each film, write 3 assumptions you have about "the rural poor." After: check each one.', reflect:'If you were posted to the most remote block in India tomorrow, what three things would you try to understand in the first 30 days — and why those three, not others?', essay:'"Empathy is not a soft skill in administration — it is the foundation of effective policy." Comment.', gs4: true },
  { n:2, color:'#1A6B5A', theme:'Rule of Law Under Pressure', films:['Newton (film)','Ardh Satya (film)'], goal:'Distinguish between procedural integrity and procedural rigidity. Map the difference: Newton is right but sometimes ineffective. The officer in Ardh Satya is effective but compromised.', reflect:'Can you be both procedurally correct AND politically effective simultaneously? Where does that tension become irresolvable? Write a specific scenario.', essay:'"Integrity without efficiency is impotence; efficiency without integrity is corruption." Analyse.', gs4: true },
  { n:3, color:'#E8A838', theme:'Welfare Delivery & Ground Reality', films:['Peepli Live (film)','Bandit Queen (film)'], goal:'Map the gap between policy intent and ground outcome. Identify three structural reasons why welfare schemes fail in the last mile — using specific scenes from these films.', reflect:'Name one government scheme you know. Who are its actual beneficiaries today vs its intended beneficiaries? Why the gap?', essay:'"The measure of a welfare state is not what it promises but what it delivers." Examine.', gs4: true },
  { n:4, color:'#2C3E50', theme:'Institutional Power Dynamics', films:['Yes Minister — Season 1, 3 episodes (series)','The Crown — Episodes 1–3 (series)'], goal:'Understand the structural tension between elected representatives and permanent bureaucracy. Neither is villain. Both have legitimate, conflicting roles. Map these roles.', reflect:'If your minister gives you a legally valid but bad-policy instruction, what exactly do you do? Work through this in writing — not a principle, but the actual sequence of actions.', essay:'"The civil servant\'s loyalty is to the Constitution, not to the government of the day." Discuss.', gs4: true },
  { n:5, color:'#7B4F9E', theme:'Regulatory & Financial Governance', films:['Scam 1992 — Episodes 1–5 (series)'], goal:'Identify the exact moment in the series when regulatory capture begins. Not the dramatic fraud — the first small comfort. Map the incremental steps.', reflect:'In a regulatory role, how do you maintain vigilance when everyone around you says everything is fine and there is no documented evidence of wrongdoing?', essay:'"Regulatory bodies are only as strong as the political will that backs them." Analyse.', gs4: true },
  { n:6, color:'#C84B31', theme:'Political Economy of Reform', films:['Lincoln (film)','Gangs of Wasseypur Part 1 (film)'], goal:'Lincoln for coalition arithmetic. GoW for the ecology of informal power. Together: reform requires both strategic vision AND local political intelligence. Neither alone is enough.', reflect:'Pick one reform India still needs. Map the stakeholders: who benefits from the status quo, who from change, and what specific thing would move the key blockers?', essay:'"Reform is impossible without understanding the political economy of resistance." Examine.', gs4: true },
  { n:7, color:'#1A6B5A', theme:'Crisis Architecture', films:['Thirteen Days (film)','Chernobyl Episodes 1–2 (series)'], goal:'Study the structure of crisis decision-making: information flow, institutional incentives, the danger of hierarchy under time pressure. What structural features make both crises worse?', reflect:'In your district, what is the single most likely crisis in the next 5 years? Do you have a pre-built response architecture for it, or would you be improvising? Be honest.', essay:'"In crisis management, accurate information is more valuable than rapid decision-making." Comment.', gs4: true },
  { n:8, color:'#E8A838', theme:'Judgment vs Procedure', films:['Sully (film)','Hotel Rwanda (film)'], goal:'Understand when procedure serves the mission and when it becomes an obstacle. Both answers are sometimes correct. The skill is knowing which situation you are in.', reflect:'Describe a situation — hypothetical or real — where following the rulebook exactly would produce a clearly worse outcome than using judgment. How do you document and justify that deviation?', essay:'"In administration, judgment without procedure is autocracy; procedure without judgment is bureaucracy." Analyse.', gs4: true },
  { n:9, color:'#2C3E50', theme:'Accountability & Truth-Telling', films:['The Report (film)','The Fog of War (documentary)'], goal:"Study McNamara's 11 lessons. Apply each one to a specific Indian governance scenario. This is a week of strategic reflection, not passive watching. Write the applications.", reflect:"McNamara says: 'Believe you can change the world — but use tools that help you understand the world accurately.' What are your current tools for understanding reality accurately? Name them specifically.", essay:'"Whistleblowers are often the conscience of institutions." Analyse the challenges they face.', gs4: true },
  { n:10, color:'#7B4F9E', theme:'Vision & Nation-Building', films:['Gandhi (film)','Manthan — rewatch with new lens'], goal:"First watch of Manthan was about empathy. Rewatch as a question of institution-building. What exactly did Kurien build that survived him? Not philosophically — architecturally. What structures?", reflect:'Write one page — specific, not vague: What is the India you want to help build? What does it look like in 2047? What is your specific role? This is not an essay question. It is the question.', essay:'"A civil servant must have a vision beyond the immediate mandate." How does this help governance?', gs4: true },
  { n:11, color:'#C84B31', theme:'Technology & Emerging Governance', films:['The Social Dilemma (documentary)','Scam 1992 — Final episodes'], goal:'Map the governance gaps in India\'s digital economy. Where is regulation 10 years behind the technology? What should an IAS officer at MEITY or a state IT department actually know?', reflect:'Name one technology that will create a major governance challenge in India in the next 10 years. What would good regulation of it look like? Be specific about the regulatory architecture.', essay:'"Technology governance requires both technical understanding and ethical frameworks." Analyse.', gs4: true },
  { n:12, color:'#1A6B5A', theme:'The Officer You Choose to Become', films:['The Remains of the Day (film)','Lagaan — with critical eye'], goal:'Integration week. Stevens is the cautionary tale: institutional loyalty without moral judgment. Bhuvan is the romantic ideal. Neither is a complete template. Build your own.', reflect:"Write your 'Officer's Manifesto' — 5 principles by which you will govern. Not borrowed. Drawn from what you have processed over 12 weeks. Not for the examiner. For yourself. This is your real preparation.", essay:'"The test of a civil servant is not what they do under observation but what they do when no one is watching." Comment.', gs4: true }
];

// ─── ARCHETYPES ───
const ARCHETYPES = [
  { name:'The Executor', color:'#C84B31', def:"Gets things done within the system. Strong on process, discipline, and implementation. Risk: becomes a tool of the system rather than its conscience — executing perfectly in the wrong direction.", films:['Newton','Sully','Chernobyl (warning)'] },
  { name:'The Reformer', color:'#1A6B5A', def:"Challenges how the system works. Questions inherited assumptions. Willing to take career risks for institutional change. Risk: becomes ineffective without coalition-building skills.", films:['Manthan','Bandit Queen','The Report','Jai Bhim'] },
  { name:'The Leader', color:'#2C3E50', def:"Builds institutions and coalitions that outlast individual postings. Thinks in decades, not years. Risk: becomes so focused on systems that they lose sight of the immediate human in front of them.", films:['Lincoln','Yes Minister','Gandhi','Hotel Rwanda'] },
  { name:'The Visionary', color:'#7B4F9E', def:"Sees where governance needs to go before others do. Comfortable with institutional loneliness. Risk: outpaces the institution's capacity to follow and becomes isolated from execution.", films:['Fog of War','Social Dilemma','Inconvenient Truth','Swades'] }
];

// ─── TRAPS ───
const TRAPS = [
  { title:"'I follow orders' trap", source:"The Remains of the Day", text:"Stevens enabled catastrophe through perfect institutional loyalty. The trap: treating 'my job is to implement, not judge' as a moral position. It is not. It is moral abdication dressed as professionalism." },
  { title:"Input-output confusion", source:"Peepli Live + Fog of War", text:"McNamara counted bodies. Officials counted scheme disbursements. Neither measured the actual outcome. Classic administrative disease: measurable proxies replace real impact. The disbursement happens; the farmer still loses the land." },
  { title:"Corridor whispering trap", source:"Yes Minister", text:"Humphrey defeats every reform by controlling information that reaches Hacker. If your information environment is curated by people with opposing interests, your decisions are already compromised before you make them." },
  { title:"The heroism trap", source:"Lagaan + Newton", text:"Both films accidentally teach the wrong lesson. Bhuvan wins the match. Newton holds the election. Neither builds a system. The officer's job is to build systems that work without heroes — especially without themselves." },
  { title:"One more compromise spiral", source:"Ardh Satya + Scam 1992", text:"Corruption and regulatory capture both work identically: incrementally, each step seeming small and reasonable. There is no single dramatic moment of corruption. Only the 47th small compromise after 46 previous ones." },
  { title:"Reactive governance trap", source:"Bandit Queen + Gangs of Wasseypur", text:"Attacking symptoms (individual criminals, individual injustices) without addressing structural conditions is expensive and ultimately futile. Real reform requires mapping root causes, not just filing cases." }
];

// ═══════════════════════════════════════════════════════════
// LOCAL STORAGE & STATE MANAGEMENT
// ═══════════════════════════════════════════════════════════

let userData = {
  watchlist: [],
  notes: {},
  weeklyProgress: {},
  currentWeek: 1,
  theme: 'dark'
};

function loadUserData() {
  try {
    const saved = localStorage.getItem('csMindsetData');
    if (saved) {
      userData = JSON.parse(saved);
    }
  } catch (e) {
    console.log('LocalStorage not available');
  }
}

function saveUserData() {
  try {
    localStorage.setItem('csMindsetData', JSON.stringify(userData));
  } catch (e) {
    console.log('Could not save to localStorage');
  }
}

function toggleWatchlist(filmId) {
  const idx = userData.watchlist.indexOf(filmId);
  if (idx === -1) {
    userData.watchlist.push(filmId);
  } else {
    userData.watchlist.splice(idx, 1);
  }
  saveUserData();
  updateWatchlistUI();
  renderFilmsGrid(currentFilter, currentSearch);
}

function isInWatchlist(filmId) {
  return userData.watchlist.includes(filmId);
}

function updateWatchlistUI() {
  const count = userData.watchlist.length;
  const badge = document.getElementById('watchlistBadge');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'inline' : 'none';
  }
}

function saveNote(filmId, note) {
  userData.notes[filmId] = note;
  saveUserData();
}

function getNote(filmId) {
  return userData.notes[filmId] || '';
}

function toggleWeekComplete(weekNum) {
  userData.weeklyProgress[weekNum] = !userData.weeklyProgress[weekNum];
  saveUserData();
  renderWeekPlan();
  updateOverallProgress();
}

function isWeekComplete(weekNum) {
  return userData.weeklyProgress[weekNum] === true;
}

function updateOverallProgress() {
  const completed = Object.values(userData.weeklyProgress).filter(v => v).length;
  const total = WEEKS.length;
  const percent = Math.round((completed / total) * 100);
  
  const progressBar = document.getElementById('overallProgressBar');
  const progressText = document.getElementById('overallProgressText');
  const progressPercent = document.getElementById('overallProgressPercent');
  
  if (progressBar) progressBar.style.width = percent + '%';
  if (progressPercent) progressPercent.textContent = percent + '%';
  if (progressText) progressText.textContent = `${completed}/${total} weeks completed`;
}

function toggleTheme() {
  userData.theme = userData.theme === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', userData.theme);
  saveUserData();
  updateThemeToggle();
}

function updateThemeToggle() {
  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.textContent = userData.theme === 'dark' ? '☀' : '☽';
  }
}

// ═══════════════════════════════════════════════════════════
// RENDERING
// ═══════════════════════════════════════════════════════════

let currentFilter = 'all';
let currentSearch = '';
let currentMindset = 'all';
let currentGS = 'all';
let currentSort = 'default';

function renderFilmCard(f) {
  const phaseColors = { phase1: '#C84B31', phase2: '#1A6B5A', phase3: '#2C3E50', phase4: '#7B4F9E' };
  const phaseColor = phaseColors[f.phase] || '#C84B31';
  const mindsetClass = `m-${f.mindset}`;
  const typeClass = `type-${f.type}`;
  const typeLabel = f.type === 'film' ? 'Film' : f.type === 'doc' ? 'Documentary' : 'Series';
  const phaseLabel = f.phase.replace('phase', 'Phase ');
  const inWatchlist = isInWatchlist(f.id);
  const watchlistClass = inWatchlist ? 'watchlisted' : '';
  const savedNote = getNote(f.id);
  const difficultyColors = { beginner: '#1A6B5A', intermediate: '#E8A838', advanced: '#C84B31' };
  const difficultyColor = difficultyColors[f.difficulty] || '#8B9BA8';

  return `
  <div class="film-card ${watchlistClass}" data-phase="${f.phase}" data-type="${f.type}" data-title="${f.title.toLowerCase()}" data-tagline="${f.tagline.toLowerCase()}" data-mindset="${f.mindset}">
    <div class="film-thumb" style="background:${f.thumbBg}; position:relative; overflow:hidden;">
      <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;text-align:center;">
        <div style="font-family:'Playfair Display',serif;font-size:clamp(16px,3vw,26px);color:#fff;font-weight:700;line-height:1.15;margin-bottom:6px;">${f.title}</div>
        <div style="font-family:'Space Mono',monospace;font-size:11px;color:rgba(255,255,255,0.55);">${f.year} · ${f.lang}</div>
        ${f.watchTime ? `<div style="font-family:'Space Mono',monospace;font-size:10px;color:rgba(255,255,255,0.45);margin-top:4px;">⏱ ${f.watchTime}</div>` : ''}
      </div>
      <button class="watchlist-btn ${inWatchlist ? 'active' : ''}" onclick="event.stopPropagation(); toggleWatchlist('${f.id}')" title="${inWatchlist ? 'Remove from watchlist' : 'Add to watchlist'}">
        ${inWatchlist ? '★' : '☆'}
      </button>
      <div style="position:absolute;bottom:0;left:0;right:0;height:3px;background:${phaseColor};"></div>
    </div>
    <div class="film-type-bar">
      <span class="type-pill ${typeClass}">${typeLabel}</span>
      <span class="mindset-pill ${mindsetClass}">${f.mindset}</span>
      ${f.difficulty ? `<span style="font-size:9px;padding:2px 6px;background:${difficultyColor}20;color:${difficultyColor};border-radius:2px;font-family:'Space Mono',monospace;">${f.difficulty}</span>` : ''}
    </div>
    <div class="film-body">
      <div class="film-title">${f.title}</div>
      <div class="film-tagline">${f.tagline}</div>

      <div class="film-section">
        <div class="film-section-label">What it teaches</div>
        <div class="film-section-text">${f.learn}</div>
      </div>

      <div class="film-section">
        <div class="film-section-label">Real admin scenario</div>
        <div class="film-section-text">${f.scenario}</div>
      </div>

      <div class="film-section">
        <div class="film-section-label">Mistake to avoid</div>
        <div class="film-section-text film-warn">${f.mistake}</div>
      </div>

      <div class="film-section">
        <div class="film-section-label">Think differently after</div>
        <div class="film-section-text film-shift">${f.shift}</div>
      </div>

      <div style="display:flex;gap:6px;flex-wrap:wrap;margin:10px 0 0;">
        ${f.gs.map(g => `<span class="gs-tag" data-gs="${g}">${g}</span>`).join('')}
        <span style="font-size:10px;padding:2px 8px;background:${phaseColor}20;color:${phaseColor};font-family:'Space Mono',monospace;border-radius:2px;">${phaseLabel}</span>
      </div>

      ${savedNote ? `<div class="film-section saved-note"><div class="film-section-label">Your Notes</div><div class="film-section-text">${savedNote}</div></div>` : ''}

      <div class="film-links">
        <a class="film-link link-yt" href="${f.links.youtube}" target="_blank" rel="noopener">
          <span class="link-icon">▶</span> Trailer / Clips
        </a>
        <a class="film-link link-wiki" href="${f.links.wiki}" target="_blank" rel="noopener">
          <span class="link-icon">◈</span> Deep Info
        </a>
        <a class="film-link link-free" href="${f.links.free}" target="_blank" rel="noopener">
          <span class="link-icon">⬇</span> Watch Free
        </a>
      </div>
      
      <button class="note-btn" onclick="openNoteModal('${f.id}', '${f.title.replace(/'/g, "\\'")}')">
        ${savedNote ? '✎ Edit Notes' : '✎ Add Notes'}
      </button>
    </div>
  </div>`;
}

function renderFilmsGrid(filter = 'all', search = '') {
  const grid = document.getElementById('filmsGrid');
  const noResults = document.getElementById('noResults');
  if (!grid) return;

  let filtered = FILMS.filter(f => {
    const matchFilter = filter === 'all' || f.phase === filter || f.type === filter;
    const matchSearch = !search || f.title.toLowerCase().includes(search) || f.tagline.toLowerCase().includes(search) || f.scenario.toLowerCase().includes(search) || f.mindset.includes(search);
    const matchMindset = currentMindset === 'all' || f.mindset === currentMindset;
    const matchGS = currentGS === 'all' || f.gs.includes(currentGS);
    return matchFilter && matchSearch && matchMindset && matchGS;
  });

  if (currentSort === 'title') {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (currentSort === 'year') {
    filtered.sort((a, b) => b.year.localeCompare(a.year));
  }

  const totalCount = document.getElementById('totalFilmCount');
  if (totalCount) totalCount.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
    grid.innerHTML = filtered.map(renderFilmCard).join('');
  }
}

function filterFilms(filter, btn) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderFilmsGrid(filter, currentSearch);
}

function filterByMindset(mindset, btn) {
  currentMindset = mindset;
  if (btn) {
    document.querySelectorAll('.mindset-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  renderFilmsGrid(currentFilter, currentSearch);
}

function filterByGS(gs, btn) {
  currentGS = gs;
  if (btn) {
    document.querySelectorAll('.gs-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  renderFilmsGrid(currentFilter, currentSearch);
}

function sortFilms(sortBy, btn) {
  currentSort = sortBy;
  if (btn) {
    document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  renderFilmsGrid(currentFilter, currentSearch);
}

function searchFilms(val) {
  currentSearch = val.toLowerCase();
  renderFilmsGrid(currentFilter, currentSearch);
}

function openNoteModal(filmId, filmTitle) {
  const modal = document.getElementById('noteModal');
  const textarea = document.getElementById('noteTextarea');
  const title = document.getElementById('noteModalTitle');
  
  if (modal && textarea && title) {
    title.textContent = `Notes: ${filmTitle}`;
    textarea.value = getNote(filmId);
    modal.dataset.filmId = filmId;
    modal.style.display = 'flex';
  }
}

function closeNoteModal() {
  const modal = document.getElementById('noteModal');
  if (modal) modal.style.display = 'none';
}

function saveNoteFromModal() {
  const modal = document.getElementById('noteModal');
  const textarea = document.getElementById('noteTextarea');
  if (modal && textarea) {
    saveNote(modal.dataset.filmId, textarea.value);
    closeNoteModal();
    renderFilmsGrid(currentFilter, currentSearch);
  }
}

function renderWeekPlan() {
  const el = document.getElementById('weekTimeline');
  if (!el) return;
  const phaseColors = ['#C84B31','#C84B31','#C84B31','#1A6B5A','#1A6B5A','#1A6B5A','#2C3E50','#2C3E50','#2C3E50','#7B4F9E','#7B4F9E','#7B4F9E'];
  el.innerHTML = WEEKS.map((w, i) => {
    const c = phaseColors[i];
    const completed = isWeekComplete(w.n);
    const completedClass = completed ? 'week-completed' : '';
    return `
    <div class="week-row ${completedClass}" data-week="${w.n}">
      <div class="week-num-col" style="border-right-color:${c}">
        <div class="week-num" style="color:${c}">${String(w.n).padStart(2,'0')}</div>
        <div class="week-label">Week</div>
        <button class="week-check-btn ${completed ? 'checked' : ''}" onclick="toggleWeekComplete(${w.n})" title="${completed ? 'Mark incomplete' : 'Mark complete'}">
          ${completed ? '✓' : '○'}
        </button>
      </div>
      <div class="week-content">
        <div class="week-header">
          <div class="week-theme">${w.theme}</div>
          ${w.gs4 ? '<span class="gs4-badge">GS4 Essay</span>' : ''}
        </div>
        <div class="week-films-list">${w.films.map(f => `<span style="display:inline-block;background:${c}15;color:${c};font-size:11px;padding:2px 8px;border-radius:2px;margin-right:6px;margin-bottom:4px;font-family:'Space Mono',monospace;">${f}</span>`).join('')}</div>
        <div class="week-goal-text">${w.goal}</div>
        ${w.essay ? `<div class="week-essay"><strong>GS4 Essay Prompt:</strong> ${w.essay}</div>` : ''}
        <div class="week-reflect">${w.reflect}</div>
      </div>
    </div>`;
  }).join('');
  updateOverallProgress();
}

function renderArchetypes() {
  const el = document.getElementById('archetypeGrid');
  if (!el) return;
  el.innerHTML = ARCHETYPES.map(a => `
    <div class="archetype-card">
      <div class="arch-accent" style="background:${a.color}"></div>
      <div class="arch-name">${a.name}</div>
      <div class="arch-desc">${a.def}</div>
      <div class="arch-films">${a.films.map(f => `<span class="arch-film-tag">${f}</span>`).join('')}</div>
    </div>`
  ).join('');
}

function renderTraps() {
  const el = document.getElementById('trapGrid');
  if (!el) return;
  el.innerHTML = TRAPS.map(t => `
    <div class="trap-card">
      <div class="trap-title">${t.title}</div>
      <div style="font-family:'Space Mono',monospace;font-size:10px;color:var(--mist);margin-bottom:6px;">${t.source}</div>
      <div class="trap-text">${t.text}</div>
    </div>`
  ).join('');
}

// ═══════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
  const page = document.getElementById('page-' + pageId);
  if (page) {
    page.classList.add('active');
    window.scrollTo(0, 0);
  }
  const navBtn = document.querySelector(`.nav-link[onclick*="'${pageId}'"]`);
  if (navBtn) navBtn.classList.add('active');

  // Mobile menu close
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) mobileMenu.classList.remove('open');

  // Lazy render
  if (pageId === 'films') renderFilmsGrid(currentFilter, currentSearch);
  if (pageId === 'plan') renderWeekPlan();
  if (pageId === 'mindset') { renderArchetypes(); renderTraps(); }
  if (pageId === 'watchlist') renderWatchlistPage();
  if (pageId === 'progress') renderProgressPage();
  if (pageId === 'essay') renderEssayPage();
}

function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('open');
  }
}

function renderWatchlistPage() {
  const el = document.getElementById('watchlistContent');
  if (!el) return;
  
  const watchlistFilms = FILMS.filter(f => isInWatchlist(f.id));
  
  if (watchlistFilms.length === 0) {
    el.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">☆</div>
        <h3>Your watchlist is empty</h3>
        <p>Browse films and click the ☆ icon to add them to your watchlist.</p>
        <button class="btn-primary" onclick="showPage('films')">Browse Films</button>
      </div>
    `;
  } else {
    el.innerHTML = `
      <div class="section-label">Your Personal Watchlist</div>
      <p class="section-desc">${watchlistFilms.length} films in your watchlist</p>
      <div class="films-grid" style="margin-top:24px">
        ${watchlistFilms.map(renderFilmCard).join('')}
      </div>
    `;
  }
}

function renderProgressPage() {
  const el = document.getElementById('progressContent');
  if (!el) return;
  
  const completedWeeks = Object.entries(userData.weeklyProgress).filter(([k, v]) => v).length;
  const totalWeeks = WEEKS.length;
  const percent = Math.round((completedWeeks / totalWeeks) * 100);
  
  const watchlistCount = userData.watchlist.length;
  const notesCount = Object.keys(userData.notes).length;
  
  el.innerHTML = `
    <div class="progress-dashboard">
      <div class="progress-card main-progress">
        <div class="progress-circle" style="--percent: ${percent}">
          <span class="progress-value">${percent}%</span>
        </div>
        <div class="progress-details">
          <h3>Overall Progress</h3>
          <p>${completedWeeks} of ${totalWeeks} weeks completed</p>
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill" style="width: ${percent}%"></div>
          </div>
        </div>
      </div>
      
      <div class="stats-row">
        <div class="stat-card">
          <div class="stat-num">${watchlistCount}</div>
          <div class="stat-label">Films in Watchlist</div>
        </div>
        <div class="stat-card">
          <div class="stat-num">${notesCount}</div>
          <div class="stat-label">Notes Written</div>
        </div>
        <div class="stat-card">
          <div class="stat-num">${FILMS.length}</div>
          <div class="stat-label">Total Films</div>
        </div>
      </div>
      
      <div class="reset-section">
        <button class="reset-btn" onclick="resetProgress()">Reset All Progress</button>
      </div>
    </div>
  `;
}

function resetProgress() {
  if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
    userData = {
      watchlist: [],
      notes: {},
      weeklyProgress: {},
      currentWeek: 1,
      theme: userData.theme
    };
    saveUserData();
    renderProgressPage();
    renderWeekPlan();
    updateWatchlistUI();
  }
}

function renderEssayPage() {
  const el = document.getElementById('essayContent');
  if (!el) return;
  
  const gs4Weeks = WEEKS.filter(w => w.gs4);
  
  el.innerHTML = `
    <div class="section-label">GS4 Ethics — Essay Prompts</div>
    <h2 class="section-title">12 Essay Questions from the Curriculum</h2>
    <p class="section-desc">Each question is drawn directly from the week's film analysis. Practice writing these as full essays — not outlines.</p>
    
    <div class="essay-list">
      ${gs4Weeks.map(w => `
        <div class="essay-card" onclick="showPage('plan')">
          <div class="essay-week">Week ${w.n}</div>
          <div class="essay-theme">${w.theme}</div>
          <div class="essay-question">${w.essay}</div>
        </div>
      `).join('')}
    </div>
    
    <div class="essay-guide">
      <h3>Essay Writing Tips</h3>
      <ul>
        <li>Start with a clear thesis statement in the introduction</li>
        <li>Use real administrative examples (not just films) in your answer</li>
        <li>Address both sides of the argument before presenting your view</li>
        <li>Conclude with a forward-looking perspective on governance</li>
        <li>Aim for 1000-1200 words with proper structure</li>
      </ul>
    </div>
  `;
}

// ═══════════════════════════════════════════════════════════
// SCROLL ANIMATIONS
// ═══════════════════════════════════════════════════════════

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

function observeFadeUps() {
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  loadUserData();
  updateWatchlistUI();
  updateThemeToggle();
  updateOverallProgress();
  observeFadeUps();
  
  if (userData.theme === 'light') {
    document.body.setAttribute('data-theme', 'light');
  }
  
  // Update hero count
  const heroCount = document.getElementById('heroFilmsCount');
  if (heroCount) heroCount.textContent = FILMS.length;
  
  // Pre-render films so filter works immediately
  renderFilmsGrid('all', '');
  
  // GS tag click handler
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('gs-tag')) {
      const gsValue = e.target.dataset.gs;
      filterByGS(gsValue);
      showPage('films');
      document.getElementById('filmSearch').value = '';
      currentSearch = '';
    }
  });
});
