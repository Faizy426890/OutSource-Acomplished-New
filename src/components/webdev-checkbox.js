"use client"

const DATA = [
  { skill: "Frontend Development (HTML/CSS/JavaScript)", junior: true, intermediate: true, senior: true, lead: true },
  { skill: "React.js / Vue.js / Angular Development", junior: true, intermediate: true, senior: true, lead: true },
  { skill: "Node.js / Python / PHP Backend Development", junior: true, intermediate: true, senior: true, lead: true },
  { skill: "Database Design & Management", junior: true, intermediate: true, senior: true, lead: true },
  { skill: "RESTful API Development", intermediate: true, senior: true, lead: true },
  { skill: "Mobile App Development (React Native/Flutter)", intermediate: true, senior: true, lead: true },
  { skill: "E-commerce Platform Development", intermediate: true, senior: true, lead: true },
  { skill: "Cloud Infrastructure & Deployment", intermediate: true, senior: true, lead: true },
  { skill: "DevOps & CI/CD Pipeline Setup", senior: true, lead: true },
  { skill: "System Architecture Design", senior: true, lead: true },
  { skill: "Performance Optimization & Scaling", senior: true, lead: true },
  { skill: "Team Leadership & Code Review", lead: true },
  { skill: "Technical Strategy & Planning", lead: true },
]

function Tick() {
  return (
    <span className="tick" role="img" aria-label="Included">
      ✓
      <style jsx>{`
        .tick {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 1.5rem;
          height: 1.5rem;
          color: #0b3c7e;
          font-weight: 700;
          line-height: 1;
          font-size: 1.125rem;
          user-select: none;
        }
      `}</style>
    </span>
  )
}

export default function WebDevMatrix() {
  return (
    <section className="wrap" aria-labelledby="webdev-heading">
      <header className="header">
        <h2 id="webdev-heading">Our Development Team Levels</h2>
        <p className="sub">
          Choose the right development team level based on your project complexity and technical requirements. Our tiered expertise ensures you get the perfect skills match for your website development and IT needs.
        </p>
      </header>

      <div className="table-scroller">
        <table className="matrix">
          <caption className="sr-only">Skill matrix for web development teams at different levels</caption>
          <thead>
            <tr>
              <th scope="col" className="left sticky">
                Development Skills
              </th>
              <th scope="col">Junior Developer</th>
              <th scope="col">Intermediate Developer</th>
              <th scope="col">Senior Developer</th>
              <th scope="col">Tech Lead Managed</th>
            </tr>
          </thead>
          <tbody>
            {DATA.map((row) => (
              <tr key={row.skill}>
                <th scope="row" className="left sticky">
                  {row.skill}
                </th>
                <td aria-label={`${row.skill} - Junior Developer`}>{row.junior ? <Tick /> : null}</td>
                <td aria-label={`${row.skill} - Intermediate Developer`}>{row.intermediate ? <Tick /> : null}</td>
                <td aria-label={`${row.skill} - Senior Developer`}>{row.senior ? <Tick /> : null}</td>
                <td aria-label={`${row.skill} - Tech Lead Managed`}>{row.lead ? <Tick /> : null}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        :global(:root) {
          --mx-bg: var(--color-background, #ffffff);
          --mx-fg: var(--color-foreground, #111827);
          --mx-border: var(--color-border, #e5e7eb);
          --mx-muted: #6b7280;
          --mx-head-bg: #fafafa;
          --mx-head-fg: #0f172a;
        }

        .wrap {
          max-width: 1200px;
          margin: 90px auto;
          padding: 24px 16px;
          color: var(--mx-fg);
          background: var(--mx-bg);
        }

        .header {
          text-align: center;
          margin: 8px auto 24px;
          padding: 0 8px;
        }

        .header h2 {
          margin: 0 0 8px;
          font-size: 32px;
          line-height: 1.2;
          letter-spacing: 0.2px;
          font-weight: 700;
          color: var(--mx-head-fg);
        }

        .sub {
          margin: 0 auto;
          max-width: 840px;
          color: var(--mx-muted);
          font-size: 15px;
          line-height: 1.6;
        }

        .table-scroller {
          position: relative;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border: 1px solid var(--mx-border);
          border-radius: 8px;
          background: var(--mx-bg);
          box-shadow: 0 1px 0 rgba(0,0,0,0.02);
        }

        table.matrix {
          width: 100%;
          border-collapse: collapse;
          min-width: 720px;
        }

        thead th {
          background: var(--mx-head-bg);
          color: var(--mx-head-fg);
          font-weight: 700;
          text-align: center;
          padding: 16px 14px;
          border-bottom: 1px solid var(--mx-border);
          border-right: 1px solid var(--mx-border);
          white-space: nowrap;
        }

        thead th:last-child {
          border-right: 0;
        }

        tbody th,
        tbody td {
          padding: 16px 14px;
          border-bottom: 1px solid var(--mx-border);
          border-right: 1px solid var(--mx-border);
          vertical-align: middle;
          text-align: center;
          height: 56px;
        }

        tbody tr:last-child th,
        tbody tr:last-child td {
          border-bottom: 0;
        }

        tbody td:last-child,
        tbody th:last-child {
          border-right: 0;
        }

        .left {
          text-align: left;
          font-weight: 500;
          color: var(--mx-fg);
          background: var(--mx-bg);
        }

        .sticky {
          position: sticky;
          left: 0;
          z-index: 1;
          box-shadow: 1px 0 0 0 var(--mx-border);
        }

        @media (max-width: 1024px) {
          .header h2 {
            font-size: 28px;
          }
        }

        @media (max-width: 768px) {
          .header h2 {
            font-size: 24px;
          }
          .sub {
            font-size: 14px;
          }
          thead th,
          tbody th,
          tbody td {
            padding: 12px 10px;
            height: 48px;
          }
          .tick {
            width: 1.25rem;
            height: 1.25rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 420px) {
          .header h2 {
            font-size: 22px;
          }
          .sub {
            font-size: 13px;
          }
          table.matrix {
            min-width: 640px;
          }
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </section>
  )
}