import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="bg-white dark:bg-[#071022] rounded-2xl p-10 hero-gradient shadow-sm">
        <div className="md:flex md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">FlowSync — Collaboration that actually moves work forward</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Shared workspaces, automated workflows, and real-time insights — designed for modern teams to ship faster.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/signup"><Button>Start free</Button></Link>
              <Link to="/services"><Button variant="ghost">Explore services</Button></Link>
            </div>
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">No credit card required • 14-day free trial</div>
          </div>

          <div className="mt-6 md:mt-0 grid grid-cols-1 gap-4 w-full md:w-96">
            <Card title="Task Automation" subtitle="Save hours" >
              <p className="text-sm text-gray-600 dark:text-gray-300">Automate repetitive work with simple rules and actions.</p>
            </Card>
            <Card title="Team Inbox" subtitle="All context in one place" >
              <p className="text-sm text-gray-600 dark:text-gray-300">Shared messages & tasks with full audit trail.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Features</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <Card title="Boards & Tasks" subtitle="Flexible trackers for any process"/>
          <Card title="Integrations" subtitle="Slack, Email, Zapier, Webhooks"/>
          <Card title="Analytics" subtitle="Real-time insights and reports"/>
        </div>
      </section>

      {/* PRICING (simple) */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Pricing</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#071022] p-6 rounded-2xl shadow-sm">
            <div className="font-semibold text-gray-800 dark:text-white">Starter</div>
            <div className="mt-2 text-3xl font-bold">$0 <span className="text-sm font-medium">/mo</span></div>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">For freelancers and small teams</p>
            <ul className="mt-4 text-sm text-gray-600 dark:text-gray-300 space-y-2">
              <li>Up to 3 members</li>
              <li>Unlimited projects</li>
            </ul>
            <div className="mt-6"><Link to="/signup"><Button>Get started</Button></Link></div>
          </div>

          <div className="bg-white dark:bg-[#071022] p-6 rounded-2xl shadow-sm border-2 border-brand">
            <div className="font-semibold text-gray-800 dark:text-white">Team</div>
            <div className="mt-2 text-3xl font-bold">$25 <span className="text-sm font-medium">/mo</span></div>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">Best for growing teams</p>
            <ul className="mt-4 text-sm text-gray-600 dark:text-gray-300 space-y-2">
              <li>Up to 10 members</li>
              <li>Priority support</li>
              <li>Advanced automation</li>
            </ul>
            <div className="mt-6"><Link to="/signup"><Button>Start trial</Button></Link></div>
          </div>

          <div className="bg-white dark:bg-[#071022] p-6 rounded-2xl shadow-sm">
            <div className="font-semibold text-gray-800 dark:text-white">Enterprise</div>
            <div className="mt-2 text-3xl font-bold">Custom</div>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">Large organizations & SSO</p>
            <ul className="mt-4 text-sm text-gray-600 dark:text-gray-300 space-y-2">
              <li>Unlimited members</li>
              <li>Dedicated support</li>
              <li>Custom SLAs</li>
            </ul>
            <div className="mt-6"><Link to="/contact"><Button variant="ghost">Contact sales</Button></Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}
