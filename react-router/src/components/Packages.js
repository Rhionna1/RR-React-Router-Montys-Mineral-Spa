

export default function Packages({ packages }) {
    const packageDisplay = packages.map((item, i) => {
        return <li key={i}>{item}</li>
    })

    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                </div>
                <ul>
                    {packageDisplay}
                </ul>
            </div>
        </div>
    )
}