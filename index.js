const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('qScQMdiLgZ', uuidlib.v4());
	}

module.exports = generateId
