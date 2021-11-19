 let formElement = document.getElementById('form-element');
     formElement.addEventListener('submit',add);

function add(e){
    e.preventDefault();
    let taskEle = document.getElementById('form'),
       textwrapper = document.getElementById('text-wrapper');

    formvalue = taskEle.value;
    // create span tag                       (<span></span>)
    let spanTag = document.createElement('span');
    //add value to the span tag            (<span>value</span>)
     spanTag.innerHTML = formvalue;
    //create a tag                             (<a></a>)
    let aTagDone = document.createElement('a');
    //give href attribute to a tag          (<a href="#"></a>)
    aTagDone.setAttribute('href','#');
    // insert a text into a tag            (<a href="#">done</a>)
    aTagDone.innerHTML='done';
    let aTagEdit = document.createElement('a');
    //give href attribute to a tag          (<a href="#"></a>)
    aTagEdit.setAttribute('href','#');
    // insert a text into a tag           (<a href="#">edit</a>)
    aTagEdit.innerHTML='edit';
    let aTagDelete = document.createElement('a');
    //give href attribute to a tag          (<a href="#"></a>)
    aTagDelete.setAttribute('href','#');
    // insert a text into a tag            (<a href="#">delete</a>)
    aTagDelete.innerHTML='deletebtn';       
    //create li tag                         (<li></li>)
    liTag = document.createElement('li');    
    //insert span and a tag in li         
    liTag.appendChild(spanTag);
    liTag.appendChild(aTagDone );
    liTag.appendChild(aTagEdit);
    liTag.appendChild(aTagDelete);
    //insert li into ol
    textwrapper.appendChild(liTag);
}
               