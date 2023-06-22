import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
//import PropTypes from 'prop-types';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Компоненты //

// App
// Profile
// Statistics    
// FriendList      =>   6  компонентов
// FriendListItem
// TransactionHistory

// Props и их типы //

// App - -
// Profile - username: string, tag: string, location: string, avatar: string, stats: array;
// Statistics - title: string, stats: array;
// FriendList - friends: array;
// FriendListItem - avatar: string, name: string, isOnline: bool;
// TransactionHistory - items: array;