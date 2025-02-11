// // // import React, { useState } from 'react';

// // // const AdminDashboard = () => {
// // //   const [activeTab, setActiveTab] = useState('users');

// // //   // Dummy data for demonstration (replace with actual API/database calls)
// // //   const users = [
// // //     { id: 1, name: 'John Doe', email: 'john@example.com' },
// // //     { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
// // //   ];

// // //   const groups = [
// // //     { id: 1, name: 'Admins', members: 5 },
// // //     { id: 2, name: 'Editors', members: 3 },
// // //   ];

// // //   const renderContent = () => {
// // //     if (activeTab === 'users') {
// // //       return (
// // //         <div>
// // //           <h2 className="text-xl font-bold mb-4">Users</h2>
// // //           <ul>
// // //             {users.map((user) => (
// // //               <li key={user.id} className="mb-2">
// // //                 {user.name} - {user.email}
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </div>
// // //       );
// // //     } else if (activeTab === 'groups') {
// // //       return (
// // //         <div>
// // //           <h2 className="text-xl font-bold mb-4">Groups</h2>
// // //           <ul>
// // //             {groups.map((group) => (
// // //               <li key={group.id} className="mb-2">
// // //                 {group.name} ({group.members} members)
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </div>
// // //       );
// // //     }
// // //     return null;
// // //   };

// // //   return (
// // //     <div className="flex h-screen">
// // //       {/* Sidebar */}
// // //       <div className="w-1/4 bg-gray-800 text-white p-4">
// // //         <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
// // //         <ul>
// // //           <li
// // //             className={`cursor-pointer mb-4 p-2 rounded ${
// // //               activeTab === 'users' ? 'bg-gray-700' : ''
// // //             }`}
// // //             onClick={() => setActiveTab('users')}
// // //           >
// // //             Users
// // //           </li>
// // //           <li
// // //             className={`cursor-pointer mb-4 p-2 rounded ${
// // //               activeTab === 'groups' ? 'bg-gray-700' : ''
// // //             }`}
// // //             onClick={() => setActiveTab('groups')}
// // //           >
// // //             Groups
// // //           </li>
// // //         </ul>
// // //       </div>

// // //       {/* Main Content */}
// // //       <div className="w-3/4 bg-gray-100 p-6">
// // //         {renderContent()}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AdminDashboard;

// // //cards integrate
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
//       <div className="w-full bg-gray-100 p-6">
//         {renderContent()}
//       </div>
      
//     </div>
//   );
// };

// export default AdminDashboard;


//buttons
import React, { useState } from 'react';
import Card from './Cards';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  const groups = [
    { id: 1, name: 'Admins', members: 5 },
    { id: 2, name: 'Editors', members: 3 },
  ];

  const handleView = (type, id) => {
    alert(`View ${type} with ID: ${id}`);
  };

  const handleEdit = (type, id) => {
    alert(`Edit ${type} with ID: ${id}`);
  };

  const handleDelete = (type, id) => {
    alert(`Delete ${type} with ID: ${id}`);
  };

  const renderContent = () => {
    if (activeTab === 'users') {
      return (
        <div>
          <h2 className="text-xl font-bold mb-4">Users</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user) => (
              <Card
                key={user.id}
                name={user.name}
                email={user.email}
                onView={() => handleView('user', user.id)}
                onEdit={() => handleEdit('user', user.id)}
                onDelete={() => handleDelete('user', user.id)}
              />
            ))}
          </div>
        </div>
      );
    } else if (activeTab === 'groups') {
      return (
        <div>
          <h2 className="text-xl font-bold mb-4">Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {groups.map((group) => (
              <div
                key={group.id}
                className="bg-white shadow-md rounded-lg p-4 mb-4"
              >
                <h3 className="text-lg font-bold">{group.name}</h3>
                <p className="text-gray-600">{group.members} members</p>
                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={() => handleView('group', group.id)}
                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                  >
                    View
                  </button>
                 
                  <button
                    onClick={() => handleDelete('group', group.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
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
      <div className="w-full bg-gray-100 p-6">{renderContent()}</div>
    </div>
  );
};

export default AdminDashboard;
