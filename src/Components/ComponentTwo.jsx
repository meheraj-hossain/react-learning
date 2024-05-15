import useScreenSize from "../hook/useScreenSize.jsx";

export default function ComponentTwo() {
   const onSmallScreen = useScreenSize(700)

    return (
            <p className={onSmallScreen ? 'small' : 'large'}>
                Welcome.
            </p>
    )
}