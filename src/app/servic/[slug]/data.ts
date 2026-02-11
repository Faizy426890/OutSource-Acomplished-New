// app/services/data.ts
import { Heart, Scale, Calculator, Cog, Users, Briefcase, FileText, TrendingUp, Shield, Clock, Zap, Target, CheckCircle, Award, Star, Phone, Mail, Calendar, UserCheck, Building, CreditCard, BarChart, Settings, Code, Database, Globe, Layout, Smartphone, Cloud, Lock, Repeat, Activity, PieChart, DollarSign, Wallet, FileCheck, Clipboard, Headphones, Truck, Stethoscope, Home, ClipboardList, ActivitySquare, Scale as ScaleIcon, Gavel, FileSearch, UserPlus, Clock as ClockIcon, CheckSquare, Calendar as CalendarIcon, AlertCircle, TrendingUp as TrendingUpIcon, Users as UsersIcon, Briefcase as BriefcaseIcon, FileText as FileTextIcon, PieChart as PieChartIcon } from "lucide-react";

export interface ServiceFeature {
  title: string;
  description: string;
  icon: any;
  benefits: string[];
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
  icon: any;
}

export interface ServiceMetric {
  value: string;
  label: string;
  icon: any;
}

export interface ServiceCase {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface ServiceDetail {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  Icon: any;
  color: string;
  colorLight: string;
  video: string;
  heroImage: string;
  overview: {
    problem: string;
    solution: string;
    unique: string;
  };
  features: ServiceFeature[];
  process: ServiceProcess[];
  metrics: ServiceMetric[];
  caseStudies: ServiceCase[];
  benefits: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  whyChoose: {
    title: string;
    description: string;
    icon: any;
  }[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    id: 1,
    slug: "home-health-staffing",
    title: "Home Health & Staffing",
    subtitle: "The 'Fingerprint' Advantage",
    tagline: "For Agency Owners tired of the daily grind",
    Icon: Heart,
    color: "#e0730d",
    colorLight: "#fef3e9",
    video: "https://res.cloudinary.com/diml90c1y/video/upload/v1767143842/Law_firms_ready_5_sllshx.mp4",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=80",
    overview: {
      problem: "Home health agency owners spend 70% of their time on administrative tasks instead of growth. Staffing shortages, compliance headaches, and operational inefficiencies cap your revenue potential at $2-3M annually.",
      solution: "Our complete operational back-office solution takes over scheduling, payroll, compliance, and recruitment. You focus on expanding your agency while we handle the daily grind with healthcare-specific expertise.",
      unique: "We've run successful agencies ourselves. This isn't theoretical consulting - we've processed the payroll, managed the caregivers, and built the systems that scale. You get battle-tested operations, not textbook advice."
    },
    features: [
      {
        title: "Full-Cycle Coordination",
        description: "Balance patient needs and caregiver schedules with insider precision",
        icon: Calendar,
        benefits: [
          "AI-powered scheduling optimization",
          "Real-time caregiver availability tracking",
          "Automated shift reminders and confirmations",
          "Emergency replacement within 30 minutes"
        ]
      },
      {
        title: "Intake & Patient Satisfaction",
        description: "High-touch first impressions that drive retention",
        icon: UserCheck,
        benefits: [
          "24/7 patient intake coordination",
          "Personalized care plan development",
          "Family communication portal",
          "Satisfaction surveys and improvement tracking"
        ]
      },
      {
        title: "Logistics & Payroll",
        description: "Stay compliant while keeping your staff happy",
        icon: Truck,
        benefits: [
          "Bi-weekly payroll processing for 100+ caregivers",
          "EVV (Electronic Visit Verification) compliance",
          "Worker's compensation tracking",
          "Mileage and expense reimbursement"
        ]
      },
      {
        title: "Recruitment Engines",
        description: "Find and vet talent other agencies miss",
        icon: Users,
        benefits: [
          "Multi-channel sourcing strategy",
          "Skills assessment and background checks",
          "Accelerated credentialing process",
          "Retention bonus programs"
        ]
      },
      {
        title: "Compliance Management",
        description: "Stay audit-ready with automated documentation",
        icon: Shield,
        benefits: [
          "License and certification tracking",
          "State regulation compliance monitoring",
          "Automated audit trail generation",
          "Quarterly compliance reviews"
        ]
      },
      {
        title: "Growth Operations",
        description: "Scale without adding administrative overhead",
        icon: TrendingUp,
        benefits: [
          "New location setup support",
          "Contract negotiation assistance",
          "Payer credentialing management",
          "Growth forecasting and capacity planning"
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Audit",
        description: "We analyze your current operations, identify bottlenecks, and create a 30-60-90 day transformation plan.",
        icon: ClipboardList
      },
      {
        step: 2,
        title: "Systems Integration",
        description: "Our team integrates with your existing tools or implements our proven stack of scheduling, payroll, and compliance software.",
        icon: Settings
      },
      {
        step: 3,
        title: "Shadow Operations",
        description: "We learn your unique processes by working alongside your team for 2 weeks, documenting every workflow.",
        icon: Users
      },
      {
        step: 4,
        title: "Full Transition",
        description: "Your team steps back as we take over daily operations with zero disruption to patient care or staff.",
        icon: CheckCircle
      },
      {
        step: 5,
        title: "Continuous Optimization",
        description: "Monthly strategy sessions and weekly KPI reviews ensure your operations improve month over month.",
        icon: TrendingUp
      }
    ],
    metrics: [
      {
        value: "40%",
        label: "Reduction in admin time",
        icon: Clock
      },
      {
        value: "99%",
        label: "Schedule fill rate",
        icon: CheckCircle
      },
      {
        value: "3x",
        label: "Revenue growth potential",
        icon: TrendingUp
      },
      {
        value: "24h",
        label: "New caregiver onboarding",
        icon: Zap
      }
    ],
    caseStudies: [
      {
        title: "Regional Agency from $2M to $6M in 18 months",
        industry: "Home Health",
        challenge: "Owner was working 70-hour weeks, handling scheduling manually in Excel. Turnover was 45% annually, and they couldn't open their second location due to admin overload.",
        solution: "We implemented our full operational stack, took over all scheduling and payroll, and built a recruitment engine that reduced time-to-hire by 60%.",
        results: [
          "Scaled from 45 to 120 caregivers",
          "Opened 2 new locations",
          "Turnover reduced to 22%",
          "Owner works 30 hours/week on growth"
        ]
      }
    ],
    benefits: [
      "Eliminate 40+ hours/week of administrative work",
      "Reduce caregiver turnover by 30-50%",
      "Increase billable hours through better scheduling",
      "Open new locations without new admin hires",
      "Stay compliant with changing regulations",
      "Improve patient satisfaction scores"
    ],
    faqs: [
      {
        question: "How quickly can you take over our operations?",
        answer: "Most agencies are fully transitioned within 3-4 weeks. We start with a discovery audit, then implement a phased approach that ensures zero disruption to your daily operations."
      },
      {
        question: "What systems do you work with?",
        answer: "We're platform-agnostic and work with all major home health software including Alora, KanTime, Axxess, HHAeXchange, and WellSky. We can also implement our proven tech stack if you prefer."
      },
      {
        question: "How do you handle compliance across different states?",
        answer: "Our compliance team tracks regulations in all 50 states. We maintain state-specific checklists and audit protocols, ensuring your agency stays compliant regardless of where you operate."
      },
      {
        question: "What's the minimum commitment?",
        answer: "We require a 12-month minimum commitment to ensure proper ROI. Most agencies see full return on investment within 3-4 months of implementation."
      }
    ],
    whyChoose: [
      {
        title: "Founder-Led Experience",
        description: "Our leadership team built and sold a successful home health agency. We've done this before.",
        icon: Award
      },
      {
        title: "Healthcare-Specific",
        description: "Not generic BPO. Our processes are built for home health compliance and caregiver dynamics.",
        icon: Heart
      },
      {
        title: "Outcome-Based Pricing",
        description: "We succeed when you succeed. Our pricing scales with your growth.",
        icon: TrendingUp
      },
      {
        title: "Full Transparency",
        description: "You get access to all systems, reports, and data. No black boxes.",
        icon: Eye
      }
    ]
  },
  {
    id: 2,
    slug: "legal-intake-professional-services",
    title: "Legal Intake & Professional Services",
    subtitle: "Lead-to-Client Machine",
    tagline: "For Law Firms ready to convert",
    Icon: Scale,
    color: "#1c234f",
    colorLight: "#eef2ff",
    video: "https://res.cloudinary.com/diml90c1y/video/upload/v1767133077/Law_firms_ready_a4ptl3.mp4",
    heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2000&q=80",
    overview: {
      problem: "Law firms waste 30-40% of marketing spend on leads that never convert. Partners spend billable hours on intake calls, case chasing, and administrative work that could be done at 1/3 the cost.",
      solution: "We operate as your 24/7 intake department. Every lead is answered within 2 minutes, qualified against your criteria, and scheduled with the right attorney. You only talk to qualified prospects ready to retain.",
      unique: "We combine healthcare-level operational rigor with legal industry expertise. Our intake specialists are trained in legal ethics, case evaluation, and client psychology. We don't just answer phones - we build your pipeline."
    },
    features: [
      {
        title: "Intake Mastery",
        description: "High-touch operational rigor ensures every lead is captured, qualified, and converted",
        icon: Phone,
        benefits: [
          "Answer within 2 rings, 24/7/365",
          "Multi-channel intake (calls, chat, text, email)",
          "Instant lead scoring and routing",
          "30-point qualification framework"
        ]
      },
      {
        title: "Back-Office Logistics",
        description: "Manage the administrative burden so attorneys focus on the law",
        icon: FileText,
        benefits: [
          "Client onboarding and document collection",
          "Medical record requests and organization",
          "Lien processing and management",
          "Settlement statement preparation"
        ]
      },
      {
        title: "Client Pipeline",
        description: "Systematic approach to moving prospects through your funnel",
        icon: TrendingUp,
        benefits: [
          "Automated nurture sequences",
          "Follow-up scheduling and reminders",
          "Conversion analytics and reporting",
          "Retention risk identification"
        ]
      },
      {
        title: "Document Management",
        description: "Streamlined case file organization and retrieval",
        icon: FileCheck,
        benefits: [
          "Digital file organization and indexing",
          "OCR and document digitization",
          "Deadline tracking and calendaring",
          "Secure client portal access"
        ]
      },
      {
        title: "Marketing ROI Optimization",
        description: "Close the loop on your marketing spend",
        icon: PieChart,
        benefits: [
          "Lead source tracking and attribution",
          "Cost-per-acquisition analysis",
          "Campaign performance reporting",
          "Budget reallocation recommendations"
        ]
      },
      {
        title: "Client Experience",
        description: "Differentiate through exceptional service",
        icon: Star,
        benefits: [
          "Welcome calls and intake packages",
          "Regular case status updates",
          "Client satisfaction surveys",
          "Referral request automation"
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: "Intake System Design",
        description: "We map your ideal client profile and design qualification workflows that filter for high-value cases.",
        icon: Clipboard
      },
      {
        step: 2,
        title: "Team Training",
        description: "Our intake specialists complete 40 hours of training on your practice areas, firm culture, and case criteria.",
        icon: Users
      },
      {
        step: 3,
        title: "Technology Integration",
        description: "We connect with your CRM, phone system, and case management software for seamless data flow.",
        icon: Settings
      },
      {
        step: 4,
        title: "Live Intake Launch",
        description: "We begin answering calls, with daily reports and weekly calibration sessions to optimize conversion.",
        icon: Phone
      },
      {
        step: 5,
        title: "Continuous Refinement",
        description: "A/B test scripts, follow-up timing, and qualification criteria to continuously improve conversion rates.",
        icon: TrendingUp
      }
    ],
    metrics: [
      {
        value: "89%",
        label: "First-call answer rate",
        icon: Phone
      },
      {
        value: "2min",
        label: "Average response time",
        icon: Clock
      },
      {
        value: "40%",
        label: "Increase in conversion",
        icon: TrendingUp
      },
      {
        value: "30h",
        label: "Weekly partner hours saved",
        icon: Clock
      }
    ],
    caseStudies: [
      {
        title: "Personal Injury Firm Doubles Caseload Without Adding Staff",
        industry: "Personal Injury",
        challenge: "Firm was spending $80k/month on Google Ads but only converting 8% of leads. Partners were spending 20+ hours/week on intake calls, pulling them away from active cases.",
        solution: "We implemented 24/7 live intake, trained specialists on case qualification, and built automated nurture sequences for non-immediate cases.",
        results: [
          "Conversion rate increased to 23%",
          "Marketing ROI improved 3.2x",
          "Partners regained 30 hours/week",
          "Case volume doubled in 8 months"
        ]
      }
    ],
    benefits: [
      "Never miss another lead - 24/7/365 coverage",
      "Reduce cost-per-acquisition by 40-60%",
      "Partners focus on billable work, not intake",
      "Consistent qualification across all leads",
      "Detailed analytics on lead sources and ROI",
      "Scalable infrastructure without hiring overhead"
    ],
    faqs: [
      {
        question: "How do you ensure legal ethics compliance?",
        answer: "All intake specialists complete certified training on ABA rules, state bar regulations, and ethical advertising guidelines. We never provide legal advice - only factual information and case qualification."
      },
      {
        question: "What practice areas do you support?",
        answer: "We specialize in personal injury, mass tort, medical malpractice, employment law, and class actions. Our team has experience with contingency fee, hourly, and hybrid billing models."
      },
      {
        question: "How do you handle non-English speakers?",
        answer: "We maintain a diverse team with fluent Spanish, Mandarin, Korean, and Vietnamese speakers. For other languages, we use certified legal interpreters to ensure accurate communication."
      },
      {
        question: "What's your pricing model?",
        answer: "We offer flat monthly packages based on call volume, or performance-based pricing tied to conversion rates. Both options include full transparency on all calls and data."
      }
    ],
    whyChoose: [
      {
        title: "Legal Industry Focus",
        description: "We don't do general BPO. Every process is designed specifically for law firm intake and case management.",
        icon: Gavel
      },
      {
        title: "Ethics-First Training",
        description: "Our team is certified in legal ethics and client confidentiality requirements.",
        icon: Shield
      },
      {
        title: "ROI Guarantee",
        description: "We guarantee to increase your conversion rate or you don't pay.",
        icon: TrendingUp
      },
      {
        title: "Full Integration",
        description: "We work with Clio, MyCase, PracticePanther, Filevine, and all major legal CRMs.",
        icon: Settings
      }
    ]
  },
  {
    id: 3,
    slug: "bookkeeping-accounting",
    title: "Bookkeeping & Accounting",
    subtitle: "White-Label Back-Office",
    tagline: "For Small Businesses & CPA Firms",
    Icon: Calculator,
    color: "#059669",
    colorLight: "#ecfdf5",
    video: "https://res.cloudinary.com/diml90c1y/video/upload/v1767143843/Law_firms_ready_4_x5olmf.mp4",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=80",
    overview: {
      problem: "CPA firms are drowning in compliance work while clients demand advisory services. Small businesses overpay for basic bookkeeping or DIY themselves into audit risk and cash flow problems.",
      solution: "We become your invisible back-office. For CPAs: we handle monthly closes, reconciliations, and tax prep support so you can focus on advisory. For businesses: we deliver enterprise-grade bookkeeping at startup prices.",
      unique: "We combine US-trained CPAs with efficient global execution. You get the expertise of a Big 4 alum with the economics of a modern practice. All work is reviewed by licensed professionals before delivery."
    },
    features: [
      {
        title: "White-Label Accounting",
        description: "Act as your invisible back-office",
        icon: Building,
        benefits: [
          "Branded client communications",
          "Direct client relationship management",
          "Custom reporting packages",
          "Scalable team without overhead"
        ]
      },
      {
        title: "Payroll & Financial Reporting",
        description: "Clean, accurate, timely data",
        icon: DollarSign,
        benefits: [
          "Multi-state payroll processing",
          "Financial statement preparation",
          "Management reporting packages",
          "Cash flow forecasting"
        ]
      },
      {
        title: "Tax Prep Support",
        description: "Organize records so CPAs focus on strategy",
        icon: FileCheck,
        benefits: [
          "Year-round tax data organization",
          "Estimated tax payment calculations",
          "Depreciation schedule maintenance",
          "Tax projection modeling"
        ]
      },
      {
        title: "Monthly Reconciliation",
        description: "Every transaction accounted for",
        icon: CheckCircle,
        benefits: [
          "Bank and credit card reconciliation",
          "Accounts receivable/payable aging",
          "Inventory tracking and COGS",
          "Fixed asset management"
        ]
      },
      {
        title: "Controller Services",
        description: "Strategic financial oversight",
        icon: PieChart,
        benefits: [
          "Monthly financial reviews",
          "KPI dashboard creation",
          "Budgeting and forecasting",
          "Internal control assessment"
        ]
      },
      {
        title: "Software Implementation",
        description: "Tech stack optimization",
        icon: Settings,
        benefits: [
          "QuickBooks/Xero setup and optimization",
          "Bill.com, Expensify integration",
          "Automated workflow configuration",
          "Team training and support"
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: "Clean-Up & Catch-Up",
        description: "We reconcile historical data, correct errors, and establish accurate opening balances.",
        icon: Clipboard
      },
      {
        step: 2,
        title: "Process Documentation",
        description: "Every recurring task is documented, reviewed, and assigned to dedicated team members.",
        icon: FileText
      },
      {
        step: 3,
        title: "Monthly Close Protocol",
        description: "We execute day 1-5 close process with complete reconciliations and variance analysis.",
        icon: Calendar
      },
      {
        step: 4,
        title: "Review & Deliver",
        description: "US-based CPAs review all work before delivery to clients or firm partners.",
        icon: CheckCircle
      },
      {
        step: 5,
        title: "Quarterly Strategy",
        description: "We present financial insights and recommendations, not just historical numbers.",
        icon: TrendingUp
      }
    ],
    metrics: [
      {
        value: "60%",
        label: "Reduction in close time",
        icon: Clock
      },
      {
        value: "99.9%",
        label: "Reconciliation accuracy",
        icon: CheckCircle
      },
      {
        value: "50%",
        label: "Lower cost than in-house",
        icon: DollarSign
      },
      {
        value: "5d",
        label: "Average monthly close",
        icon: Calendar
      }
    ],
    caseStudies: [
      {
        title: "CPA Firm Adds 40% Capacity Without Hiring",
        industry: "Public Accounting",
        challenge: "Regional firm was turning away $1.2M in advisory work because staff was fully utilized on compliance. Client expectations were shifting from tax prep to year-round strategic advice.",
        solution: "We took over monthly write-up, reconciliations, and tax data organization for 60% of their bookkeeping clients, operating entirely under their brand.",
        results: [
          "Partners added 15 advisory clients at $24k/year average",
          "Staff overtime reduced by 90%",
          "Client retention increased to 98%",
          "Profit margins improved 22 percentage points"
        ]
      }
    ],
    benefits: [
      "Cut monthly close from 15 days to 5 days",
      "Eliminate reconciliation errors and audit adjustments",
      "Scale your practice without hiring risk",
      "Maintain your brand while expanding capacity",
      "US CPA review on all deliverables",
      "Fixed monthly pricing, no surprises"
    ],
    faqs: [
      {
        question: "How do you ensure data security?",
        answer: "We maintain SOC 2 Type II certification, use bank-level encryption, and never store credentials. All team members pass background checks and sign strict confidentiality agreements."
      },
      {
        question: "What software do you support?",
        answer: "We're certified in QuickBooks Online, QuickBooks Desktop, Xero, Sage, and NetSuite. For payroll, we support Gusto, ADP, Paychex, and SurePayroll."
      },
      {
        question: "Can you work under our CPA firm's brand?",
        answer: "Yes - all communications, reports, and emails use your branding. Clients never know we exist unless you choose to disclose the relationship."
      },
      {
        question: "What's your typical engagement term?",
        answer: "We prefer 12-month minimums for optimal ROI, but offer month-to-month after the first year. Most clients stay 3+ years."
      }
    ],
    whyChoose: [
      {
        title: "US CPA Oversight",
        description: "Every work product is reviewed by licensed US CPAs before delivery.",
        icon: Award
      },
      {
        title: "Technology-First",
        description: "We automate 70%+ of manual entry so your team focuses on analysis.",
        icon: Zap
      },
      {
        title: "White-Label Capable",
        description: "We disappear behind your brand - clients never know we're here.",
        icon: Shield
      },
      {
        title: "Fixed-Fee Certainty",
        description: "Predictable monthly pricing based on volume, not hours.",
        icon: DollarSign
      }
    ]
  },
  {
    id: 4,
    slug: "it-workflow-automation",
    title: "IT & Workflow Automation",
    subtitle: "The Secret Sauce",
    tagline: "For every industry ready to scale",
    Icon: Cog,
    color: "#7c3aed",
    colorLight: "#f5f3ff",
    video: "https://res.cloudinary.com/diml90c1y/video/upload/v1767134458/Law_firms_ready_1_ijsxgx.mp4",
    heroImage: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=2000&q=80",
    overview: {
      problem: "Off-the-shelf software never quite fits. Your team compensates with spreadsheets, manual workarounds, and hours of repetitive tasks. Every 5-person process becomes 15 clicks when it should be 3.",
      solution: "We build custom software and automations that eliminate manual work. From simple Zapier workflows to full-stack applications, we create tools that fit your exact business logic - not the other way around.",
      unique: "We don't just code - we've run operations. Every automation we build comes from 15+ years of watching teams waste time on tasks that could be handled by software. We build what we wished we had when we were running agencies."
    },
    features: [
      {
        title: "Custom Software",
        description: "Niche applications built from real operational experience",
        icon: Code,
        benefits: [
          "Web and mobile applications",
          "Client portals and dashboards",
          "Internal operations platforms",
          "API development and integration"
        ]
      },
      {
        title: "Workflow Automation",
        description: "Turn manual tasks into automated workflows",
        icon: Zap,
        benefits: [
          "Multi-step process automation",
          "Document generation and routing",
          "Approval workflow systems",
          "Automated notification chains"
        ]
      },
      {
        title: "System Integration",
        description: "Connect your existing tools into seamless systems",
        icon: Database,
        benefits: [
          "CRM to ERP synchronization",
          "Legacy system modernization",
          "API connection development",
          "Data migration and cleaning"
        ]
      },
      {
        title: "Process Optimization",
        description: "Identify and eliminate workflow bottlenecks",
        icon: Activity,
        benefits: [
          "Current state process mapping",
          "Bottleneck identification",
          "Efficiency metric establishment",
          "Continuous improvement cycles"
        ]
      },
      {
        title: "Business Intelligence",
        description: "Turn data into decisions",
        icon: BarChart,
        benefits: [
          "Custom dashboard creation",
          "Real-time KPI tracking",
          "Predictive analytics models",
          "Automated report generation"
        ]
      },
      {
        title: "Cloud Infrastructure",
        description: "Scalable, secure, and reliable hosting",
        icon: Cloud,
        benefits: [
          "AWS/Azure/GCP architecture",
          "Serverless application deployment",
          "Automated backup and recovery",
          "Security and compliance monitoring"
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Process Audit",
        description: "We map your current workflows, time each task, and identify the highest-ROI automation opportunities.",
        icon: Clipboard
      },
      {
        step: 2,
        title: "Solution Architecture",
        description: "Our team designs the ideal workflow and specifies the technology stack required to execute it.",
        icon: Layout
      },
      {
        step: 3,
        title: "Agile Development",
        description: "We build in 2-week sprints, delivering working software at the end of each iteration for immediate feedback.",
        icon: Code
      },
      {
        step: 4,
        title: "Testing & Deployment",
        description: "Rigorous QA testing, user acceptance testing, and staged rollout to ensure zero disruption.",
        icon: CheckCircle
      },
      {
        step: 5,
        title: "Training & Handoff",
        description: "We document everything, train your team, and provide ongoing support and optimization.",
        icon: Users
      }
    ],
    metrics: [
      {
        value: "70%",
        label: "Manual task reduction",
        icon: Clock
      },
      {
        value: "100x",
        label: "ROI on automation",
        icon: TrendingUp
      },
      {
        value: "3min",
        label: "Hours saved per employee daily",
        icon: Zap
      },
      {
        value: "0",
        label: "Manual data entry errors",
        icon: CheckCircle
      }
    ],
    caseStudies: [
      {
        title: "Medical Billing Company Eliminates 2,000 Manual Hours Monthly",
        industry: "Healthcare Administration",
        challenge: "Claims processing required 14 steps across 5 systems. Each claim took 8 minutes of manual work, and error rates were causing 12% denial rates and 3-week payment delays.",
        solution: "We built an automation layer that extracts data from scanned documents, validates against requirements, submits to clearinghouses, and flags exceptions - all without human touch.",
        results: [
          "Processing time reduced from 8 minutes to 45 seconds",
          "Denial rate dropped to 4%",
          "Payment cycles improved by 11 days",
          "5 FTEs redeployed to higher-value work"
        ]
      }
    ],
    benefits: [
      "Eliminate hours of daily manual data entry",
      "Reduce errors and rework to near zero",
      "Connect systems that weren't designed to work together",
      "Scale operations without adding headcount",
      "Custom tools built exactly to your process",
      "Own your IP - no vendor lock-in"
    ],
    faqs: [
      {
        question: "Do you build from scratch or use existing tools?",
        answer: "We're pragmatic. If off-the-shelf software with configuration solves the problem, we recommend it. When no tool fits your exact need, we build custom. We're not tied to any particular stack - we use the right tool for the job."
      },
      {
        question: "How do you price custom development?",
        answer: "We provide fixed-price quotes based on detailed specifications. Most projects range from $25k-150k depending on complexity. We also offer retainers for ongoing maintenance and enhancement."
      },
      {
        question: "Who owns the intellectual property?",
        answer: "You do. Full rights to all source code, documentation, and system architecture transfer to you upon final payment. No licensing fees, no vendor lock-in."
      },
      {
        question: "How long do typical projects take?",
        answer: "Simple automation workflows launch in 4-6 weeks. Full custom applications typically take 3-6 months. We deliver working software incrementally, so you see value long before final delivery."
      }
    ],
    whyChoose: [
      {
        title: "Operators Who Code",
        description: "We've run businesses and felt the pain of manual processes. We build for users, not engineers.",
        icon: Users
      },
      {
        title: "ROI-First Approach",
        description: "We prioritize projects by business impact. No building features nobody needs.",
        icon: TrendingUp
      },
      {
        title: "Full-Stack Capability",
        description: "From front-end UI to database architecture to cloud deployment - we handle it all.",
        icon: Settings
      },
      {
        title: "Long-Term Partnership",
        description: "We're not just developers - we're strategic partners who care about your operational success.",
        icon: Heart
      }
    ]
  }
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string) {
  return serviceDetails.find(service => service.slug === slug);
}

// Helper function to get service by id
export function getServiceById(id: number) {
  return serviceDetails.find(service => service.id === id);
}

// Helper function to get all services
export function getAllServices() {
  return serviceDetails;
}

// Helper function to get all slugs for static paths
export function getAllServiceSlugs() {
  return serviceDetails.map(service => ({
    params: {
      slug: service.slug
    }
  }));
}
