import PropTypes from "prop-types";

const ScaleName = {
    cel: 'Celsius', fah: 'Fahrenheit'
};
export default function ComponentInput({scale, temperature, temperatureChange}) {
    return (
        <fieldset>
            <legend>
                Enter temperature in {ScaleName[scale]}
            </legend>
            <input type="text" value={temperature} onChange={(e) => temperatureChange(e, scale)}/>
        </fieldset>
    )
}

ComponentInput.propTypes = {
    scale: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired,
    temperatureChange: PropTypes.func.isRequired
}