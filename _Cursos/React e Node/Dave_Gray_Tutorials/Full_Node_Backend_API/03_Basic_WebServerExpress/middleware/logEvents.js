const { format } = require('date-fns')
const { v4: uuid } = require('uuid')

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message, logName) => {
  const dateTime = `${format(new Date(), 'yyyy-MM-dd\tHH:mm')}`;
  const logItem = `\n${dateTime}\t ${uuid()}\t${message}`

  try {
    if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
      await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
    }
    await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logName), logItem)

  } catch (error) {
    console.error(error)
  }
}

// Middleware customizado pra usar no express
const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt')
  next()
}

module.exports = { logEvents, logger };