
import React from "react";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
    return (
        <>

<div class="sidebar">
    <h2>Admin Panel</h2>
    <ul>
      <li><a href="#">Dashboard</a></li>
      <li><a href="#">Users</a></li>
      <li><a href="#">Settings</a></li>
      <li><a href="#">Analytics</a></li>
      <li><a href="#">About</a></li>
    </ul>
  </div>

 
  <div class="header">
    <h1>Dashboard</h1>
  </div>

 
  <div class="content-wrapper">
   
    <div class="card">
      <h2>Welcome to the Admin Panel</h2>
      <p>This is where the main content will go.</p>
    </div>
    <div class="card">
      <h2>Users Management</h2>
      <p>Manage all users in the system.</p>
      
    </div>
    <div class="card">
      <h2>Analytics</h2>
      <p>View website analytics and statistics.</p>
    </div>
    <div class="card">
      <h2>Settings</h2>
      <p>Change system settings and configurations.</p>
    </div>
    <div class="card">
      <h2>Additional Section</h2>
      <p>This section can contain more content for administrators to manage.</p>
    </div>

    <div class="card">
      <h2>Reports</h2>
      <p>View and manage system reports.</p>
    </div>
    <div class="card">
      <h2>Notifications</h2>
      <p>Manage system notifications and alerts.</p>
    </div>
  </div>
        </>
    );
};

export default Sidebar;
