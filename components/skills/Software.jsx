import React from "react";

const Software = () => {
    return(
        <div className="skills__content">
        <h3 className="skills__title">Learned Software</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills__name">After Effect</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills__name">premiere pro</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills__name">davinci resolve</h3>
                    <span className="skills__level">Basic</span>
                </div>
                </div>
            </div>


            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills__name">photoshop</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills__name">blender</h3>
                    <span className="skills__level">Basic</span>
                </div>
                </div>
            </div>

            
        </div>
    </div>
    )
}

export default Software;