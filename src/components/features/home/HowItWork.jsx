import React from 'react';

const cards = [
    {
        id: 1,
        icon: '🌀',
        title: 'Write prompt for your form',
        description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.',
    },
    {
        id: 2,
        icon: '✏️',
        title: 'Edit Your form',
        description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.',
    },
    {
        id: 3,
        icon: '🔗',
        title: 'Share & Start Accepting Responses',
        description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.',
    },
];

const Card = ({ icon, title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    );
};

const HowItWorks = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">How it Works?</h2>
                <p className="text-gray-600 mb-8">Give mock interview in just 3 simple steps</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card) => (
                        <Card key={card.id} icon={card.icon} title={card.title} description={card.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
