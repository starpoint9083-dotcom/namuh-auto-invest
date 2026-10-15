const send=(v,status=200)=>new Response(JSON.stringify(v),{status,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","x-content-type-options":"nosniff"}});
export default {async fetch(request){const p=new URL(request.url).pathname;
if(request.method!=="GET")return send({error:"METHOD_NOT_ALLOWED"},405);
if(p==="/health")return send({ok:true,service:"namuh-auto-invest",version:"0.1.0",mode:"PAPER"});
if(p==="/api/status")return send({mode:"PAPER",broker:"NH_NAMUH",liveOrders:false,paperEngineImplemented:false,brokerConnected:false,virtualStartingCashKRW:10000000,plannedSymbols:["005930","000660"]});
if(p==="/")return new Response('<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>나무 자동투자</title><style>body{font:16px system-ui;background:#101d30;color:#fff;padding:26px;max-width:560px;margin:auto}.panel{background:#243550;padding:24px;border-radius:18px}a{color:#abe1ff}</style></head><body><h1>나무 자동투자</h1><div class="panel"><h2>배포 통로 검증 화면</h2><p>가상투자 초기자금: 1,000만원 (설정값)</p><p>삼성전자 · SK하이닉스 (추적 예정)</p><p>현재: 주문 불가 / 데이터 미연결 / 모의체결 엔진 미구현</p><a href="/health">Health</a> · <a href="/api/status">상태 API</a></div></body></html>',{headers:{"content-type":"text/html; charset=utf-8","cache-control":"no-store"}});
return send({error:"NOT_FOUND"},404)}};
