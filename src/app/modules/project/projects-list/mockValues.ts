import {IProject} from "../IProject";

export const projects: IProject[] = [
    {
        name: ' Monthly Calendar',
        description: 'A digital calendar enables effortless addition and editing of events. By setting event times, an alarm can be activated to receive timely notifications. This tool organizes your schedule, ensuring you never miss an important appointment by reminding you in advance of the exact timing of each scheduled event.',
        urlLive: 'rumabe97.github.io/MonthlyCalendar/',
        urlGit: 'github.com/rumabe97/MonthlyCalendar',
        image: 'assets/img/calendar.webp'
    },
    {
        name: 'Glucemy',
        description: 'Glucemy is a front-end application designed to help users monitor their blood glucose index and access glycemic information about various foods. It offers an intuitive interface to track and manage dietary choices. Developed as my final degree project some time ago, the application may have limitations with Gmail and Outlook login functionalities due to outdated integrations.',
        urlLive: 'glucemy-front.vercel.app/app',
        urlGit: 'github.com/rumabe97/Glucemy-front',
        image: 'assets/img/glucemyfront.webp'
    },
    {
        name: 'Glucemy-api',
        description: 'The back-end of Glucemy, built using Django, provides secure data management, processes food-related information, and integrates APIs to support accurate glycemic tracking. It focuses on delivering reliable functionality, showcasing my ability to develop robust server-side solutions for health-focused applications.',
        urlLive: 'glucemy-back.vercel.app/api/schema/swagger-ui/',
        urlGit: 'github.com/rumabe97/glucemy-back',
        image: 'assets/img/glucemyBack.webp'
    },
    {
        name: 'BookTracker',
        description: 'A simple app to organize your reading journey. Track books across four categories: Read, Discarded, Pending, and Wishlist. Search for books, discover the latest releases, and manage your lists effortlessly. Perfect for book lovers to stay organized and explore new titles.',
        urlLive: '',
        urlGit: 'github.com/rumabe97/BookTracker',
        image: ''
    },
    {
        name: 'BookTracker-api',
        description: 'A robust API to manage and organize books across four categories: Read, Discarded, Pending, and Wishlist. Provides endpoints for searching books, fetching the latest releases, and managing user-specific lists. Designed for seamless integration with book tracking applications.',
        urlLive: 'book-tracker-api-dev.vercel.app/v0/schema/swagger-ui/',
        urlGit: 'github.com/therootkitcompany/BookTrackerApi',
        image: ''
    }
]