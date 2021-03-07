function fun(){
    var h3s=document.getElementsByTagName('h3')
    var mdiv=document.createElement('div')
    var mul=document.createElement('ul')
    mdiv.appendChild(mul)
    for(var i=0;i<h3s.length;i++){
        var text=h3s[i].childNodes[0].nodeValue
        var mli=document.createElement('li')
        var ma=document.createElement('a')
        var atxt=document.createTextNode(text)
        mul.appendChild(mli)
        mli.appendChild(ma)
        ma.setAttribute('href','#item'+i)
        ma.appendChild(atxt)
    }
    document.body.insertBefore(mdiv,document.body.firstChild)
}
