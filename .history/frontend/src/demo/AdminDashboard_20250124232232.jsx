// // import React, { useState } from 'react';

// // const AdminDashboard = () => {
// //   const [activeTab, setActiveTab] = useState('users');

// //   // Dummy data for demonstration (replace with actual API/database calls)
// //   const users = [
// //     { id: 1, name: 'John Doe', email: 'john@example.com' },
// //     { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
// //   ];

// //   const groups = [
// //     { id: 1, name: 'Admins', members: 5 },
// //     { id: 2, name: 'Editors', members: 3 },
// //   ];

// //   const renderContent = () => {
// //     if (activeTab === 'users') {
// //       return (
// //         <div>
// //           <h2 className="text-xl font-bold mb-4">Users</h2>
// //           <ul>
// //             {users.map((user) => (
// //               <li key={user.id} className="mb-2">
// //                 {user.name} - {user.email}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       );
// //     } else if (activeTab === 'groups') {
// //       return (
// //         <div>
// //           <h2 className="text-xl font-bold mb-4">Groups</h2>
// //           <ul>
// //             {groups.map((group) => (
// //               <li key={group.id} className="mb-2">
// //                 {group.name} ({group.members} members)
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       );
// //     }
// //     return null;
// //   };

// //   return (
// //     <div className="flex h-screen">
// //       {/* Sidebar */}
// //       <div className="w-1/4 bg-gray-800 text-white p-4">
// //         <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
// //         <ul>
// //           <li
// //             className={`cursor-pointer mb-4 p-2 rounded ${
// //               activeTab === 'users' ? 'bg-gray-700' : ''
// //             }`}
// //             onClick={() => setActiveTab('users')}
// //           >
// //             Users
// //           </li>
// //           <li
// //             className={`cursor-pointer mb-4 p-2 rounded ${
// //               activeTab === 'groups' ? 'bg-gray-700' : ''
// //             }`}
// //             onClick={() => setActiveTab('groups')}
// //           >
// //             Groups
// //           </li>
// //         </ul>
// //       </div>

// //       {/* Main Content */}
// //       <div className="w-3/4 bg-gray-100 p-6">
// //         {renderContent()}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;

// //cards integrate
// import React, { useState } from 'react';
// import Card from './Cards'; // Import the Card component

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState('users');

//   // Dummy data for demonstration (replace with actual API/database calls)
//   const users = [
//     { id: 1, name: 'John Doe', email: 'john@example.com' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
//   ];

//   const groups = [
//     { id: 1, name: 'Admins', members: 5 },
//     { id: 2, name: 'Editors', members: 3 },
//   ];

//   const renderContent = () => {
//     if (activeTab === 'users') {
//       return (
//         <div>
//           <h2 className="text-xl font-bold mb-4">Users</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {users.map((user) => (
//               <Card key={user.id} name={user.name} email={user.email} />
//             ))}
//           </div>
//         </div>
//       );
//     } else if (activeTab === 'groups') {
//       return (
//         <div>
//           <h2 className="text-xl font-bold mb-4">Groups</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {groups.map((group) => (
//               <div key={group.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
//                 <h3 className="text-lg font-bold">{group.name}</h3>
//                 <p className="text-gray-600">{group.members} members</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-gray-800 text-white p-4">
//         <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
//         <ul>
//           <li
//             className={`cursor-pointer mb-4 p-2 rounded ${
//               activeTab === 'users' ? 'bg-gray-700' : ''
//             }`}
//             onClick={() => setActiveTab('users')}
//           >
//             Users
//           </li>
//           <li
//             className={`cursor-pointer mb-4 p-2 rounded ${
//               activeTab === 'groups' ? 'bg-gray-700' : ''
//             }`}
//             onClick={() => setActiveTab('groups')}
//           >
//             Groups
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="w-1/4 bg-gray-100 p-6">
//         {renderContent()}
//       </div>
      
//     </div>
//   );
// };

// export default AdminDashboard;


//3-section
import React, { useState } from 'react';
import Card from './Cards'; // Import the Card component

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
    return (
      <div className="flex space-x-6">
        {/* Users Section */}
        <div className="w-1/2 bg-gray-100 p-6">
          <h2 className="text-xl font-bold mb-4">Users</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user) => (
              <Card key={user.id} name={user.name} email={user.email} />
            ))}
          </div>
        </div>

        {/* Groups Section */}
        <div className="w-1/2 bg-gray-100 p-6">
          <h2 className="text-xl font-bold mb-4">Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {groups.map((group) => (
              <div key={group.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                <h3 className="text-lg font-bold">{group.name}</h3>
                <p className="text-gray-600">{group.members} members</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
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

      {/* Additional Section */}
      <div className="w-1/4 bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">Additional Section</h2>
        {/* You can add any additional content here */}
        <p>This section can be used for stats, additional information, or other content.</p>
      </div>

      {/* Main Content */}
      <div className="w-2/4 bg-gray-100 p-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
