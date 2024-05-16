import nerdImage from '../assets/images/illustration.png'
import Button from "../elements/Button.jsx";
import {ComponentCard, ComponentContent,ComponentButtons,ComponentImage} from "./Styles/Components.styles.jsx";
import {ElementTag,ElementH1,ElementP} from "./Styles/Elements.styles.jsx";

export default function Card() {
    return (
        <ComponentCard>
            <ComponentContent>
                <ElementTag $backgroundcolor="#4361ee">
                    Exclusive
                </ElementTag>
                <ElementH1>
                    React Styled Components
                </ElementH1>
                <ElementP>
                    Exclusive React JS Tutorial on Styled Components where you will learn why we need this and how to
                    use this.
                </ElementP>
                <ComponentButtons>
                    <Button href="#" text="Watch Now"/>
                    <Button href="#" text="Github Repo"/>
                </ComponentButtons>
                <ComponentImage src={nerdImage} alt="image" width="300px"/>
            </ComponentContent>
        </ComponentCard>
    )
}