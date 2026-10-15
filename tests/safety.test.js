import test from "node:test";import assert from "node:assert/strict";import worker from "../src/index.js";
test("paper mode only",async()=>{const s=await(await worker.fetch(new Request("https://example.invalid/api/status"))).json();assert.equal(s.mode,"PAPER");assert.equal(s.liveOrders,false);assert.equal(s.brokerConnected,false);assert.equal(s.paperEngineImplemented,false)});
test("orders rejected",async()=>{const r=await worker.fetch(new Request("https://example.invalid/api/orders",{method:"POST"}));assert.equal(r.status,405)});
test("healthy",async()=>{const r=await worker.fetch(new Request("https://example.invalid/health"));assert.equal((await r.json()).ok,true)});
