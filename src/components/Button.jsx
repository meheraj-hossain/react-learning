// noinspection JSCheckFunctionSignatures

import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { changeFunction: currentChange, locale: currentLocale } = this.props;
        const { changeFunction: nextChange, locale: nextLocale } = nextProps;
        return !(currentChange === nextChange && currentLocale === nextLocale);
    }

    render() {
        const {changeFunction, locale} = this.props
        return (
            <button type="submit" onClick={() => changeFunction(locale)}>
                { locale === "bn-BD" ? "Change to Bengali" : "ইংরেজিতে পরিবর্তন করুন "}
            </button>
        )
    }
}

Button.propTypes = {
    changeFunction: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
}

export default Button;