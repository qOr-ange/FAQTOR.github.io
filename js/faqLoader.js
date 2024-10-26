const faqs = {
   "0": {
      file: 'faq/faq0.html',
      title: 'What programming language should I learn?',
      description: 'The language you choose depends on what you want to do. Don’t overthink the choice.',
      image: 'https://yourdomain.com/images/faq0.jpg'
   },
   "1": {
      file: 'faq/faq1.html',
      title: 'What should I make?',
      description: 'Start small with something that interests you and build from there.',
      image: 'https://yourdomain.com/images/faq1.jpg'
   },
};

const faqNumber = window.location.pathname.split('/').pop();

if (faqs[faqNumber]) {
   const faq = faqs[faqNumber];

   fetch(faq.file)
      .then(response => response.text())
      .then(html => {
         document.getElementById('faq-content').innerHTML = html;

         document.getElementById('og-title').setAttribute('content', faq.title);
         document.getElementById('og-description').setAttribute('content', faq.description);
         document.getElementById('og-url').setAttribute('content', window.location.href);
         document.getElementById('og-image').setAttribute('content', faq.image);

         document.title = faq.title;
      })
      .catch(error => console.error('Error loading FAQ:', error));
} else {
   document.getElementById('faq-content').innerHTML = '<p>FAQ not found.</p>';
}