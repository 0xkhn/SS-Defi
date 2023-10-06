import { useLocation } from 'react-router-dom';

export function useLocationPath() {
    return useLocation().pathname;
}
