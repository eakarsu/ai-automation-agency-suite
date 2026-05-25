import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  Database,
  FileText,
  Files,
  LayoutDashboard,
  Mail,
  MessageSquareText,
  PackageCheck,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type FeatureDefinition = { title: string; href: string; category: string; summary: string; bullets: string[] };
export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};
export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const suiteSourceOwners = ["AiBusinessAutomation","noCodeAIAgency","AIChatbotBuilder","ai-sales-outreach","AIAppointmentSchedulerwithNLP","AIEmailTriageResponseAgent","AISMSchatbot","aIVoiceAgent","AiCustomerSupportAgent","homeServices_salesforce"];

const features = [
  {
    slug: "chatbot-builder",
    title: "Chatbot Builder",
    href: "/chatbot-builder",
    category: "Automation Delivery",
    icon: Bot,
    summary: "Chatbot Builder combines donor project behavior into the AI Automation Agency operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Chatbot Builder queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Chatbot Builder", value: "18", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "lead-qualification",
    title: "Lead Qualification",
    href: "/lead-qualification",
    category: "Revenue Operations",
    icon: Workflow,
    summary: "Lead Qualification combines donor project behavior into the AI Automation Agency operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Lead Qualification queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Lead Qualification", value: "27", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "appointment-booking",
    title: "Appointment Booking",
    href: "/appointment-booking",
    category: "Revenue Operations",
    icon: Users,
    summary: "Appointment Booking combines donor project behavior into the AI Automation Agency operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Appointment Booking queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Appointment Booking", value: "36", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "email-automation",
    title: "Email Automation",
    href: "/email-automation",
    category: "Automation Delivery",
    icon: CalendarCheck,
    summary: "Email Automation combines donor project behavior into the AI Automation Agency operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Email Automation queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Email Automation", value: "45", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "crm-workflows",
    title: "CRM Workflows",
    href: "/crm-workflows",
    category: "Operations",
    icon: Mail,
    summary: "CRM Workflows combines donor project behavior into the AI Automation Agency operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["CRM Workflows queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "CRM Workflows", value: "54", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "8", note: 'Next 14 days' },
    ],
  },
  {
    slug: "whatsapp-sms-assistants",
    title: "WhatsApp/SMS Assistants",
    href: "/whatsapp-sms-assistants",
    category: "Conversation Channels",
    icon: MessageSquareText,
    summary: "WhatsApp/SMS Assistants combines donor project behavior into the AI Automation Agency operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["WhatsApp/SMS Assistants queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "WhatsApp/SMS Assistants", value: "63", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "9", note: 'Next 14 days' },
    ],
  },
  {
    slug: "client-workspaces",
    title: "Client Workspaces",
    href: "/client-workspaces",
    category: "Agency Operations",
    icon: BarChart3,
    summary: "Client Workspaces combines donor project behavior into the AI Automation Agency operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Client Workspaces queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Client Workspaces", value: "72", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "automation-templates",
    title: "Automation Templates",
    href: "/automation-templates",
    category: "Agency Operations",
    icon: ClipboardList,
    summary: "Automation Templates combines donor project behavior into the AI Automation Agency operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Automation Templates queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Automation Templates", value: "81", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "deployments",
    title: "Deployments",
    href: "/deployments",
    category: "Operations",
    icon: FileText,
    summary: "Deployments combines donor project behavior into the AI Automation Agency operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Deployments queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Deployments", value: "90", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "analytics",
    title: "Analytics",
    href: "/analytics",
    category: "Governance",
    icon: PackageCheck,
    summary: "Analytics combines donor project behavior into the AI Automation Agency operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Analytics queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Analytics", value: "99", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "documents",
    title: "Documents",
    href: "/documents",
    category: "Core Platform",
    icon: Files,
    summary: "AI Automation Agency documents, packets, evidence, uploads, and exports.",
    bullets: ["Documents","Uploads","Exports"],
    metrics: [
      { label: "Documents", value: "48", note: 'Tracked' },
      { label: 'Open', value: "7", note: 'Needs review' },
      { label: 'Updated', value: "21", note: 'This week' },
    ],
  },
  {
    slug: "notifications",
    title: "Notifications",
    href: "/notifications",
    category: "Core Platform",
    icon: Bell,
    summary: "AI Automation Agency alerts, reminders, exceptions, and approvals.",
    bullets: ["Alerts","Reminders","Exceptions"],
    metrics: [
      { label: "Notifications", value: "65", note: 'Tracked' },
      { label: 'Open', value: "10", note: 'Needs review' },
      { label: 'Updated', value: "29", note: 'This week' },
    ],
  },
  {
    slug: "integrations",
    title: "Integrations",
    href: "/integrations",
    category: "Core Platform",
    icon: Plug,
    summary: "AI Automation Agency source-system connector health and sync status.",
    bullets: ["Connectors","Sync","Warnings"],
    metrics: [
      { label: "Integrations", value: "82", note: 'Tracked' },
      { label: 'Open', value: "13", note: 'Needs review' },
      { label: 'Updated', value: "37", note: 'This week' },
    ],
  },
  {
    slug: "profiles",
    title: "Profiles",
    href: "/profiles",
    category: "Core Platform",
    icon: UserRound,
    summary: "AI Automation Agency users, roles, teams, permissions, and ownership settings.",
    bullets: ["Users","Roles","Teams"],
    metrics: [
      { label: "Profiles", value: "99", note: 'Tracked' },
      { label: 'Open', value: "16", note: 'Needs review' },
      { label: 'Updated', value: "45", note: 'This week' },
    ],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: "AI Automation Agency assistant for triage, drafting, analysis, recommendations, and operational review.",
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '128', note: 'Last 24 hours' },
      { label: 'Drafts', value: '204', note: 'Generated' },
      { label: 'Escalations', value: '14', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: "Targeted AI Automation Agency AI tools for scoring, generation, extraction, classification, exception review, and reporting.",
    bullets: ['Scoring', 'Classification', 'Exception review'],
    metrics: [
      { label: 'Runs', value: '318', note: 'Last 24 hours' },
      { label: 'Signals', value: '88', note: 'New alerts' },
      { label: 'Accepted', value: '117', note: 'Reviewer accepted' },
    ],
  },
] as const;

