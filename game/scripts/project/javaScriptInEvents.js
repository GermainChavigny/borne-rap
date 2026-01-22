

const scriptsInEvents = {

	async Rappers_Event10_Act1(runtime, localVars)
	{
		var rappers = ["eminem", "orelsan", "snoop", "wojtek", "ours", "canarticho", "lisa", "mike"];
		runtime.setReturnValue(rappers[localVars.RapperIndex]);
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
