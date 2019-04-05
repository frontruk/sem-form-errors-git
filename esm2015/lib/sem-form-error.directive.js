/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, forwardRef, HostBinding, Inject, Input } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { SemFormErrorsDirective } from './sem-form-errors.directive';
import { toArray } from './utils/toArray';
export class SemFormErrorDirective {
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
if (false) {
    /** @type {?} */
    SemFormErrorDirective.prototype.hidden;
    /**
     * @type {?}
     * @private
     */
    SemFormErrorDirective.prototype.rules;
    /**
     * @type {?}
     * @private
     */
    SemFormErrorDirective.prototype.errorNames;
    /**
     * @type {?}
     * @private
     */
    SemFormErrorDirective.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    SemFormErrorDirective.prototype._states$;
    /**
     * @type {?}
     * @private
     */
    SemFormErrorDirective.prototype.states$;
    /**
     * @type {?}
     * @private
     */
    SemFormErrorDirective.prototype.ngxErrors;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtLWZvcm0tZXJyb3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZyb250ci9uZ2Zvcm1lcnJvcnMvIiwic291cmNlcyI6WyJsaWIvc2VtLWZvcm0tZXJyb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFVBQVUsRUFDVixXQUFXLEVBQ1gsTUFBTSxFQUNOLEtBQUssRUFHTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsYUFBYSxFQUFjLE9BQU8sRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUN0RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUt4QyxNQUFNLE9BQU8scUJBQXFCOzs7O0lBbUJoQyxZQUVVLFNBQWlDO1FBQWpDLGNBQVMsR0FBVCxTQUFTLENBQXdCO1FBVmIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUU3QyxVQUFLLEdBQWEsRUFBRSxDQUFDO1FBQ3JCLGVBQVUsR0FBYSxFQUFFLENBQUM7SUFRL0IsQ0FBQzs7Ozs7SUFyQkosSUFDSSxRQUFRLENBQUMsS0FBbUI7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxJQUNJLElBQUksQ0FBQyxLQUFtQjtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBZUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVksQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQzs7Y0FFbkUsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLE1BQU07Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUN6RDs7Y0FFSyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzlCLEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFDLENBQ2pFO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLFNBQVM7Ozs7UUFDekQsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN2RSxDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FDakUsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7OztZQXhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7YUFDdkI7Ozs7WUFMTyxzQkFBc0IsdUJBMEJ6QixNQUFNLFNBQUMsVUFBVTs7O29CQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixFQUFDOzs7dUJBbkJqRCxLQUFLO21CQUtMLEtBQUs7cUJBS0wsV0FBVyxTQUFDLFFBQVE7Ozs7SUFBckIsdUNBQXFEOzs7OztJQUVyRCxzQ0FBNkI7Ozs7O0lBQzdCLDJDQUFrQzs7Ozs7SUFDbEMsNkNBQW1DOzs7OztJQUNuQyx5Q0FBb0M7Ozs7O0lBQ3BDLHdDQUFzQzs7Ozs7SUFHcEMsMENBQ3lDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBEb0NoZWNrLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtFcnJvck9wdGlvbnN9IGZyb20gJy4vbmd4ZXJyb3JzJztcbmltcG9ydCB7U2VtRm9ybUVycm9yc0RpcmVjdGl2ZX0gZnJvbSAnLi9zZW0tZm9ybS1lcnJvcnMuZGlyZWN0aXZlJztcbmltcG9ydCB7dG9BcnJheX0gZnJvbSAnLi91dGlscy90b0FycmF5JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neEVycm9yXSdcbn0pXG5leHBvcnQgY2xhc3MgU2VtRm9ybUVycm9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2sge1xuICBASW5wdXQoKVxuICBzZXQgbmd4RXJyb3IodmFsdWU6IEVycm9yT3B0aW9ucykge1xuICAgIHRoaXMuZXJyb3JOYW1lcyA9IHRvQXJyYXkodmFsdWUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHdoZW4odmFsdWU6IEVycm9yT3B0aW9ucykge1xuICAgIHRoaXMucnVsZXMgPSB0b0FycmF5KHZhbHVlKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnaGlkZGVuJykgcHVibGljIGhpZGRlbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgcHJpdmF0ZSBydWxlczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBlcnJvck5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9zdGF0ZXMkOiBTdWJqZWN0PHN0cmluZ1tdPjtcbiAgcHJpdmF0ZSBzdGF0ZXMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gU2VtRm9ybUVycm9yc0RpcmVjdGl2ZSkpXG4gICAgcHJpdmF0ZSBuZ3hFcnJvcnM6IFNlbUZvcm1FcnJvcnNEaXJlY3RpdmVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3N0YXRlcyQgPSBuZXcgU3ViamVjdDxzdHJpbmdbXT4oKTtcbiAgICB0aGlzLnN0YXRlcyQgPSB0aGlzLl9zdGF0ZXMkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG5cbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLm5neEVycm9ycy5zdWJqZWN0JC5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgZmlsdGVyKG9iaiA9PiAhIX50aGlzLmVycm9yTmFtZXMuaW5kZXhPZihvYmouZXJyb3JOYW1lKSlcbiAgICApO1xuXG4gICAgY29uc3Qgc3RhdGVzID0gdGhpcy5zdGF0ZXMkLnBpcGUoXG4gICAgICBtYXAoc3RhdGVzID0+IHRoaXMucnVsZXMuZXZlcnkocnVsZSA9PiAhIX5zdGF0ZXMuaW5kZXhPZihydWxlKSkpXG4gICAgKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gY29tYmluZUxhdGVzdChzdGF0ZXMsIGVycm9ycykuc3Vic2NyaWJlKFxuICAgICAgKFtzdGF0ZXMsIGVycm9yc10pID0+IHtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSAhKHN0YXRlcyAmJiBlcnJvcnMuY29udHJvbC5oYXNFcnJvcihlcnJvcnMuZXJyb3JOYW1lKSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICB0aGlzLl9zdGF0ZXMkLm5leHQoXG4gICAgICB0aGlzLnJ1bGVzLmZpbHRlcihydWxlID0+ICh0aGlzLm5neEVycm9ycy5jb250cm9sIGFzIGFueSlbcnVsZV0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3N0YXRlcyQuY29tcGxldGUoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=