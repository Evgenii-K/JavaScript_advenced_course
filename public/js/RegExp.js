'use strict';

const feedbackForm = document.querySelector('form'),
      inputFirst = feedbackForm.querySelector('#First'),
      inputTel = feedbackForm.querySelector('#tel'),
      inputEmail = feedbackForm.querySelector('#email'),
      formBtn = feedbackForm.querySelector('.btn');

formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    new Valid(/^[A-Z][a-z]+$/, 'g', inputFirst);
    new Valid(/^\+7\(\d{3}\)\d{3}-\d{4}$/, 'g', inputTel);
    new Valid(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/, 'gi', inputEmail);
});

class Valid {
    _regexp = '';
    _flag = '';
    _id = '';

    constructor (regexp, flag, id) {
        this._regexp = regexp;
        this._flag = flag;
        this._id = id;
        this.check();
    }

    check () {
        const newRegexp = new RegExp(this._regexp, this._flag);
        console.log(newRegexp);
        const test = newRegexp.test(this._id.value);
        console.log(`Input id = '${this._id.id}' - ${test}`);
        if (!test) {
            this._id.classList.add('feedback__form-input--attention');
        } else {
            this._id.classList.remove('feedback__form-input--attention');
        }
    }
}