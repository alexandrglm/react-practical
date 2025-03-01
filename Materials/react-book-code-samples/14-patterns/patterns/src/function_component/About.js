const defaultProps = {
    author: "Pello Altadill",
    version: "v1.0.0"
};

function About ({author, version} = defaultProps) {
    return <div>
            <h1>About page</h1>
            <p>{author}</p>
            {version}
    </div>;
}

export default About;