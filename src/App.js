import React, { useState } from 'react'
import TaskList from './components/TaskList'

function App(props) {
  const [run, reRun] = useState({});
  console.log(run)
  /* // Get goals for filter button list
  const [goals, setGoals] = useState({});

  useState(() => {
    airtable.list({
        maxRecords: 999,
        pageSize: 100,
        view: 'Grid view',
        cellFormat: 'json'
    })
    .then((data) => {
        setGoals(data.records);
        console.log(goals)
    })
    .catch((error) => {
        console.log(error);
    });
  }, []);

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }

  shuffleArray(goals)

  // Use filter button to filter task list
  const [filter, setFilter] = useState(null);
  */

  return (
    <div className="grid mx-auto max-w-3xl">
        {/* <ul className="grid grid-cols-2">
          {goals.length > 0 ? (
              goals
              .filter(record => record.fields.Name.length < 100)
              .slice(0, 6)
              .map((record) => (
                  <FilterButton
                      name={record.fields.Name}
                      setFilter={setFilter}
                  />
              ))
          ) : (
              <p>Fetching Data...</p>
          )}
          </ul> */}
      <div className="grid place-items-center">
        <TaskList 
          filter="False"
          reRun={reRun}
        />
      </div>
    </div>
  );
}

export default App;
