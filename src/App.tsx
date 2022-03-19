import classes from './App.module.scss';
import SearchBox from './components/SearchBox';
import StudentList from './components/StudentList';
import StudentModal from './components/StudentModal';

/**
 * @author Abhishek Lal
 * @summary React Element which defines the app layout
 */

function App() {
  return (
    <div className={classes.app}>
      <div className={classes.searchContainer}>
        <SearchBox />
      </div>
      <div className={classes.container}>
        <StudentList />
      </div>
      <StudentModal />
    </div>
  );
}

export default App;
