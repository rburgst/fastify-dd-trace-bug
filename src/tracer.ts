import tracer, { Tracer } from "dd-trace";
import app from "./app";

console.log("init tracer");
const myTracer: Tracer = tracer.init({
  logInjection: true,
  runtimeMetrics: true,
  service: "test-service",
});
export default myTracer;
