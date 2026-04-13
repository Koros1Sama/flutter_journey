import { useState, useEffect, useRef } from 'react'

/* =============================================
   Flutter Journey — Phase 0: The Engine Room
   Interactive Learning Platform
   ============================================= */

// --- Sidebar Component ---
function Sidebar({ activeSection, onNavigate }) {
  const phases = [
    { id: 'phase0', label: 'المحرك — كيف يعمل Flutter', icon: '⚙️', status: 'current' },
    { id: 'phase1', label: 'Dart كلغة — أدواتك', icon: '🎯', status: 'locked' },
    { id: 'phase2', label: 'Flutter كنظام', icon: '🧱', status: 'locked' },
    { id: 'phase3', label: 'الهيكلية المعمارية', icon: '🏗️', status: 'locked' },
    { id: 'phase4', label: 'المشروع التطبيقي', icon: '🚀', status: 'locked' },
  ]

  const sections = [
    { id: 'intro', label: 'لماذا هذه المرحلة؟', icon: '📌' },
    { id: 'comparison', label: 'المقارنة مع الآخرين', icon: '⚔️' },
    { id: 'architecture', label: 'الطبقات الثلاث', icon: '🏛️' },
    { id: 'compilation', label: 'كيف يُترجم الكود', icon: '⚡' },
    { id: 'trees', label: 'الأشجار الثلاث', icon: '🌳' },
    { id: 'quiz', label: 'اختبر فهمك', icon: '🧪' },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">🦋</div>
        <div>
          <h1>رحلة Flutter</h1>
          <div className="subtitle">تعلم من المبادئ الأولى</div>
        </div>
      </div>

      <div className="nav-section-title">المراحل</div>
      {phases.map(phase => (
        <div
          key={phase.id}
          className={`nav-item ${phase.id === 'phase0' ? 'active' : ''}`}
          onClick={() => phase.status === 'current' && onNavigate('intro')}
        >
          <span className="nav-icon">{phase.icon}</span>
          <span>{phase.label}</span>
          <span className={`nav-badge ${phase.status}`}>
            {phase.status === 'current' ? 'الحالية' : '🔒'}
          </span>
        </div>
      ))}

      <div className="nav-section-title">المرحلة الحالية</div>
      {sections.map(sec => (
        <div
          key={sec.id}
          className={`nav-item ${activeSection === sec.id ? 'active' : ''}`}
          onClick={() => onNavigate(sec.id)}
        >
          <span className="nav-icon">{sec.icon}</span>
          <span>{sec.label}</span>
        </div>
      ))}

      <div className="sidebar-progress">
        <div className="progress-label">
          <span>تقدمك الكلي</span>
          <span>المرحلة 0 من 4</span>
        </div>
        <div className="progress-bar-track">
          <div className="progress-bar-fill" style={{ width: '5%' }}></div>
        </div>
      </div>
    </aside>
  )
}

