
// tag form 관련
const addTagButton = document.querySelector('#plus-button')
const tagForm = document.querySelector('.addForm-tag')
const closeTagButton = document.querySelector('.addForm-tag .close-row')
const tagInput = document.querySelector('.addForm-tag input')
const tagList = document.querySelector('#tag-list #select')
const addTagDiv = document.querySelector('#plus-button div')

// todo form 관련
const addWrap = document.querySelector('.add-wrap')
const addButton = document.querySelector('#add-button')
const todoForm = document.querySelector('.addForm')
const closeButton = document.querySelector('.addForm .close-row img')
const todoInput = document.querySelector('.addForm input')
const todoList = document.querySelector('#todo-list')

// local storage key
const TODOS_KEY = 'todos';
const TAGS_KEY = 'tags';

// local storage에 저장할 객체들
let toDos = [];
let tags = [];

///////////////////// start : todoForm ///////////////////////
// toDos 객체 저장
function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

// todo 삭제
function deleteTodo(event) {
    const check = event.currentTarget.parentNode

    check.remove()
    toDos = toDos.filter((todo) => todo.id !== parseInt(check.id))
    saveTodos()
}

// todo status에 따라 체크 하기
function checkTodo(event) {
    let checkImg = event.target
    let check = event.currentTarget.parentNode.parentNode
    let theId = check.id
    let todo = toDos.find((todo) => todo.id === parseInt(theId))
    let span = checkImg.parentNode.querySelector('.todo-text')
    if (todo.status === 'unchecked') {
        todo.status = 'checked'
        checkImg.src = "./img/icon/check2.png"
        span.classList.add('checked')
    } else {
        todo.status = 'unchecked'   
        checkImg.src = "./img/icon/check1.png"
        span.classList.remove('checked')
    }
    saveTodos()
}

// todo 보여주기
function showlist(newTodo) {
    const outerDiv = document.createElement('div')
    outerDiv.classList.add('box')
    outerDiv.classList.add('todo')
    outerDiv.id = newTodo.id
    
    const innerDiv = document.createElement('div')
    innerDiv.classList.add('head')
    
    const span = document.createElement('span')
    span.innerText = newTodo.text
    span.classList.add('todo-text')

    
    const checkImg = document.createElement('img')
    if (newTodo.status === 'unchecked') {
        checkImg.src = "./img/icon/check1.png"
        span.classList.remove('checked')
    } else {
        checkImg.src = "./img/icon/check2.png"
        span.classList.add('checked')
    }
    checkImg.addEventListener('click', checkTodo)
    
    const trashImg = document.createElement('img')
    trashImg.src = './img/icon/trash.png'
    trashImg.addEventListener('click', deleteTodo)
    
    outerDiv.appendChild(innerDiv)
    outerDiv.appendChild(trashImg)
    innerDiv.appendChild(checkImg)
    const tag = document.createElement('span')
    tag.classList.add('tag-on-list')
    tagObj = localStorage.getItem(TAGS_KEY)
    const parsedTags = JSON.parse(tagObj)
    tags = parsedTags
    // typeof newTodo.tag = string
    let theTag = tags.find((tag) => tag.id === parseInt(newTodo.tag))
    if (newTodo.tag !== '') {
        tag.innerText = theTag.text
        innerDiv.appendChild(tag)
    } else {
        tag.innerText = ''
    }

    innerDiv.appendChild(span)
    todoList.appendChild(outerDiv)
}

// todoForm 열고 닫을 때 선택된 tag 없애기 위해 위로 이동
// tag 보여주기
function showTags(newTag) {
    const option = document.createElement('div')
    option.classList.add('tag')
    option.id = newTag.id
    option.value = newTag.text
    option.innerText = newTag.text

    tagList.prepend(option)
    option.addEventListener('click', onTagClick)
}

////todoForm에서 tag 선택 시
// tag를 전역변수로
tagId = ''

