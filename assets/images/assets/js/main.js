
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navlinks');

if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

function setupMailForm(id, type) {
  const form = document.getElementById(id);
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(form);

    let subject = '';
    let body = '';

    if (type === 'booking') {
      subject = `Table booking request - ${d.get('date')} ${d.get('time')}`;
      body = `Rio Brasa booking request

Name: ${d.get('name')}
Email: ${d.get('email')}
Phone: ${d.get('phone')}
Guests: ${d.get('guests')}
Date: ${d.get('date')}
Time: ${d.get('time')}

Special requests:
${d.get('message') || 'None'}`;
    } else {
      subject = `Website enquiry from ${d.get('name')}`;
      body = `Name: ${d.get('name')}
Email: ${d.get('email')}
Phone: ${d.get('phone') || ''}

Message:
${d.get('message')}`;
    }

    window.location.href =
      `mailto:info@riobrasa.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

setupMailForm('booking-form', 'booking');
setupMailForm('contact-form', 'contact');
