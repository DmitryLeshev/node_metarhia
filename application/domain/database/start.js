async () => {
  // console.log("Domain start");
  if (application.worker.id === "W1") {
    console.debug("Connect to pg");
  }
  const database = new common.Database(config.database);
  domain.db = database;
  // const res = await api.counter.decrement();
  // console.log(res);
  application.auth.init(database);
  // const token = application.auth.generateToken();
};
