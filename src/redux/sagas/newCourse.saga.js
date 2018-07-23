import { takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';



function* addCourse(action) {
  try {
    let newCourseInfo = {
        name: action.payload.name,
        city: action.payload.city,
        numberOfHoles: action.payload.numberOfHoles
    };
    yield call(axios.post, '/api/course', newCourseInfo);
    const getCourseInfo = yield call(axios.get, `/api/course/${action.payload.name}`);
    yield call(axios.post, '/api/course/holes', {holeInformation: action.payload.holeInformation, id: getCourseInfo.data[0].id});
  } catch(err) {
    console.log(err);
  }
}



function* newCourseSaga() {
  yield takeEvery('ADD_COURSE', addCourse);
}


export default newCourseSaga;