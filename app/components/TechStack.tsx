

//To add preferably 3d icons else coloured images for each tech stack
//add Animations to each Item
// make responsive and pretty

export default function TechStack(){

    const tech = [{name: 'JavaScript'},{name: 'TypeScript'},{name:'React'},
    {name: 'Next JS'},{name: 'Mongo DB'}, {name:'MySQL'}, {name: 'Prisma'}, 
    {name: 'Node JS'},{name: 'HTML'}, {name:'CSS'}, {name: 'Tailwind'}, {name: 'Git'},
    {name: 'Github'}, {name: 'Figma'}]

    return (
        <div>
            {tech.map((item) => (
                <div>{item.name}</div>
            ))}
            
        </div>

    )
}