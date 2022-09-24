let myimgs = document.querySelectorAll('img')
let myimg = {}
let myrect = {}
for (myimg of myimgs){
    myrect  = myimg.getBoundingClientRect()
    if ((myrect.width > 30) & (myrect.height>30)){
        break
    }
}
myimg.style.position = 'fixed'
let x1 = myrect.width
let leftBounding = document.body.getBoundingClientRect().width-myrect.width

setInterval(()=>{
    x1 > leftBounding?x1=0:x1++
    myimg.style.left = x1 + 'px'
},40)