const allFeatures = [...features, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({ label: feature.title, href: feature.href, icon: feature.icon }));
export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({ title: feature.title, href: feature.href, category: feature.category, summary: feature.summary, bullets: [...feature.bullets] }));

export const featureFamilies = [
  {
    "name": "Automation Delivery",
    "features": [
      "Chatbot Builder",
      "Email Automation"
    ]
  },
  {
    "name": "Revenue Operations",
    "features": [
      "Lead Qualification",
      "Appointment Booking"
    ]
  },
  {
    "name": "Operations",
    "features": [
      "CRM Workflows",
      "Deployments"
    ]
  },
  {
    "name": "Conversation Channels",
    "features": [
      "WhatsApp/SMS Assistants"
    ]
  },
  {
    "name": "Agency Operations",
    "features": [
      "Client Workspaces",
      "Automation Templates"
    ]
  },
  {
    "name": "Governance",
    "features": [
      "Analytics"
    ]
  },
  {
    "name": "Intelligence Layer",
    "features": [
      "AI Assistant",
      "AI Tools"
    ]
  },
  {
    "name": "Core Platform",
    "features": [
      "Documents",
      "Notifications",
      "Integrations",
      "Profiles"
    ]
  }
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: feature.title + ' is normalized from source applications into one merged suite workflow.',
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries(features.map((feature) => [feature.slug, toPage(feature)]));
export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(aiFeatures.map((feature) => [feature.slug, toPage(feature)]));
export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: suiteSourceOwners.length ? suiteSourceOwners : ["AI Automation Agency"],
      operatingQueues: [feature.title + ' records', feature.title + ' approvals', feature.title + ' exceptions'],
      outputs: [feature.title + ' dashboard', feature.title + ' export', feature.title + ' audit trail'],
      relatedRoutes: [{ label: 'Dashboard', href: '/dashboard' }, { label: 'All Features', href: '/features' }, { label: 'AI Tools', href: '/features/ai-tools' }],
    },
  ]),
);
