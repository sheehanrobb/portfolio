
export default function Card(){

    const projects = [{id:1, name: 'AI Scribe', about: 'add some text here', img:'AI-Scribe-Screenshot.png' },
    {id:2, name: 'Game Trove', about: 'add some text here', img:'' },
    {id:3, name: 'Coming Soon', about: 'add some text here', img:'' }]

    return (
      <div className="card lg:card-side bg-base-100 shadow-xl">
        {projects.map((project) => (
        <><figure>
                <img
                    src={project.img}
                    alt={project.name} />
            </figure><div className="card-body">
                    <h2 className="card-title">{project.name}</h2>
                    <p>{project.about}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn more</button>
                    </div>
                </div></>
        ))}
      </div>
    
    );
}