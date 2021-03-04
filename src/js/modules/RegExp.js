'use strict';

export default class Valid {
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