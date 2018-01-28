(function (global){
    var Table = function(){}
    function Css(width,col){
        var style = document.querySelectorAll('style')[0]
        if(!style){
            style = document.createElement('style')
            document.head.appendChild(style)
        }
        style.innerHTML += `
        .raw {
            width:100%;
            height:50px;
            background-color: #333;
        }
        .sign {
            background-color: blue;
        }
        .col {
            width:${width/col}px;
            height:50px;
            background-color: gray;
            float:left;
            border:2px solid #fff;
        }
        `
    }
    Table.prototype = {
        createTable:function(json){
            var el = json.el
            var data = json.data
            var col = data.col
            for(var i=0;i<data.raw;i++){
                var div = document.createElement('div')
                div.className = 'raw'
                if(i%2!==0){
                    div.className += ' sign' 
                }
                el.appendChild(div)
                for(var j=0;j<data.col;j++){
                    var oDiv = document.createElement('div')
                    oDiv.className = 'col'
                    div.appendChild(oDiv)
                }
            }
            var width = el.clientWidth
            Css(width,col)
        }
    }
    return global.Table = Table
})(window)