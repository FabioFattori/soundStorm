import React from 'react'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
    children: React.ReactNode;
}

function Layout({children}: LayoutProps) {

    const setMarginForPage = () => {
        //get the height of the header and footer and sum them
        let header = document.getElementById("header")?.clientHeight;
        let footer = document.getElementById("footer")?.clientHeight;

        header! += 10;
        footer! += 10;

        //set the margin for the page
        const page = document.getElementById("page");
        if(page) {
            page.style.marginTop = header ? `${header}px` : "0px";
            page.style.marginBottom = footer ? `${footer}px` : "0px";
        }
    }

    React.useEffect(() => {
        //set the margin for the page
        setMarginForPage();
        //add an event listener to the window to set the margin for the page when the window is resized
        window.addEventListener('resize', setMarginForPage);
        //remove the event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', setMarginForPage);
        }
    },[])

    return (
        <>
                <Header />
                        <div className='PageContent' id="page">
                            {children}
                        </div>
                <Footer />
        </>
    )
}

export default Layout