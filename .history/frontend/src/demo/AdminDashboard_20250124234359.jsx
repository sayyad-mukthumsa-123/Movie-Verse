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
import Card from './Cards'; // Updated the import for consistency

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');

  // Dummy data for demonstration (replace with actual API/database calls)
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alex Johnson', email: 'alex@example.com' },
    { id: 4, name: 'Alex Johnson', email: 'alex@example.com' },
    { id: 5, name: 'Alex Johnson', email: 'alex@example.com' },
    { id: 6, name: 'Alex Johnson', email: 'alex@example.com' },
    { id: 7, name: 'Alex Johnson', email: 'alex@example.com' },
    { id: 8, name: 'Alex Johnson', email: 'alex@example.com' },
    { id: 9, name: 'Alex Johnson', email: 'alex@example.com' },
    { id: 10, name: 'Alex Johnson', email: 'alex@example.com' },
    { id: 11, name: 'Alex Johnson', email: 'alex@example.com' },
    { id: 12, name: 'Alex Johnson', email: 'alex@example.com' },
    { id: 13, name: 'Alex Johnson', email: 'alex@example.com' },

  ];

  const groups = [
    { id: 1, name: 'Admins', members: 5 },
    { id: 2, name: 'Editors', members: 3 },
    { id: 3, name: 'Moderators', members: 2 },
  ];

  const renderContent = () => {
    const getSizeClass = (index) => {
      if (index === 0) return 'w-1/4'; // Small size for the first card
      if (index === 1) return 'w-1/2'; // Medium size for the second card
      return 'w-full'; // Large size for the third card
    };

    if (activeTab === 'users') {
      return (
        <div className="w-full bg-gray-100 p-6">
          <h2 className="text-xl font-bold mb-4">Users</h2>
          <div className="space-y-4"> {/* Use space-y-4 to add spacing between each card */}
            {users.map((user, index) => (
              <Card
                key={user.id}
                title={user.name}
                subtitle={user.email}
                className={getSizeClass(index)} // Apply the size class
              />
            ))}
          </div>
        </div>
      );
    } else if (activeTab === 'groups') {
      return (
        <div className="w-full bg-gray-100 p-6">
          <h2 className="text-xl font-bold mb-4">Groups</h2>
          <div className="space-y-4"> {/* Use space-y-4 to add spacing between each card */}
            {groups.map((group, index) => (
              <Card
                key={group.id}
                title={group.name}
                subtitle={`${group.members} members`}
                className={getSizeClass(index)} // Apply the size class
              />
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/12 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
        <ul>
          <li
            className={`cursor-pointer mb-4 p-2 rounded ${activeTab === 'users' ? 'bg-gray-700' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            Users
          </li>
          <li
            className={`cursor-pointer mb-4 p-2 rounded ${activeTab === 'groups' ? 'bg-gray-700' : ''}`}
            onClick={() => setActiveTab('groups')}
          >
            Groups
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="w-1/4 bg-gray-200 p-4">
        {renderContent()}
      </div>

      {/* Additional Info Section */}
      <div className="w-full bg-gray-100 p-6">
        <h2 className="text-xl font-bold mb-4">Additional Information</h2>
        <p>This section can be used for stats, additional information, or other content.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
