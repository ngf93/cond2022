function openSubmenu(id){
  if(id){
    document.getElementById(id).style.display = 'block';
    document.getElementById(id).animate({
      "opacity": "1",
    }, {
      duration: 200,
      fill: "forwards",
    });
  }
}
function closeSubmenu(id){
  if(id){
    document.getElementById(id).animate({
      "opacity": "0"
    }, {
      duration: 200,
      fill: "forwards",
    });
    document.getElementById(id).style.display = 'none';
  }
}
let arrLinks = Array.from(document.querySelectorAll('#submenu-list a'));
arrLinks.forEach(function(item, i, arr) {
  item.addEventListener('mouseenter', function(e) {
    if (item.hasAttribute('data-target')) {
      arr.forEach(obj => {
        obj.classList.remove('active')
        closeSubmenu(obj.dataset.target)
      })
      item.classList.add('active')
      openSubmenu(item.dataset.target)
    } else {return}
  });
});

function toggleCatalog(btn){
  if(btn.dataset.flag==='closed'){
    document.getElementById('shadow').style.display='block'
    document.getElementById('catalog-menu').style.display='flex'
    document.getElementById('catalog-menu').animate({
      "opacity": "1",
    }, {
      duration: 200,
      fill: "forwards",
    })
    btn.dataset.flag='opened'

    arrLinks.forEach(obj => {
      obj.classList.remove('active')
      closeSubmenu(obj.dataset.target)
    })
    arrLinks[0].classList.add('active')
    openSubmenu(arrLinks[0].dataset.target)
  } else {
    document.getElementById('shadow').style.display='none'
    document.getElementById('catalog-menu').style.display='none'
    btn.dataset.flag='closed'
  }
}
document.addEventListener('click', function(e) {
  const catalogMenu = document.getElementById('catalog-menu')
  const btn = document.getElementById('catalogBtn')
  const target = e.target
  const currentCatalog = target == catalogMenu || catalogMenu.contains(target);
  const currentBtn = target == btn || btn.contains(target);
  if (!currentCatalog && !currentBtn ) {
    toggleCatalog(btn)
  }
});


const cart = document.getElementById('cart-preview');
function openCartPreview(){
  cart.style.display = 'block';
  cart.animate({
    "opacity": "1",
  }, {
    duration: 200,
    fill: "forwards",
  });
}
function closeCartPreview(){
  cart.animate({
    "opacity": "0",
  }, {
    duration: 200,
    fill: "forwards",
  });
  cart.style.display = 'none';
}


/* inputs verification in QUIZ */
function verifyInput(fieldset){
  let requiredElems = Array.from(fieldset.querySelectorAll('input[required]'));
  if(requiredElems.length == 0){
    return;
  } else {
    let flag = requiredElems.every(notNull);
    if (flag){
      fieldset.querySelector('.verifiable-btn').removeAttribute('disabled');
    } else {
      fieldset.querySelector('.verifiable-btn').setAttribute('disabled', 'disabled');
    }
  }
  function notNull(element) {
    if(element.type == 'radio' || element.type == 'checkbox'){
      let name = element.name;
      let arrBtns = Array.from(fieldset.querySelectorAll('input[name="'+name+'"]'));
      if(arrBtns.some(isChecked)){return element;}
    } else if (element.value.trim() != ''){
      return element;
    }
  }
  function isChecked(el){
    if(el.checked && el.value.trim() != ''){
      return el;
    }
  }
}


/*************** 
CUSTOM SELECT
****************/
window.onload = function() {
    let selectElement = document.querySelectorAll('.custom-select');
    let arr_selects = Array.from(selectElement);
    arr_selects.forEach(function(item, i, arr) {
        const btn = item.querySelector('button');
        const options = item.querySelector('.cs-options');
        let inputs = item.querySelectorAll('input');
        let name = inputs[0].name;
  
        let cur_inp; //выбранный input radio
        for(let i = 0; i < inputs.length; i++){
          if(inputs[i].checked){
            cur_inp = inputs[i];
          }
        }
  
        if(cur_inp) {
          let label_content = cur_inp.nextElementSibling.innerHTML; //содержимое label следующего после выбранного input
          btn.innerHTML = label_content;
        } else {
          btn.innerHTML = "Не выбрано";
        }
  
        const toggleMenu = function() {
            // открываем/закрываем окно навигации, добаляя/удаляя активный класс
            options.classList.toggle('opened');
        }
  
        btn.addEventListener('click', () => { // при клике на кнопку
            toggleMenu();
        });
        
        //скрываем опции при клике вне селекта
        document.addEventListener('click', function(e) {
          const target = e.target;
          const current_sel = target == item || item.contains(target);
          const sel_is_opened = options.classList.contains('opened');
          if (!current_sel && sel_is_opened) {
              toggleMenu();
          }
        });
  
        let arr_radio = Array.from(inputs);
        arr_radio.forEach(function(item, i, arr) {
          item.addEventListener('change', (event) => {
            changeValueLabel(item);
          });
        });
  
    
        function changeValueLabel(el){
          let label_content = el.nextElementSibling.innerHTML;
          btn.innerHTML = label_content;
          toggleMenu();
        }
    });
  }