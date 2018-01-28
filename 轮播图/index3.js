(function(global){
    var Cycl = function(){}
    Cycl.prototype = {
        creatCycl:function(json){
           var box = json.el
           var n = json.data.n
           var imgs = json.imgs
           var div = document.createElement('div')
           div.className = 'box1'
           box.appendChild(div)
            imgs.forEach(item=>{
                var img = document.createElement('img')
                img.src = item
                div.appendChild(img)
            })
            var btn = document.createElement('div')
            btn.className = 'btn'
            box.appendChild(btn)

            var btnLeft = document.createElement('span')
            btnLeft.className = 'left'
            btnLeft.innerHTML = '&lt;'
            btn.appendChild(btnLeft)

            var btnRight = document.createElement('span')
            btnRight.className = 'right'
            btnRight.innerHTML = '&gt;'
            btn.appendChild(btnRight)

            var circle = document.createElement('div')
            circle.className = 'circle'
            box.appendChild(circle)
            var ul = document.createElement('ul')
            imgs.forEach(item=>{
                var li = document.createElement('li')
                ul.appendChild(li)
            })
            circle.appendChild(ul)
            
            img = document.querySelectorAll('.box1 img')
            lis = document.querySelectorAll('li')
            img[0].style.display = 'block'
            lis[0].style.background = 'yellow'
            btnLeft.onclick = function(){
                img[n].style.display = 'none'
                lis[n].style.background = '#fff'
                n--
                if(n<0){
                    n = img.length-1
                }
                img[n].style.display = 'block'
                lis[n].style.background = 'yellow'
            }
            btnRight.onclick = function(){
                img[n].style.display = 'none'
                lis[n].style.background = '#fff'
                n++
                if(n > img.length-1){
                    n = 0
                }
                img[n].style.display = 'block'
                lis[n].style.background = 'yellow'
            }
            Array.from(lis).forEach((item,index)=>{
                item.onclick = function(){
                    img[n].style.display = 'none'
                    lis[n].style.background = '#fff'
                    n = index
                    img[n].style.display = 'block'
                    lis[n].style.background = 'yellow'
    
                }
            })
        }
    }
    return global.Cycl = Cycl
})(window)