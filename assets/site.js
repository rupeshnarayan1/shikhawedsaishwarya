(function(){
'use strict';

/* ===== Config ===== */
var CONFIG={
  MUSIC_URL:'assets/music.mp3',   // background song; '' disables music
  RSVP_WHATSAPP:'',        // e.g. '919876543210' (country code, no + or spaces); blank = guest picks a chat
  HASHTAG:'#ShikhaWedsAishwarya',
  COUPLE_PHOTO:'',         // e.g. 'assets/couple.jpg' — fills the arch, replaces the S & A monogram
  GANESHA_IMG:'',          // e.g. 'assets/ganesha.png' (transparent) replaces the drawn medallion
  SITE_URL:'https://shikhawedsaishwarya.com/', // hosted link used in share messages
  VENUE:'Tivoli Resort, G.T. Karnal Road, Alipur, Delhi'
};

var $=function(s){return document.querySelector(s)};
var $$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
var NS='http://www.w3.org/2000/svg';
document.body.classList.add('js');

/* ===== Shared SVG sprite: icons, ornaments and desi motifs ===== */
var SPRITE='<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>'
+'<radialGradient id="mg1"><stop offset="0" stop-color="#FFE38F"/><stop offset=".55" stop-color="#F6A623"/><stop offset="1" stop-color="#D9581A"/></radialGradient>'
+'<radialGradient id="mg2"><stop offset="0" stop-color="#FFF1B8"/><stop offset=".55" stop-color="#F7C948"/><stop offset="1" stop-color="#E88A1E"/></radialGradient>'
+'<symbol id="gan" viewBox="0 0 200 210"><circle cx="100" cy="104" r="92" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 5"/><ellipse cx="100" cy="150" rx="44" ry="34" fill="currentColor"/><ellipse cx="70" cy="182" rx="28" ry="12" fill="currentColor" style="stroke:var(--gan-bg)" stroke-width="3"/><ellipse cx="130" cy="182" rx="28" ry="12" fill="currentColor" style="stroke:var(--gan-bg)" stroke-width="3"/><path d="M64 134C44 130 38 110 52 100M136 134c20-4 26-24 12-34" fill="none" style="stroke:var(--gan-bg)" stroke-width="16" stroke-linecap="round"/><path d="M64 134C44 130 38 110 52 100M136 134c20-4 26-24 12-34" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/><circle cx="52" cy="99" r="8" fill="currentColor" style="stroke:var(--gan-bg)" stroke-width="3"/><circle cx="148" cy="99" r="8" fill="currentColor" style="stroke:var(--gan-bg)" stroke-width="3"/><ellipse cx="60" cy="86" rx="19" ry="25" fill="currentColor" style="stroke:var(--gan-bg)" stroke-width="3"/><ellipse cx="140" cy="86" rx="19" ry="25" fill="currentColor" style="stroke:var(--gan-bg)" stroke-width="3"/><circle cx="100" cy="82" r="36" fill="currentColor" style="stroke:var(--gan-bg)" stroke-width="3"/><path d="M66 58l8-26 14 18 12-30 12 30 14-18 8 26z" fill="currentColor"/><circle cx="88" cy="78" r="3" style="fill:var(--gan-bg)"/><circle cx="112" cy="78" r="3" style="fill:var(--gan-bg)"/><path d="M100 116c12 14 8 32-6 38-12 5-22-4-14-12 6-6 14 0 10 6" fill="none" style="stroke:var(--gan-bg)" stroke-width="17" stroke-linejoin="round"/><path d="M100 116c12 14 8 32-6 38-12 5-22-4-14-12 6-6 14 0 10 6" fill="none" stroke="currentColor" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/></symbol>'
+'<symbol id="cor" viewBox="0 0 100 100"><g fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 100V30Q2 2 30 2h70"/><path d="M12 100V38Q12 12 38 12h62"/><path d="M22 22c14-10 32 0 24 14-5 9-18 6-16-3 1-6 9-4 7 1"/></g><g fill="currentColor"><circle cx="26" cy="30" r="3"/><path d="M50 7q10-7 20 0-10 7-20 0z"/><path d="M7 50q-7 10 0 20 7-10 0-20z"/><path d="M74 7q7-5 14 0-7 5-14 0z"/><path d="M7 74q-5 7 0 14 5-7 0-14z"/></g></symbol>'
+'<symbol id="div" viewBox="0 0 300 40"><g fill="none" stroke="currentColor" stroke-width="1.2"><path d="M0 20h100"/><path d="M200 20h100"/><path d="M100 20c6-10 16-10 20 0 4 10 14 10 20 0"/><path d="M160 20c6-10 16-10 20 0 4 10 14 10 20 0"/></g><g fill="currentColor"><circle cx="102" cy="20" r="2.5"/><circle cx="198" cy="20" r="2.5"/><path d="M150 6c6 6 6 18 0 28-6-10-6-22 0-28z"/><path d="M150 34c-9-2-16-9-18-20 9 2 15 9 18 20z"/><path d="M150 34c9-2 16-9 18-20-9 2-15 9-18 20z"/><path d="M150 34c-13 0-22-6-26-14 11 0 20 5 26 14z"/><path d="M150 34c13 0 22-6 26-14-11 0-20 5-26 14z"/></g></symbol>'
+'<symbol id="diya" viewBox="0 0 40 40"><path d="M20 6c4 5 5 9 0 14-5-5-4-9 0-14z" fill="#F08A24"/><path d="M20 11c1.8 2.3 2 4.3 0 6.5-2-2.2-1.8-4.2 0-6.5z" fill="#FFE08A"/><path d="M5 23h30c-1 6-8 10-15 10S6 29 5 23z" fill="currentColor"/><path d="M9 33h22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>'
+'<symbol id="i-mehendi" viewBox="0 0 24 24"><path d="M12 2.5c4.2 0 7.5 3.6 7.5 8 0 4.6-3.4 8.6-7.5 11-4.1-2.4-7.5-6.4-7.5-11 0-4.4 3.3-8 7.5-8z"/><path d="M12 7c2 0 3.2 1.6 3.2 3.6S13 14.8 12 16c-1-1.2-3.2-3.4-3.2-5.4S10 7 12 7z"/></symbol>'
+'<symbol id="i-shagun" viewBox="0 0 24 24"><path d="M4 11h16v10H4z"/><path d="M3 7h18v4H3z"/><path d="M12 7v14"/><path d="M12 7C10 3 6 4 7 6s4 1 5 1zM12 7c2-4 6-3 5-1s-4 1-5 1z"/></symbol>'
+'<symbol id="i-sufi" viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/><path d="M16 3l.7 1.8 1.8.7-1.8.7L16 8l-.7-1.8-1.8-.7 1.8-.7z"/></symbol>'
+'<symbol id="i-haldi" viewBox="0 0 24 24"><path d="M4 13h16c-.6 4.5-4 7.5-8 7.5S4.6 17.5 4 13z"/><path d="M7.5 13c0-3 2-5 4.5-5s4.5 2 4.5 5"/><path d="M12 4v2M7.5 5.5l1 1.7M16.5 5.5l-1 1.7"/></symbol>'
+'<symbol id="i-barat" viewBox="0 0 24 24"><ellipse cx="12" cy="7" rx="8" ry="3"/><path d="M4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7"/><path d="M7 9.5l3 7.5M17 9.5l-3 7.5M12 10v7"/></symbol>'
+'<symbol id="i-vidai" viewBox="0 0 24 24"><path d="M5 11l7-6 7 6z"/><path d="M6 11h12v6H6z"/><path d="M2 17h20"/><path d="M8 17v3M16 17v3"/><path d="M12 5V3"/></symbol>'
+'<symbol id="i-music" viewBox="0 0 24 24"><path d="M9 18V6l10-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/></symbol>'
+'<symbol id="i-food" viewBox="0 0 24 24"><circle cx="12" cy="13" r="7"/><path d="M12 13V6M5 3v4M7 3v4M5 5h2M19 3v5"/></symbol>'
+'<symbol id="i-map" viewBox="0 0 24 24"><path d="M12 21c-4-4.5-6-7.6-6-10.6A6 6 0 0 1 18 10.4c0 3-2 6.1-6 10.6z"/><circle cx="12" cy="10" r="2.2"/></symbol>'
/* genda phool (marigold) */
+'<symbol id="m-genda" viewBox="0 0 40 40"><circle cx="20" cy="20" r="17" fill="url(#mg1)" stroke="#C9541A" stroke-width="1.2" stroke-dasharray="2.5 2"/><circle cx="20" cy="20" r="10" fill="url(#mg2)" stroke="#E08A1E" stroke-width="1" stroke-dasharray="2 1.6"/><circle cx="20" cy="20" r="3.4" fill="#A8420F"/></symbol>'
/* shehnai */
+'<symbol id="m-shehnai" viewBox="0 0 150 52"><rect x="4" y="20" width="10" height="12" rx="3"/><path d="M14 22L96 13v26l-82-9z"/><path d="M96 13c20-5 30-6 42-13-4 12-4 40 0 52-12-7-22-8-42-13z"/><g fill="currentColor" stroke="none"><circle cx="32" cy="25" r="2"/><circle cx="46" cy="25.5" r="2"/><circle cx="60" cy="26" r="2"/><circle cx="74" cy="26.5" r="2"/><circle cx="86" cy="27" r="2"/></g><path d="M118 42v5"/><circle cx="118" cy="50" r="2.4" fill="currentColor" stroke="none"/></symbol>'
/* doli (palki) */
+'<symbol id="m-doli" viewBox="0 0 140 112"><path d="M8 24h124"/><circle cx="8" cy="24" r="2.5" fill="currentColor" stroke="none"/><circle cx="132" cy="24" r="2.5" fill="currentColor" stroke="none"/><path d="M50 24v14M90 24v14"/><path d="M42 54q28-24 56 0"/><circle cx="70" cy="33" r="3"/><path d="M42 54q4.7 6 9.3 0t9.3 0t9.4 0t9.3 0t9.4 0t9.3 0"/><rect x="46" y="54" width="48" height="30" rx="2"/><path d="M62 84V68c0-4.5 3.6-8 8-8s8 3.5 8 8v16"/><path d="M46 84q4.8 6 9.6 0t9.6 0t9.6 0t9.6 0t9.6 0"/><path d="M46 92v7M94 92v7"/><circle cx="46" cy="101" r="2.4" fill="currentColor" stroke="none"/><circle cx="94" cy="101" r="2.4" fill="currentColor" stroke="none"/></symbol>'
/* baraat ghodi (decorated mare) */
+'<symbol id="m-ghodi" viewBox="0 0 140 112"><path d="M26 74C24 54 40 42 60 42h26c7 0 13-6 15-16l11 4c-2 12-10 20-18 22l2 22"/><path d="M36 74v24M52 74v24M80 74v24M94 74v24"/><path d="M32 98h8M48 98h8M76 98h8M90 98h8"/><path d="M26 74c-8 2-12 10-10 18"/><path d="M101 24l7-9"/><circle cx="97" cy="31" r="1.8" fill="currentColor" stroke="none"/><path d="M112 30c3-1 6-1 8 1"/><path d="M50 42h32v16c-10 7-22 7-32 0z" fill="currentColor" fill-opacity=".14"/><g fill="currentColor" stroke="none"><circle cx="54" cy="62" r="1.6"/><circle cx="62" cy="64" r="1.6"/><circle cx="70" cy="64" r="1.6"/><circle cx="78" cy="62" r="1.6"/></g><path d="M98 14c2-4 6-6 10-5"/></symbol>'
/* haathi (elephant) */
+'<symbol id="m-haathi" viewBox="0 0 130 100"><path d="M22 88V58c0-18 14-30 32-30h10c16 0 26 10 28 22"/><path d="M92 50c12-2 18-12 16-24"/><path d="M108 26c0-4 3-6 6-5"/><path d="M38 88V64M76 88V64"/><path d="M32 88h14M70 88h14"/><path d="M58 42c-10-2-17 4-15 12 2 8 13 10 19 4"/><circle cx="86" cy="44" r="2" fill="currentColor" stroke="none"/><path d="M92 58c4 3 9 3 13 1"/><path d="M44 34h26v20c-8 6-18 6-26 0z" fill="currentColor" fill-opacity=".14"/><g fill="currentColor" stroke="none"><circle cx="48" cy="60" r="1.6"/><circle cx="56" cy="62" r="1.6"/><circle cx="64" cy="60" r="1.6"/></g></symbol>'
/* mor (peacock) */
+'<symbol id="m-mor" viewBox="0 0 130 110"><path d="M66 84q36-4 44-32"/><path d="M66 84q32-14 32-40"/><path d="M68 88q42 0 52-20"/><circle cx="110" cy="52" r="2.6" fill="currentColor" stroke="none"/><circle cx="98" cy="44" r="2.6" fill="currentColor" stroke="none"/><circle cx="120" cy="68" r="2.6" fill="currentColor" stroke="none"/><path d="M66 88c-16 0-26-10-26-26 0-14 8-22 8-34"/><circle cx="48" cy="24" r="5"/><path d="M44 21l-8 1M45 27l-7 3"/><path d="M48 19V9M44 12l2 6M53 11l-3 7"/><circle cx="48" cy="9" r="1.6" fill="currentColor" stroke="none"/><circle cx="43" cy="11" r="1.6" fill="currentColor" stroke="none"/><circle cx="54" cy="10" r="1.6" fill="currentColor" stroke="none"/><path d="M40 88h44"/></symbol>'
/* kalash */
+'<symbol id="m-kalash" viewBox="0 0 84 96"><path d="M20 52c0 18 9 30 22 30s22-12 22-30c0-8-4-13-8-15H28c-4 2-8 7-8 15z"/><path d="M26 30h32v7H26z"/><circle cx="42" cy="22" r="9"/><path d="M42 13v-3"/><path d="M28 30c-6-6-12-8-18-7 5 5 8 9 10 14M56 30c6-6 12-8 18-7-5 5-8 9-10 14M34 30c-2-6-2-12 0-16 3 4 5 10 5 16M50 30c2-6 2-12 0-16-3 4-5 10-5 16"/><circle cx="42" cy="58" r="3" fill="currentColor" stroke="none"/><path d="M32 70q10 6 20 0"/></symbol>'
/* mehndi haath (hennaed hand) */
+'<symbol id="m-hand" viewBox="0 0 90 118"><path d="M28 112V66L17 44c-2-4 3-8 6-5l9 10V20c0-7 9-7 9 0v26h4V14c0-7 9-7 9 0v32h4V20c0-7 9-7 9 0v30h4V30c0-6 8-6 8 0v40c0 24-14 42-32 42z"/><circle cx="48" cy="72" r="10"/><circle cx="48" cy="72" r="5.5" stroke-dasharray="2 2.4"/><circle cx="48" cy="72" r="2" fill="currentColor" stroke="none"/><g fill="currentColor" stroke="none"><circle cx="48" cy="57" r="1.6"/><circle cx="60" cy="62" r="1.6"/><circle cx="63" cy="74" r="1.6"/><circle cx="56" cy="86" r="1.6"/><circle cx="40" cy="86" r="1.6"/><circle cx="33" cy="74" r="1.6"/><circle cx="36" cy="62" r="1.6"/></g><path d="M33 34q4 3 8 0M46 28q4 3 8 0M59 34q4 3 8 0" stroke-width="1.6"/><g fill="currentColor" stroke="none"><circle cx="37" cy="22" r="1.5"/><circle cx="50" cy="16" r="1.5"/><circle cx="63" cy="22" r="1.5"/><circle cx="75" cy="32" r="1.5"/></g><path d="M29 100c12 7 25 7 36 0M29 107c12 7 25 7 36 0"/></symbol>'
/* mandap with sacred fire */
+'<symbol id="m-mandap" viewBox="0 0 150 112"><path d="M14 34L75 10l61 24"/><path d="M14 34q6 8 12 0t12 0t12 0t12 0t12 0t12 0t12 0t12 0t12 0t12 0"/><path d="M22 40v60M128 40v60M12 100h126"/><path d="M30 42q45 26 90 0"/><circle cx="52" cy="57" r="2" fill="currentColor" stroke="none"/><circle cx="75" cy="62" r="2" fill="currentColor" stroke="none"/><circle cx="98" cy="57" r="2" fill="currentColor" stroke="none"/><path d="M75 74c6 7 7 13 0 20-7-7-6-13 0-20z" fill="#F08A24" stroke="none"/><path d="M75 81c2.4 3 2.6 5.6 0 8.6-2.6-3-2.4-5.6 0-8.6z" fill="#FFE08A" stroke="none"/><path d="M63 98l24-7M63 91l24 7"/></symbol>'
/* dhol */
+'<symbol id="m-dhol" viewBox="0 0 110 74"><ellipse cx="24" cy="38" rx="11" ry="21"/><ellipse cx="86" cy="38" rx="11" ry="21"/><path d="M24 17h62M24 59h62"/><path d="M35 19l9 38 9-38 9 38 9-38 9 38" stroke-width="1.3"/><path d="M14 10l16-8M96 8L82 2" stroke-width="2"/></symbol>'
/* barat rath (chariot) */
+'<symbol id="m-rath" viewBox="0 0 140 104"><path d="M48 42c3-12 12-18 22-18s19 6 22 18"/><circle cx="70" cy="21" r="2.6"/><path d="M48 42q4.4 5 8.8 0t8.8 0t8.8 0t8.8 0t8.8 0"/><rect x="46" y="42" width="48" height="26" rx="2"/><path d="M62 68V56c0-4 3.6-7 8-7s8 3 8 7v12"/><path d="M36 68h72"/><circle cx="56" cy="84" r="13"/><circle cx="56" cy="84" r="2.4" fill="currentColor" stroke="none"/><path d="M56 71v26M43 84h26M47 75l18 18M65 75l-18 18" stroke-width="1.5"/><circle cx="94" cy="84" r="13"/><circle cx="94" cy="84" r="2.4" fill="currentColor" stroke="none"/><path d="M94 71v26M81 84h26M85 75l18 18M103 75l-18 18" stroke-width="1.5"/><path d="M98 42V14"/><path d="M98 14l24 6-24 6z" fill="currentColor" stroke="none"/><path d="M40 74H20c-7 0-12-4-14-10"/></symbol>'
/* chand (crescent moon) */
+'<symbol id="m-moon" viewBox="0 0 60 60"><path d="M34 4a26 26 0 1 0 18 44A30 30 0 0 1 34 4z" fill="currentColor" stroke="none"/></symbol>'
+'<clipPath id="archclip"><path d="M24 392V170C24 120 60 96 92 86c18-6 34-22 58-56 24 34 40 50 58 56 32 10 68 34 68 84v222z"/></clipPath>'
+'</defs></svg>';
document.body.insertAdjacentHTML('afterbegin',SPRITE);

/* ===== Mandalas ===== */
function mandala(svg){
  var o='',R=[[8,30,20],[12,56,24],[16,86,28],[24,118,32],[32,154,34]];
  R.forEach(function(r){
    var a=r[1],b=r[1]+r[2],c1=(r[1]+r[2]*.35).toFixed(1),c2=(r[1]+r[2]*.75).toFixed(1);
    for(var i=0;i<r[0];i++)o+='<path d="M0 -'+a+'C7 -'+c1+' 7 -'+c2+' 0 -'+b+'C-7 -'+c2+' -7 -'+c1+' 0 -'+a+'z" transform="rotate('+(360/r[0]*i).toFixed(2)+')"/>';
    o+='<circle r="'+(b+5)+'" stroke-dasharray="2 6"/>';
  });
  svg.setAttribute('viewBox','-200 -200 400 400');
  svg.innerHTML='<g fill="none" stroke="currentColor" stroke-width="1.3">'+o+'<circle r="12" fill="currentColor" stroke="none"/><circle r="20"/></g>';
}
$$('svg.mandala').forEach(mandala);

/* ===== Marigold toran (hero) ===== */
var toran=$('#toran');
if(toran){
  var yAt=function(x){return 22+22*(1-Math.cos(x/200*Math.PI))/2},d='';
  for(var x=0;x<=1200;x+=10)d+=(x?' L':'M')+x+' '+yAt(x).toFixed(1);
  var str=document.createElementNS(NS,'path');str.setAttribute('d',d);str.setAttribute('fill','none');str.setAttribute('stroke','#8C6A2E');str.setAttribute('stroke-width','2');toran.appendChild(str);
  for(var i=0,px=0;px<=1200;px+=27,i++){
    var y=yAt(px)+2;
    if(i%4===3){var leaf=document.createElementNS(NS,'path');leaf.setAttribute('d','M'+px+' '+y+' q10 14 0 30 q-10 -16 0 -30z');leaf.setAttribute('fill','#3E7D3A');toran.appendChild(leaf);}
    var c=document.createElementNS(NS,'circle');c.setAttribute('cx',px);c.setAttribute('cy',y);c.setAttribute('r',i%2?10:12);c.setAttribute('fill',i%2?'url(#mg2)':'url(#mg1)');c.setAttribute('stroke',i%2?'#E08A1E':'#C9541A');c.setAttribute('stroke-width','1.2');c.setAttribute('stroke-dasharray','2.5 2');toran.appendChild(c);
    var dot=document.createElementNS(NS,'circle');dot.setAttribute('cx',px);dot.setAttribute('cy',y);dot.setAttribute('r',2.6);dot.setAttribute('fill','#A8420F');dot.setAttribute('opacity','.75');toran.appendChild(dot);
  }
}

/* ===== Marigold latkan strings on section edges ===== */
function latkanSVG(side){
  var H=240,s='<line x1="22" y1="0" x2="22" y2="'+(H-36)+'" stroke="#8C6A2E" stroke-width="2"/>';
  for(var y=8,k=0;y<H-60;y+=34,k++){
    if(k%3===2){
      s+='<path d="M22 '+(y+6)+' q-12 8 -2 18 q10-10 2-18z" fill="#3E7D3A"/><path d="M22 '+(y+6)+' q12 8 2 18 q-10-10 -2-18z" fill="#3E7D3A"/>';
    }else{
      s+='<use href="#m-genda" x="8" y="'+y+'" width="28" height="28"/>';
    }
  }
  if(side==='r'){
    /* temple bell at the end */
    var b=H-36;
    s+='<path d="M12 '+(b+16)+'c0-10 4-16 10-16s10 6 10 16z" fill="#C9A24E" stroke="#9A7430" stroke-width="1.4"/>'
     +'<path d="M10 '+(b+16)+'h24" stroke="#9A7430" stroke-width="2" stroke-linecap="round"/>'
     +'<circle cx="22" cy="'+(b+21)+'" r="3" fill="#9A7430"/>';
  }else{
    s+='<path d="M22 '+(H-36)+'l-8 22M22 '+(H-36)+'l0 24M22 '+(H-36)+'l8 22" stroke="#8C6A2E" stroke-width="1.6"/>'
     +'<circle cx="22" cy="'+(H-34)+'" r="4" fill="#A8420F"/>';
  }
  var svg=document.createElementNS(NS,'svg');
  svg.setAttribute('viewBox','0 0 44 '+H);svg.setAttribute('width','44');svg.setAttribute('height',H);
  svg.innerHTML=s;
  return svg;
}
$$('.fn').forEach(function(sec){
  ['l','r'].forEach(function(side){
    var w=document.createElement('div');w.className='latkan '+side;w.setAttribute('aria-hidden','true');
    w.appendChild(latkanSVG(side));sec.appendChild(w);
  });
});

/* ===== Sparkles and stars ===== */
$$('.spk').forEach(function(el){
  var n=+el.dataset.n||18;
  for(var k=0;k<n;k++){var s=document.createElement('i'),z=6+Math.random()*8;s.className='sp';s.style.cssText='left:'+Math.random()*100+'%;top:'+Math.random()*100+'%;width:'+z+'px;height:'+z+'px;animation-delay:'+Math.random()*4+'s;animation-duration:'+(2+Math.random()*3)+'s';el.appendChild(s);}
});
$$('.starry').forEach(function(el){
  for(var k=0;k<34;k++){var s=document.createElement('b');s.className='star';s.style.cssText='left:'+Math.random()*100+'%;top:'+Math.random()*100+'%;animation-delay:'+Math.random()*4+'s;transform:scale('+(.5+Math.random()*1.1)+')';el.appendChild(s);}
});

/* ===== Ganesha image / couple photo (optional CONFIG) ===== */
if(CONFIG.GANESHA_IMG){$$('.medal.gan').forEach(function(m){m.innerHTML='<img src="'+CONFIG.GANESHA_IMG+'" alt="Lord Ganesha">';});}
if(CONFIG.COUPLE_PHOTO&&$('#photoLayer')){
  var im=document.createElementNS(NS,'image');
  im.setAttribute('href',CONFIG.COUPLE_PHOTO);
  im.setAttribute('width','300');im.setAttribute('height','406');
  im.setAttribute('preserveAspectRatio','xMidYMid slice');
  $('#photoLayer').appendChild(im);
  var mono=$('#monogram');if(mono)mono.remove();
}

/* ===== Countdown ===== */
$$('.cd[data-target]').forEach(function(cd){
  var target=new Date(cd.dataset.target).getTime();
  function pad(n){return String(n).padStart(2,'0')}
  function tick(){
    var diff=target-Date.now();
    if(diff<=0){cd.classList.add('done');cd.textContent=diff>-864e5?'The day is here':'Married on 22 November 2026';return false;}
    cd.querySelector('[data-d]').textContent=pad(Math.floor(diff/864e5));
    cd.querySelector('[data-h]').textContent=pad(Math.floor(diff%864e5/36e5));
    cd.querySelector('[data-m]').textContent=pad(Math.floor(diff%36e5/6e4));
    cd.querySelector('[data-s]').textContent=pad(Math.floor(diff%6e4/1e3));
    return true;
  }
  if(tick()){var t=setInterval(function(){if(!tick())clearInterval(t)},1000);}
});

/* ===== Per-page staggered reveal: each slide animates in as it lands ===== */
if('IntersectionObserver' in window){
  $$('.sr').forEach(function(el){el.classList.add('pre');});
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(!e.isIntersecting)return;
      var items=e.target.querySelectorAll('.sr.pre');
      Array.prototype.forEach.call(items,function(el,i){
        setTimeout(function(){el.classList.add('in');el.classList.remove('pre');},80+i*90);
      });
      io.unobserve(e.target);
    });
  },{threshold:.25});
  $$('.slide').forEach(function(s){io.observe(s);});
}

