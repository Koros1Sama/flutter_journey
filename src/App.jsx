import { useState, useEffect, useRef } from 'react'

/* =============================================
   Flutter Journey — Phase 0: The Engine Room
   Interactive Learning Platform (v2 - Deep Explanations)
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
    { id: 'what-is-framework', label: 'وش يعني فريم وورك؟', icon: '🧰' },
    { id: 'multiplatform', label: 'كيف تشتغل كل منصة؟', icon: '🌍' },
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
            <li><strong>Widgets</strong> — المكعبات اللي تبني بها الواجهة (زي قطع LEGO). كل شي على الشاشة هو Widget: زر، نص، صورة، حتى المسافة بين شيئين!</li>
            <li><strong>Rendering</strong> — النظام اللي يحسب أحجام ومواقع كل شي على الشاشة</li>
            <li><strong>Animation</strong> — محرك الحركات والتأثيرات (مثل لما زر يتحرك بسلاسة)</li>
            <li><strong>Gestures</strong> — نظام اللمس والتفاعل (يعرف الفرق بين ضغطة وسحب وتكبير)</li>
            <li><strong>Material / Cupertino</strong> — مكتبات تصاميم جاهزة (Material لتصميم Google، Cupertino لتصميم Apple)</li>
          </ul>
          <p>
            <strong>الفكرة المهمة:</strong> كل Widget ما هو إلا "وصف". هو ما يرسم نفسه. هو بس يقول: "أنا زر أزرق مكتوب عليه 'ارسل'". الطبقة اللي تحته (Engine) هي اللي ترسم فعلاً.
          </p>
          <p style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>
            🔗 عندك خلفية C++. تخيل إن Widget مثل struct يوصف الشكل، وفيه نظام ثاني ياخذ هالـ struct ويرسمه.
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
            <li><strong>Skia / Impeller</strong> — محرك الرسم. هذا هو "الرسّام" اللي يرسم كل بكسل على الشاشة. مثل كرت الشاشة بس برمجياً</li>
            <li><strong>Dart Runtime</strong> — البيئة اللي تشغل كود Dart الخاص بك (مثل ما Python عندها interpreter)</li>
            <li><strong>Text Layout</strong> — محرك تنسيق النصوص (يعرف كيف يرتب الحروف العربية من اليمين لليسار)</li>
            <li><strong>Platform Channels</strong> — "الجسر" اللي يسمح لكودك يتكلم مع النظام الأصلي (مثلاً يطلب من Android يفتح الكاميرا)</li>
          </ul>
          <p>
            <strong>ليش هذا مهم؟</strong> لأن Flutter ما يستعير أزرار Android أو iOS. هو يرسم كل شي بنفسه بكسل ببكسل. يعني لو رسمت زر أزرق، هالزر يطلع متطابق 100% على Android و iOS و Web و Windows. ما فيه اختلاف.
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
            <strong>هذي الطبقة اللي تربط Flutter بالنظام الفعلي</strong> (Android, iOS, Windows, macOS, Linux, Web).
          </p>
          <p>
            <strong>كل منصة عندها Embedder خاص فيها.</strong> يعني فيه embedder لـ Android (مكتوب بـ Java/Kotlin)، وواحد لـ iOS (مكتوب بـ Swift)، وواحد لـ Web (مكتوب بـ JavaScript)، وهكذا.
          </p>
          <p>مسؤولة عن:</p>
          <ul>
            <li><strong>إنشاء النافذة/Surface</strong> — تقول للنظام "عطني مساحة فاضية أرسم عليها"</li>
            <li><strong>إدخال المستخدم</strong> — تستقبل اللمسات ولوحة المفاتيح وتمررها لـ Flutter</li>
            <li><strong>Platform APIs</strong> — الكاميرا، GPS، البطارية، الإشعارات... كل شي يعتمد على الجهاز</li>
          </ul>
          <p>
            <strong>تشبيه:</strong> Flutter مثل فنان محترف. Embedder هو اللي يجهز له الكنفس (اللوحة) والألوان. الفنان ما يهتم هل اللوحة معلقة في بيت (Android) أو معرض (iOS) أو على الإنترنت (Web) — هو يرسم بنفس الطريقة بالضبط.
          </p>
        </>
      )
    }
  }

  return (
    <div className="architecture-diagram">
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
    <div className="compilation-flow">
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
          <div key={`step-${mode}-${i}`} style={{ display: 'contents' }}>
            <div className="flow-step fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flow-step-icon">{step.icon}</div>
              <div className="flow-step-label">{step.label}</div>
              <div className="flow-step-desc">{step.desc}</div>
            </div>
            {i < current.steps.length - 1 && (
              <div className="flow-arrow">←</div>
            )}
          </div>
        ))}
      </div>

    <div className="analogy-box" style={{ marginTop: '24px' }}>
        <div className="analogy-label">ربط بخبرتك (C++ و Python)</div>
        <div className="analogy-text">
          {mode === 'jit' ? (
            <>
              <strong>JIT (Just-In-Time) قريب جداً من طريقة عمل Python:</strong> الكود يُترجم ويُنفذ أثناء التشغيل داخل بيئة افتراضية (VM).
              <br /><br />
              <strong>ليش هذا سحر في تطوير Flutter؟</strong> لأنه يعطيك ميزة <strong>Hot Reload</strong>. لما تعدل الكود وبتسوي حفظ، الـ VM حق Dart فقط يحقن الكود الجديد بدون ما يعيد تشغيل التطبيق. النتيجة؟ تشوف تعديلك في جزء من الثانية وتجرب بسرعة جنونية.
            </>
          ) : (
            <>
              <strong>AOT (Ahead-Of-Time) هو بالضبط اللي تسويه في C++:</strong> الكود كامل يُترجم لـ Machine Code أصلي (أصفار ووحايد) موجه لمعمارية جهاز محدد (مثل ARM للآيفون) قبل ما التطبيق يشتغل أصلاً.
              <br /><br />
              <strong>ليش هذا مهم للإنتاج؟</strong> لما ترفع تطبيقك للمتجر، ما يكون فيه أي مترجم (VM) يشتغل في الخلفية. تطبيقك ينطلق بأقصى سرعة ممكنة للمعالج، وهذا اللي يخلي Flutter سلس وسريع جداً.
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
              🔗 فكر فيها مثل ما تعمل struct في C++ وتمررها لدالة رسم — الـ struct نفسه ما يعرف يرسم، بس يوصف البيانات.
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
              🔗 تخيل إنك عندك Linked List قديمة وجديدة — Element Tree يمشي عليهم node بـ node ويقارن. اللي تغير يحدثه، واللي ما تغير يتركه.
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
    <div className="section" id="trees">
      <div className="section-header">
        <div className="section-number">6</div>
        <h3 className="section-title">الأشجار الثلاث — سر سرعة Flutter</h3>
      </div>

      <div className="section-content">
        <p>
          هنا <strong>الجوهر</strong> اللي يفرق بينك كمبرمج يفهم Flutter من الداخل وبين مبرمج يحفظ أكواد.
          Flutter ما عنده شجرة وحدة — عنده <strong>ثلاث أشجار</strong> تشتغل مع بعض:
        </p>
      </div>

      <div className="analogy-box">
        <div className="analogy-label">ربط بمفاهيم الـ OOP (الكائنات)</div>
        <div className="analogy-text">
          <strong>عشانك فاهم OOP بـ C++ و Python، الفكرة برمجياً كالتالي:</strong>
          <br /><br />
          📋 <strong>Widget</strong> = مجرد <code>Immutable Object</code> (كائن ثابت لا يتغير). كأنه <code>struct</code> أو <code>DataClass</code> يحمل فقط بيانات (ألوان، نصوص) ولا يحتوي على أي State تتغير. عشان كذا لو تدمره وتعيد إنشاءه 1000 مرة في الثانية، ما يكلف شي لأنه خفيف جداً.
          <br /><br />
          🔗 <strong>Element</strong> = هو الكائن الثقيل <code>Mutable Object</code> الفعلي اللي يمسك الـ State ويدير دورة الحياة (Lifecycle). هذا الكائن يعيش لفترة طويلة، ولما تستدعي <code>setState</code>، هو اللي يشيك على الـ Widget الجديد ويحدث نفسه بدون ما ينحذف من الذاكرة.
          <br /><br />
          🎨 <strong>RenderObject</strong> = كائن <code>C++ Object</code> ضخم جداً يتعامل مباشرة مع كرت الشاشة لحساب الـ Pixels بالضبط. الـ Element هو الوحيد اللي يكلم الـ RenderObject ويقول له متى يعيد الرسم.
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
      question: 'وش يعني "فريم وورك (Framework)"؟',
      options: [
        'لغة برمجة جديدة',
        'صندوق أدوات جاهز يعطيك أدوات ومكتبات تبني بها تطبيقك بدل ما تبدأ من الصفر',
        'برنامج لتصميم الصور',
        'نظام تشغيل للجوال',
      ],
      correct: 1,
      explanation: 'بالضبط! الفريم وورك هو صندوق أدوات جاهز. Flutter يعطيك أزرار، قوائم، أنيميشن، ونظام كامل جاهز — أنت بس تركبهم مع بعض وتضيف المنطق الخاص بتطبيقك.'
    },
    {
      id: 'q2',
      question: 'كيف Flutter يقدر يشتغل على Android و iOS و Web بنفس الكود؟',
      options: [
        'يترجم كودك لكود Java لـ Android و Swift لـ iOS',
        'يستخدم أزرار النظام الأصلية على كل منصة',
        'عنده محرك رسم خاص (Skia/Impeller) يرسم كل شي بنفسه — بس يحتاج "نافذة" من كل نظام',
        'يشتغل داخل متصفح ويب على كل الأنظمة',
      ],
      correct: 2,
      explanation: 'صح! Flutter ما يترجم كودك لـ Java أو Swift. هو يطلب من كل نظام مساحة رسم فاضية (مثل كنفس بيضا)، وبعدين يرسم التطبيق كامل بنفسه بكسل ببكسل باستخدام محرك Skia/Impeller. عشان كذا التطبيق يطلع متطابق على كل منصة.'
    },
    {
      id: 'q3',
      question: 'ما الفرق بين JIT و AOT في Dart؟',
      options: [
        'JIT أسرع من AOT دائماً',
        'JIT للتطوير (يتيح Hot Reload) و AOT للإنتاج (ينتج كود آلة أصلي سريع)',
        'AOT يدعم Hot Reload و JIT لا يدعمه',
        'ما فيه فرق — كلهم نفس الشي',
      ],
      correct: 1,
      explanation: 'صح! JIT يترجم أثناء التشغيل ويتيح Hot Reload (تعديل ونتيجة فورية). AOT يترجم مسبقاً لكود آلة أصلي وينتج تطبيق سريع جداً للمستخدم النهائي.'
    },
    {
      id: 'q4',
      question: 'لما تستدعي setState()، وش بالضبط يحصل؟',
      options: [
        'Flutter يعيد رسم الشاشة بالكامل من الصفر',
        'Flutter يبني Widget Tree جديدة، ثم Element Tree يقارنها بالقديمة ويحدث فقط ما تغير',
        'Flutter يمسح كل شيء ويبدأ من جديد',
        'ما يحصل شيء',
      ],
      correct: 1,
      explanation: 'ممتاز! هذا السر. Widgets خفيفة فـ Flutter يبنيها من جديد بدون مشكلة. لكن Element Tree هو اللي يقارن ويقرر وش يحتاج تحديث فعلاً — مثل ما تقارن Linked List قديمة بجديدة node بـ node.'
    },
    {
      id: 'q5',
      question: 'في C++ تكتب: button.setColor(red) — تأمر الكمبيوتر مباشرة. في Flutter تكتب: Container(color: red) — توصف الحالة النهائية. وش الفرق بين الأسلوبين؟',
      options: [
        'ما فيه فرق حقيقي، بس طريقة كتابة مختلفة',
        'الأول أمري (Imperative) — أنت تقول "غيّر هذا". الثاني تصريحي (Declarative) — أنت تقول "أبي النتيجة كذا" و Flutter يقرر كيف يغيّر.',
        'Flutter ما يدعم الأسلوب الأمري أبداً',
        'الأسلوب التصريحي أبطأ دائماً',
      ],
      correct: 1,
      explanation: 'هذا أهم فرق ذهني بيواجهك! في C++ أنت تتحكم بكل خطوة (Imperative). في Flutter أنت توصف الحالة النهائية (Declarative) و Flutter يتكفل يحسب الفرق ويحدث الشاشة. هذا التحول من "كيف أسوي" إلى "وش أبي" هو جوهر فلسفة Flutter.'
    },
  ]

  const handleAnswer = (questionId, optionIndex) => {
    if (answers[questionId] !== undefined) return
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }))
  }

  return (
    <div className="section" id="quiz">
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

  // Scroll Spy
  useEffect(() => {
    const sectionIds = ['intro', 'what-is-framework', 'multiplatform', 'comparison', 'architecture', 'compilation', 'trees', 'quiz']
    const observers = []

    const timer = setTimeout(() => {
      sectionIds.forEach(id => {
        const el = document.getElementById(id)
        if (!el) return

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting && !isScrollingRef.current) {
                setActiveSection(id)
              }
            })
          },
          {
            rootMargin: '-10% 0px -50% 0px',
            threshold: 0,
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
    isScrollingRef.current = true
    setActiveSection(id)

    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    setTimeout(() => {
      isScrollingRef.current = false
    }, 800)
  }

  return (
    <div className="app-layout">
      <Sidebar activeSection={activeSection} onNavigate={scrollTo} />

      <main className="main-content">
        {/* === HERO === */}
        <div className="phase-hero" id="intro">
          <div className="phase-badge">⚙️ المرحلة 0</div>
          <h2>المحرك — كيف يعمل Flutter من الداخل</h2>
          <p className="hero-desc">
            قبل ما تكتب سطر كود واحد، لازم تفهم <strong>كيف يعمل النظام</strong> اللي تبني عليه.
            لأن عقلك يرفض يحفظ بدون ما يفهم الأساس — ونحن نحترم هالطريقة.
            <br /><br />
            في هذه المرحلة، راح تفهم:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.2em' }}>🧰</span>
              <span>وش يعني "فريم وورك" أصلاً ووش Flutter بالضبط</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.2em' }}>🌍</span>
              <span>كيف كود واحد يشتغل على Android و iOS و Web و Windows</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.2em' }}>⚔️</span>
              <span>وش يميزه عن البدائل الثانية</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.2em' }}>🏛️</span>
              <span>كيف مبني من الداخل — الطبقات والأشجار</span>
            </div>
          </div>
        </div>

        {/* === SECTION 1: What is a Framework === */}
        <div className="section" id="what-is-framework">
          <div className="section-header">
            <div className="section-number">1</div>
            <h3 className="section-title">وش يعني "فريم وورك (Framework)"؟</h3>
          </div>

          <div className="section-content">
            <p>
              قبل ما نتكلم عن Flutter، لازم نفهم <strong>وش يعني فريم وورك أصلاً</strong>. لو ما فهمت هالمفهوم، كل شي بعده بيكون غامض.
            </p>
          </div>

          <div className="analogy-box">
            <div className="analogy-label">تشبيه بسيط</div>
            <div className="analogy-text">
              <strong>تخيل إنك تبي تبني بيت.</strong> عندك خيارين:
              <br /><br />
              <strong>الخيار 1:</strong> تروح الصحراء وتبدأ من الصفر — تصنع الطوب بنفسك، تصنع الأسمنت، تصمم كل شي. هذا = البرمجة بدون فريم وورك.
              <br /><br />
              <strong>الخيار 2:</strong> تروح مصنع يعطيك طوب جاهز، أبواب جاهزة، نوافذ جاهزة، أدوات سباكة وكهرباء. أنت <strong>تركبهم</strong> بالطريقة اللي تبي وتضيف لمساتك. هذا = البرمجة بفريم وورك.
              <br /><br />
              <strong>الفريم وورك = صندوق أدوات جاهز</strong> يوفر لك العناصر الأساسية عشان تركز على بناء تطبيقك بدل ما تعيد اختراع العجلة.
            </div>
          </div>

          <div className="section-content">
            <p>
              <strong>خلنا نأخذ مثال حقيقي من لغات مثل (C++ أو Python):</strong>
            </p>
            <p>
              تخيل لو طلب منك تسوي تطبيق فيه <strong>زر أزرق في نص الشاشة، ولما تضغطه يطبع "مرحباً"</strong>.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', margin: '24px 0' }}>
            <div className="card card-accent-orange">
              <div className="card-title">بدون فريم وورك (C++ / Python)</div>
              <div className="card-body">
                <p>عشان ترسم زر بنفسك، لازم تكتب مئات السطور اللي تتعامل مع كرت الشاشة (Graphics API) ونظام التشغيل:</p>
                <div dir="ltr" style={{ background: '#1e1e1e', padding: '12px', borderRadius: '4px', fontSize: '0.85em', color: '#d4d4d4', marginTop: '8px', overflowX: 'auto', textAlign: 'left' }}>
