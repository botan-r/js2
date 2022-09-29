import { v4 as uuidv4 } from 'https://jspm.dev/uuid'
const app = function(input,button,div1,div2){
  let todoList = []
  /*найти элементы*/
  const inputText = document.querySelector(input)
  const btnAdd = document.querySelector(button)
  const divList = document.querySelector(div1)
  const divCompleted = document.querySelector(div2)
  /*добавление*/
  btnAdd.addEventListener('click',(ev)=>{
      const text = inputText.value
      if (!text.trim()) return
      const uid = uuidv4()
      const item = {
          uid,
          text,
          status: 'uncomplited'
      }
      todoList.push(item)
      render()
      inputText.value = ''
      inputText.focus()
  })

  function render(){
      divList.innerHTML = ''
      divCompleted.innerHTML = ''
           
      const ulUncompleted = document.createElement('ul')
      divList.appendChild(ulUncompleted)
      const ulCompleted = document.createElement('ul')
      divCompleted.appendChild(ulCompleted)
      todoList.forEach(item=>{

          const li = document.createElement('li')
          const text = document.createTextNode(item.text)
          li.addEventListener('click',function(ev){
              if (ev.target.nodeName != 'LI') return
              const uid = ev.target.getAttribute('uid')
              const element = todoList.filter(el=>el.uid==uid)[0]
              element.status = element.status == 'uncomplited' ? 'complited': 'uncomplited'
              render()
          })
          li.appendChild(text)
          li.setAttribute('uid',item.uid)
          const a = document.createElement('a')
          a.innerHTML = 'Удалить'
          a.href = '#'
          a.addEventListener('click', (ev) => {
              /*удаление*/
              ev.preventDefault()
              let uid = ev.target.parentNode.getAttribute('uid')
              todoList = todoList.filter(el=>el.uid!=uid)
              render()
          })
          li.appendChild(a)
          if (item.status == 'complited'){
            ulCompleted.appendChild(li)
          } else{
            ulUncompleted.appendChild(li)
          }
        })
  }
}

app('#text','#btnAdd','#list','#completed')
app('#text2','#btnAdd2','#list2','#completed2')