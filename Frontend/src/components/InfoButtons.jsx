import React from "react";
import { Link } from "react-router-dom";

function InfoButtons() {
    return (
        <div>
            <div className="flex flex-wrap justify-between mb-8">
                <Link
                    className="w-full md:w-1/3 px-4 py-16 bg-green-500 border text-white hover:bg-green-600 flex flex-col items-center justify-center"
                    to="/dashboard/funding"
                >
                    <h3 className="text-lg font-bold text-center mb-2">Support</h3>
                    <p className="text-md text-center">
                        Contribute to various environmental causes.
                    </p>
                </Link>
                <Link
                    className="w-full md:w-1/3 px-4 py-16 bg-green-500 border text-white hover:bg-green-600 flex flex-col items-center justify-center"
                    to="/dashboard/volunteer"
                >
                    <h3 className="text-lg font-bold text-center mb-2">Volunteer</h3>
                    <p className="text-md text-center">
                        Dedicate your time and skills to making a difference.
                    </p>
                </Link>
                <Link
                    className="w-full md:w-1/3 px-4 py-16 bg-green-500 border text-white hover:bg-green-600 flex flex-col items-center justify-center"
                    to="/dashboard/resources"
                >
                    <h3 className="text-lg font-bold text-center mb-2">Resources</h3>
                    <p className="text-md text-center">
                    Learn About Water Conservation.
                    </p>
                </Link>
            </div>
        </div>
    )
}
export default InfoButtons;