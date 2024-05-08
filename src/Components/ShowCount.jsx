import PropTypes from "prop-types";
export default function ShowCount({count, title}) {
    console.log(`rendering ${title}`);

    return (
        <p>
            {title} is {count}
        </p>
    )
}

ShowCount.propTypes = {
    count: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
}