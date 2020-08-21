import fastify, { FastifyInstance, FastifyHttp2SecureOptions } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import router from "./router";
import { Http2SecureServer } from "http2";

console.log("creating fastify");
const app = fastify();

// Middleware: Router
app.register(router);

export default app;
