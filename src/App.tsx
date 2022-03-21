import classes from './App.module.scss';
import Label from './components/Common/Labels';
import SearchBox from './components/SearchBox';
import SelectUser from './components/SelectUser';
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
        <Label label="Students APP" className={classes.title} />
        <SearchBox />
        <SelectUser />
      </div>
      <div className={classes.container}>
        <StudentList />
      </div>
      <StudentModal />
    </div>
  );
}

export default App;
