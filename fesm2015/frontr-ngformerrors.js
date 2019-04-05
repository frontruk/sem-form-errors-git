import { FormGroupDirective } from '@angular/forms';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Directive, Input, forwardRef, HostBinding, Inject, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const toArray = (/**
 * @param {?} value
 * @return {?}
 */
(value) => Array.isArray(value) ? value : [value]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemFormErrorsDirective {
    /**
     * @param {?} form
     */
    constructor(form) {
        this.form = form;
        this.ready = false;
    }
    /**
     * @return {?}
     */
    get errors() {
        if (!this.ready)
            return;
        return this.control.errors;
    }
    /**
     * @return {?}
     */
    get hasErrors() {
        return !!this.errors;
    }
    /**
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    hasError(name, conditions) {
        return this.checkPropState('invalid', name, conditions);
    }
    /**
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    isValid(name, conditions) {
        return this.checkPropState('valid', name, conditions);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getError(name) {
        if (!this.ready)
            return;
        return this.control.getError(name);
    }
    /**
     * @private
     * @param {?} prop
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    checkPropState(prop, name, conditions) {
        if (!this.ready)
            return;
        /** @type {?} */
        const controlPropsState = !conditions ||
            toArray(conditions).every((/**
             * @param {?} condition
             * @return {?}
             */
            (condition) => this.control[condition]));
        if (name.charAt(0) === '*') {
            return this.control[prop] && controlPropsState;
        }
        return prop === 'valid'
            ? !this.control.hasError(name)
            : this.control.hasError(name) && controlPropsState;
    }
    /**
     * @private
     * @return {?}
     */
    checkStatus() {
        /** @type {?} */
        const control = this.control;
        /** @type {?} */
        const errors = control.errors;
        this.ready = true;
        if (!errors)
            return;
        for (const errorName in errors) {
            this.subject$.next({ control, errorName });
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subject$ = new BehaviorSubject(null);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.control = this.form.control.get(this.controlName);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.checkStatus();
            this.control.statusChanges.subscribe(this.checkStatus.bind(this), (/**
             * @return {?}
             */
            () => console.log('error')), (/**
             * @return {?}
             */
            () => console.log('completed')));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subject$.complete();
    }
}
SemFormErrorsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxErrors]',
                exportAs: 'ngxErrors'
            },] }
];
/** @nocollapse */
SemFormErrorsDirective.ctorParameters = () => [
    { type: FormGroupDirective }
];
SemFormErrorsDirective.propDecorators = {
    controlName: [{ type: Input, args: ['ngxErrors',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemFormErrorDirective {
    /**
     * @param {?} ngxErrors
     */
    constructor(ngxErrors) {
        this.ngxErrors = ngxErrors;
        this.hidden = true;
        this.rules = [];
        this.errorNames = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ngxError(value) {
        this.errorNames = toArray(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set when(value) {
        this.rules = toArray(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._states$ = new Subject();
        this.states$ = this._states$.asObservable().pipe(distinctUntilChanged());
        /** @type {?} */
        const errors = this.ngxErrors.subject$.pipe(filter(Boolean), filter((/**
         * @param {?} obj
         * @return {?}
         */
        obj => !!~this.errorNames.indexOf(obj.errorName))));
        /** @type {?} */
        const states = this.states$.pipe(map((/**
         * @param {?} states
         * @return {?}
         */
        states => this.rules.every((/**
         * @param {?} rule
         * @return {?}
         */
        rule => !!~states.indexOf(rule))))));
        this.subscription = combineLatest(states, errors).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([states, errors]) => {
            this.hidden = !(states && errors.control.hasError(errors.errorName));
        }));
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        this._states$.next(this.rules.filter((/**
         * @param {?} rule
         * @return {?}
         */
        rule => ((/** @type {?} */ (this.ngxErrors.control)))[rule])));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._states$.complete();
        this.subscription.unsubscribe();
    }
}
SemFormErrorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxError]'
            },] }
];
/** @nocollapse */
SemFormErrorDirective.ctorParameters = () => [
    { type: SemFormErrorsDirective, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => SemFormErrorsDirective)),] }] }
];
SemFormErrorDirective.propDecorators = {
    ngxError: [{ type: Input }],
    when: [{ type: Input }],
    hidden: [{ type: HostBinding, args: ['hidden',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const dependencies = [SemFormErrorsDirective, SemFormErrorDirective];
class SemFormErrorsModule {
}
SemFormErrorsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [...dependencies],
                imports: [],
                exports: [...dependencies]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SemFormErrorsDirective, SemFormErrorDirective, SemFormErrorsModule };

//# sourceMappingURL=frontr-ngformerrors.js.map