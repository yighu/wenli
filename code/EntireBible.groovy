def Q="\""
def fl=new File("bible.json")
def gid=0
def readchapter={src->

def ch=new XmlSlurper().parse(new File("../OPS/$src"))
fl<<",${Q}title${Q}:${Q}${ch.head.title}${Q},\t"
fl<<"${Q}ch${Q}:${Q}${ch.body.div.h3}${Q},\t"
fl<<"${Q}verses${Q}:[\n"
ch.body.div.p.eachWithIndex{v,idy->
fl<<"{${Q}num${Q}:${Q}${idy+1}${Q},\t${Q}text${Q}:${Q}${v}${Q} },\n"
}
fl<<"],\n"
}
def fb=new XmlSlurper().parse(new File("../OPS/fb.ncx"))
fl<<"{"
fl<<"${Q}title${Q}:${Q}"+fb.docTitle.text+"${Q},\n"
fl<<"${Q}author${Q}:${Q}"+fb.docAuthor.text+"${Q},\n"
def title=fb.docTitle.text
def author=fb.docAuthor.text
def navMap=fb.navMap
fl<<"${Q}books${Q}:[\n"
navMap.navPoint.eachWithIndex{it,index->
fl<<"\n{${Q}i${Q}:${Q}${index}${Q},${Q}id${Q}:${Q}"+it.@id +"${Q},${Q}playOrder${Q}:${Q}"+ it.@playOrder +"${Q},${Q}name${Q}:${Q}"
fl<< ""+it.navLabel.text +"${Q},${Q}url${Q}:${Q}"+it.content.@src +"${Q}"
fl<<",\n${Q}chapters${Q}:[\n"


it.navPoint.eachWithIndex{ch,idx->
gid++
fl<<"\n{${Q}i${Q}:${Q}${idx+1}${Q},${Q}book${Q}:${Q}${it.navLabel.text}${Q},${Q}gid${Q}:${Q}${gid}${Q},"
fl<<"${Q}id${Q}:${Q}"+ch.@id +"${Q},${Q}playOrder${Q}:${Q}"+ch.@playOrder +"${Q},${Q}name${Q}:${Q}"+ch.navLabel.text +"${Q},${Q}url${Q}:${Q}"+ch.content.@src+"${Q} "
readchapter ch.content.@src
fl<<"\n},\n"
}
fl<<"\n],\n"
fl<<"},"
}
fl<<"],\n"
fl<<"}"
