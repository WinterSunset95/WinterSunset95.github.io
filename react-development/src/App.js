import React from 'react'
import Header from './components/Header'
import Main from './components/Main'

function App() {	
	function opentab(evt, tabname) {
		var i, tabcontent, tablinks;
		tablinks = document.getelementsbyclassname('tablist');
		for (i=0; i<tablinks.length; i++) {
			tablinks[i].classname = tablinks[i].classname.replace("active", "")
		}
		evt.currenttarget.classname += "active"
		console.log(evt.currenttarget)
	}
	return (	
		<div className="main-container">
		  <Header />
		  <Main />
		</div>
	);
}

export default App;
