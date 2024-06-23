
export interface TicketTime {
    startTime: string;
    endTime: string;
}

export interface Ticket {
    id: number;
    from: string;
    to: string;
    company: string;
    price: number;
    currency: 'RUB';
    time: TicketTime;
    duration: number;
    date: string;
    connectionAmount: number | null;
}

const mainTicketsData: Ticket[] = [
    {
        id: 1,
        from: "MSK",
        to:   "SPB",
        company: "Pobeda",
        price: 12680,
        currency: 'RUB',
        time: {startTime: "12:00", endTime: "16:30"},
        duration: 2589,
        date: "",
        connectionAmount: 1
    },
    {
        id: 2,
        from: "MSK",
        to:   "SPB",
        company: "RedWings",
        price: 21500,
        currency: 'RUB',
        time: {startTime: "14:00", endTime: "16:00"},
        duration: 120,
        date: "",
        connectionAmount: 0
    },
    {
        id: 3,
        from: "MSK",
        to:   "SPB",
        company: "Sseven",
        price: 21500,
        currency: 'RUB',
        time: {startTime: "04:50", endTime: "13:30"},
        duration: 543,
        date: "",
        connectionAmount: 2
    },
    {
        id: 4,
        from: "MSK",
        to:   "SPB",
        company: "Sseven",
        price: 10500,
        currency: 'RUB',
        time: {startTime: "03:50", endTime: "10:30"},
        duration: 343,
        date: "",
        connectionAmount: 2
    },
    {
        id: 5,
        from: "MSK",
        to:   "SPB",
        company: "Pobeda",
        price: 25700,
        currency: 'RUB',
        time: {startTime: "12:00", endTime: "16:30"},
        duration: 356,
        date: "",
        connectionAmount: 1
    },
    {
        id: 6,
        from: "MSK",
        to:   "SPB",
        company: "Aeroflot",
        price: 12680,
        currency: 'RUB',
        time: {startTime: "12:00", endTime: "16:30"},
        duration: 487,
        date: "",
        connectionAmount: 1
    },
]

export default mainTicketsData