import React from "react";
import Card from "../components/Card";

export default function Services(){
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Services</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">We help teams adopt FlowSync with onboarding, integrations and custom workflows.</p>

      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Onboarding" subtitle="Get started quickly" >
          <p className="text-sm text-gray-600 dark:text-gray-300">Hands-on setup and team training.</p>
        </Card>
        <Card title="Integrations" subtitle="Connect tools" >
          <p className="text-sm text-gray-600 dark:text-gray-300">Slack, Gmail, Zapier, Webhooks.</p>
        </Card>
        <Card title="Custom Workflows" subtitle="Tailored automations" >
          <p className="text-sm text-gray-600 dark:text-gray-300">Automation building & consultancy.</p>
        </Card>
      </div>
    </div>
  );
}
