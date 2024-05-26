export default function skills(){
    return(
        <div className="skills container d-flex">
            <div className="saludo intro col-lg-6">
                <h1>My areas of  <span> knowledge </span></h1>
                <p>Handling diverse knowledge in various areas of information,
                     covered both hardware and software knowledge , more specifically:</p>
            
                <a className="btnp btn-about" href="#projects">Index Projects</a>
            </div>
            <div className="list-skills col-lg-6">
                <ol>
                    <li><span>01.</span> Sequential DB</li>
                    <li><span>02.</span>Technical support</li>
                    <li><span>03.</span>Telecommunications networks</li>
                    <li><span>07.</span> JavaScript</li>
                    <li><span>04.</span> Python</li>
                    <li><span>05.</span> Git & github</li>
                    <li><span>06.</span> NextJs</li>
                   
                </ol>
            </div>
        </div>
    )
}