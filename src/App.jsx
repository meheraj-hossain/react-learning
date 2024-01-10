import Text from "./components/composition/Text.jsx";
import Emoji from "./components/composition/Emoji.jsx";
import Bracket from "./components/composition/Bracket.jsx";

function App() {
    return (
        <div>
            <Emoji>
                {({ob}) => (
                    <Bracket>
                        {({br}) => <Text insertEmoji={ob} insertBracket={br}/>}
                    </Bracket>
                )}
            </Emoji>
        </div>
    );
}

export default App;