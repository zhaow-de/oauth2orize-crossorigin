module.exports = function() {
  
  function request(req) {
    var q = req.query
      , ext = {};
    
    if (q.login_ticket) {
      ext.loginTicket = q.login_ticket;
    }
    
    return ext;
  }
  
  var mod = {};
  mod.name = '*';
  mod.request = request;
  return mod;
}
