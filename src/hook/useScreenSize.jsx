import {useCallback, useEffect, useState} from "react";

export default function useScreenSize(screenSize) {
    const [onSmallScreen, setOnSmallScreen] = useState(false);

    // by using callback function
    // const checkScreenSize = useCallback(() => {
    //     setOnSmallScreen(window.innerWidth < screenSize);
    // }, [screenSize]);



    useEffect(() => {
        const checkScreenSize = () => {
            setOnSmallScreen(window.innerWidth < screenSize);
        }
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return ()=> {
            window.removeEventListener('resize', checkScreenSize);
        }
    }, [screenSize]);

    return onSmallScreen;
}