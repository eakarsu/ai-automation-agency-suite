export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  {
    "name": "AiBusinessAutomation",
    "ownership": "AiBusinessAutomation contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Automation Agency.",
    "coverage": [
      "Chatbot Builder",
      "Lead Qualification",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "noCodeAIAgency",
    "ownership": "noCodeAIAgency contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Automation Agency.",
    "coverage": [
      "Lead Qualification",
      "Appointment Booking",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AIChatbotBuilder",
    "ownership": "AIChatbotBuilder contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Automation Agency.",
    "coverage": [
      "Appointment Booking",
      "Email Automation",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "ai-sales-outreach",
    "ownership": "ai-sales-outreach contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Automation Agency.",
    "coverage": [
      "Email Automation",
      "CRM Workflows",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AIAppointmentSchedulerwithNLP",
    "ownership": "AIAppointmentSchedulerwithNLP contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Automation Agency.",
    "coverage": [
      "CRM Workflows",
      "WhatsApp/SMS Assistants",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AIEmailTriageResponseAgent",
    "ownership": "AIEmailTriageResponseAgent contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Automation Agency.",
    "coverage": [
      "WhatsApp/SMS Assistants",
      "Client Workspaces",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AISMSchatbot",
    "ownership": "AISMSchatbot contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Automation Agency.",
    "coverage": [
      "Client Workspaces",
      "Automation Templates",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "aIVoiceAgent",
    "ownership": "aIVoiceAgent contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Automation Agency.",
    "coverage": [
      "Automation Templates",
      "Deployments",
      "AI tools",
      "Source tables"
    ]
  }
];

export const dashboardMetrics: Metric[] = [
  { label: 'Source Projects', value: '10', note: 'Mapped donors' },
  { label: 'Feature Groups', value: '16', note: 'Unified navigation' },
  { label: 'AI Tools', value: '12', note: 'Suite copilots' },
  { label: 'Open Work', value: '52', note: 'Across workflows' },
];

export const healthMetrics: Metric[] = [
  { label: 'Connector Health', value: '96%', note: 'Pilot baseline' },
  { label: 'Audit Coverage', value: '100%', note: 'All workflows logged' },
  { label: 'Review Queue', value: '18', note: 'Needs owner action' },
  { label: 'Automation Runs', value: '410', note: 'Last 24 hours' },
];

export const dashboardModules = [
  "Chatbot Builder operating view",
  "Lead Qualification operating view",
  "Appointment Booking operating view",
  "Email Automation operating view",
  "CRM Workflows operating view",
  "WhatsApp/SMS Assistants operating view",
  "Client Workspaces operating view",
  "Automation Templates operating view"
];
export const workflowHighlights = [
  "Chatbot Builder workflow with records, AI assist, approvals, audit, and reporting",
  "Lead Qualification workflow with records, AI assist, approvals, audit, and reporting",
  "Appointment Booking workflow with records, AI assist, approvals, audit, and reporting",
  "Email Automation workflow with records, AI assist, approvals, audit, and reporting",
  "CRM Workflows workflow with records, AI assist, approvals, audit, and reporting",
  "WhatsApp/SMS Assistants workflow with records, AI assist, approvals, audit, and reporting"
];