<pre style={{ margin: 0, fontFamily: 'monospace' }}>{`// 1. افتح نافذة من نظام التشغيل
window = system.createWindow(800, 600)

// 2. مستمع للأحداث الدائمة (Game Loop)
while (window.isOpen) {
  event = window.pollEvent()
  
  // 3. احسب بالبكسل لو الماوس جوا المربع!
  if (event.type == MOUSE_CLICK) {
    if (event.x > 100 && event.x < 300) {
      print("مرحباً")
    }
  }
  
  // 4. ارسم المربع الأزرق (الزر) يدويا
  canvas.setColor(Blue)
  canvas.drawRect(100, 100, 200, 50)
  canvas.drawText("اضغطني")
  
  window.update()
}`}</pre>
                </div>
                <p style={{ marginTop: '12px', color: 'var(--text-secondary)', fontSize: '0.9em' }}>هذا الكود يوضح المعاناة! لازم تدير الحلقات اللانهائية (Loops) وموقع الماوس والرسم بنفسك بكسل ببكسل.</p>
              </div>
            </div>

            <div className="card card-accent-blue">
              <div className="card-title">مع فريم وورك (Flutter)</div>
              <div className="card-body">
                <p>الفريم وورك كتب كل الكود المعقد هذا لك في الخلفية. أنت بس <strong>توصف</strong> وش تبي:</p>
                <div dir="ltr" style={{ background: '#1e1e1e', padding: '12px', borderRadius: '4px', fontSize: '0.85em', color: '#d4d4d4', marginTop: '8px', overflowX: 'auto', textAlign: 'left' }}>
