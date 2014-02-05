import groovy.json.JsonSlurper

def slurper= new JsonSlurper()
def fl=slurper.parse(new FileReader(new File("chapters.json")))
fl.chapters.each{chapter->
println chapter.gid
}
