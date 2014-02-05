import static groovy.io.FileType.FILES

def stripBody={f->
	def txt=f.text
	int start=txt.indexOf("<body>")+6
	int end=txt.indexOf("</body>")
	txt.substring(start,end)
	}
new File('../OPS').eachFileRecurse(FILES) {
    if(it.name.endsWith('.html')) {
        def name=it.name
	println it 
	(new File("../html/"+name)).write(stripBody( it),"UTF-8")

    }
}
