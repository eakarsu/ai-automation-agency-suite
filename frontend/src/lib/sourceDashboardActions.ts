export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "chatbot-builder",
    "label": "Chatbot Builder",
    "description": "Chatbot Builder actions optimized from donor dashboards and exposed as one AI Automation Agency action group.",
    "href": "/chatbot-builder",
    "sourceProjects": [
      "AiBusinessAutomation",
      "noCodeAIAgency",
      "AIChatbotBuilder",
      "ai-sales-outreach",
      "AIAppointmentSchedulerwithNLP"
    ],
    "examples": [
      "Open Chatbot Builder",
      "Review Automation Delivery",
      "Run Chatbot Builder AI check"
    ],
    "count": 5
  },
  {
    "id": "lead-qualification",
    "label": "Lead Qualification",
    "description": "Lead Qualification actions optimized from donor dashboards and exposed as one AI Automation Agency action group.",
    "href": "/lead-qualification",
    "sourceProjects": [
      "noCodeAIAgency",
      "AIChatbotBuilder",
      "ai-sales-outreach",
      "AIAppointmentSchedulerwithNLP",
      "AIEmailTriageResponseAgent"
    ],
    "examples": [
      "Open Lead Qualification",
      "Review Revenue Operations",
      "Run Lead Qualification AI check"
    ],
    "count": 5
  },
  {
    "id": "appointment-booking",
    "label": "Appointment Booking",
    "description": "Appointment Booking actions optimized from donor dashboards and exposed as one AI Automation Agency action group.",
    "href": "/appointment-booking",
    "sourceProjects": [
      "AIChatbotBuilder",
      "ai-sales-outreach",
      "AIAppointmentSchedulerwithNLP",
      "AIEmailTriageResponseAgent",
      "AISMSchatbot"
    ],
    "examples": [
      "Open Appointment Booking",
      "Review Revenue Operations",
      "Run Appointment Booking AI check"
    ],
    "count": 5
  },
  {
    "id": "email-automation",
    "label": "Email Automation",
    "description": "Email Automation actions optimized from donor dashboards and exposed as one AI Automation Agency action group.",
    "href": "/email-automation",
    "sourceProjects": [
      "ai-sales-outreach",
      "AIAppointmentSchedulerwithNLP",
      "AIEmailTriageResponseAgent",
      "AISMSchatbot",
      "aIVoiceAgent"
    ],
    "examples": [
      "Open Email Automation",
      "Review Automation Delivery",
      "Run Email Automation AI check"
    ],
    "count": 5
  },
  {
    "id": "crm-workflows",
    "label": "CRM Workflows",
    "description": "CRM Workflows actions optimized from donor dashboards and exposed as one AI Automation Agency action group.",
    "href": "/crm-workflows",
    "sourceProjects": [
      "AIAppointmentSchedulerwithNLP",
      "AIEmailTriageResponseAgent",
      "AISMSchatbot",
      "aIVoiceAgent",
      "AiCustomerSupportAgent"
    ],
    "examples": [
      "Open CRM Workflows",
      "Review Operations",
      "Run CRM Workflows AI check"
    ],
    "count": 5
  },
  {
    "id": "whatsapp-sms-assistants",
    "label": "WhatsApp/SMS Assistants",
    "description": "WhatsApp/SMS Assistants actions optimized from donor dashboards and exposed as one AI Automation Agency action group.",
    "href": "/whatsapp-sms-assistants",
    "sourceProjects": [
      "AIEmailTriageResponseAgent",
      "AISMSchatbot",
      "aIVoiceAgent",
      "AiCustomerSupportAgent",
      "homeServices_salesforce"
    ],
    "examples": [
      "Open WhatsApp/SMS Assistants",
      "Review Conversation Channels",
      "Run WhatsApp/SMS Assistants AI check"
    ],
    "count": 5
  },
  {
    "id": "client-workspaces",
    "label": "Client Workspaces",
    "description": "Client Workspaces actions optimized from donor dashboards and exposed as one AI Automation Agency action group.",
    "href": "/client-workspaces",
    "sourceProjects": [
      "AISMSchatbot",
      "aIVoiceAgent",
      "AiCustomerSupportAgent",
      "homeServices_salesforce",
      "AiBusinessAutomation"
    ],
    "examples": [
      "Open Client Workspaces",
      "Review Agency Operations",
      "Run Client Workspaces AI check"
    ],
    "count": 5
  },
  {
    "id": "automation-templates",
    "label": "Automation Templates",
    "description": "Automation Templates actions optimized from donor dashboards and exposed as one AI Automation Agency action group.",
    "href": "/automation-templates",
    "sourceProjects": [
      "aIVoiceAgent",
      "AiCustomerSupportAgent",
      "homeServices_salesforce",
      "AiBusinessAutomation",
      "noCodeAIAgency"
    ],
    "examples": [
      "Open Automation Templates",
      "Review Agency Operations",
      "Run Automation Templates AI check"
    ],
    "count": 5
  },
  {
    "id": "deployments",
    "label": "Deployments",
    "description": "Deployments actions optimized from donor dashboards and exposed as one AI Automation Agency action group.",
    "href": "/deployments",
    "sourceProjects": [
      "AiCustomerSupportAgent",
      "homeServices_salesforce",
      "AiBusinessAutomation",
      "noCodeAIAgency",
      "AIChatbotBuilder"
    ],
    "examples": [
      "Open Deployments",
      "Review Operations",
      "Run Deployments AI check"
    ],
    "count": 5
  }
];
