
Zerda = function ()
{
	var self = this;
	this.eat = function (merda)
	{

		Zerda.prototype.merda = function() {
			self.this.push(merda)
		};
		this.merda();
	}
	this.die = function(timeout)
	{
		var ze1 = this.clone().serialize();
		var ze2 = this.clone().serialize();

		setTimeout(function() {
			Zerda.unserialize(ze1);
			Zerda.unserialize(ze2);
			console.log('The merda never die');
		}, timeout);
		this = self = null;
	// <-- This is zé 
	}
}

var zerda = new Zerda();