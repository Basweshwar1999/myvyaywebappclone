import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@mui/icons-material/Home';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import ReportIcon from '@mui/icons-material/Report';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import FlightIcon from '@mui/icons-material/Flight';
import ExpenseIcon from '@mui/icons-material/Receipt';
import '../Styles/Sidebar.css';
import image1 from '../Images/vyay.png';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '20px',
    width: '250px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  logo: {
    fontSize: '1.5em',
    marginBottom: '20px',
  },
  navLinks: {
    listStyleType: 'none',
    padding: 0,
    width: '100%',
  },
  navItem: {
    margin: '10px 0',
    width: '100%',
  },
  link: {
    textDecoration: 'none',
    color: '#ecf0f1',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer', // Change cursor to pointer for clickable items
  },
  icon: {
    marginRight: '20px',
  },
  subMenu: {
    listStyleType: 'none',
    paddingLeft: '30px',
    display: 'none', // Hide submenu by default
  },
  subMenuOpen: {
    display: 'block', // Show submenu when open
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <div className={classes.sidebar}>
      <div className={classes.logo}>
        <img src={image1} alt="Your Profile Picture" style={{ height: 50, width: 50, borderRadius: 50 }} />
        <label style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>Vyay</label>
      </div>
      <ul className={classes.navLinks}>
        <li className={classes.navItem}>
          <div onClick={() => handleMenuClick('createRequest')} className={classes.link}>
            <AddIcon className={classes.icon} />
            Create Request
            <ExpandMoreIcon />
          </div>
          <ul className={`${classes.subMenu} ${openMenu === 'createRequest' ? classes.subMenuOpen : ''}`}>
            <li >
              <Link to="/tour-plan" className={classes.link}>
                <FlightIcon className={classes.icon} />
                Travel Request
              </Link>
            </li>
            <li>
              <Link to="/general-expense" className={classes.link}>
                <ExpenseIcon className={classes.icon} />
                General Expense
              </Link>
            </li>
          </ul>
        </li>
        <li className={classes.navItem}>
          <div onClick={() => handleMenuClick('viewRequests')} className={classes.link}>
            <RequestPageIcon className={classes.icon} />
            View Requests
            <ExpandMoreIcon />
          </div>
          <ul className={`${classes.subMenu} ${openMenu === 'viewRequests' ? classes.subMenuOpen : ''}`}>
            <li>
              <Link to="/expense-request" className={classes.link}>
                <ExpenseIcon className={classes.icon} />
                Expense Request
              </Link>
            </li>
          </ul>
        </li>
        <li className={classes.navItem}>
          <div onClick={() => handleMenuClick('reports')} className={classes.link}>
            <ReportIcon className={classes.icon} />
            Reports
            <ExpandMoreIcon />
          </div>
          <ul className={`${classes.subMenu} ${openMenu === 'reports' ? classes.subMenuOpen : ''}`}>
            <li>
              <Link to="/expenses-status-report" className={classes.link}>
                <ReportIcon className={classes.icon} />
                Expenses Status Report
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
