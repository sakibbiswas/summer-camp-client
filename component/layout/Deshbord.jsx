
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaWallet, FaCalendarAlt, FaUtensils, FaUser, FaBook, FaUsers, FaHouseUser, FaAmazonPay, FaCcAmazonPay, FaAddressBook, FaBookReader, FaCheckCircle, FaCheckSquare } from 'react-icons/fa';
import UseSelect from '../../src/hooks/useaxiosSecure/UseSelect';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Drawer, Button } from '@mui/material';
import { useState } from 'react';
import UseAdmin from '../../src/hooks/UseAdmin';
import Useinstructor from '../../src/hooks/Useinstructor';

const Deshbord = () => {
    const [isAdmin] = UseAdmin();
    const [isInstructor] = Useinstructor()

    const [selected] = UseSelect()
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <button onClick={toggleDrawer}>Toggle Drawer</button>
            <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
                <List >
                    {
                        isAdmin ? <>
                            <ListItem button>
                                <ListItemIcon>
                                    <FaUsers></FaUsers>
                                </ListItemIcon>
                                <Link to='/deshbord/allusers' >
                                    <ListItemText primary="Manage users" />
                                </Link>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <FaBookReader></FaBookReader>
                                </ListItemIcon>
                                <Link to='/deshbord/manageclasses' >
                                    <ListItemText primary="Manage classes" />
                                </Link>
                            </ListItem>

                        </> : isInstructor ? <>
                            <ListItem button>
                                <ListItemIcon>
                                    <FaAddressBook></FaAddressBook>
                                </ListItemIcon>
                                <Link to='/deshbord/addclasses' >
                                    <ListItemText primary="Add Classes" />
                                </Link>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <FaBookReader></FaBookReader>
                                </ListItemIcon>
                                <Link to='/deshbord/myclasses' >
                                    <ListItemText primary="My Classes" />
                                </Link>
                            </ListItem>


                        </> :
                            <>
                                <ListItem button>
                                    <ListItemIcon>
                                        <FaCheckCircle></FaCheckCircle>
                                    </ListItemIcon>
                                    <Link to='/deshbord/selected' >
                                        <ListItemText primary="My selected class" />
                                    </Link>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <FaCheckSquare></FaCheckSquare>
                                    </ListItemIcon>
                                    <Link to='/deshbord/enrolled' >
                                        <ListItemText primary="My enrolled class" />
                                    </Link>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <FaCcAmazonPay></FaCcAmazonPay>
                                    </ListItemIcon>
                                    <Link to='/deshbord/history' >
                                        <ListItemText primary="Payment History" />
                                    </Link>
                                </ListItem>


                            </>


                    }



                    <ListItem button>
                        <ListItemIcon>
                            <FaHouseUser></FaHouseUser>
                        </ListItemIcon>
                        <Link to='/'>
                            <ListItemText primary="Home" />
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Deshbord;