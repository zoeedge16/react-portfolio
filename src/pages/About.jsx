import headShot from "../components/Headshot";

export default function About() {
    return (
        <>
           <h3> About Me </h3>
        <div>
            {headShot.map((photo) => (
                <div className="card" key={photo.id}>
                    <div className="card-body" style={{
                        backgroundImage: `url(${photo.image})`,
                        width: '300px',
                        height: '300px',
                        backgroundSize: 'cover',
                    }}>
                    </div>
                </div>
            ))}
            <p> 
                I am an alumni of the University of Tennessee Knoxville. 
                I have a major in Chemistry and a minor in Italian. 
                I am currently attending Vanderbilt's Software Enginnering Bootcamp.
                I work at Pace National as a Scientist.
                My undergraduate research was with the computational chemistry department headed by Dr. Kostas Vogiatzis. 
                The goal of the reasearch was to create a program that allowed scientists to visualize pharmacrophore moelcules in 3D space.
           </p>
        </div>
        </>
    );
}