export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "agency-delivery-operations-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve the Agency Delivery Operations workflow and produce a decision-ready output.",
      "placeholder": "Describe the goal, customer, case, or decision needed",
      "options": [],
      "required": true,
      "source": "AiBusinessAutomation, ai_business_business_automation, AIWorkflowCapture, AIAuditWorkpaperAutomation"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste records, documents, transcript text, metrics, case notes, or source details for Agency Delivery Operations.",
      "placeholder": "Paste the source context to analyze",
      "options": [],
      "required": true,
      "source": "AiBusinessAutomation, ai_business_business_automation, AIWorkflowCapture, AIAuditWorkpaperAutomation"
    },
    {
      "name": "workflow_focus",
      "label": "Workflow Focus",
      "type": "select",
      "defaultValue": "Client Intake",
      "placeholder": "Select the workflow",
      "options": [
        "Client Intake",
        "Automation Blueprints",
        "Proposal Builder",
        "Delivery Tracker",
        "ROI Reporting"
      ],
      "required": true,
      "source": "AiBusinessAutomation, ai_business_business_automation, AIWorkflowCapture, AIAuditWorkpaperAutomation"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Professional action plan",
      "placeholder": "Select output format",
      "options": [
        "Professional action plan",
        "Evidence table",
        "Risk review",
        "Checklist",
        "Executive summary"
      ],
      "required": true,
      "source": "AiBusinessAutomation, ai_business_business_automation, AIWorkflowCapture, AIAuditWorkpaperAutomation"
    }
  ],
  "chatbot-builder-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Chatbot Builder workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Chatbot Builder request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Automation Agency Suite"
    }
  ],
  "lead-qualification-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Lead Qualification workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Lead Qualification request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Automation Agency Suite"
    }
  ],
  "appointment-booking-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Appointment Booking workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Appointment Booking request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Automation Agency Suite"
    }
  ],
  "email-automation-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Email Automation workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Email Automation request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Automation Agency Suite"
    }
  ],
  "crm-workflows-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve CRM Workflows workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample CRM Workflows request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Automation Agency Suite"
    }
  ],
  "whatsapp-sms-assistants-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve WhatsApp/SMS Assistants workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample WhatsApp/SMS Assistants request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Automation Agency Suite"
    }
  ],
  "client-workspaces-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Client Workspaces workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Client Workspaces request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Automation Agency Suite"
    }
  ],
  "automation-templates-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Automation Templates workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Automation Templates request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Automation Agency Suite"
    }
  ],
  "deployments-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Deployments workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Deployments request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Automation Agency Suite"
    }
  ],
  "analytics-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Analytics workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Analytics request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Automation Agency Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Automation Agency Suite"
    }
  ]
};
