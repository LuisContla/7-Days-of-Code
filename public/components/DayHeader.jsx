const DayHeader = (props) => {

    const { num, name, icon } = props;
    const src = "../images/icons/Dark/" + icon + ".png";

    return (
        <>
            <hr />
            <div className="day-data">
                <div className="day-title">Día {num}</div>
                <div className="day-name">{name}</div>
                <div className="day-icon"><img src={src} alt={icon} /></div>
            </div>
            <hr />
        </>
    )
}

export default DayHeader