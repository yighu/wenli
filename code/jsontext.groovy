import groovy.json.JsonSlurper

def slurper= new JsonSlurper()
def fl=slurper.parse(new FileReader(new File("bible.json")))
println  fl.title
println  fl.author
fl.books.each{book->
println book.name
book.chapters.each{chapter->
println chapter.title
chapter.verses.each{v->
println v.text
}
}
}
