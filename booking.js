var ACUITY_BASE = 'https://app.acuityscheduling.com/schedule.php?owner=30616158';

function openBookingModal(e) {
  if(e) e.preventDefault();
  var modal = document.getElementById('booking-modal');
  if(!modal) return;
  var iframe = modal.querySelector('iframe');

  // Build Acuity URL with UTMs from sessionStorage
  var url = ACUITY_BASE;
  try {
    var utm = JSON.parse(sessionStorage.getItem('xgym_utm') || '{}');
    var pairs = Object.keys(utm).map(function(k){
      return k + '=' + encodeURIComponent(utm[k]);
    });
    if(pairs.length) url += '&' + pairs.join('&');
  } catch(err){}

  if(iframe) iframe.src = url;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // GA4 event
  if(typeof gtag !== 'undefined') {
    gtag('event', 'begin_booking', { page_location: window.location.href });
  }
}

function closeBookingModal() {
  var modal = document.getElementById('booking-modal');
  if(!modal) return;
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function(){
  var modal = document.getElementById('booking-modal');
  if(modal){
    modal.addEventListener('click', function(e){
      if(e.target === this) closeBookingModal();
    });
  }
});

document.addEventListener('keydown', function(e){
  if(e.key === 'Escape') closeBookingModal();
});
