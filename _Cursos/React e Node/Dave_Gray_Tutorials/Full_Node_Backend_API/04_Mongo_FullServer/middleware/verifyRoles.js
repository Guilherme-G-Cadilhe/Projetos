const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req?.roles) return res.sendStatus(401); //Unauthorized

    const rolesArray = [...allowedRoles]
    console.log('req.roles >>', req.roles)
    console.log('rolesArray >>', rolesArray)
    const result = req.roles.map(role => rolesArray.includes(role)).find(val => val === true);
    if (!result) return res.sendStatus(401);
    next()
  }
}

module.exports = verifyRoles