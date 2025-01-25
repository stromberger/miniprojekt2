export interface Choice {
    id: string;
    text: string;
    consequence: string;
    nextScenario?: number;
}

export interface Scenario {
    id: number;
    title: string;
    description: string;
    choices: Choice[];
}

export interface Story { title: string; description: string; scenarios: Scenario[] }

export const story: Story = {
    title: "Das verlorene Paket",
    description: "Du bist Alex, ein Lieferfahrer, der ein wertvolles Paket findet. Deine Entscheidungen beeinflussen deinen Weg: Criminal Thinking oder Critical Thinking.",
    scenarios: [
        {
            id: 1,
            title: "Das Paket finden",
            description: "Du findest ein hochwertiges Paket auf der Straße. Was tust du?",
            choices: [
                {
                    id: "1A",
                    text: "Behalte das Paket (Criminal Thinking)",
                    consequence: "Du öffnest das Paket und findest teure Elektronik. Du entscheidest dich, es zu behalten.",
                    nextScenario: 2
                },
                {
                    id: "1B",
                    text: "Versuche den Eigentümer zu finden (Critical Thinking)",
                    consequence: "Du nimmst das Paket mit, um Hinweise auf den Eigentümer zu suchen.",
                    nextScenario: 3
                }
            ]
        },
        {
            id: 2,
            title: "Das Paket behalten",
            description: "Du hast dich entschieden, das Paket zu behalten. Was machst du als nächstes?",
            choices: [
                {
                    id: "2A",
                    text: "Verkaufe den Inhalt anonym online",
                    consequence: "Du verkaufst die Elektronik, aber die Geräte könnten verfolgt werden.",
                    nextScenario: 4
                },
                {
                    id: "2B",
                    text: "Verstecke den Inhalt und warte ab",
                    consequence: "Du fühlst dich sicher, aber du liest in den Nachrichten, dass der Verlust untersucht wird.",
                    nextScenario: 4
                }
            ]
        },
        {
            id: 3,
            title: "Den Eigentümer suchen",
            description: "Du versuchst, den rechtmäßigen Eigentümer des Pakets zu finden.",
            choices: [
                {
                    id: "3A",
                    text: "Rufe die Firma an, die auf einer Notiz im Paket erwähnt ist",
                    consequence: "Die Firma bedankt sich und bietet dir an, das Paket persönlich zurückzubringen.",
                    nextScenario: 5
                },
                {
                    id: "3B",
                    text: "Gib das Paket bei einer nahegelegenen Polizeistation ab",
                    consequence: "Die Polizei nimmt das Paket an und verspricht, den Eigentümer zu kontaktieren.",
                    nextScenario: 5
                }
            ]
        },
        {
            id: 4,
            title: "Konsequenzen des Behaltens",
            description: "Deine Entscheidung, das Paket zu behalten, bringt unerwartete Probleme mit sich.",
            choices: [
                {
                    id: "4A",
                    text: "Lüge, um dich aus der Situation zu retten",
                    consequence: "Du behauptest, du hättest das Paket nur gefunden. Die Polizei untersucht weiter.",
                    nextScenario: 6
                },
                {
                    id: "4B",
                    text: "Gib zu, was passiert ist",
                    consequence: "Du gestehst die Wahrheit, riskierst aber rechtliche Konsequenzen.",
                    nextScenario: 6
                }
            ]
        },
        {
            id: 5,
            title: "Konsequenzen des Zurückgebens",
            description: "Deine Entscheidung, das Paket zurückzugeben, zeigt positive Ergebnisse.",
            choices: [
                {
                    id: "5A",
                    text: "Akzeptiere eine Belohnung",
                    consequence: "Die Firma bietet dir eine finanzielle Belohnung und dankt dir für deine Ehrlichkeit.",
                    nextScenario: 7
                },
                {
                    id: "5B",
                    text: "Lehne die Belohnung ab",
                    consequence: "Du lehnst die Belohnung ab und fühlst dich gut, das Richtige getan zu haben.",
                    nextScenario: 7
                }
            ]
        },
        {
            id: 6,
            title: "Das Ende deiner Entscheidung",
            description: "Die Konsequenzen deiner Entscheidungen holen dich ein.",
            choices: [
                {
                    id: "6A",
                    text: "Du wirst belangt",
                    consequence: "Die Polizei findet genug Beweise und du erhältst eine Strafe. Dein Ruf ist beschädigt."
                },
                {
                    id: "6B",
                    text: "Du entkommst der Strafe",
                    consequence: "Du entgehst der Strafe, aber du fühlst dich schuldig und paranoid, dass die Wahrheit ans Licht kommt."
                }
            ]
        },
        {
            id: 7,
            title: "Ein positives Ende",
            description: "Deine Ehrlichkeit wird belohnt.",
            choices: [
                {
                    id: "7A",
                    text: "Du bekommst eine neue Chance",
                    consequence: "Die Firma bietet dir eine Jobmöglichkeit oder langfristige Unterstützung für deine Ehrlichkeit."
                },
                {
                    id: "7B",
                    text: "Du hast das Richtige getan",
                    consequence: "Auch ohne große Belohnung fühlst du dich stolz, eine gute Entscheidung getroffen zu haben."
                }
            ]
        }
    ]
};

export default story;
