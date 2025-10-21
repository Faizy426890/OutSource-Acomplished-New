"use client"
import { ShoppingBag, Monitor, Truck, Building2, Heart, Coffee, Film, GraduationCap, Briefcase, Users, ArrowRight } from "lucide-react"

export default function ServicesGrid({
  title = "Industries We Serve",
  ctaLabel = "Contact Us Today",
  onCtaClick,
  ctaHref = "/contact",
}) {
  const items = [
    { 
      label: "Retail", 
      Icon: ShoppingBag, 
      desc: "Omnichannel experiences that convert.",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80"
    },
    { 
      label: "IT / Software", 
      Icon: Monitor, 
      desc: "Scalable systems and uptime.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
    },
    { 
      label: "Transportation", 
      Icon: Truck, 
      desc: "Routing, tracking, and logistics.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
    },
    { 
      label: "Real Estate", 
      Icon: Building2, 
      desc: "Listings and lead pipelines.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    },
    { 
      label: "Home Health Care", 
      Icon: Heart, 
      desc: "Secure, accessible patient journeys.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
    },
    { 
      label: "Food/Beverage", 
      Icon: Coffee, 
      desc: "Menus, ordering, and loyalty.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
    },
    { 
      label: "Entertainment", 
      Icon: Film, 
      desc: "Engagement and ticketing.",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80"
    },
    { 
      label: "Education", 
      Icon: GraduationCap, 
      desc: "Learning paths and analytics.",
      image: "https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/istock-151597880.jpg?itok=zv65Onys"
    },
    { 
      label: "Consulting", 
      Icon: Briefcase, 
      desc: "Proposals, CRM, and insights.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
    },
    { 
      label: "Franchise", 
      Icon: Users, 
      desc: "Multi-location brand consistency.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
    },
  ]

  return (
    <section className="services" aria-labelledby="services-heading">
      <div className="inner">
        <header className="header">
          <h2 id="services-heading" className="title">
            {title}
          </h2>
          <p className="subtitle">
            High-impact solutions tailored for your industry. Built for speed, scale, and measurable outcomes.
          </p>
          <span aria-hidden="true" className="accent-bar" />
        </header>

        <ul className="grid" role="list">
          {items.map(({ label, Icon, desc, image }) => (
            <li className="card" key={label}>
              <div className="bg-image" style={{ backgroundImage: `url(${image})` }} />
              <div className="overlay" />
              <div className="content">
                <div className="icon-wrap" aria-hidden="true">
                  <Icon className="icon" size={28} strokeWidth={2.5} />
                </div>
                <h3 className="label">{label}</h3>
                <p className="desc">{desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="cta-row">
          <a href={ctaHref} onClick={onCtaClick} className="cta" role="button" aria-label={ctaLabel}>
            <span>{ctaLabel}</span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>

      <style jsx>{`
        .services {
          --primary-color1: #e0730d;
          --ink-900: #111827;
          --ink-700: #374151;
          --ink-500: #1c234f;
          --surface: #ffffff;
          --surface-2: #f8fafc;
          --border: #e5e7eb;
          --ring: #1c234f;
          --shadow: 0 10px 20px rgba(17, 24, 39, 0.06), 0 4px 8px rgba(17, 24, 39, 0.04);
          --content-max: 1120px;
        }

        .services {
          width: 100%;
          background: var(--surface);
          padding: 56px 16px;
        }

        .inner {
          margin: 0 auto;
          max-width: var(--content-max);
        }

        .header {
          text-align: center;
          margin: 0 auto 28px;
          max-width: 760px;
        }

        .title {
          margin: 0;
          font-size: clamp(22px, 2.5vw, 32px);
          line-height: 1.2;
          color: var(--ink-900);
          letter-spacing: 0.2px;
          font-weight: 700;
        }

        .subtitle {
          margin: 8px auto 0;
          color: var(--ink-500);
          font-size: clamp(14px, 1.3vw, 16px);
          line-height: 1.6;
        }

        .accent-bar {
          display: inline-block;
          width: 88px;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-color1), var(--primary-color1));
          border-radius: 999px;
          margin-top: 16px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
          margin: 28px 0 24px;
          padding: 0;
          list-style: none;
        }

        .card {
          position: relative;
          background: var(--ink-900);
          border: 2px solid transparent;
          border-radius: 0;
          box-shadow: var(--shadow);
          padding: 0;
          text-align: center;
          overflow: hidden;
          min-height: 280px;
          display: flex;
          align-items: flex-end;
          transition: transform 320ms cubic-bezier(0.34, 1.56, 0.64, 1), 
                      box-shadow 320ms ease, 
                      border-color 320ms ease;
        }

        .card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.25), 0 0 0 2px var(--primary-color1);
          border-color: var(--primary-color1);
        }

        .bg-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          z-index: 1;
          transition: transform 400ms ease, filter 400ms ease;
        }

        .card:hover .bg-image {
          transform: scale(1.08);
          filter: brightness(0.8);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(17, 24, 39, 0.3) 0%,
            rgba(17, 24, 39, 0.7) 50%,
            rgba(17, 24, 39, 0.95) 100%
          );
          z-index: 2;
          transition: background 320ms ease;
        }

        .card:hover .overlay {
          background: linear-gradient(
            to bottom,
            rgba(28, 35, 79, 0.4) 0%,
            rgba(28, 35, 79, 0.75) 50%,
            rgba(28, 35, 79, 0.98) 100%
          );
        }

        .content {
          position: relative;
          z-index: 3;
          padding: 24px 20px 28px;
          width: 100%;
        }

        .icon-wrap {
          position: relative;
          display: inline-grid;
          place-items: center;
          width: 64px;
          height: 64px;
          margin: 0 auto 14px;
          border-radius: 50%;
          background: rgba(224, 115, 13, 0.15);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(34, 161, 240, 0.4);
          transition: all 280ms cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .card:hover .icon-wrap {
          background: rgba(224, 115, 13, 0.25);
          border-color: var(--primary-color1);
          transform: scale(1.12) rotate(5deg);
          box-shadow: 0 8px 24px rgba(224, 115, 13, 0.4);
        }

        .icon {
          color: #ffffff;
          stroke: #ffffff;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
          transition: transform 280ms ease;
        }

        .card:hover .icon {
          transform: scale(1.1);
        }

        .label {
          margin: 0 0 8px;
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.3px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
          transition: color 280ms ease, text-shadow 280ms ease;
        }

        .card:hover .label {
          color: var(--primary-color1);
          text-shadow: 0 2px 12px rgba(13, 38, 224, 0.6);
        }

        .desc {
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          line-height: 1.6;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
          font-weight: 500;
        }

        .cta-row {
          display: grid;
          place-items: center;
          margin-top: 10px;
        }

        .cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #1c234f;
          color: #ffffff;
          text-decoration: none;
          padding: 12px 18px;
          border-radius: 999px;
          font-weight: 600;
          letter-spacing: 0.2px;
          box-shadow: 0 12px 22px rgba(0, 0, 0, 0.15);
          border: 1px solid var(--primary-color1);
          transition: transform 200ms ease, box-shadow 200ms ease, filter 200ms ease;
        }

        .cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 28px rgba(0, 0, 0, 0.2);
          filter: brightness(1.05);
        }

        .cta:focus-visible {
          outline: 3px solid var(--primary-color1);
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          .card,
          .cta,
          .bg-image,
          .icon-wrap {
            transition: none;
          }
          .card:hover {
            transform: none;
          }
          .card:hover .bg-image {
            transform: none;
          }
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          }
        }

        @media (max-width: 380px) {
          .grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }
          .icon-wrap {
            width: 56px;
            height: 56px;
          }
          .card {
            min-height: 240px;
          }
        }
      `}</style>
    </section>
  )
}