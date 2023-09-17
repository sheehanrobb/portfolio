

//To add preferably 3d icons else coloured images for each tech stack
//add Animations to each Item
// make responsive and pretty

export default function TechStack(){

    const tech = [{id: 1, name: 'JavaScript'},
    {id: 2, name: 'TypeScript'},
    {id: 3, name:'React'},
    {id: 4, name: 'Next JS'},
    {id: 5, name: 'Mongo DB'},
    {id: 6, name:'MySQL'}, 
    {id: 7, name: 'Prisma'}, 
    {id:8, name: 'Node JS'}, 
    {id: 9, name: 'HTML'}, 
    {id: 10, name:'CSS'}, 
    {id: 11, name: 'Tailwind'}, 
    {id: 12, name: 'Git'},
    {id: 13, name: 'Github'}, 
    {id: 14, name: 'Figma'}]

    return (
        <div className="flex">
            {tech.map((item) => (
                <div className="flex bg-yellow-600" key={item.id}>{item.name}</div>
                
            ))}
            
            
        </div>

    )
}