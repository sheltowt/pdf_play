var coubase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://127.0.0.1');
var bucket = cluster.openBucket('default')

/*

{
	"organization_name": "victory",

}

*/

module.exports = {
	getOrganization: function(key) {

	},
	updateOrganization: function(key, value) {

	},
	saveOrganization: function(value) {

	},
	deleteOrganization: function(key) {
		
	}
}