def readchapter={src->

def ch=new XmlSlurper().parse(new File("../OPS/$src"))
println ch.head.title
println ch.body.div.h3
ch.body.div.p.each{v->
println v

}

}
readchapter "chapter68.html"
