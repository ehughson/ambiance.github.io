import { Ambience1 } from '../pages/Ambience1';
import { Ambience2 } from '../pages/Ambience2';
import { Ambience3 } from '../pages/Ambience3';
import { Ambience4 } from '../pages/Ambience4';
import { Ambience5 } from '../pages/Ambience5';
import { Ambience6 } from '../pages/Ambience6';
import { HomePage } from '../pages/HomePage';



export const routePaths = {
    HOME: '/',
    AMBIENCE1: '/ambience1',
    AMBIENCE2: '/ambience2',
    AMBIENCE3: '/ambience3',
    AMBIENCE4: '/ambience4',
    AMBIENCE5: '/ambience5',
    AMBIENCE6: '/ambience6',
};

export const routes = [
    {
        path: routePaths.HOME,
        Component: HomePage,
    },
    {
        path: routePaths.AMBIENCE1,
        Component: Ambience1,
    },
    {
        path: routePaths.AMBIENCE2,
        Component: Ambience2,
    },
    {
        path: routePaths.AMBIENCE3,
        Component: Ambience3,
    },
    {
        path: routePaths.AMBIENCE4,
        Component: Ambience4,
    },
    {
        path: routePaths.AMBIENCE5,
        Component: Ambience5,
    },
    {
        path: routePaths.AMBIENCE6,
        Component: Ambience6,
    }
];
