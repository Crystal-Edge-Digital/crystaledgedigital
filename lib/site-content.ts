export type ServiceIconName = "cloud" | "ai" | "app" | "growth" | "web"

export type ServiceInterestId =
  | "website"
  | "automation"
  | "app-ai"
  | "cloud"
  | "growth"
  | "unsure"

export type Service = {
  id: string
  icon: ServiceIconName
  title: string
  problem: string
  outcome: string
  deliverables: readonly string[]
}

export const services: readonly Service[] = [
  {
    id: "cloud-solutions",
    icon: "cloud",
    title: "Cloud Solutions",
    problem: "Your systems are difficult to scale, manage, or trust.",
    outcome:
      "Build a clearer cloud foundation that fits how your business operates.",
    deliverables: [
      "Cloud architecture",
      "Migration planning",
      "System optimization",
    ],
  },
  {
    id: "ai-integration",
    icon: "ai",
    title: "AI Integration",
    problem:
      "Useful knowledge and repetitive decisions are trapped in manual work.",
    outcome:
      "Apply AI where it can save time, improve access to information, or support a product.",
    deliverables: ["AI assistants", "Data workflows", "Product integrations"],
  },
  {
    id: "app-development",
    icon: "app",
    title: "App Development",
    problem:
      "Off-the-shelf tools cannot support your workflow or product idea.",
    outcome:
      "Turn the idea into a reliable web or mobile experience designed around real users.",
    deliverables: [
      "Product planning",
      "Web applications",
      "Mobile experiences",
    ],
  },
  {
    id: "seo-growth",
    icon: "growth",
    title: "SEO & Growth",
    problem:
      "The right customers are not finding or understanding your business online.",
    outcome:
      "Create a practical path from search and content to a clear customer action.",
    deliverables: [
      "SEO foundations",
      "Content structure",
      "Conversion improvements",
    ],
  },
  {
    id: "web-design",
    icon: "web",
    title: "Web Design",
    problem:
      "Your website no longer reflects the quality or clarity of your business.",
    outcome:
      "Launch a modern, responsive site that makes your offer and next step easy to understand.",
    deliverables: [
      "UX and content structure",
      "Responsive design",
      "Website development",
    ],
  },
]

export type ServiceInterest = {
  id: ServiceInterestId
  label: string
  service: string
  description: string
  deliverables: readonly string[]
}

export const serviceInterests: readonly ServiceInterest[] = [
  {
    id: "website",
    label: "Launch or improve my website",
    service: "Web Design",
    description:
      "Clarify what your business offers and turn it into a fast, credible website that works on every screen.",
    deliverables: [
      "Content and UX structure",
      "Responsive design",
      "Launch support",
    ],
  },
  {
    id: "automation",
    label: "Automate a repetitive workflow",
    service: "Workflow Automation",
    description:
      "Map the work that is slowing your team down and connect the right tools into a dependable workflow.",
    deliverables: [
      "Workflow audit",
      "Automation build",
      "Documentation and handoff",
    ],
  },
  {
    id: "app-ai",
    label: "Build an app or AI tool",
    service: "App Development & AI Integration",
    description:
      "Shape the idea, define a useful first version, and build the application or AI capability around real needs.",
    deliverables: ["Product scope", "Application build", "AI integration"],
  },
  {
    id: "cloud",
    label: "Improve my cloud systems",
    service: "Cloud Solutions",
    description:
      "Review the current environment and create a clearer path for migration, reliability, or scale.",
    deliverables: [
      "Architecture review",
      "Migration plan",
      "Cloud optimization",
    ],
  },
  {
    id: "growth",
    label: "Help people find my business",
    service: "SEO & Growth",
    description:
      "Improve how search engines and customers understand your offer, content, and next action.",
    deliverables: [
      "SEO review",
      "Content structure",
      "Conversion recommendations",
    ],
  },
  {
    id: "unsure",
    label: "I’m not sure yet",
    service: "A practical starting point",
    description:
      "You do not need to choose the technology first. Start with what is getting in the way, and I’ll help identify the right path.",
    deliverables: [
      "Problem discovery",
      "Clear recommendation",
      "Right-sized next step",
    ],
  },
]

