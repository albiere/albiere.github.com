var PopupModule = (function(){
  
  const opts = {
    status: 1,
    width: 575,
    height: 440,
    left: (window.screen.width - 575) / 2,
    top: (window.screen.height - 440) / 2
  };

  const queryString = Object.keys(opts).map(function(key) {
    return key + "=" + opts[key];
  }).join();
  
  function openPopup(event) {
    event.preventDefault();
    window.open(this.href, 'Share', queryString);
  }

  function init() {
    var links = document.querySelectorAll('.share-links a');
    [].forEach.call(links, function(element) {
      element.addEventListener('click', openPopup);
    });
  }

  return {
    init: init
  };

}());

PopupModule.init();

