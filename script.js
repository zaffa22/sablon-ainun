/* FAQ accordion toggle */
document.querySelectorAll('.faq-q').forEach(function(q) {
  q.addEventListener('click', function() {
    var answer = this.nextElementSibling;
    var isOpen = answer.classList.contains('open');
    document.querySelectorAll('.faq-a').forEach(function(a){ a.classList.remove('open') });
    document.querySelectorAll('.faq-q').forEach(function(q){ q.classList.remove('open') });
    if (!isOpen) {
      answer.classList.add('open');
      this.classList.add('open');
    }
  });
});