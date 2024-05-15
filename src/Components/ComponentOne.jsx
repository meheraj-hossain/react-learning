import useScreenSize from "../hook/useScreenSize.jsx";

export default function ComponentOne() {
    const onSmallScreen = useScreenSize(700)

    return (
        <div>
            <p>
                You are browsing on a {onSmallScreen ? 'small' : 'large'} screen device.
            </p>
        </div>
    )
}