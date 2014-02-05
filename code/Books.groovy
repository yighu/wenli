def readchapter={src->

def ch=new XmlSlurper().parse(new File("../OPS/$src"))
println ch.head.title
println ch.body.div.h3
ch.body.div.p.each{v->
println v
}
}
def fb=new XmlSlurper().parse(new File("../OPS/fb.ncx"))
def title=fb.docTitle.text
def author=fb.docAuthor.text
def navMap=fb.navMap
def fl=new File("Books.html")
navMap.navPoint.each{it->
fl<<it.@id 
fl<<"\t"
fl<<it.@playOrder 
fl<<"\t"
fl<< ""+it.navLabel.text +"\t"+it.content.@src 
fl<<"\n"
/*
it.navPoint.each{ch->
println "\t"+ch.@id +"\t"+ch.@playOrder +"\t"+ch.navLabel.text +"\t"+ch.content.@src
//readchapter ch.content.@src
}
*/
}
