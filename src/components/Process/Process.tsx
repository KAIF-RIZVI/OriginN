import './Process.css';

const steps = [
  { number: '01', title: 'Consultation', desc: 'We align on your exact vision, functionality requirements, and brand architecture.' },
  { number: '02', title: 'Strategy & Wireframing', desc: 'Crafting the UX/UI blueprint ensuring a flawless and cohesive user journey.' },
  { number: '03', title: 'Engineering', desc: 'Our devs execute the design using state-of-the-art modern technical frameworks.' },
  { number: '04', title: 'Launch', desc: 'Rigorous QA testing, final delivery, and continuous support handover integrations.' },
];

const Process = () => {
  return (
    <section className="process">
      <div className="container">
        <div className="section-header">
          <div className="badge">How We Work</div>
          <h2 className="section-title">
            Our Streamlined <span className="text-gradient">Pipeline</span>
          </h2>
        </div>
        
        <div className="process-grid">
          {steps.map((step, idx) => (
            <div className="process-step glass-panel" key={idx}>
              <div className="step-number text-gradient-accent">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