// --- Interactive Architecture Diagram ---
function ArchitectureDiagram() {
  const [activeLayer, setActiveLayer] = useState(null)

  const layerDetails = {
    framework: {
      title: '🎨 طبقة الإطار — Framework Layer',
      color: 'var(--accent-primary)',
      content: (
        <>
          <p>
            <strong>هذي الطبقة اللي أنت تتعامل معاها كمبرمج.</strong> كل كود Dart تكتبه يعيش هنا.
          </p>
          <p>تحتوي على:</p>
          <ul>
            <li><strong>Widgets</strong> — المكعبات اللي تبني بها الواجهة (زي LEGO)</li>
            <li><strong>Rendering</strong> — النظام اللي يحسب الأحجام والمواقع</li>
            <li><strong>Animation</strong> — محرك الحركات والتأثيرات</li>
            <li><strong>Gestures</strong> — نظام اللمس والتفاعل</li>
            <li><strong>Material / Cupertino</strong> — تصاميم جاهزة لـ Android و iOS</li>
          </ul>
          <p>
            <strong>الفكرة المهمة:</strong> كل Widget ما هو إلا "وصف" لما تريد رؤيته. هو <em>ما يرسم نفسه</em>. هو بس يقول: "أنا صندوق أحمر بعرض 100". والطبقة اللي تحته هي اللي ترسم فعلاً.
          </p>
        </>
      )
    },
    engine: {
      title: '⚙️ طبقة المحرك — Engine Layer',
      color: 'var(--accent-tertiary)',
      content: (
        <>
          <p>
            <strong>هذا قلب Flutter.</strong> مكتوب بلغة C++، وهنا السحر الحقيقي يحصل.
          </p>
          <p>يحتوي على:</p>
          <ul>
            <li><strong>Skia / Impeller</strong> — محرك الرسم. مثل كرت الشاشة الافتراضي، يرسم كل بكسل على الشاشة</li>
            <li><strong>Dart Runtime</strong> — البيئة اللي تشغل كود Dart الخاص بك</li>
            <li><strong>Text Layout</strong> — محرك تنسيق النصوص</li>
            <li><strong>Platform Channels</strong> — "الجسر" للتواصل مع النظام الأصلي</li>
          </ul>
          <p>
            <strong>لماذا هذا مهم؟</strong> لأن Flutter ما يستعير أزرار Android ولا أزرار iOS. هو <em>يرسم كل شيء بنفسه</em> بكسل ببكسل عبر Skia/Impeller. هذا يعني تطبيقك يظهر <strong>متطابق 100%</strong> على كل منصة.
          </p>
        </>
      )
    },
    embedder: {
      title: '📱 طبقة التضمين — Embedder Layer',
      color: 'var(--accent-success)',
      content: (
        <>
          <p>
            <strong>هذي الطبقة اللي تربط Flutter بالنظام الفعلي</strong> (Android, iOS, Windows, Web...).
          </p>
          <p>مسؤولة عن:</p>
          <ul>
            <li><strong>إنشاء النافذة/Surface</strong> — تقول للنظام "عطني مساحة أرسم عليها"</li>
            <li><strong>إدخال المستخدم</strong> — تستقبل اللمسات ولوحة المفاتيح وتمررها لـ Flutter</li>
            <li><strong>Event Loop</strong> — حلقة الأحداث اللي تدير التفاعل</li>
            <li><strong>Platform-specific APIs</strong> — الكاميرا، GPS، البطارية... إلخ</li>
          </ul>
          <p>
            <strong>فكر فيها كذا:</strong> Flutter مثل فنان. Embedder هو اللي يجهز له الكنفس (اللوحة) والألوان. الفنان ما يهتم هل اللوحة على حائط في بيت (Android) أو معرض (iOS) — هو يرسم بنفس الطريقة.
          </p>
        </>
      )
    }
  }

  return (
    <div className="architecture-diagram" id="architecture">
      <div className="diagram-title">🏛️ هيكلية Flutter — اضغط على كل طبقة لاستكشافها</div>
      <div className="diagram-hint">كل طبقة مسؤولة عن شيء محدد. اضغط لتعرف التفاصيل ↓</div>

      <div className="layers-stack">
        <div
          className={`layer-block framework ${activeLayer === 'framework' ? 'active' : ''}`}
          onClick={() => setActiveLayer(activeLayer === 'framework' ? null : 'framework')}
        >
          <div className="layer-label">🎨 Framework — الإطار</div>
          <div className="layer-tech">Dart — Widgets, Animation, Gestures</div>
        </div>

        <div className="layer-arrow">▼</div>

        <div
          className={`layer-block engine ${activeLayer === 'engine' ? 'active' : ''}`}
          onClick={() => setActiveLayer(activeLayer === 'engine' ? null : 'engine')}
        >
          <div className="layer-label">⚙️ Engine — المحرك</div>
          <div className="layer-tech">C++ — Skia/Impeller, Dart VM</div>
        </div>

        <div className="layer-arrow">▼</div>

        <div
          className={`layer-block embedder ${activeLayer === 'embedder' ? 'active' : ''}`}
          onClick={() => setActiveLayer(activeLayer === 'embedder' ? null : 'embedder')}
        >
          <div className="layer-label">📱 Embedder — طبقة التضمين</div>
          <div className="layer-tech">Platform-specific — Android, iOS, Web</div>
        </div>
      </div>

      {activeLayer && (
        <div className="layer-detail-panel fade-in" style={{ borderRightColor: layerDetails[activeLayer].color, borderRight: `3px solid ${layerDetails[activeLayer].color}` }}>
          <h4>{layerDetails[activeLayer].title}</h4>
          {layerDetails[activeLayer].content}
        </div>
      )}
    </div>
  )
}

