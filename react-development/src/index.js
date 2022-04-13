import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';

function openTab(evt, tabName) {
	var i, tabcontent, tablinks;
	tablinks = document.getElementsByClassName('tabList');
	for (i=0; i<tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace("active", "")
	}
	evt.currentTarget.className += "active"
	console.log(evt.currentTarget)
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);


