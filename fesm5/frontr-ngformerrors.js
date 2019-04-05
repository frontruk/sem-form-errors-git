import { FormGroupDirective } from '@angular/forms';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { __spread, __read } from 'tslib';
import { Directive, Input, forwardRef, HostBinding, Inject, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var toArray = (/**
 * @param {?} value
 * @return {?}
 */
function (value) {
    return Array.isArray(value) ? value : [value];
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SemFormErrorsDirective = /** @class */ (function () {
    function SemFormErrorsDirective(form) {
        this.form = form;
        this.ready = false;
    }
    Object.defineProperty(SemFormErrorsDirective.prototype, "errors", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.ready)
                return;
            return this.control.errors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SemFormErrorsDirective.prototype, "hasErrors", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.errors;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    SemFormErrorsDirective.prototype.hasError = /**
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    function (name, conditions) {
        return this.checkPropState('invalid', name, conditions);
    };
    /**
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    SemFormErrorsDirective.prototype.isValid = /**
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    function (name, conditions) {
        return this.checkPropState('valid', name, conditions);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    SemFormErrorsDirective.prototype.getError = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (!this.ready)
            return;
        return this.control.getError(name);
    };
    /**
     * @private
     * @param {?} prop
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    SemFormErrorsDirective.prototype.checkPropState = /**
     * @private
     * @param {?} prop
     * @param {?} name
     * @param {?} conditions
     * @return {?}
     */
    function (prop, name, conditions) {
        var _this = this;
        if (!this.ready)
            return;
        /** @type {?} */
        var controlPropsState = !conditions ||
            toArray(conditions).every((/**
             * @param {?} condition
             * @return {?}
             */
            function (condition) { return _this.control[condition]; }));
        if (name.charAt(0) === '*') {
            return this.control[prop] && controlPropsState;
        }
        return prop === 'valid'
            ? !this.control.hasError(name)
            : this.control.hasError(name) && controlPropsState;
    };
    /**
     * @private
     * @return {?}
     */
    SemFormErrorsDirective.prototype.checkStatus = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var control = this.control;
        /** @type {?} */
        var errors = control.errors;
        this.ready = true;
        if (!errors)
            return;
        for (var errorName in errors) {
            this.subject$.next({ control: control, errorName: errorName });
        }
    };
    /**
     * @return {?}
     */
    SemFormErrorsDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.subject$ = new BehaviorSubject(null);
    };
    /**
     * @return {?}
     */
    SemFormErrorsDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.control = this.form.control.get(this.controlName);
    };
    /**
     * @return {?}
     */
    SemFormErrorsDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.checkStatus();
            _this.control.statusChanges.subscribe(_this.checkStatus.bind(_this), (/**
             * @return {?}
             */
            function () { return console.log('error'); }), (/**
             * @return {?}
             */
            function () { return console.log('completed'); }));
        }));
    };
    /**
     * @return {?}
     */
    SemFormErrorsDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subject$.complete();
    };
    SemFormErrorsDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngxErrors]',
                    exportAs: 'ngxErrors'
                },] }
    ];
    /** @nocollapse */
    SemFormErrorsDirective.ctorParameters = function () { return [
        { type: FormGroupDirective }
    ]; };
    SemFormErrorsDirective.propDecorators = {
        controlName: [{ type: Input, args: ['ngxErrors',] }]
    };
    return SemFormErrorsDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SemFormErrorDirective = /** @class */ (function () {
    function SemFormErrorDirective(ngxErrors) {
        this.ngxErrors = ngxErrors;
        this.hidden = true;
        this.rules = [];
        this.errorNames = [];
    }
    Object.defineProperty(SemFormErrorDirective.prototype, "ngxError", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.errorNames = toArray(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SemFormErrorDirective.prototype, "when", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.rules = toArray(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SemFormErrorDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._states$ = new Subject();
        this.states$ = this._states$.asObservable().pipe(distinctUntilChanged());
        /** @type {?} */
        var errors = this.ngxErrors.subject$.pipe(filter(Boolean), filter((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) { return !!~_this.errorNames.indexOf(obj.errorName); })));
        /** @type {?} */
        var states = this.states$.pipe(map((/**
         * @param {?} states
         * @return {?}
         */
        function (states) { return _this.rules.every((/**
         * @param {?} rule
         * @return {?}
         */
        function (rule) { return !!~states.indexOf(rule); })); })));
        this.subscription = combineLatest(states, errors).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), states = _b[0], errors = _b[1];
            _this.hidden = !(states && errors.control.hasError(errors.errorName));
        }));
    };
    /**
     * @return {?}
     */
    SemFormErrorDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._states$.next(this.rules.filter((/**
         * @param {?} rule
         * @return {?}
         */
        function (rule) { return ((/** @type {?} */ (_this.ngxErrors.control)))[rule]; })));
    };
    /**
     * @return {?}
     */
    SemFormErrorDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._states$.complete();
        this.subscription.unsubscribe();
    };
    SemFormErrorDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngxError]'
                },] }
    ];
    /** @nocollapse */
    SemFormErrorDirective.ctorParameters = function () { return [
        { type: SemFormErrorsDirective, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return SemFormErrorsDirective; })),] }] }
    ]; };
    SemFormErrorDirective.propDecorators = {
        ngxError: [{ type: Input }],
        when: [{ type: Input }],
        hidden: [{ type: HostBinding, args: ['hidden',] }]
    };
    return SemFormErrorDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var dependencies = [SemFormErrorsDirective, SemFormErrorDirective];
var SemFormErrorsModule = /** @class */ (function () {
    function SemFormErrorsModule() {
    }
    SemFormErrorsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: __spread(dependencies),
                    imports: [],
                    exports: __spread(dependencies)
                },] }
    ];
    return SemFormErrorsModule;
}());

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