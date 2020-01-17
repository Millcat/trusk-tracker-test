const Koa = require("koa");
const Router = require("koa-router");
const cors = require("@koa/cors");

const app = new Koa();
const router = new Router();
const server = require("http").createServer(app.callback());
const io = require("socket.io")(server);

const fakeTracking = require("./fakeTracking");
const { DRIVERS_IDS } = require("./constants");

const tasksData = require("./data/tasks/tasks.json");

router.get(`/tasks/:driverId`, ctx => {
  const {
    params: { driverId }
  } = ctx;

  if (!DRIVERS_IDS.includes(driverId)) {
    ctx.status = 404;
    ctx.body = { error: { code: "driver_not_exists", status: 404 } };
    return;
  }

  ctx.body = {
    data: tasksData[driverId]
  };
});

io.on("connection", () => {
  // swallow lint
});

fakeTracking.run(io);

app.use(cors());
app.use(router.routes()).use(router.allowedMethods());
server.listen(3000);
