const { node } = require("./lib/dependencies");
const { path } = node;

const application = require("./lib/application.js");

const { Logger } = require("./lib/logger.js");
const { readConfig } = require("./lib/config.js");
const { Auth } = require("./lib/auth.js");

(async () => {
  const configPath = path.join(application.path, "config");
  const loggerPath = path.join(application.root, "log");

  const config = await readConfig(configPath);

  const logger = new Logger(loggerPath, 1);
  const auth = new Auth(config.sessions);
  Object.assign(application, { config, logger, console: logger, auth });

  await application.init();
})();
