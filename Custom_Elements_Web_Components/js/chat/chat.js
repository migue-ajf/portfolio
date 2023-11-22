

var BubbleProto = Object.create(HTMLElement.prototype);
BubbleProto.attachedCallback = function(){
   this.innerHTML = '<bubble-header>'+this.getAttribute("header")+'</bubble-header><bubble-main>'+this.getAttribute("main")+'</bubble-main>';
}
var ChatBubble = document.registerElement('chat-bubble', {
  prototype: BubbleProto
});

var ChatProto = Object.create(HTMLElement.prototype);
ChatProto.attachedCallback = function () {
   //alert('This will run when I append this element in the DOM tree');
  var self = this;
  this.querySelector('.send').addEventListener('click', function(e) {
      var bubble = document.createElement("chat-bubble");
      bubble.setAttribute("header","Miguel");
      bubble.setAttribute("main",self.querySelector('.send_inp').value);
      self.querySelector('.send_inp').value = '';
      self.querySelector('chat-body').appendChild(bubble);
      self.querySelector('.send_inp').focus();
  });
}
var SimpleChat = document.registerElement('simple-chat', {
  prototype: ChatProto
});