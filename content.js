(function(){
  var i;
  var content = document.getElementById('mw-content-text');
  var panel = document.getElementById('mw-panel');
  var deleteQueue = [];
  for (i=2 ; i<panel.childNodes.length ; i++) {
    if (panel.childNodes[i].className === 'portal') {
      deleteQueue.push(panel.childNodes[i]);
    }
  }
  for (i=0 ; i<deleteQueue.length ; i++) {
    deleteQueue[i].remove();
  }
  var fishMenu = document.createElement('div');
  panel.append(fishMenu);

  var fish = document.createElement('img');
  fish.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Salmo_ferox.jpg';
  // style:
  fish.style.width = '100%';
  // :style
  fishMenu.append(fish);

  var header = document.createElement('h3');
  header.innerText = 'Wikifish';
  // style:
  header.style.borderBottom = '1px solid #bbb';
  header.style.fontFamily = 'serif';
  header.style.fontWeight = 'normal';
  header.style.textAlign = 'center';
  // :style
  fishMenu.append(header);

  var buttonContainer = document.createElement('div');
  // style:
  buttonContainer.style.borderBottom = '1px solid #bbb';
  buttonContainer.style.flexWrap = 'wrap';
  buttonContainer.style.display = 'flex';
  buttonContainer.style.height = '152px';
  buttonContainer.style.justifyContent = 'center';
  buttonContainer.style.width = '100%';
  // :style
  fishMenu.append(buttonContainer);

  var selector = document.createElement('h3');
  selector.innerText = '';
  selector.id = 'fish-selector';
  // style:
  selector.style.color = '#666';
  selector.style.fontFamily = 'serif';
  selector.style.fontSize = '16px';
  selector.style.fontStyle = 'italic';
  selector.style.fontWeight = 'normal';
  selector.style.textAlign = 'center';
  // :style
  fishMenu.append(selector);

  var buttons = [];

  var random = document.createElement('div');
  random.innerText = "?";
  random.description = "follow random pagelink";
  buttons.push(random);

  var list = document.createElement('div');
  list.innerText = "Λ";
  list.description = "list pagelinks";
  buttons.push(list);

  var story = document.createElement('div');
  story.innerText = "S";
  story.description = "third function";
  buttons.push(story);

  var guess = document.createElement('div');
  guess.innerText = "!";
  guess.description = "fourth function";
  buttons.push(guess);

  for (i=0 ; i<buttons.length ; i++) {
    // style:
    buttons[i].style.background = '#ccc';
    buttons[i].style.boxShadow = '0px 3px 4px #888';
    buttons[i].style.color = '#fff';
    buttons[i].style.cursor = 'pointer';
    buttons[i].style.cursor = 'pointer';
    buttons[i].style.display = 'block';
    buttons[i].style.fontFamily = 'serif';
    buttons[i].style.fontSize = '28px';
    buttons[i].style.height = '46px';
    buttons[i].style.lineHeight = '46px';
    buttons[i].style.margin = '12px';
    buttons[i].style.position = 'relative';
    buttons[i].style.textAlign = 'center';
    buttons[i].style.top = '0px';
    buttons[i].style.transition = 'box-shadow .16s, top .16s';
    buttons[i].style.width = '46px';
    // :style
    buttons[i].onmouseover = function () {
      selector.innerText = this.description;
      this.style.boxShadow = '0px 0px 4px #888';
      this.style.top = '3px';
    };
    buttons[i].onmouseleave = function () {
      selector.innerText = "";
      this.style.boxShadow = '0px 3px 8px #888';
      this.style.top = '0px';
    };
    buttonContainer.append(buttons[i]);
  }

  var listPagelinks = function () {
    var i; var j; var paragraphs = []; var links = [];
    for (i=0 ; i<content.childNodes.length ; i++) {
      if (content.childNodes[i].tagName === 'P') {
        paragraphs.push(content.childNodes[i]);
      }
    }
    for (i=0 ; i<paragraphs.length ; i++) {
      for (j=0 ; j<paragraphs[i].childNodes.length ; j++) {
        if (paragraphs[i].childNodes[j].tagName === 'A') {
          links.push({
            text: paragraphs[i].childNodes[j].innerText,
            href: paragraphs[i].childNodes[j].href,
          });
        }
      }
    }
    console.log(links);
    return links;
  };

  var followRandomLink = function () {
    var links = listPagelinks();
    window.location = links[Math.floor(Math.random() * links.length)].href;
  };

  random.onclick = followRandomLink;
  list.onclick = listPagelinks;
})();
