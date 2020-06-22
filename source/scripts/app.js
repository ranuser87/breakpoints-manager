let BreakpointsObserver = require("./breakpointsObserver").default;
window.breakpointsObserver = new BreakpointsObserver().init();

let logger = {
	_node: document.querySelector(".js-log"),
	_createMessage(e, date) {
		let {currentBreakpoint, prevBreakpoint} = e;
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		return `Current breakpoint - <span>${currentBreakpoint}</span>
				<br/> 
				Previous breakpoint - <span>${prevBreakpoint}</span>
				<br/>
				Event has happened in <span>${hours}:${minutes}:${seconds}</span>`;
	},
	inform(e) {
		let date = new Date();
		let message = this._createMessage(e, date);
		this._node.innerHTML = message;
	}
}

breakpointsObserver.subscribe(logger.inform.bind(logger));

