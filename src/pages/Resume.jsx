import resume from '../components/ResumePhoto'
export default function Resume() {
    return (
        <>
        <h2 class="resume-photo" id="resume">Resume</h2>
        <div>
           {resume.map((pic) => (
            <div className="card" key={pic.id}>
                <div className='card-body' style={{
                backgroundImage: `url(${pic.image})`,
                width: '600px',
                height: '600px',
                backgroundSize: 'cover'
            }}>
            </div>
            </div>
           ))}
        </div>
        </>
        
    )
}