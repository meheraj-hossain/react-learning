import {useParams, useNavigate} from "react-router-dom";

export default function Post() {
    const params = useParams();
    const navigate = useNavigate();
    function goBack() {
        navigate("/posts");
    }
    return(
        <>
            <h1>
                This is Post {params.post_id}
            </h1>
            <button type="button" onClick={goBack}>
                Go Back
            </button>
        </>
    )
}