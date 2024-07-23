import React from 'react';

const projects = [
  {
    title: 'Water Reclamation Project',
    description: 'A new water reclamation project launched to recycle wastewater for agriculture and industry use. This initiative aims to reduce freshwater demand and enhance water efficiency in water-stressed regions. By treating and reusing wastewater, the project promotes sustainable water management practices and supports ecosystem health.',
    icon: '💧',
  },
  {
    title: 'Community Outreach Program',
    description: 'An educational program launched to teach local communities about sustainable water usage practices. Through workshops, awareness campaigns, and hands-on training, the program empowers community members to conserve water, reduce pollution, and protect water resources. By fostering community engagement and behavior change, the initiative promotes environmental stewardship and strengthens local resilience.',
    icon: '👨‍👩‍👧‍👦',
  },
  {
    title: 'River Cleanup Campaign',
    description: 'A campaign organized to clean up local rivers and reduce water pollution. Volunteers, community organizations, and government agencies collaborate to remove trash, debris, and pollutants from waterways. By restoring water quality, preserving aquatic habitats, and raising public awareness, the campaign aims to safeguard biodiversity, improve recreational opportunities, and enhance community well-being.',
    icon: '♻️',
  },
  {
    title: 'Sustainable Agriculture Innovation',
    description: 'Innovative agricultural practices and technologies are being implemented to promote sustainable water use and enhance food security. Initiatives include precision irrigation, drought-resistant crops, and agroforestry systems. By integrating water-efficient farming techniques and promoting soil health, these innovations optimize water resources, mitigate climate risks, and support resilient agricultural systems.',
    icon: '🌱',
  },
  {
    title: 'Global Water Equity Initiatives',
    description: 'Global initiatives are addressing disparities in water access and promoting equitable distribution of water resources. These initiatives support vulnerable communities, improve water infrastructure, and advocate for water rights. By fostering partnerships, implementing inclusive policies, and empowering marginalized populations, the initiatives advance social justice, human rights, and sustainable development goals.',
    icon: '🌍',
  },
  {
    title: 'Urban Greening and Water Conservation',
    description: 'Urban greening projects enhance cities\' resilience to climate change and promote sustainable water management practices. Initiatives include green roofs, urban forests, and rain gardens. By increasing green spaces, reducing heat islands, and capturing stormwater runoff, these projects improve air quality, conserve water, and enhance urban biodiversity.',
    icon: '🌳',
  },
  {
    title: 'Plastic Pollution Reduction Campaigns',
    description: 'Campaigns to reduce plastic pollution are promoting alternatives to single-use plastics and advocating for waste reduction policies. These initiatives include beach cleanups, plastic-free pledges, and recycling programs. By raising awareness, promoting sustainable practices, and supporting policy changes, the campaigns aim to protect marine ecosystems, improve water quality, and mitigate the environmental impact of plastic waste.',
    icon: '🌊',
  },
  {
    title: 'Climate-Resilient Water Infrastructure',
    description: 'Investments in climate-resilient water infrastructure aim to strengthen communities\' resilience to climate change impacts. Projects include flood management systems, water storage facilities, and sustainable drainage solutions. By enhancing infrastructure, improving water supply reliability, and reducing vulnerability to extreme weather events, these initiatives support adaptation efforts, protect livelihoods, and ensure sustainable water management.',
    icon: '🌡️',
  },
  {
    title: 'Coastal and Marine Conservation',
    description: 'Conservation efforts in coastal and marine environments aim to protect marine biodiversity and enhance ecosystem resilience. Initiatives include marine protected areas, coral reef restoration, and sustainable fishing practices. By preserving habitats, regulating fishing activities, and promoting marine conservation awareness, these initiatives support sustainable fisheries, protect endangered species, and maintain the health of marine ecosystems.',
    icon: '🏖️',
  },
  {
    title: 'Public Health and Water Security',
    description: 'Public health initiatives address waterborne diseases and promote safe drinking water access in underserved communities. Programs include water treatment facilities, sanitation improvements, and hygiene education. By ensuring access to clean water and sanitation services, these initiatives prevent disease outbreaks, improve community health outcomes, and enhance overall water security.',
    icon: '💉',
  },
  {
    title: 'Mountain Ecosystem Conservation',
    description: 'Efforts to conserve mountain ecosystems focus on protecting freshwater resources, biodiversity, and cultural heritage. Initiatives include sustainable tourism practices, watershed management, and conservation partnerships. By preserving fragile ecosystems, supporting local livelihoods, and promoting sustainable development in mountain regions, these efforts contribute to global biodiversity conservation, climate resilience, and water resource sustainability.',
    icon: '⛰️',
  },
  {
    title: 'Sustainable Urban Development',
    description: 'Sustainable urban development initiatives integrate water-sensitive design, green infrastructure, and smart technologies to create resilient and livable cities. Projects include eco-friendly buildings, efficient water management systems, and integrated urban planning. By promoting compact, connected, and resource-efficient urban development, these initiatives improve urban resilience, reduce environmental impact, and enhance quality of life for residents.',
    icon: '🏙️',
  },
  {
    title: 'Renewable Energy and Water Conservation',
    description: 'Integration of renewable energy sources such as solar and wind power with water conservation practices to achieve sustainable energy-water nexus. Initiatives include hydropower efficiency improvements, desalination powered by renewables, and energy-efficient water technologies. By optimizing energy-water interactions, promoting clean energy solutions, and reducing environmental footprint, these initiatives contribute to sustainable development and climate mitigation efforts.',
    icon: '⚡',
  },
  {
    title: 'Sustainable Transportation Solutions',
    description: 'Promotion of sustainable transportation modes such as cycling, public transit, and electric vehicles to reduce water consumption and environmental impact. Initiatives include infrastructure for non-motorized transport, electric vehicle charging stations, and policies promoting low-carbon transport. By improving air quality, reducing traffic congestion, and minimizing water use in transportation, these solutions support sustainable urban mobility and environmental stewardship.',
    icon: '🚗',
  },
  {
    title: 'Water Conservation in Schools',
    description: 'Educational programs in schools promoting water conservation practices among students and staff. Initiatives include water-saving competitions, curriculum integration on sustainable water use, and school infrastructure improvements for water efficiency.',
    icon: '📚',
  },
  {
    title: 'Artificial Intelligence for Water Management',
    description: 'Innovative AI applications for real-time water monitoring, leak detection, and predictive analytics in water utilities and infrastructure. AI helps optimize water distribution, reduce losses, and improve operational efficiency in urban and rural settings.',
    icon: '🧠',
  },
  {
    title: 'Corporate Water Stewardship Programs',
    description: 'Corporate initiatives to manage water risks, improve water use efficiency, and promote water stewardship across supply chains. Programs include water footprint assessments, sustainable sourcing practices, and community water projects.',
    icon: '💼',
  },
  {
    title: 'Indigenous Water Rights and Conservation',
    description: 'Efforts to recognize and protect Indigenous water rights, traditional knowledge, and cultural practices related to water management and conservation. Initiatives promote Indigenous-led water governance, resource protection, and sustainable development.',
    icon: '🪶',
  },
  {
    title: 'Water-Energy-Food Nexus Integration',
    description: 'Integrated approaches to optimize the interactions between water, energy, and food systems for sustainability. Projects focus on resource efficiency, climate resilience, and equitable access to water, energy, and food resources.',
    icon: '⚖️',
  },
  {
    title: 'Aquifer Recharge and Groundwater Management',
    description: 'Strategies for replenishing aquifers and sustainable management of groundwater resources. Initiatives include artificial recharge methods, groundwater monitoring networks, and policies to prevent over-extraction and contamination.',
    icon: '💧',
  },
];

const Projects = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Exploring Sustainable Water Projects</h1>
      <p className="text-lg text-gray-700 mb-8">
        In today's world, water conservation and sustainable management are crucial for our future. Let's delve into some inspiring projects and initiatives dedicated to preserving our most precious resource.
      </p>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <div className="p-4 flex items-center">
              <span className="text-3xl mr-4">{project.icon}</span>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h2>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
