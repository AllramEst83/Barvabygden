$(function () {
  $('#navbar-placeholder').load('../includes/navbar.html', function () {
    const depth = window.location.pathname.includes('/pages/') ? '../' : './';

    // Fix all nav links
    $('[data-link]').each(function () {
      const page = $(this).data('link');
      const href = page === 'home' ? depth + 'index.html' : depth + 'pages/' + page + '.html';
      $(this).attr('href', href);
    });

    // Normalize page name
    let currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    if (currentPage === '' || currentPage === 'index') currentPage = 'home';

    // Highlight active link
    $(`[data-link="${currentPage}"]`).addClass('active');
  });
});
