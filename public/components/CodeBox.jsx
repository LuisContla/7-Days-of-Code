
const CodeBox = (props) => {

    const { src } = props;
    const route = "../images/code/" + src;

    return (
        <>
            <img className="code-box" src={route} alt={src} />
        </>
    )
}

export default CodeBox