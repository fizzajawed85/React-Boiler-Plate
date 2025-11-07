import React from "react";

function IconGithub(){ return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.8.5.9 5.4.9 11.6c0 4.9 3.2 9 7.6 10.5.56.1.76-.24.76-.54 0-.27-.01-1-.02-1.96-3.1.67-3.75-1.5-3.75-1.5-.5-1.3-1.2-1.65-1.2-1.65-.98-.67.07-.66.07-.66 1.1.08 1.68 1.13 1.68 1.13.96 1.64 2.5 1.17 3.12.9.1-.7.37-1.17.67-1.44-2.48-.28-5.09-1.24-5.09-5.5 0-1.22.43-2.21 1.13-2.99-.11-.28-.49-1.4.11-2.9 0 0 .93-.3 3.05 1.13A10.58 10.58 0 0112 6.8c.94.00 1.89.13 2.78.38 2.12-1.43 3.05-1.13 3.05-1.13.6 1.5.22 2.62.11 2.9.7.78 1.13 1.78 1.13 2.99 0 4.28-2.61 5.22-5.1 5.49.38.33.72.98.72 1.99 0 1.44-.01 2.6-.01 2.96 0 .3.2.65.77.54 4.38-1.53 7.58-5.6 7.58-10.48C23.1 5.4 18.2.5 12 .5z"/></svg> }
function IconTwitter(){ return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 7.6c.01.16.01.32.01.48 0 4.86-3.7 10.47-10.47 10.47-2.08 0-4.01-.6-5.64-1.63.29.03.58.04.88.04 1.72 0 3.31-.59 4.57-1.59-1.61-.03-2.97-1.09-3.44-2.55.23.04.47.07.72.07.35 0 .69-.04 1.01-.12-1.69-.34-2.96-1.83-2.96-3.62v-.05c.5.28 1.07.45 1.67.47-1.01-.68-1.67-1.84-1.67-3.15 0-.69.19-1.34.52-1.9 1.84 2.25 4.6 3.73 7.7 3.88-.06-.27-.09-.55-.09-.84 0-2.03 1.64-3.67 3.67-3.67 1.05 0 2 .44 2.66 1.14.83-.16 1.61-.47 2.31-.9-.27.85-.85 1.56-1.62 2.01.74-.09 1.46-.28 2.12-.57-.49.73-1.11 1.36-1.81 1.87z"/></svg> }

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#071022] border-t dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">FlowSync</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Collaborate, automate, and scale your team's workflow.</p>
          </div>

          <div className="flex flex-col">
            <span className="font-semibold text-gray-800 dark:text-white">Product</span>
            <div className="mt-2 flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-300">
              <a href="/">Features</a>
              <a href="/pricing">Pricing</a>
              <a href="/dashboard">Dashboard</a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <div className="flex gap-3">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-brand"><IconGithub/></a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-brand"><IconTwitter/></a>
            </div>
            <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Designed & Built by <span className="font-semibold text-brand">Fizza Jawed</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
