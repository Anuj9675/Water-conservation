import React from 'react';

const resources = [
    {
        title: 'Rainwater Harvesting',
        description: 'Learn how to collect and store rainwater for household and garden use, reducing the demand on municipal water supplies. Rainwater harvesting systems capture and store rainwater runoff from rooftops, which can then be used for various purposes such as watering plants, flushing toilets, and even drinking when properly treated.',
    },
    {
        title: 'Greywater Recycling',
        description: 'Discover methods to recycle greywater from sinks, baths, and washing machines for non-potable uses like irrigation and toilet flushing. Greywater recycling systems treat wastewater from household activities, allowing it to be reused for purposes other than drinking, thereby conserving freshwater resources and reducing strain on sewage systems.',
    },
    {
        title: 'Efficient Irrigation Techniques',
        description: 'Explore advanced irrigation techniques like drip and sprinkler systems that help conserve water in agriculture. Efficient irrigation methods deliver water directly to the roots of plants, minimizing evaporation and runoff. By optimizing water distribution, farmers can increase crop yields while reducing water consumption and environmental impact.',
    },
    {
        title: 'Water Conservation at Home',
        description: 'Simple tips and tricks to reduce water usage at home, such as fixing leaks and using water-efficient appliances. Conserving water at home not only saves money on utility bills but also helps protect the environment by reducing the strain on freshwater sources. Small changes in daily habits can make a big difference in water conservation efforts.',
    },
    {
        title: 'Smart Water Meters',
        description: 'Learn about smart water meters that provide real-time data on water usage, helping to identify leaks and promote water-saving habits. Smart meters track water consumption patterns and provide insights into usage trends, empowering consumers to make informed decisions about their water usage and identify opportunities for conservation.',
    },
    {
        title: 'Low-Flow Fixtures',
        description: 'Install low-flow fixtures like showerheads and faucets to reduce water consumption without sacrificing performance. Low-flow fixtures use aerators and other technologies to restrict water flow, resulting in significant water savings without compromising water pressure or user experience. Upgrading to low-flow fixtures is a simple yet effective way to conserve water at home.',
    },
    {
        title: 'Drought-Tolerant Landscaping',
        description: 'Use drought-tolerant plants and landscaping techniques to create beautiful gardens that require minimal water. Drought-tolerant landscaping focuses on selecting plant species that are adapted to dry conditions and implementing water-saving practices such as mulching and soil moisture retention. By designing landscapes that can thrive with minimal irrigation, homeowners can conserve water and maintain attractive outdoor spaces.',
    },
    {
        title: 'Water-Efficient Appliances',
        description: 'Upgrade to water-efficient appliances such as dishwashers and washing machines to save water and reduce utility bills. Water-efficient appliances use advanced technologies to minimize water consumption without compromising performance. Investing in energy-efficient appliances not only conserves water but also reduces energy usage and lowers household operating costs.',
    },
    {
        title: 'Community Conservation Programs',
        description: 'Participate in community programs that promote water conservation through education, incentives, and collaborative efforts. Community conservation programs engage residents, businesses, and local organizations in collective efforts to reduce water usage, protect water quality, and preserve natural habitats. By working together, communities can achieve greater impact and foster a culture of sustainability.',
    },
    {
        title: 'Water Footprint Reduction',
        description: 'Understand your water footprint and take steps to reduce it by making conscious choices in your daily activities. Your water footprint represents the amount of water used directly and indirectly to produce the goods and services you consume. By minimizing water-intensive activities and supporting water-efficient practices, you can reduce your overall water footprint and contribute to global water conservation efforts.',
    },
    {
        title: 'Protecting Natural Water Sources',
        description: 'Learn about the importance of protecting natural water sources such as rivers, lakes, and aquifers from pollution and overuse. Natural water sources provide essential ecosystem services, including freshwater supply, habitat for wildlife, and recreational opportunities. By preserving and restoring these ecosystems, we can safeguard water quality, biodiversity, and human well-being for future generations.',
    },
    {
        title: 'Water Conservation Education',
        description: 'Educate yourself and others about the importance of water conservation and the steps that can be taken to protect this vital resource. Water conservation education raises awareness about the value of water, the threats facing freshwater ecosystems, and the role of individuals and communities in sustainable water management. By promoting a culture of conservation, we can inspire positive behavior change and foster a more water-secure future.',
    },
];

const EducationalResources = () => {
    return (
        <section className="h-full overflow-y-auto p-5">
            <div className='h-96'>
                <h1 className="text-4xl text-center font-bold mb-5">Educational Resources</h1>

                <div className="bg-white p-5 rounded shadow mb-5 overflow-hidden">
                    <h2 className="text-xl font-semibold mb-3">Learn About Water Conservation</h2>
                    <p className="mb-5">Explore these resources to educate yourself on various water conservation techniques and environmental protection methods. Each resource provides valuable information and practical tips to help you make a positive impact.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {resources.map((resource, index) => (
                            <div key={index} className="bg-gray-100 p-5 rounded shadow">
                                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                                <p>{resource.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EducationalResources;

