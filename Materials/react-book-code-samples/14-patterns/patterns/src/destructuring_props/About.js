

function AboutDes ({author = "None", version = "1.0.0"}) {
    let versionP = <p>version {version}</p>;

    return <div>
            <h1>About page</h1>
            <p>{author}</p>
            {versionP}
    </div>;
}

export default AboutDes;