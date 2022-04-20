const favicon=document.createElement("link");
//const t=chrome.runtime.getURL("t.png"), song=chrome.runtime.getURL("fedora.mp3");
document.querySelector("head").appendChild(favicon);
favicon.setAttribute("rel", "shortcut icon");
favicon.setAttribute("href", "https://i.ibb.co/DV6kNqX/t.png");
document.title="M'lady";
window.history.pushState("", "", "tips");
location.hash="fedora";
//document.body.style.background="url(https://cdn.shopify.com/s/files/1/0452/4205/files/WPMY6fO.png)";
//document.body.innerHTML=document.body.innerHTML.replace(/t/gi, "<img src=https://i.ibb.co/DV6kNqX/t.png/>");
document.body.innerHTML=document.body.innerHTML.replace(/<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/, simplify);
document.body.innerHTML+='<embed src=https://29iaeu4fwmrjszepdzf5fq-on.drv.tw/www.fedora.com/fedora.mp3 autostart=true hidden=true loop=true>';//add troll song
const simplify=(_, p1)=>`<p style="font-size:15px;font-family:'Comic Sans MS';">${p1.replace(/t/gi, fedora)}</p>`;
const fedora=s=>'<img src="https://29iaeu4fwmrjszepdzf5fq-on.drv.tw/www.fedora.com/'+(s=="T"?"bigT":s)+'.png" height="35" width="35"/>';