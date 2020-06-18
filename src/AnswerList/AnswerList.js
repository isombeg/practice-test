import React from 'react';

const AnswerList = ({questionId, answers, onAnswerUpdate}) => {
    return (
        answers.map((answer, index) => {
            return (
                <div class="pa4 black-80">
                    <div class="measure centre">
                        <label htmlFor="name" class="f6 b db mb2">Answer: </label>
                        <input
                            id="name"
                            class="input-reset ba b--black-20 pa2 mb2 db w-70"
                            type="text"
                            aria-describedby="name-desc"
                            onChange={onAnswerUpdate(questionId, index)}
                        />
                        <button 
                            className='w-30 grow f4 link ph3 pv2 dib'
                            >
                                Delete
                        </button>
                    </div>
                </div>
            )
        })
    )
}

export default AnswerList;