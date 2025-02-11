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
  const [selectedItem, setSelectedItem] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [deleteStep, setDeleteStep] = useState(0);
  const [deleteInput, setDeleteInput] = useState('');

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  const groups = [
    { id: 1, name: 'Admins', members: 5 },
    { id: 2, name: 'Editors', members: 3 },
  ];

  const handleView = (item) => {
    setSelectedItem(item);
    setIsProfileOpen(true);
  };

  const handleEdit = (item) => {
    alert(`Edit details of ${item.name}`);
  };

  const handleDelete = (item) => {
    if (deleteStep === 0) {
      setDeleteStep(1);
      alert('Do you really want to delete? Confirm to proceed.');
    } else if (deleteStep === 1) {
      if (deleteInput === item.name) {
        alert(`${item.name} deleted successfully.`);
        setDeleteStep(0);
        setDeleteInput('');
      } else {
        alert('Name does not match. Try again.');
      }
    }
  };

  const renderContent = () => {
    const data = activeTab === 'users' ? users : groups;
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">
          {activeTab === 'users' ? 'Users' : 'Groups'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => (
            <Card
              key={item.id}
              title={item.name}
              subtitle={
                activeTab === 'users'
                  ? item.email
                  : `${item.members} members`
              }
              onView={() => handleView(item)}
              onEdit={() => handleEdit(item)}
              onDelete={() => handleDelete(item)}
            />
          ))}
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

      {/* Main Content */}
      <div className="w-full bg-gray-100 p-6">
        {renderContent()}
      </div>

      {/* Profile Modal */}
      {isProfileOpen && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
            <h2 className="text-xl font-bold mb-4">Profile</h2>
            <p>
              <strong>Name:</strong> {selectedItem.name}
            </p>
            {activeTab === 'users' && (
              <p>
                <strong>Email:</strong> {selectedItem.email}
              </p>
            )}
            {activeTab === 'groups' && (
              <p>
                <strong>Members:</strong> {selectedItem.members}
              </p>
            )}
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => {
                  setIsProfileOpen(false);
                }}
                className="bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600"
              >
                Close
              </button>
              <button
                onClick={() => handleEdit(selectedItem)}
                className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
