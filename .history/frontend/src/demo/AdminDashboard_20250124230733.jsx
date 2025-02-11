import React, { useState } from 'react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');

  // Dummy data for demonstration (replace with actual API/database calls)
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  const groups = [
    { id: 1, name: 'Admins', members: 5 },
    { id: 2, name: 'Editors', members: 3 },
  ];

  const renderContent = () => {
    if (activeTab === 'users') {
      return (
        <div>
          <h2 className="text-xl font-bold mb-4">Users</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id} className="mb-2">
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (activeTab === 'groups') {
      return (
        <div>
          <h2 className="text-xl font-bold mb-4">Groups</h2>
          <ul>
            {groups.map((group) => (
              <li key={group.id} className="mb-2">
                {group.name} ({group.members} members)
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
        <ul>
          <li
            className={`cursor-pointer mb-4 p-2 rounded ${
              activeTab === 'users' ? 'bg-gray-700' : ''
            }`}
            onClick={() => setActiveTab('users')}
          >
            Users
          </li>
          <li
            className={`cursor-pointer mb-4 p-2 rounded ${
              activeTab === 'groups' ? 'bg-gray-700' : ''
            }`}
            onClick={() => setActiveTab('groups')}
          >
            Groups
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-gray-100 p-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
