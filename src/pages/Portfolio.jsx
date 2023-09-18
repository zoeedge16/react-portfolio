import projectData from "../components/Projects"

export default function Portfolio() {
    return (
        <>
        <h3> Portfolio </h3>
        <div>
            {projectData.map((project) => (
                <div className="card" key={project.id}>
                    <div className="card-body" style={{
                        backgroundImage: `url(${project.image})`,
                        width: '300px',
                        height: '200px',
                        backgroundSize: 'cover'
                        }}>
                        <div className="card-link">
                            <a href={project.url}>{project.name}</a>
                            <a href={project.github}>GitHub</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
};