import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position:"relative",
        top: "5vh",
        width: "100%",
    }
    return (
        <div className="Container bg-dark py-3" style={footerStyle}>
            <p className="text-center text-light "> &copy; Copyright 2021 By Anup Karki</p>
        </div>
    )
}
