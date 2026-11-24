const C='exhibicion-v1';
const A=['./','index.html','manifest.json','img/super-arroz.png','img/logo-distrileco.png','img/piramide.jpg','img/torre.jpg','img/punta-gondola.jpg','img/isla.jpg','img/trono.jpg','img/cruzada-proleche.jpg','img/frenteo.jpg','img/niveles.jpg','img/icon-192.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request)))});