export type Project = {
  title: string
  href: string
  image: string
  type: string
  problem: string
  built: string
  tags: readonly string[]
}

export const projects: readonly Project[] = [
  {
    title: "Coastal Creations Studio",
    href: "https://coastalcreationsstudio.com",
    image: "/work/coastal-creations.png",
    type: "Commerce & booking platform",
    problem:
      "A coastal art studio needed one place for its online store, class scheduling, and gift cards.",
    built:
      "A responsive e-commerce and class-booking experience with structured content and payments.",
    tags: ["Next.js", "Sanity", "Square"],
  },
  {
    title: "Clarity Edit",
    href: "https://clarity-edit.io",
    image: "/work/clarity-edit.png",
    type: "AI product",
    problem:
      "Job seekers needed a clearer way to research companies and tailor application materials.",
    built:
      "An AI-assisted application workspace for resume analysis, company research, and personalized cover letters.",
    tags: ["Next.js", "AI", "AWS"],
  },
  {
    title: "Coastal Properties",
    href: "https://coastal-properties.vercel.app",
    image: "/work/coastal-properties.png",
    type: "Hospitality website",
    problem:
      "Beachfront rentals needed a focused digital home for property information and guest questions.",
    built:
      "A property-management and rentals site with a built-in AI chat assistant for guests.",
    tags: ["Next.js", "AI Chatbot", "Hospitality"],
  },
  {
    title: "Theresa Kennish",
    href: "https://theresa-kennish.vercel.app",
    image: "/work/theresa-kennish.png",
    type: "Artist portfolio",
    problem:
      "A painter needed a calm, visual way to organize and present original collections online.",
    built:
      "A responsive portfolio and collection system for acrylic, oil, and mixed-media work.",
    tags: ["Next.js", "Sanity", "Portfolio"],
  },
]

export const processSteps = [
  {
    number: "01",
    title: "Tell me what is slowing you down",
    description:
      "Share the goal, bottleneck, or idea in plain language. A technical specification is not required.",
  },
  {
    number: "02",
    title: "Receive a clear recommendation and scope",
    description:
      "I’ll translate the problem into a practical path, priorities, and a scope you can evaluate.",
  },
  {
    number: "03",
    title: "Build, launch, and improve",
    description:
      "We’ll create the right solution, put it into use, and identify the next improvements from real feedback.",
  },
] as const

export const engagementPaths = [
  {
    title: "Quick Win",
    description:
      "A focused audit, improvement, repair, or small automation when the path is already clear.",
    examples: [
      "Website review",
      "Workflow improvement",
      "Focused technical fix",
    ],
  },
  {
    title: "Build",
    description:
      "A defined website, application, AI integration, or cloud project taken from scope through launch.",
    examples: ["New website", "Custom application", "Cloud or AI project"],
  },
  {
    title: "Ongoing Partner",
    description:
      "Continued technical support, optimization, and iteration as your business and systems evolve.",
    examples: [
      "Product iteration",
      "System optimization",
      "Digital growth support",
    ],
  },
] as const

export const faqs = [
  {
    question: "What kinds of businesses do you work with?",
    answer:
      "I work best with small and growing businesses that need a practical digital partner without the layers of a large consultancy.",
  },
  {
    question: "Do I need to know exactly what I need?",
    answer:
      "No. Start with the goal or the work that is getting in the way. I can help turn that into a clear recommendation and scope.",
  },
  {
    question: "Can you improve an existing site or system?",
    answer:
      "Yes. A project can begin with an audit, a focused improvement, or a plan for rebuilding only the parts that need it.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Ongoing support can be scoped when a project needs continued optimization, maintenance, or product iteration.",
  },
  {
    question: "How does a project begin?",
    answer:
      "It starts with a short conversation about the goal, current constraints, and the most useful first step. You do not need a finished brief.",
  },
  {
    question: "How quickly will I hear back?",
    answer:
      "After you open the prepared email draft and send it, I’ll review the context and follow up directly. The website does not claim a fixed response time.",
  },
] as const

export function getServiceInterest(id: ServiceInterestId) {
  return (
    serviceInterests.find((interest) => interest.id === id) ??
    serviceInterests[5]
  )
}
