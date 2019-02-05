//give random id to dropdown menu anchors
ele.outerFind('.dropdown-menu.inner a').each(function() {
  $ae(this).attr('id', 'ae-selected-' + ~~(Math.random() * 1000000));
});


ele.outerFind('.bs-searchbox input').on('keydown', function(event) {
  if (event.keyCode === 38 || event.keyCode === 40) {
    setTimeout(function() {
      var text = $ae(event.target).closest('.dropdown-menu').find('li.active a').attr('id');
      $(event.target).attr('aria-activedescendant', text);
    }, 200);
  }
});