import { takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';



function* addCourse(action) {
  try {
    console.log('addCourse Ran', action.payload);
    let courseInfo = {
        name: action.payload.name,
        city: action.payload.city,
        numberOfHoles: action.payload.numberOfHoles
    }
    let courseHoles = {
        courseHoles: action.payload.holeInformation
    }
    yield call(axios.post, '/api/course', courseInfo);
    yield call(axios.post, '/api/course/holes', courseHoles);
  } catch(err) {
    console.log(err);
  }
}



function* newCourseSaga() {
  yield takeEvery('ADD_COURSE', addCourse);
}


export default newCourseSaga;