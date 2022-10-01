function basket(items,basketselector){
    const divbasket = document.querySelector(basketselector)
    

    function render(){
        divbasket.innerHTML = ''
        const table = document.createElement('table')
        divbasket.appendChild(table)
        table.innerHTML = `
        <tr>
            <td>№ п/п</td>
            <td>Название</td>
            <td>Цена</td>
            <td>Количество</td>
            <td>Сумма</td>
            <td></td>
        </tr>
        `
        let sums = 0
        items.forEach( (item,num) => {
            const tr = document.createElement('tr')
            //номер
            const tdN = document.createElement('td')
            tdN.innerHTML = num+1
            tr.appendChild(tdN)
            //title
            const tdT = document.createElement('td')
            tdT.innerHTML = item.title
            tr.appendChild(tdT)
            //price
            const tdP = document.createElement('td')
            tdP.innerHTML = item.price
            tr.appendChild(tdP)
            //qty !!!!!!!!!!!!!!!!!!!
            const tdQ = document.createElement('td')
            tdQ.setAttribute('uid',item.uid)
            //button minus
            const buttonM = document.createElement('button')
            buttonM.innerHTML = '-'
            buttonM.addEventListener('click',(ev)=>{
                const uid = ev.target.parentNode.getAttribute('uid')
                let currentItem = items.filter(it=>it.uid == uid)[0]
                if (currentItem.qty > 1){
                    currentItem.qty--
                }
                render()
            })
            tdQ.appendChild(buttonM)

            // input <input type="text" value="2" class = 'qty'>
            const inputQ = document.createElement('input')
            inputQ.type = 'text', inputQ.value = item.qty, inputQ.className = 'qty'
            inputQ.addEventListener('change',(ev)=>{
                const qty = parseInt(ev.target.value)
                if ( qty > 0){
                    const uid = ev.target.parentNode.getAttribute('uid')
                    let currentItem = items.filter(it=>it.uid == uid)[0]
                    currentItem.qty = qty
                    render()
                } else{
                    const uid = ev.target.parentNode.getAttribute('uid')
                    let currentItem = items.filter(it=>it.uid == uid)[0]
                    ev.target.value = currentItem.qty
                }
            })
            inputQ.setAttribute('uid',item.uid)
            tdQ.appendChild(inputQ)

            //button plus
            const buttonA = document.createElement('button')
            tdQ.appendChild(buttonA)
            buttonA.innerHTML = '+'
            buttonA.addEventListener('click',(ev)=>{
                const uid = ev.target.parentNode.getAttribute('uid')
                let currentItem = items.filter(it=>it.uid == uid)[0]
                currentItem.qty++
                render()
            })

            tr.appendChild(tdQ)
            //summ
            const tdS = document.createElement('td')
            sums += item.qty * item.price
            tdS.innerHTML = item.qty * item.price
            tr.appendChild(tdS)
            //Delete
            const tdD = document.createElement('td')
            const a = document.createElement('a')
            a.href = '#'
            a.innerText = 'Удалить'
            a.setAttribute('uid',item.uid)
            tdD.appendChild(a)
            tr.appendChild(tdD)
            a.addEventListener('click',(ev)=>{
                ev.preventDefault()
                const uid = ev.target.getAttribute('uid')
                items = items.filter(el => (el.uid!=uid))
                render()
            })

            // Добавили строку
            table.appendChild(tr)
        })
        // Total
        //Итого
        const tr = document.createElement('tr')
        let td = document.createElement('td')
        td.colSpan = 4
        td.innerHTML = 'Итого:'
        tr.appendChild(td)
        //Сумма
        td = document.createElement('td')
        td.colSpan = 2
        td.innerHTML = sums
        tr.appendChild(td)
        table.appendChild(tr)

        /* если так добавить, то не работают клик на ссылку Удалить
        table.innerHTML += `
        <tr>
            <td colspan="4">Итого:</td>
            <td colspan="2">${sums}</td>

        </tr>
        `*/
    }
    render()
}