<pre style={{ margin: 0, fontFamily: 'monospace' }}>{`// 1. استخدم زر مصمم جاهز
ElevatedButton(
  // 2. لون الزر
  style: ElevatedButton.styleFrom(
    backgroundColor: Colors.blue,
  ),
  
  // 3. وش يصير لما ينضغط؟
  onPressed: () {
    print("مرحباً");
  },
  
  // 4. النص داخله
  child: Text("اضغطني"),
)`}</pre>
                </div>
                <p style={{ marginTop: '12px', color: 'var(--text-secondary)', fontSize: '0.9em' }}>الفريم وورك يتولى حساب مواقع الماوس، رسم الحواف الدائرية للزر، وإظهار حركة متناسقة عند الضغط.</p>
              </div>
            </div>
          </div>

          <div className="section-content">
            <p>
              <strong>يعني Flutter وش هو بالضبط؟</strong>
            </p>
            <p>
              Flutter هو <strong>فريم وورك (صندوق أدوات) متكامل مبني وجاهز</strong>. صنعته شركة Google ليريحك من إعادة اختراع العجلة. يعطيك:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', margin: '16px 0' }}>
            <div className="card card-accent-blue">
              <div className="card-title">🧱 عناصر واجهة جاهزة</div>
              <div className="card-body">أزرار، قوائم، صناديق نص، صور، أيقونات — كلها جاهزة تستخدمها مباشرة</div>
            </div>
            <div className="card card-accent-purple">
              <div className="card-title">🎨 نظام تصميم</div>
              <div className="card-body">ألوان، خطوط، مسافات، أنيميشن — كلها منظمة ومتناسقة</div>
            </div>
            <div className="card card-accent-green">
              <div className="card-title">📱 يشتغل على كل مكان</div>
              <div className="card-body">تكتب كود مرة وحدة ويشتغل على: Android, iOS, Web, Windows, macOS, Linux</div>
            </div>
          </div>

          <div className="key-point">
            <div className="key-point-label">🎯 الخلاصة</div>
            <div className="key-point-text">
              <strong>Flutter = فريم وورك (صندوق أدوات) من Google لبناء تطبيقات.</strong>
              <br />
              بدل ما تكتب كود لكل منصة على حدة، تكتب <strong>كود واحد بلغة Dart</strong> و Flutter يتكفل
              يخليه يشتغل في كل مكان. لكن <em>كيف</em> يسوي هالشي؟ هذا اللي نشرحه في القسم الجاي ↓
            </div>
          </div>
        </div>

        {/* === SECTION 2: How Multi-Platform Works === */}
        <div className="section" id="multiplatform">
          <div className="section-header">
            <div className="section-number">2</div>
            <h3 className="section-title">كيف Flutter يشتغل على كل المنصات؟</h3>
          </div>

          <div className="section-content">
            <p>
              هذا السؤال الأهم: <strong>كيف كود واحد يشتغل على Android و iOS و Web و Windows؟</strong>
            </p>
            <p>
              أول شيء، خلنا نفهم <strong>المشكلة اللي Flutter يحلها</strong>. بدون Flutter، لو تبي تطبيق يشتغل على كل المنصات، لازم تتعلم لغة مختلفة لكل منصة وتكتب الكود من الصفر لكل وحدة:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', margin: '16px 0' }}>
            <div className="card card-accent-green">
              <div className="card-title">📱 Android</div>
              <div className="card-body">
                <strong>اللغة:</strong> Java أو Kotlin
                <br />
                <strong>البيئة:</strong> Android Studio
                <br />
                <strong>النتيجة:</strong> ملف APK
              </div>
            </div>
            <div className="card card-accent-blue">
              <div className="card-title">🍎 iOS</div>
              <div className="card-body">
                <strong>اللغة:</strong> Swift أو Objective-C
                <br />
                <strong>البيئة:</strong> Xcode (يحتاج جهاز Mac)
                <br />
                <strong>النتيجة:</strong> ملف IPA
              </div>
            </div>
            <div className="card card-accent-purple">
              <div className="card-title">🌐 Web</div>
              <div className="card-body">
                <strong>اللغة:</strong> JavaScript أو TypeScript
                <br />
                <strong>البيئة:</strong> أي محرر + متصفح
                <br />
                <strong>النتيجة:</strong> موقع ويب
              </div>
            </div>
            <div className="card card-accent-orange">
              <div className="card-title">🖥️ Windows</div>
              <div className="card-body">
                <strong>اللغة:</strong> C++ أو #C
                <br />
                <strong>البيئة:</strong> Visual Studio
                <br />
                <strong>النتيجة:</strong> ملف EXE
              </div>
            </div>
          </div>

          <div className="key-point" style={{ marginBottom: '24px' }}>
            <div className="key-point-label">😱 المشكلة واضحة</div>
            <div className="key-point-text">
              <strong>4 لغات مختلفة + 4 بيئات تطوير + 4 أكواد منفصلة</strong> = ضعف الوقت والجهد والأخطاء.
              <br />
              Flutter يحل هذا بالكامل: <strong>لغة وحدة (Dart) + كود واحد + نتيجة واحدة تشتغل في كل مكان.</strong>
              <br /><br />
              بس السؤال: <em>كيف بالضبط يسوي هالشي؟</em> هنا يجي تشبيه السينما ↓
            </div>
          </div>

          <div className="analogy-box">
            <div className="analogy-label">🎬 تشبيه السينما</div>
            <div className="analogy-text">
              <strong>تخيل إنك مخرج فيلم.</strong> عندك فيلم واحد (الكود)، وتبي تعرضه في:
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', margin: '16px 0' }}>
                <div>🎥 <strong>سينما IMAX</strong> — تمثل Android</div>
                <div>📺 <strong>تلفزيون البيت</strong> — يمثل iOS</div>
                <div>💻 <strong>شاشة لابتوب</strong> — تمثل Web</div>
                <div>🖥️ <strong>شاشة كمبيوتر</strong> — تمثل Windows</div>
              </div>
              الفيلم <strong>نفسه ما يتغير</strong>. اللي يتغير هو <strong>جهاز العرض</strong> (البروجكتر) اللي يعرضه على كل شاشة.
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', margin: '16px 0' }}>
                <div>• <strong>الفيلم</strong> = كودك بلغة Dart + محرك الرسم</div>
                <div>• <strong>جهاز العرض</strong> = قطعة الـ Embedder المخصصة لكل نظام</div>
              </div>
              يعني Flutter يشتغل بنفس المنطق بالضبط.
            </div>
          </div>

          <div className="section-content">
            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '12px' }}>📋 الخطوات بالتفصيل:</h4>
          </div>

          <div className="card card-accent-blue" style={{ marginBottom: '12px' }}>
            <div className="card-title">الخطوة 1: أنت تكتب كود Dart واحد</div>
            <div className="card-body">
              تكتب كودك <strong>مرة وحدة بس</strong> بلغة Dart. ما تحتاج تعرف Java ولا Swift ولا JavaScript. كودك يوصف الشكل والمنطق: "أبي زر هنا، ولما ينضغط سوِّ كذا".
            </div>
          </div>

          <div className="card card-accent-purple" style={{ marginBottom: '12px' }}>
            <div className="card-title">الخطوة 2: محرك Flutter يرسم كل شي بنفسه</div>
            <div className="card-body">
              Flutter ما يطلب من Android يرسم له زر، ولا من iOS يرسم له قائمة. عنده <strong>محرك رسم خاص اسمه Skia/Impeller</strong> (مكتوب بـ C++). هالمحرك يقدر يرسم أي شي: أزرار، نصوص، صور، أنيميشن — كلها <strong>بكسل ببكسل</strong>.
              <br /><br />
              يعني Flutter يقول للنظام: <strong>"عطني بس مساحة فاضية على الشاشة، وأنا أرسم كل شي بنفسي"</strong>.
            </div>
          </div>

          <div className="card card-accent-green" style={{ marginBottom: '12px' }}>
            <div className="card-title">الخطوة 3: كل نظام عنده "موصّل" (Embedder)</div>
            <div className="card-body">
              كل منصة عندها قطعة كود صغيرة اسمها <strong>Embedder</strong>. هالقطعة مسؤولة عن:
              <br />
              • تدير لـ Flutter نافذة (مساحة) يرسم عليها
              <br />
              • تمرر لمسات المستخدم (ضغط، سحب) لـ Flutter
              <br />
              • توصله بخدمات النظام (كاميرا، GPS، إشعارات)
              <br /><br />
              <strong>يعني:</strong>
              <br />
              📱 على <strong>Android</strong>: Embedder مكتوب بـ Java/Kotlin — يفتح نافذة Activity ويعطيها لـ Flutter
              <br />
              🍎 على <strong>iOS</strong>: Embedder مكتوب بـ Swift — يفتح UIViewController ويعطيها لـ Flutter
              <br />
              🌐 على <strong>Web</strong>: Embedder يستخدم Canvas في المتصفح — Flutter يرسم على صفحة الويب
              <br />
              🖥️ على <strong>Windows</strong>: Embedder يستخدم Win32 API — يفتح نافذة ويندوز ويعطيها لـ Flutter
            </div>
          </div>

          <div className="card card-accent-orange" style={{ marginBottom: '12px' }}>
            <div className="card-title">النتيجة: تطبيق واحد في كل مكان</div>
            <div className="card-body">
              لأن Flutter <strong>يرسم كل بكسل بنفسه</strong>، التطبيق يطلع <strong>متطابق 100%</strong> على كل المنصات. ما فيه اختلاف — نفس الألوان، نفس الأحجام، نفس الحركات. مو مثل React Native اللي يستعير أزرار كل نظام فيطلع شكل مختلف.
            </div>
          </div>

          <div className="key-point">
            <div className="key-point-label">🎯 النقطة الجوهرية</div>
            <div className="key-point-text">
              Flutter ما يترجم كودك لـ Java أو Swift. ما يستخدم أزرار النظام. <strong>هو يرسم كل شي بنفسه.</strong>
              <br />
              كل اللي يحتاجه من النظام هو <strong>مساحة فاضية يرسم عليها + وصلة للأجهزة (كاميرا، GPS...)</strong>. هذا سر تعدد المنصات.
            </div>
          </div>
        </div>

        {/* === SECTION 3: Comparison === */}
        <div className="section" id="comparison">
          <div className="section-header">
            <div className="section-number">3</div>
            <h3 className="section-title">Flutter مقابل الطرق الثانية</h3>
          </div>

          <div className="section-content">
            <p>
              الآن بعد ما فهمت كيف Flutter يشتغل، خلنا نقارنه بالطرق الثانية لبناء التطبيقات عشان تفهم <strong>ليش اخترنا Flutter</strong>.
            </p>
          </div>

          <div className="comparison-grid">
            <div className="comparison-card native">
              <div className="comparison-icon">📱</div>
              <div className="comparison-name">Native</div>
              <div className="comparison-desc">
                تكتب كود <strong>منفصل</strong> لكل منصة. Java/Kotlin لـ Android، Swift لـ iOS. <strong>كل تطبيق كأنه مشروع مستقل.</strong>
              </div>
              <div style={{ marginTop: '12px', fontSize: '0.85em', color: 'var(--text-secondary)' }}>
                ✅ أفضل أداء + وصول كامل لخدمات النظام
                <br />
                ❌ تكتب الكود مرتين + فريقين مختلفين
              </div>
              <div className="comparison-tag tag-fast" style={{ marginTop: '8px' }}>أداء ممتاز</div>
              <div className="comparison-tag tag-slow" style={{ marginTop: '4px' }}>كود مكرر ×2</div>
            </div>

            <div className="comparison-card webview">
              <div className="comparison-icon">🌉</div>
              <div className="comparison-name">Bridge — React Native</div>
              <div className="comparison-desc">
                تكتب كود واحد بـ JavaScript. التطبيق يرسل أوامر <strong>عبر جسر (Bridge)</strong> للنظام: "ارسم لي زر Android" أو "ارسم لي زر iOS".
              </div>
              <div style={{ marginTop: '12px', fontSize: '0.85em', color: 'var(--text-secondary)' }}>
                ✅ كود واحد + يستخدم JavaScript المشهورة
                <br />
                ❌ الجسر يبطئ الأداء + الشكل يختلف بين المنصات
              </div>
              <div className="comparison-tag tag-medium" style={{ marginTop: '8px' }}>كود واحد</div>
              <div className="comparison-tag tag-slow" style={{ marginTop: '4px' }}>الجسر يبطئ</div>
            </div>

            <div className="comparison-card flutter-card">
              <div className="comparison-icon">🦋</div>
              <div className="comparison-name">Flutter</div>
              <div className="comparison-desc">
                تكتب كود واحد بـ Dart. Flutter <strong>يرسم كل شي بنفسه</strong> بمحرك رسم خاص — ما يستعير أزرار من أحد ولا يمر عبر جسر.
              </div>
              <div style={{ marginTop: '12px', fontSize: '0.85em', color: 'var(--text-secondary)' }}>
                ✅ كود واحد + أداء عالي + تطابق 100% على كل منصة
                <br />
                ❌ لغة Dart أقل شهرة من JavaScript
              </div>
              <div className="comparison-tag tag-fast" style={{ marginTop: '8px' }}>كود واحد</div>
              <div className="comparison-tag tag-fast" style={{ marginTop: '4px' }}>أداء عالي</div>
            </div>
          </div>

          <div className="analogy-box" style={{ marginTop: '24px' }}>
            <div className="analogy-label">وش الفرق عملياً؟</div>
            <div className="analogy-text">
              <strong>Native:</strong> مثل ما تطبخ أكلتين مختلفتين — وحدة بالفرن ووحدة على النار. كل وحدة حلوة بس تاخذ ضعف الوقت.
              <br /><br />
              <strong>React Native (Bridge):</strong> مثل ما تعطي الطباخ تعليمات عبر الهاتف. كل أمر لازم يمر عبر "خط الهاتف" (الجسر) ويتأخر شوي.
              <br /><br />
              <strong>Flutter:</strong> مثل ما أنت الطباخ بنفسك في مطبخك الخاص — تتحكم بكل شي مباشرة بدون وسيط. سريع وتقدر تسوي أي شكل تبيه.
            </div>
          </div>
        </div>

        {/* === SECTION 4: The Three Layers === */}
        <div className="section" id="architecture">
          <div className="section-header">
            <div className="section-number">4</div>
            <h3 className="section-title">الطبقات الثلاث — هيكلية Flutter من الداخل</h3>
          </div>

          <div className="section-content">
            <p>
              الآن بعد ما فهمت <strong>وش Flutter ووش يسوي</strong>، خلنا نفتح الغطاء ونشوف كيف مبني من الداخل.
            </p>
            <p>
              Flutter مبني على <strong>ثلاث طبقات</strong>، كل واحدة مسؤولة عن شيء محدد.
              اللي تحت يخدم اللي فوق. أنت كمبرمج تتعامل <strong>فقط مع الطبقة العليا</strong> (Framework)،
              لكن فهمك للطبقات اللي تحت هو اللي يخليك تعرف <strong>ليش الأشياء تتصرف بهالشكل</strong>.
            </p>
          </div>

          <ArchitectureDiagram />
        </div>

        {/* === SECTION 5: Compilation === */}
        <div className="section" id="compilation">
          <div className="section-header">
            <div className="section-number">5</div>
            <h3 className="section-title">كيف يُترجم الكود — JIT vs AOT</h3>
          </div>

          <div className="section-content">
            <p>
              لغة Dart (اللي تكتب بها كود Flutter) عندها ميزة نادرة: تدعم <strong>نظامين للترجمة</strong> في نفس الوقت.
            </p>
            <p>
              <strong>السؤال:</strong> ليش ما اختاروا نظام واحد بس؟
              لأن ما تحتاجه وقت التطوير (سرعة التجربة) <strong>مختلف تماماً</strong> عن ما تحتاجه وقت الإنتاج (سرعة الأداء).
            </p>
          </div>

          <CompilationFlow />
        </div>

        {/* === SECTION 6: Three Trees === */}
        <ThreeTrees />

        {/* === SECTION 7: Big Picture === */}
        <div className="section">
          <div className="section-header">
            <div className="section-number">7</div>
            <h3 className="section-title">الصورة الكبيرة — كيف كل شي يترابط</h3>
          </div>

          <div className="section-content">
            <p>
              الآن خلنا نربط كل شيء تعلمناه في خريطة واحدة واضحة:
            </p>
          </div>

          <div className="card card-accent-blue">
            <div className="card-title">1️⃣ أنت تكتب كود Dart واحد</div>
            <div className="card-body">
              تكتب Widgets تصف ما تريد رؤيته. مثلاً: "أبي زر أحمر مكتوب عليه 'ارسل'". هالكود يعيش في طبقة الـ Framework.
            </div>
          </div>

          <div className="card card-accent-purple">
            <div className="card-title">2️⃣ Flutter يبني الأشجار الثلاث</div>
            <div className="card-body">
              Widget Tree (الوصف) → Element Tree (المقارنة والقرارات) → RenderObject Tree (الرسم الفعلي)
            </div>
          </div>

          <div className="card card-accent-green">
            <div className="card-title">3️⃣ المحرك يرسم على الشاشة</div>
            <div className="card-body">
              Skia/Impeller (في طبقة Engine) ياخذ تعليمات الرسم ويرسمها بكسل ببكسل على المساحة اللي جهزها الـ Embedder.
            </div>
          </div>

          <div className="card card-accent-orange">
            <div className="card-title">4️⃣ الـ Embedder يوصل Flutter بالنظام</div>
            <div className="card-body">
              على Android يفتح Activity، على iOS يفتح UIViewController، على Web يستخدم Canvas — كلهم يعطون Flutter مساحة يرسم عليها.
            </div>
          </div>

          <div className="card card-accent-pink">
            <div className="card-title">5️⃣ النتيجة: تطبيق واحد في كل مكان</div>
            <div className="card-body">
              كود واحد → محرك رسم واحد → شكل متطابق على 6 منصات. هذا هو Flutter.
            </div>
          </div>

          <div className="key-point" style={{ marginTop: '24px' }}>
            <div className="key-point-label">⚡ تحول ذهني مهم — Imperative vs Declarative</div>
            <div className="key-point-text">
              في C++ أنت معتاد تقول للكمبيوتر: <strong>"غيّر لون الزر → حرّكه لليسار → أظهر النص"</strong> (أسلوب أمري — Imperative).
              <br /><br />
              في Flutter الموضوع مختلف: أنت <strong>توصف الحالة النهائية</strong> وخلاص. تقول: <strong>"أبي زر أحمر على اليسار مكتوب عليه كذا"</strong> (أسلوب تصريحي — Declarative). Flutter بنفسه يحسب وش تغير ويحدث الشاشة.
              <br /><br />
              <strong>ليش هذا مهم؟</strong> لأن هالتحول من "كيف أسوي" إلى "وش أبي" هو أكبر قفزة ذهنية بتواجهك. بس لما تتعود عليه — ما بترجع للأسلوب القديم أبداً، لأنه يختصر عليك كود ويقلل الأخطاء بشكل جنوني.
            </div>
          </div>
        </div>

        {/* === Quiz === */}
        <Quiz />

        {/* === Next Phase === */}
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
