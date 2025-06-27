import React from "react";
import { Briefcase, Send, DollarSign, Mail } from "lucide-react";

const stats = [
  {
    id: 1,
    title: "Total Earnings",
    value: "$1,250",
    icon: <DollarSign className="text-green-600 w-6 h-6" />,
  },
  {
    id: 2,
    title: "Active Projects",
    value: "3",
    icon: <Briefcase className="text-blue-600 w-6 h-6" />,
  },
  {
    id: 3,
    title: "Proposals Sent",
    value: "14",
    icon: <Send className="text-purple-600 w-6 h-6" />,
  },
  {
    id: 4,
    title: "Messages",
    value: "5",
    icon: <Mail className="text-yellow-500 w-6 h-6" />,
  },
];

const DashboardHome = () => {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white dark:bg-gray-900 shadow-sm p-5 rounded-xl flex items-center gap-4">
            <div className="p-3 bg-gray-100 rounded-full">{stat.icon}</div>
            <div>
              <p className="text-sm dark:text-gray-400 text-gray-500">{stat.title}</p>
              <h2 className="text-xl font-semibold dark:text-white text-gray-800">{stat.value}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended or Activity Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h2>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-3">
            <li>✅ Proposal sent to “React Dashboard UI” task</li>
            <li>📥 New message from client: Startup Hive</li>
            <li>🚀 Task “SEO Content Needed” is now active</li>
            <li>💸 Payment of $250 received</li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold dark:text-white text-gray-700 mb-4">Quick Actions</h2>
          <div className="flex flex-col space-y-3">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Post a Task
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Browse Gigs
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              Create a Gig
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
