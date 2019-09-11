module.exports = function() {
  function request(req) {
    const q = req.query;
    const ext = {};

    if (q && q.login_ticket) {
      ext.loginTicket = q.login_ticket;
    }

    return ext;
  }

  return {
    name: '*',
    request,
  };
};
