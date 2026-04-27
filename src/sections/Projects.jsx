
export const Projects = () => {
    return 
    <section> 
        <div  className="grid md:grid-cols-2 gap-8">
            {Projects.map((project, id) => (
                <div
                    key={id}
                    className="group glass rounded-2xl overflow-hidden animate-fade-in"
                    style={{ animationDelay: `${id + 1 * 100}ms` }}
                >
                    {/* image des projets */}
                    <div className="relative overflow-hidden aspect-video">

                    </div>
                </div>
            ))}

        </div>

    </section>;
}
