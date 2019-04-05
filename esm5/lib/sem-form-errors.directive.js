/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { toArray } from './utils/toArray';
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
export { SemFormErrorsDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SemFormErrorsDirective.prototype.controlName;
    /** @type {?} */
    SemFormErrorsDirective.prototype.subject$;
    /** @type {?} */
    SemFormErrorsDirective.prototype.control;
    /**
     * @type {?}
     * @private
     */
    SemFormErrorsDirective.prototype.ready;
    /**
     * @type {?}
     * @private
     */
    SemFormErrorsDirective.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtLWZvcm0tZXJyb3JzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcm9udHIvbmdmb3JtZXJyb3JzLyIsInNvdXJjZXMiOlsibGliL3NlbS1mb3JtLWVycm9ycy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsS0FBSyxFQUdOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBa0Isa0JBQWtCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRXJDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV4QztJQVdFLGdDQUFvQixJQUF3QjtRQUF4QixTQUFJLEdBQUosSUFBSSxDQUFvQjtRQUZwQyxVQUFLLEdBQVksS0FBSyxDQUFDO0lBRWdCLENBQUM7SUFFaEQsc0JBQUksMENBQU07Ozs7UUFBVjtZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2Q0FBUzs7OztRQUFiO1lBQ0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTs7Ozs7O0lBRUQseUNBQVE7Ozs7O0lBQVIsVUFBUyxJQUFZLEVBQUUsVUFBd0I7UUFDN0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7O0lBRUQsd0NBQU87Ozs7O0lBQVAsVUFBUSxJQUFZLEVBQUUsVUFBd0I7UUFDNUMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFFRCx5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QWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbCwgRm9ybUdyb3VwRGlyZWN0aXZlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0Vycm9yRGV0YWlscywgRXJyb3JPcHRpb25zfSBmcm9tICcuL25neGVycm9ycyc7XG5pbXBvcnQge3RvQXJyYXl9IGZyb20gJy4vdXRpbHMvdG9BcnJheSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3hFcnJvcnNdJyxcbiAgZXhwb3J0QXM6ICduZ3hFcnJvcnMnXG59KVxuZXhwb3J0IGNsYXNzIFNlbUZvcm1FcnJvcnNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgnbmd4RXJyb3JzJykgcHJpdmF0ZSByZWFkb25seSBjb250cm9sTmFtZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBzdWJqZWN0JDogQmVoYXZpb3JTdWJqZWN0PEVycm9yRGV0YWlscz47XG4gIHB1YmxpYyBjb250cm9sOiBBYnN0cmFjdENvbnRyb2w7XG4gIHByaXZhdGUgcmVhZHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm06IEZvcm1Hcm91cERpcmVjdGl2ZSkge31cblxuICBnZXQgZXJyb3JzKCkge1xuICAgIGlmICghdGhpcy5yZWFkeSkgcmV0dXJuO1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wuZXJyb3JzO1xuICB9XG5cbiAgZ2V0IGhhc0Vycm9ycygpIHtcbiAgICByZXR1cm4gISF0aGlzLmVycm9ycztcbiAgfVxuXG4gIGhhc0Vycm9yKG5hbWU6IHN0cmluZywgY29uZGl0aW9uczogRXJyb3JPcHRpb25zKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tQcm9wU3RhdGUoJ2ludmFsaWQnLCBuYW1lLCBjb25kaXRpb25zKTtcbiAgfVxuXG4gIGlzVmFsaWQobmFtZTogc3RyaW5nLCBjb25kaXRpb25zOiBFcnJvck9wdGlvbnMpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jaGVja1Byb3BTdGF0ZSgndmFsaWQnLCBuYW1lLCBjb25kaXRpb25zKTtcbiAgfVxuXG4gIGdldEVycm9yKG5hbWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5yZWFkeSkgcmV0dXJuO1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wuZ2V0RXJyb3IobmFtZSk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrUHJvcFN0YXRlKFxuICAgIHByb3A6IHN0cmluZyxcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgY29uZGl0aW9uczogRXJyb3JPcHRpb25zXG4gICk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5yZWFkeSkgcmV0dXJuO1xuXG4gICAgY29uc3QgY29udHJvbFByb3BzU3RhdGUgPVxuICAgICAgIWNvbmRpdGlvbnMgfHxcbiAgICAgIHRvQXJyYXkoY29uZGl0aW9ucykuZXZlcnkoKGNvbmRpdGlvbjogc3RyaW5nKSA9PiB0aGlzLmNvbnRyb2xbY29uZGl0aW9uXSk7XG5cbiAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09ICcqJykge1xuICAgICAgcmV0dXJuIHRoaXMuY29udHJvbFtwcm9wXSAmJiBjb250cm9sUHJvcHNTdGF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcCA9PT0gJ3ZhbGlkJ1xuICAgICAgPyAhdGhpcy5jb250cm9sLmhhc0Vycm9yKG5hbWUpXG4gICAgICA6IHRoaXMuY29udHJvbC5oYXNFcnJvcihuYW1lKSAmJiBjb250cm9sUHJvcHNTdGF0ZTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tTdGF0dXMoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuY29udHJvbDtcbiAgICBjb25zdCBlcnJvcnMgPSBjb250cm9sLmVycm9ycztcbiAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICBpZiAoIWVycm9ycykgcmV0dXJuO1xuICAgIGZvciAoY29uc3QgZXJyb3JOYW1lIGluIGVycm9ycykge1xuICAgICAgdGhpcy5zdWJqZWN0JC5uZXh0KHtjb250cm9sLCBlcnJvck5hbWV9KTtcbiAgICB9XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJqZWN0JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RXJyb3JEZXRhaWxzPihudWxsKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMuZm9ybS5jb250cm9sLmdldCh0aGlzLmNvbnRyb2xOYW1lKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tTdGF0dXMoKTtcbiAgICAgIHRoaXMuY29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZShcbiAgICAgICAgdGhpcy5jaGVja1N0YXR1cy5iaW5kKHRoaXMpLFxuICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnZXJyb3InKSxcbiAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2NvbXBsZXRlZCcpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJqZWN0JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=