import React from 'react'
import { Mutation } from 'react-apollo';
import AddRound from './../../../../mutations/AddRound';

const SubmitScore = (props) => (
    <Mutation
        mutation={AddRound}
    >
        {(addRound, data={}, loading) => {
            if(loading){return null}

            let scoresArray = props.scores && Object.keys(props.scores).reduce((accum, i) => {
                return [
                    ...accum, 
                    {
                        score: props.scores[i],
                        hole_id: Number(i)
                    }
                    ];
            }, []);

            let handleSubmit = (number) => {
                let totalScore = 0;
                if (props.date === '') {
                    return alert('Please select a date');
                }
                if (Object.keys(props.scores).length !== number) {
                    return alert('You need a score for every hole');
                }
                for (let score in props.scores) {
                    if (props.scores[score] <= 0 || props.scores[score] === null || props.scores[score] === undefined) {
                        return alert('You cannot have a score below 1 on a hole');
                    }
                    totalScore = totalScore + props.scores[score];
                }
                addRound({
                    variables: {
                        date_played: props.date, 
                        total_score: totalScore, 
                        course_id: props.selectedCourseId, 
                        scores: scoresArray
                    }
                });
                props.history.push('/home');
            }

            return props.getHoles 
                ? 
                <button onClick={() => handleSubmit(props.getHoles.length)}>
                    Submit Score
                </button> 
                :
                null
        }}
    </Mutation>
)

export default SubmitScore;