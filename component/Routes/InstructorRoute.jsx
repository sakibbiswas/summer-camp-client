import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Authcontext } from '../Providers/Authprovider';
import Useinstructor from '../../src/hooks/Useinstructor';

const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext)

    const [isInstructor, isInstructorloading] = Useinstructor()
    const location = useLocation()
    if (loading || isInstructorloading) {
        return <progress className="progress progress-error w-56" value="100" max="100"></progress>
    }
    if (user?.email && isInstructor) {
        return children
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>;

};

export default InstructorRoute;