// --- Compilation Flow Diagram ---
function CompilationFlow() {
  const [mode, setMode] = useState('jit')

  const flows = {
    jit: {
      title: 'JIT — وقت التطوير',
      steps: [
        { icon: '📝', label: 'كود Dart', desc: 'تكتب الكود' },
        { icon: '🔄', label: 'JIT Compiler', desc: 'يترجم فوري' },
        { icon: '🖥️', label: 'Dart VM', desc: 'ينفذ مباشرة' },
        { icon: '🔥', label: 'Hot Reload', desc: 'تغييرات لحظية!' },
      ]
    },
    aot: {
      title: 'AOT — وقت الإنتاج',
      steps: [
        { icon: '📝', label: 'كود Dart', desc: 'الكود الجاهز' },
        { icon: '⚡', label: 'AOT Compiler', desc: 'ترجمة مسبقة' },
        { icon: '💾', label: 'Native Code', desc: 'كود آلة أصلي' },
        { icon: '🚀', label: 'أداء عالي', desc: 'سرعة قصوى!' },
      ]
    }
  }

  const current = flows[mode]

  return (
    <div className="compilation-flow" id="compilation">
      <div className="diagram-title">⚡ كيف يُترجم كود Dart؟</div>
      <div className="diagram-hint">
        Dart تستخدم نظامين للترجمة — واحد للتطوير وواحد للإنتاج. اضغط للمقارنة.
      </div>

      <div className="flow-tabs">
        <button
          className={`flow-tab ${mode === 'jit' ? 'active-jit' : ''}`}
          onClick={() => setMode('jit')}
        >
          🟢 JIT — التطوير
        </button>
        <button
          className={`flow-tab ${mode === 'aot' ? 'active-aot' : ''}`}
          onClick={() => setMode('aot')}
        >
          🟠 AOT — الإنتاج
        </button>
      </div>

      <div className="flow-steps" key={mode}>
        {current.steps.map((step, i) => (
          <>
            <div className="flow-step fade-in" key={`step-${i}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flow-step-icon">{step.icon}</div>
              <div className="flow-step-label">{step.label}</div>
              <div className="flow-step-desc">{step.desc}</div>
            </div>
            {i < current.steps.length - 1 && (
              <div className="flow-arrow" key={`arrow-${i}`}>←</div>
            )}
          </>
        ))}
      </div>

      <div className="analogy-box" style={{ marginTop: '24px' }}>
        <div className="analogy-label">تشبيه للفهم</div>
        <div className="analogy-text">
          {mode === 'jit' ? (
            <>
              <strong>JIT مثل مترجم فوري:</strong> يترجم كل جملة لحظة ما تنطقها. مريح لأنك تقدر تعدل وتسمع النتيجة فوراً (Hot Reload). لكنه أبطأ لأنه يترجم كل مرة.
              <br /><br />
              <strong>لماذا هذا مهم لك؟</strong> عشان كذا لما تكتب كود وتحفظ، التطبيق يتحدث فوراً بدون ما يعيد التشغيل. هذا يختصر وقت التطوير بشكل جنوني.
            </>
          ) : (
            <>
              <strong>AOT مثل ترجمة كتاب كامل:</strong> تاخذ وقت أطول في البداية، لكن النتيجة النهائية سريعة جداً لأن كل شيء مترجم مسبقاً وجاهز.
              <br /><br />
              <strong>لماذا هذا مهم لك؟</strong> لما تبني التطبيق النهائي (APK/IPA)، Dart يتحول لكود آلة أصلي. ما فيه VM أو مترجم يبطئ التطبيق. هذا سبب إن تطبيقات Flutter سريعة مثل تطبيقات Native.
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// --- Three Trees Explorer ---
function ThreeTrees() {
  const [activeTree, setActiveTree] = useState(null)

  const treeData = {
    widget: {
      emoji: '📋',
      name: 'Widget Tree',
      nameAr: 'شجرة الـ Widgets',
      role: 'الوصف / المخطط',
      detail: {
        title: '📋 Widget Tree — شجرة الوصف',
        content: (
          <>
            <p>
              <strong>فكر فيها مثل مخطط معماري (Blueprint).</strong>
            </p>
            <p>
              الـ Widget ما هو إلا <strong>وصف</strong> لما تريده على الشاشة. هو ما يرسم نفسه وما يحتفظ بحالة.
              كل مرة تستدعي <code>setState()</code>، Flutter يبني شجرة Widgets <strong>جديدة كاملة</strong>.
            </p>
            <p>
              <strong>لكن!</strong> هل يعني هذا إنه بطيء؟ لا، لأن الـ Widgets "خفيفة" جداً — هي مجرد كائنات بسيطة في الذاكرة.
              القرار الحقيقي يحصل في الشجرة الثانية (Element Tree).
            </p>
            <p style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>
              🔗 مشابه لمفهوم Virtual DOM في React — بس Flutter يروح أبعد.
            </p>
          </>
        )
      }
    },
    element: {
      emoji: '🔗',
      name: 'Element Tree',
      nameAr: 'شجرة العناصر',
      role: 'الإدارة / القرارات',
      detail: {
        title: '🔗 Element Tree — شجرة الإدارة',
        content: (
          <>
            <p>
              <strong>هذي هي "الدماغ" الحقيقي.</strong>
            </p>
            <p>
              لما Flutter يستقبل Widget Tree جديدة، ما يرمي كل شيء ويبدأ من الصفر.
              بدل كذا، Element Tree <strong>يقارن</strong> الشجرة القديمة بالجديدة ويقرر:
            </p>
            <ul>
              <li>هل هذا Widget نفسه؟ → <strong>حدّث فقط الخصائص</strong> (مثلاً غيّر اللون)</li>
              <li>هل هذا Widget مختلف? → <strong>أنشئ Element جديد</strong></li>
            </ul>
            <p>
              <strong>هنا تفهم ليش Flutter سريع:</strong> ما يعيد رسم الشاشة كاملة. يعيد رسم <em>فقط</em> اللي تغير.
            </p>
            <p style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>
              🔗 مشابه لمفهوم Diffing Algorithm في React.
            </p>
          </>
        )
      }
    },
    render: {
      emoji: '🎨',
      name: 'RenderObject Tree',
      nameAr: 'شجرة الرسم',
      role: 'الرسم الفعلي',
      detail: {
        title: '🎨 RenderObject Tree — شجرة الرسم',
        content: (
          <>
            <p>
              <strong>هنا يحصل الرسم الفعلي على الشاشة.</strong>
            </p>
            <p>
              كل RenderObject يعرف:
            </p>
            <ul>
              <li><strong>حجمه</strong> — كم بكسل عرض وارتفاع</li>
              <li><strong>موقعه</strong> — وين بالضبط على الشاشة</li>
              <li><strong>كيف يرسم نفسه</strong> — باستخدام Canvas (قماشة الرسم)</li>
            </ul>
            <p>
              العملية: Layout (حساب الأحجام) → Paint (الرسم) → Compositing (تجميع الطبقات)
            </p>
            <p>
              <strong>ليش هذا مهم لك عملياً؟</strong> لما تطبيقك يصير بطيء، المشكلة غالباً هنا — Widget يعيد الرسم كثير بدون سبب. Flutter DevTools يوريك بالضبط وين المشكلة.
            </p>
          </>
        )
      }
    }
  }

  return (
    <div id="trees">
      <div className="section-header">
        <div className="section-number">4</div>
        <h3 className="section-title">الأشجار الثلاث — سر سرعة Flutter</h3>
      </div>

      <div className="section-content">
        <p>
          هنا <strong>الجوهر</strong> اللي يفرق بينك كمبرمج يفهم Flutter من الداخل وبين مبرمج يحفظ أكواد.
          Flutter ما عنده شجرة وحدة — عنده <strong>ثلاث أشجار</strong> تشتغل مع بعض:
        </p>
      </div>

      <div className="analogy-box">
        <div className="analogy-label">تشبيه معماري</div>
        <div className="analogy-text">
          <strong>تخيل بناء عمارة:</strong>
          <br />
          📋 <strong>Widget Tree</strong> = المخطط المعماري على الورق (Blueprint)
          <br />
          🔗 <strong>Element Tree</strong> = مدير المشروع اللي يقرر ما يُبنى وما يُهدم
          <br />
          🎨 <strong>RenderObject Tree</strong> = العمال اللي يبنون فعلياً على الأرض
          <br /><br />
          لما المعماري يعدل المخطط (setState)، مدير المشروع ما يهدم العمارة كلها — يقارن المخطط الجديد بالقديم ويعدل <em>فقط</em> اللي تغير.
        </div>
      </div>

      <div className="trees-container">
        {Object.entries(treeData).map(([key, tree]) => (
          <div
            key={key}
            className={`tree-card ${activeTree === key ? 'active-tree' : ''}`}
            onClick={() => setActiveTree(activeTree === key ? null : key)}
          >
            <div className="tree-emoji">{tree.emoji}</div>
            <div className="tree-name">{tree.name}</div>
            <div className="tree-role">{tree.role}</div>
          </div>
        ))}
      </div>

      {activeTree && (
        <div className="tree-detail fade-in">
          <h4>{treeData[activeTree].detail.title}</h4>
          {treeData[activeTree].detail.content}
        </div>
      )}

      <div className="key-point">
        <div className="key-point-label">🎯 النقطة الجوهرية</div>
        <div className="key-point-text">
          أنت كمبرمج تتعامل <strong>فقط</strong> مع Widget Tree — تكتب الوصف.
          Flutter يتكفل بالباقي. لكن <em>فهمك</em> لكيف الأشجار الثلاث تتعاون هو اللي يخليك تفهم <strong>ليش</strong>
          {' '}كودك يتصرف بطريقة معينة، وكيف تصلحه لما يتبطأ.
        </div>
      </div>
    </div>
  )
}

// --- Quiz Component ---
function Quiz() {
  const [answers, setAnswers] = useState({})

  const questions = [
    {
      id: 'q1',
      question: 'لماذا تطبيقات Flutter تظهر متطابقة على Android و iOS؟',
      options: [
        'لأن Flutter يستخدم أزرار Android على Android وأزرار iOS على iOS',
        'لأن Flutter يرسم كل بكسل بنفسه عبر محرك Skia/Impeller — ما يستعير شي من النظام',
        'لأن Android و iOS متشابهين في التصميم',
        'لأن Flutter يستخدم WebView',
      ],
      correct: 1,
      explanation: 'بالضبط! Flutter يمتلك محرك رسم خاص (Skia/Impeller) يرسم كل شيء بنفسه. ما يعتمد على أي عنصر واجهة من النظام الأصلي. هذا يعني تحكم كامل بالمظهر على كل منصة.'
    },
    {
      id: 'q2',
      question: 'ما الفرق بين JIT و AOT في Dart؟',
      options: [
        'JIT أسرع من AOT دائماً',
        'JIT للتطوير (يتيح Hot Reload) و AOT للإنتاج (ينتج كود آلة أصلي سريع)',
        'AOT يدعم Hot Reload و JIT لا يدعمه',
        'ما فيه فرق — كلهم نفس الشي',
      ],
      correct: 1,
      explanation: 'صحيح! JIT (Just-In-Time) يترجم أثناء التشغيل ويتيح Hot Reload للتطوير السريع. AOT (Ahead-Of-Time) يترجم مسبقاً لكود آلة أصلي للأداء العالي في الإنتاج. Dart صممت نفسها لتدعم الاثنين!'
    },
    {
      id: 'q3',
      question: 'لما تستدعي setState()، ماذا يحدث بالضبط؟',
      options: [
        'Flutter يعيد رسم الشاشة بالكامل',
        'Flutter يبني Widget Tree جديدة، ثم Element Tree يقارنها بالقديمة ويحدث فقط ما تغير',
        'Flutter يمسح كل شيء ويبدأ من الصفر',
        'ما يحصل شيء لأن Widgets immutable',
      ],
      correct: 1,
      explanation: 'ممتاز! هذا بالضبط السر. Widgets رخيصة (خفيفة) فـ Flutter يبنيها من جديد بدون مشكلة. لكن Element Tree هو اللي يقارن (diff) ويقرر ما يحتاج تحديث فعلاً في RenderObject Tree. مثل مدير المشروع اللي يقارن المخطط الجديد بالقديم.'
    },
  ]

  const handleAnswer = (questionId, optionIndex) => {
    if (answers[questionId] !== undefined) return
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }))
  }

  return (
    <div id="quiz">
      <div className="section-header">
        <div className="section-number">🧪</div>
        <h3 className="section-title">اختبر فهمك</h3>
      </div>

      <div className="section-content">
        <p>
          لا تقلق من الإجابة الخطأ — الخطأ هنا يثبت المعلومة أفضل من الإجابة الصحيحة.
          ما فيه درجات. الهدف: <strong>تثبيت الخريطة المفاهيمية</strong> اللي بنيناها.
        </p>
      </div>

      {questions.map((q, qi) => (
        <div className="quiz-box" key={q.id}>
          <div className="quiz-title">❓ السؤال {qi + 1}</div>
          <div className="quiz-question">{q.question}</div>
          <div className="quiz-options">
            {q.options.map((option, oi) => {
              let className = 'quiz-option'
              if (answers[q.id] !== undefined) {
                if (oi === q.correct) className += ' correct'
                else if (oi === answers[q.id]) className += ' wrong'
                className += ' selected'
              }
              return (
                <button
                  key={oi}
                  className={className}
                  onClick={() => handleAnswer(q.id, oi)}
                >
                  {option}
                </button>
              )
            })}
          </div>
          {answers[q.id] !== undefined && (
            <div className={`quiz-feedback ${answers[q.id] === q.correct ? 'correct' : 'wrong'}`}>
              {answers[q.id] === q.correct ? '✅ ' : '❌ '}
              {q.explanation}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}


// --- Code Block Component ---
function CodeBlock({ lang, children }) {
  return (
    <div className="code-block">
      <div className="code-header">
        <div className="code-dots">
          <span className="code-dot red"></span>
          <span className="code-dot yellow"></span>
          <span className="code-dot green"></span>
        </div>
        <span className="code-lang">{lang}</span>
      </div>
      <pre className="code-body">
        {children}
      </pre>
    </div>
  )
}


// ================================================
// --- Main App ---
// ================================================
export default function App() {
  const [activeSection, setActiveSection] = useState('intro')
  const isScrollingRef = useRef(false)

  // Scroll Spy — automatically track which section is visible
  useEffect(() => {
    const sectionIds = ['intro', 'comparison', 'architecture', 'compilation', 'trees', 'quiz']
    const observers = []

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      sectionIds.forEach(id => {
        const el = document.getElementById(id)
        if (!el) return

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              // Only update if user is scrolling naturally (not clicking nav)
              if (entry.isIntersecting && !isScrollingRef.current) {
                setActiveSection(id)
              }
            })
          },
          {
            // Trigger when section enters the top 30% of viewport
            rootMargin: '-10% 0px -60% 0px',
            threshold: 0.1,
          }
        )

        observer.observe(el)
        observers.push(observer)
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      observers.forEach(obs => obs.disconnect())
    }
  }, [])

  const scrollTo = (id) => {
    // Temporarily disable scroll spy to avoid flickering during smooth scroll
    isScrollingRef.current = true
    setActiveSection(id)

    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    // Re-enable scroll spy after animation completes
    setTimeout(() => {
      isScrollingRef.current = false
    }, 800)
  }

  return (
    <div className="app-layout">
      <Sidebar activeSection={activeSection} onNavigate={scrollTo} />

      <main className="main-content">
        {/* --- Hero --- */}
        <div className="phase-hero" id="intro">
          <div className="phase-badge">⚙️ المرحلة 0</div>
          <h2>المحرك — كيف يعمل Flutter من الداخل</h2>
          <p className="hero-desc">
            قبل ما تكتب سطر كود واحد، لازم تفهم <strong>كيف يعمل النظام</strong> اللي تبني عليه.
            لأن عقلك يرفض يحفظ بدون ما يفهم الأساس — ونحن نحترم هالطريقة.
            <br /><br />
            في هذه المرحلة، راح تفهم <strong>لماذا</strong> Flutter موجود، <strong>كيف</strong> يختلف عن غيره،
            و<strong>ما</strong> اللي يحصل من لحظة ما تكتب الكود إلى لحظة ما يظهر على الشاشة.
          </p>
        </div>

        {/* --- Section 1: Why Flutter is Different --- */}
        <div className="section" id="comparison">
          <div className="section-header">
            <div className="section-number">1</div>
            <h3 className="section-title">ليش Flutter مختلف؟</h3>
          </div>

          <div className="section-content">
            <p>
              قبل ما نفهم Flutter، لازم نفهم <strong>المشكلة اللي جاء يحلها</strong>.
              فيه 3 طرق لبناء تطبيقات الجوال. كل وحدة لها فلسفة مختلفة:
            </p>
          </div>

          <div className="comparison-grid">
            <div className="comparison-card native">
              <div className="comparison-icon">📱</div>
              <div className="comparison-name">Native</div>
              <div className="comparison-desc">
                تكتب كود منفصل لكل منصة. Swift/Kotlin. أقوى أداء، لكن <strong>ضعف العمل</strong>.
              </div>
              <div className="comparison-tag tag-fast">أداء ممتاز</div>
              <br />
              <div className="comparison-tag tag-slow" style={{ marginTop: '4px' }}>كود مكرر ×2</div>
            </div>

            <div className="comparison-card webview">
              <div className="comparison-icon">🌐</div>
              <div className="comparison-name">WebView / Bridge</div>
              <div className="comparison-desc">
                كود واحد (React Native / Cordova). يستعير عناصر الواجهة من النظام عبر "جسر".
              </div>
              <div className="comparison-tag tag-medium">كود واحد</div>
              <br />
              <div className="comparison-tag tag-slow" style={{ marginTop: '4px' }}>الجسر يبطئ</div>
            </div>

            <div className="comparison-card flutter-card">
              <div className="comparison-icon">🦋</div>
              <div className="comparison-name">Flutter</div>
              <div className="comparison-desc">
                كود واحد + <strong>محرك رسم خاص</strong>. ما يستعير شي. يرسم كل بكسل بنفسه.
              </div>
              <div className="comparison-tag tag-fast">كود واحد</div>
              <br />
              <div className="comparison-tag tag-fast" style={{ marginTop: '4px' }}>أداء عالي</div>
            </div>
          </div>

          <div className="key-point">
            <div className="key-point-label">🎯 النقطة الجوهرية</div>
            <div className="key-point-text">
              <strong>Flutter اختار فلسفة مختلفة عن الكل:</strong> بدل ما يستعير أزرار Android أو يمر عبر جسر (Bridge)،
              Google صنعت محرك رسم كامل (Skia ثم Impeller) مبني بـ C++.
              Flutter ياخذ "كنفس" فارغ من النظام ويرسم <strong>كل شيء بنفسه</strong>.
              <br /><br />
              هذا يعني: <strong>تحكم مطلق بالمظهر + أداء عالي + تطبيق متطابق على كل منصة</strong>.
            </div>
          </div>
        </div>

        {/* --- Section 2: The Three Layers --- */}
        <div className="section">
          <div className="section-header">
            <div className="section-number">2</div>
            <h3 className="section-title">الطبقات الثلاث — هيكلية Flutter</h3>
          </div>

          <div className="section-content">
            <p>
              Flutter مبني على <strong>ثلاث طبقات</strong>، كل واحدة مسؤولة عن شيء محدد.
              اللي تحت يخدم اللي فوق. أنت كمبرمج تتعامل <strong>فقط مع الطبقة العليا</strong> (Framework)،
              لكن فهمك للطبقات اللي تحت هو اللي يخليك تعرف <strong>ليش الأشياء تتصرف بهالشكل</strong>.
            </p>
          </div>

          <ArchitectureDiagram />
        </div>

        {/* --- Section 3: Compilation --- */}
        <div className="section">
          <div className="section-header">
            <div className="section-number">3</div>
            <h3 className="section-title">كيف يُترجم الكود — JIT vs AOT</h3>
          </div>

          <div className="section-content">
            <p>
              لغة Dart عندها ميزة نادرة: تدعم <strong>نظامين للترجمة</strong> في نفس الوقت.
              هذا ما هو عشوائي — كل نظام صُمم لحل مشكلة محددة.
            </p>
            <p>
              <strong>السؤال المهم:</strong> ليش ما اختاروا نظام واحد بس؟
              لأن ما تحتاجه وقت التطوير (سرعة التجربة) <strong>مختلف تماماً</strong> عن ما تحتاجه وقت الإنتاج (سرعة الأداء).
            </p>
          </div>

          <CompilationFlow />
        </div>

        {/* --- Section 4: Three Trees --- */}
        <ThreeTrees />

        {/* --- Section 5: Putting it all together --- */}
        <div className="section">
          <div className="section-header">
            <div className="section-number">5</div>
            <h3 className="section-title">الصورة الكبيرة — كيف كل شي يترابط</h3>
          </div>

          <div className="section-content">
            <p>
              الآن خلنا نربط كل شيء تعلمناه في خريطة واحدة واضحة:
            </p>
          </div>

          <div className="card card-accent-blue">
            <div className="card-title">1️⃣ أنت تكتب كود Dart</div>
            <div className="card-body">
              تكتب Widgets تصف ما تريد رؤيته. مثلاً: <code>Container(color: Colors.red, width: 100)</code>
            </div>
          </div>

          <div className="card card-accent-purple">
            <div className="card-title">2️⃣ Flutter يبني الأشجار الثلاث</div>
            <div className="card-body">
              Widget Tree (الوصف) → Element Tree (الإدارة والمقارنة) → RenderObject Tree (الرسم الفعلي)
            </div>
          </div>

          <div className="card card-accent-green">
            <div className="card-title">3️⃣ المحرك يرسم على الشاشة</div>
            <div className="card-body">
              Skia/Impeller (المكتوب بـ C++) ياخذ تعليمات الرسم من RenderObject Tree ويرسمها بكسل ببكسل على الـ Surface (الكنفس) اللي جهزه الـ Embedder.
            </div>
          </div>

          <div className="card card-accent-orange">
            <div className="card-title">4️⃣ تعدل الكود → Hot Reload</div>
            <div className="card-body">
              JIT يترجم التغييرات فوراً، Flutter يبني Widget Tree جديدة، Element Tree يقارن ويحدث فقط ما تغير.
              النتيجة تظهر خلال أقل من ثانية.
            </div>
          </div>

          <div className="card card-accent-pink">
            <div className="card-title">5️⃣ تبني للإنتاج → AOT</div>
            <div className="card-body">
              Dart يتحول لكود آلة أصلي. ما فيه VM أو مترجم فوري. التطبيق يعمل بسرعة تطبيق Native حقيقي.
            </div>
          </div>

          <div className="analogy-box" style={{ marginTop: '24px' }}>
            <div className="analogy-label">ربط بخبرتك السابقة</div>
            <div className="analogy-text">
              <strong>بما إنك تعرف C++:</strong> تخيل إن Flutter مثل مكتبة SDL أو SFML —
              ياخذ نافذة من النظام ويرسم عليها كل شيء بنفسه. لكن بدل ما تكتب أنت كود الرسم (draw calls)،
              أنت تكتب "وصف" (Widgets) و Flutter يتكفل بالرسم.
              <br /><br />
              <strong>بما إنك تعرف Python:</strong> فكر في Widgets مثل Dataclasses — كائنات بسيطة تحمل بيانات (وصف).
              مثل ما Dataclass ما يعرف نفسه — Widget ما يرسم نفسه. شيء ثاني يقرأه ويرسمه.
            </div>
          </div>
        </div>

        {/* --- Quiz --- */}
        <Quiz />

        {/* --- Next Phase --- */}
        <div className="next-phase-banner">
          <h3>🎉 أنهيت المرحلة 0!</h3>
          <p>
            الآن أنت تفهم <strong>كيف Flutter يعمل من الداخل</strong>.
            المرحلة الجاية: نتعلم <strong>لغة Dart</strong> — الأداة اللي في يدك لبناء كل شيء.
          </p>
          <button className="next-btn">
            المرحلة التالية: Dart كلغة ←
          </button>
        </div>
      </main>
    </div>
  )
}