/* ===== Petals ===== */
function petals(n){
  var wrap=$('#petals');
  if(!wrap||wrap.children.length||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var cols=(document.body.dataset.petals||'#F08A24,#F6C544').split(',');
  for(var j=0;j<n;j++){
    var p=document.createElement('i'),w=7+Math.random()*9;
    p.style.cssText='left:'+Math.random()*100+'%;width:'+w+'px;height:'+w*1.6+'px;background:'+cols[j%cols.length]+';animation-duration:'+(10+Math.random()*10)+'s;animation-delay:-'+Math.random()*20+'s';
    wrap.appendChild(p);
  }
}

/* ===== Background music ===== */
var bgm=null,mBtn=null;
function music(on){
  if(!bgm)return;
  if(on){
    bgm.play().then(function(){mBtn.classList.add('on');mBtn.setAttribute('aria-pressed','true');}).catch(function(){});
  }else{
    bgm.pause();mBtn.classList.remove('on');mBtn.setAttribute('aria-pressed','false');
  }
}
if(CONFIG.MUSIC_URL){
  bgm=document.createElement('audio');
  bgm.src=CONFIG.MUSIC_URL;bgm.loop=true;bgm.preload='auto';bgm.volume=.55;
  document.body.appendChild(bgm);
  mBtn=document.createElement('button');
  mBtn.className='music';mBtn.type='button';
  mBtn.setAttribute('aria-pressed','false');
  mBtn.setAttribute('aria-label','Play or pause music');
  mBtn.innerHTML='<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>';
  mBtn.addEventListener('click',function(){music(bgm.paused);});
  document.body.appendChild(mBtn);
}

/* ===== Envelope opening ===== */
var intro=$('#intro'),env=$('#env');
function openInvite(fast){
  if(!intro)return;
  env&&env.classList.add('open');
  document.body.classList.remove('locked');
  music(true);
  setTimeout(function(){
    intro.classList.add('leaving');
    document.body.classList.add('opened');
    petals(22);
    setTimeout(function(){intro.remove();},900);
  },fast?50:1250);
}
if(intro){
  var seal=$('#seal');
  seal&&seal.addEventListener('click',function(){openInvite(false);});
  var skip=$('#introSkip');
  skip&&skip.addEventListener('click',function(){openInvite(true);});
}

/* ===== Share + RSVP ===== */
var siteUrl=CONFIG.SITE_URL||location.href.split('#')[0];
var shareText='Shikha & Aishwarya — Wedding Invitation\n21–22 November 2026, Tivoli Resort, Alipur, Delhi\n'+siteUrl;
$$('a[data-share]').forEach(function(a){a.href='https://wa.me/?text='+encodeURIComponent(shareText);});

var form=$('#rsvpForm');
if(form){
  var send=$('#rsvpSend');
  function build(){
    var name=(form.querySelector('[name=gname]').value||'____').trim()||'____';
    var att=form.querySelector('[name=attending]:checked');
    var guests=form.querySelector('[name=guests]').value;
    var msg;
    if(att&&att.value==='no'){
      msg='Namaste! This is '+name+'. We are sorry we will not be able to join the wedding celebrations of Shikha & Aishwarya, but our love and blessings are with the couple. '+CONFIG.HASHTAG;
    }else{
      msg='Namaste! This is '+name+'. We will joyfully be joining the wedding celebrations of Shikha & Aishwarya on 21–22 November 2026 at Tivoli Resort, Alipur. Guests: '+guests+'. '+CONFIG.HASHTAG;
    }
    send.href='https://wa.me/'+(CONFIG.RSVP_WHATSAPP||'')+'?text='+encodeURIComponent(msg);
  }
  form.addEventListener('input',build);
  form.addEventListener('change',build);
  build();
}

/* ===== Copy address ===== */
var copyBtn=$('#copyAddr');
if(copyBtn){
  copyBtn.addEventListener('click',function(){
    var msgEl=$('#copyMsg');
    function ok(){msgEl.textContent='Address copied';setTimeout(function(){msgEl.textContent=''},2500);}
    function fail(){
      var r=document.createRange();r.selectNodeContents($('#addrText'));
      var sel=getSelection();sel.removeAllRanges();sel.addRange(r);
      msgEl.textContent='Address selected — press Ctrl/Cmd+C';
    }
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(CONFIG.VENUE).then(ok,fail);
    }else{fail();}
  });
}
})();
