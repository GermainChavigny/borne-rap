

const scriptsInEvents = {

	async Rappers_Event10_Act1(runtime, localVars)
	{
		var rappers = ["eminem", "orelsan", "snoop", "wojtek", "ours", "canarticho", "lisa", "mike", "r2d2"];
		runtime.setReturnValue(rappers[localVars.RapperIndex]);
	},

	async Rappers_Event11_Act1(runtime, localVars)
	{
		var rappers = ["b-rabbit", "orelsan", "snoooop", "wojtek", "l'ours", "canarticho", "lisa", "prison mike", "r2d2"];
		runtime.setReturnValue(rappers[localVars.RapperIndex]);
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
