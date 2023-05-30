function Tabs() {

    assignTopicId();
    
    const firstTab = document.querySelector('.b-nav-tab');
    
    const firstTabContent = document.querySelector('.b-tab');
    
    firstTab.classList.add('active');
    firstTabContent.classList.add('active');
    
    var bindAll = function() {
      var menuElements = document.querySelectorAll('[data-tab]');
      for(var i = 0; i < menuElements.length ; i++) {
        menuElements[i].addEventListener('click', change, false);
      }
    }
  
    var clear = function() {
      var menuElements = document.querySelectorAll('[data-tab]');
      for(var i = 0; i < menuElements.length ; i++) {
        menuElements[i].classList.remove('active');
        var id = menuElements[i].getAttribute('data-tab');
        document.getElementById(id).classList.remove('active');
      }
    }
  
    var change = function(e) {
      clear();
      e.target.classList.add('active');
      var id = e.currentTarget.getAttribute('data-tab');
      document.getElementById(id).classList.add('active');
    }
  
    bindAll();
    
  }
  
  var connectTabs = new Tabs();
  
  function assignTopicId() {
      const topicHeadline = Array.from(document.querySelectorAll('.b-tab'))
  
      const topicLink = Array.from(document.querySelectorAll('.b-nav-tab'))
  
      if(topicHeadline){
          for(let i = 0; i < topicHeadline.length; i++){
              topicHeadline[i].setAttribute('id', `topics-${i}`)
          }
      }
  
      if(topicLink){
          for(let i = 0; i < topicLink.length; i++){
              topicLink[i].setAttribute('data-tab', `topics-${i}`)
          }
      }
  }
  