// Google Analytics 4
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-9C1JQLR151');

// Meta Pixel
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','1529714340852241');
fbq('track','PageView');

// UTM capture → sessionStorage (persists across pages in same session)
(function(){
  var params = new URLSearchParams(window.location.search);
  var keys = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
  if(keys.some(function(k){return params.get(k);})){
    var utm = {};
    keys.forEach(function(k){if(params.get(k))utm[k]=params.get(k);});
    sessionStorage.setItem('xgym_utm', JSON.stringify(utm));
  }
})();
