import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';



import { Authcontext } from '../Providers/Authprovider';
import UseAdmin from '../../src/hooks/UseAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext)
    const [isAdmin, isAdminloading] = UseAdmin()
    const location = useLocation()
    if (loading || isAdminloading) {
        return <progress className="progress progress-error w-56" value="100" max="100"></progress>
    }
    if (user?.email && isAdmin) {
        return children
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>;

};

export default AdminRoute;