// tag 클릭 시 전역변수 tagId 변경
function onTagClick(event) {
    tagId = event.target.id
    if (event.target.classList.contains('tag-clicked')) {
        event.target.classList.remove('tag-clicked')
        tagId = ''
    } else {
        event.target.classList.add('tag-clicked')
    }

    // 클릭한 tag를 tag-clicked 클래스 추가
    // tagbtn = nodelist
    const tagbtn = document.querySelectorAll('.tag')
    // tagId랑 같은 태그만 클래스 추가
    tagbtn.forEach(function (element) {
        if (element.id !== tagId) {
            element.classList.remove('tag-clicked')
        }
    })
}

// todoForm 열기
function onAddClick(event) {
    event.preventDefault()
    todoForm.classList.remove('hidden')
    addButton.classList.add('hidden')
    // 높이변화
    addWrap.classList.remove('height1')
    addWrap.classList.add('height2')
}

//  todoForm 닫기
function onCloseClick(event) {
    event.preventDefault()
    todoForm.classList.add('hidden')
    addButton.classList.remove('hidden')
    // tag form
    tagForm.classList.add('hidden')
    addTagDiv.classList.remove('hidden')
    addTagButton.addEventListener('click', onAddTagClick)
    // 높이변화
    addWrap.classList.add('height1')
    addWrap.classList.remove('height2')
    tagId = ''
    const tagbtn = document.querySelectorAll('.tag')
    tagbtn.forEach(element => {
        element.classList.remove('tag-clicked')
    });
}


// todoForm 제출
function onTodoSubmit(event) {
    event.preventDefault()
    const newTodo = todoInput.value
    todoInput.value = ''
    const todoObj = {
        text: newTodo,
        tag: tagId,
        status: 'unchecked',
        id: Date.now()
    }
    toDos.push(todoObj)
    showlist(todoObj)
    saveTodos()
    tagId = ''
    const tagbtn = document.querySelectorAll('.tag')
    tagbtn.forEach(element => {
        element.classList.remove('tag-clicked')
    });
    
    todoForm.classList.add('hidden')
    tagForm.classList.add('hidden')
    addButton.classList.remove('hidden')
    // 높이변화
    addWrap.classList.add('height1')
    addWrap.classList.remove('height2')
}
///////////////////// end : todoForm ///////////////////////


///////////////////// start : tagForm ///////////////////////


// tagForm 열기
function onAddTagClick(event) {
    event.preventDefault()
    tagForm.classList.remove('hidden')
    addTagDiv.classList.add('hidden')
    
    // tagForm 이벤트 삭제
    addTagButton.removeEventListener('click', onAddTagClick)
}

// tagForm 닫기
function onTagCloseClick(event) {
    event.preventDefault()
    tagForm.classList.add('hidden')
    addTagDiv.classList.remove('hidden')
    
    // tagForm 이벤트 다시 추가
    addTagButton.addEventListener('click', onAddTagClick)
}

// tags 객체 저장
function saveTags() {
    localStorage.setItem(TAGS_KEY, JSON.stringify(tags))
}

// tagForm 제출
function onTagSubmit(event) {
    event.preventDefault()
    const newTag = tagInput.value
    tagInput.value = ''
    const tagObj = {
        text: newTag,
        id: Date.now()
    }
    tags.push(tagObj)
    showTags(tagObj)
    
    saveTags()
    
    tagForm.classList.add('hidden')
    addTagDiv.classList.remove('hidden')
}
///////////////////// end : tagForm ///////////////////////

const savedTodo = localStorage.getItem(TODOS_KEY)
const savedTags = localStorage.getItem(TAGS_KEY)

if (savedTodo !== null) {
    const parsedTodo = JSON.parse(savedTodo)
    toDos = parsedTodo
    parsedTodo.forEach(showlist)
}

if (savedTags !== null) {
    const parsedTags = JSON.parse(savedTags)
    tags = parsedTags
    parsedTags.forEach(showTags)
}

// todoForm 열기
addButton.addEventListener('click', onAddClick)
// todoForm 닫기
closeButton.addEventListener('click', onCloseClick)
// todoForm 제출
todoForm.addEventListener('submit', onTodoSubmit)

// tagForm 닫기
closeTagButton.addEventListener('click', onTagCloseClick)
// tagForm 열기
addTagButton.addEventListener('click', onAddTagClick)
// tagForm 제출
tagForm.addEventListener('submit', onTagSubmit)