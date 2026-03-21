import { useState } from "react";
import { User, ShoppingBag, Heart, Settings, LogOut, Package, CreditCard, MapPin, Bell } from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("orders");

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    memberSince: "January 2024"
  };

  const orders = [
    {
      id: "ORD-001",
      date: "2024-03-15",
      status: "Delivered",
      total: "$180.00",
      items: 2
    },
    {
      id: "ORD-002", 
      date: "2024-03-10",
      status: "In Transit",
      total: "$120.00",
      items: 1
    },
    {
      id: "ORD-003",
      date: "2024-03-05", 
      status: "Processing",
      total: "$250.00",
      items: 3
    }
  ];

  const addresses = [
    {
      id: 1,
      type: "Home",
      street: "123 Fashion Street",
      city: "New York, NY 10001",
      phone: "+1 234 567 8900",
      default: true
    },
    {
      id: 2,
      type: "Work",
      street: "456 Style Avenue", 
      city: "New York, NY 10002",
      phone: "+1 234 567 8901",
      default: false
    }
  ];

  const renderOrders = () => (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{order.id}</h3>
              <p className="text-sm text-gray-600">{order.date}</p>
              <p className="text-sm text-gray-600">{order.items} items</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">{order.total}</p>
              <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                order.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {order.status}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderPersonalInfo = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input type="text" value={user.name} className="w-full px-3 py-2 border border-gray-300 rounded-lg" readOnly />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" value={user.email} className="w-full px-3 py-2 border border-gray-300 rounded-lg" readOnly />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input type="tel" value={user.phone} className="w-full px-3 py-2 border border-gray-300 rounded-lg" readOnly />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
          <input type="text" value={user.memberSince} className="w-full px-3 py-2 border border-gray-300 rounded-lg" readOnly />
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
          Update Information
        </button>
      </div>
    </div>
  );

  const renderAddresses = () => (
    <div className="space-y-4">
      {addresses.map((address) => (
        <div key={address.id} className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold">{address.type}</h3>
                {address.default && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Default</span>
                )}
              </div>
              <p className="text-gray-600">{address.street}</p>
              <p className="text-gray-600">{address.city}</p>
              <p className="text-gray-600">{address.phone}</p>
            </div>
            <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
          </div>
        </div>
      ))}
      <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
        + Add New Address
      </button>
    </div>
  );

  const renderSettings = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">Email Notifications</p>
            <p className="text-sm text-gray-600">Receive order updates and promotions</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
          </label>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">SMS Notifications</p>
            <p className="text-sm text-gray-600">Get text messages for order updates</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
          </label>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">Two-Factor Authentication</p>
            <p className="text-sm text-gray-600">Add an extra layer of security</p>
          </div>
          <button className="text-blue-600 hover:text-blue-800 text-sm">Enable</button>
        </div>
        <hr className="my-4" />
        <button className="text-red-600 hover:text-red-800 font-medium">
          Delete Account
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <User className="w-10 h-10 text-gray-600" />
                </div>
                <h2 className="font-semibold text-lg">{user.name}</h2>
                <p className="text-gray-600 text-sm">{user.email}</p>
              </div>
              
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${
                    activeTab === "orders" ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
                  }`}
                >
                  <Package className="inline w-4 h-4 mr-2" />
                  My Orders
                </button>
                <button
                  onClick={() => setActiveTab("info")}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${
                    activeTab === "info" ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
                  }`}
                >
                  <User className="inline w-4 h-4 mr-2" />
                  Personal Info
                </button>
                <button
                  onClick={() => setActiveTab("addresses")}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${
                    activeTab === "addresses" ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
                  }`}
                >
                  <MapPin className="inline w-4 h-4 mr-2" />
                  Addresses
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${
                    activeTab === "settings" ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
                  }`}
                >
                  <Settings className="inline w-4 h-4 mr-2" />
                  Settings
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 text-red-600">
                  <LogOut className="inline w-4 h-4 mr-2" />
                  Sign Out
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <h1 className="text-2xl font-bold mb-6">
              {activeTab === "orders" && "My Orders"}
              {activeTab === "info" && "Personal Information"}
              {activeTab === "addresses" && "Shipping Addresses"}
              {activeTab === "settings" && "Account Settings"}
            </h1>

            {activeTab === "orders" && renderOrders()}
            {activeTab === "info" && renderPersonalInfo()}
            {activeTab === "addresses" && renderAddresses()}
            {activeTab === "settings" && renderSettings()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
