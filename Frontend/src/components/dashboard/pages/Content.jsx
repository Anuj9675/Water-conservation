import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement);

function Content() {
    // Sample data for Bar Chart
    const barData = {
        labels: ['Project A', 'Project B', 'Project C'],
        datasets: [
            {
                label: 'Funds Raised ($)',
                data: [12000, 15000, 18000],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Sample data for Line Chart
    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Monthly Donations ($)',
                data: [5000, 6000, 7000, 8000, 9000, 10000],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `$${tooltipItem.raw}`;
                    },
                },
            },
        },
    };

    return (
        <div className="p-6 bg-blue-50 min-h-screen">
            {/* Top Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                {[
                    { title: 'Top Donor', value: '$20,000' },
                    { title: 'Total Projects', value: '15' },
                    { title: 'New Volunteers', value: '8' },
                    { title: 'Ongoing Projects', value: '5' }
                ].map((card, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center"
                    >
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">{card.title}</h3>
                        <p className="text-2xl font-bold text-gray-700">{card.value}</p>
                    </div>
                ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Bar Chart */}
                <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h2 className="text-xl font-semibold mb-4 text-blue-700">Funds Raised</h2>
                    <div className="h-64">
                        <Bar data={barData} options={chartOptions} />
                    </div>
                </div>

                {/* Line Chart */}
                <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h2 className="text-xl font-semibold mb-4 text-blue-700">Monthly Donations</h2>
                    <div className="h-64">
                        <Line data={lineData} options={chartOptions} />
                    </div>
                </div>
            </div>

            {/* Combined Details and Map */}
            <div className="flex flex-col gap-6">
                {/* Combined Content */}
                <div className="flex-1 bg-white p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h2 className="text-xl font-semibold mb-4 text-blue-700">Project Overview</h2>
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Details */}
                        <div className="flex-1 mb-4 lg:mb-0">
                            <h3 className="text-lg font-semibold mb-2">Project Details</h3>
                            <p className="text-gray-700 mb-4">
                                Our water conservation projects aim to address various issues affecting water resources globally. These initiatives focus on promoting efficient water usage, reducing pollution, and restoring natural habitats.
                            </p>
                            <ul className="list-disc pl-5 text-gray-700 mb-4">
                                <li><strong>Objective:</strong> To increase awareness about water conservation and implement sustainable practices.</li>
                                <li><strong>Key Achievements:</strong> Successfully installed water-saving systems in 50+ communities, educated over 10,000 people on water conservation.</li>
                                <li><strong>Upcoming Milestones:</strong> Launching a new campaign to reduce plastic waste in water bodies, expanding projects to rural areas.</li>
                                <li><strong>Partnerships:</strong> Collaborating with local governments, environmental organizations, and community leaders.</li>
                            </ul>
                            <p className="text-gray-700">
                                We are committed to making a positive impact through these projects and appreciate the support of our donors and volunteers.
                            </p>
                        </div>

                        {/* Map */}
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="text-lg font-semibold mb-2">Project Locations</h3>
                            <div style={{ height: '20rem', width: '20rem' }} className="relative w-full">
                                <MapContainer center={[37.7749, -122.4194]} zoom={10} className="h-full w-full">
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    />
                                    <Marker position={[37.7749, -122.4194]}>
                                        <Popup>San Francisco Project</Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
