import classes from './TopBar.module.css';




const TopBar = (props) => {
    return (
        <header className="App-header">
            <nav className={classes.Topbar}>
                <img src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695" className="App-logo" alt="logo" />
            </nav>
        </header>
    );
}

export default TopBar;