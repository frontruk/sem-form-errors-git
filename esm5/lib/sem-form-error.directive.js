/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, forwardRef, HostBinding, Inject, Input } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { SemFormErrorsDirective } from './sem-form-errors.directive';
import { toArray } from './utils/toArray';
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
            var _b = tslib_1.__read(_a, 2), states = _b[0], errors = _b[1];
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
export { SemFormErrorDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtLWZvcm0tZXJyb3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZyb250ci9uZ2Zvcm1lcnJvcnMvIiwic291cmNlcyI6WyJsaWIvc2VtLWZvcm0tZXJyb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLE1BQU0sRUFDTixLQUFLLEVBR04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGFBQWEsRUFBYyxPQUFPLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDdEUsT0FBTyxFQUFDLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFeEM7SUFzQkUsK0JBRVUsU0FBaUM7UUFBakMsY0FBUyxHQUFULFNBQVMsQ0FBd0I7UUFWYixXQUFNLEdBQVksSUFBSSxDQUFDO1FBRTdDLFVBQUssR0FBYSxFQUFFLENBQUM7UUFDckIsZUFBVSxHQUFhLEVBQUUsQ0FBQztJQVEvQixDQUFDO0lBckJKLHNCQUNJLDJDQUFROzs7OztRQURaLFVBQ2EsS0FBbUI7WUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSx1Q0FBSTs7Ozs7UUFEUixVQUNTLEtBQW1CO1lBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUM7OztPQUFBOzs7O0lBZUQsd0NBQVE7OztJQUFSO1FBQUEsaUJBa0JDO1FBakJDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVksQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQzs7WUFFbkUsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLE1BQU07Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBekMsQ0FBeUMsRUFBQyxDQUN6RDs7WUFFSyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzlCLEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSzs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBdkIsQ0FBdUIsRUFBQyxFQUFqRCxDQUFpRCxFQUFDLENBQ2pFO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLFNBQVM7Ozs7UUFDekQsVUFBQyxFQUFnQjtnQkFBaEIsMEJBQWdCLEVBQWYsY0FBTSxFQUFFLGNBQU07WUFDZCxLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDdkUsQ0FBQyxFQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQseUNBQVM7OztJQUFUO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLG1CQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBckMsQ0FBcUMsRUFBQyxDQUNqRSxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOztnQkF4REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjs7OztnQkFMTyxzQkFBc0IsdUJBMEJ6QixNQUFNLFNBQUMsVUFBVTs7O3dCQUFDLGNBQU0sT0FBQSxzQkFBc0IsRUFBdEIsQ0FBc0IsRUFBQzs7OzJCQW5CakQsS0FBSzt1QkFLTCxLQUFLO3lCQUtMLFdBQVcsU0FBQyxRQUFROztJQTJDdkIsNEJBQUM7Q0FBQSxBQXpERCxJQXlEQztTQXREWSxxQkFBcUI7OztJQVdoQyx1Q0FBcUQ7Ozs7O0lBRXJELHNDQUE2Qjs7Ozs7SUFDN0IsMkNBQWtDOzs7OztJQUNsQyw2Q0FBbUM7Ozs7O0lBQ25DLHlDQUFvQzs7Ozs7SUFDcEMsd0NBQXNDOzs7OztJQUdwQywwQ0FDeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIERvQ2hlY2ssXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0Vycm9yT3B0aW9uc30gZnJvbSAnLi9uZ3hlcnJvcnMnO1xuaW1wb3J0IHtTZW1Gb3JtRXJyb3JzRGlyZWN0aXZlfSBmcm9tICcuL3NlbS1mb3JtLWVycm9ycy5kaXJlY3RpdmUnO1xuaW1wb3J0IHt0b0FycmF5fSBmcm9tICcuL3V0aWxzL3RvQXJyYXknO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4RXJyb3JdJ1xufSlcbmV4cG9ydCBjbGFzcyBTZW1Gb3JtRXJyb3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgRG9DaGVjayB7XG4gIEBJbnB1dCgpXG4gIHNldCBuZ3hFcnJvcih2YWx1ZTogRXJyb3JPcHRpb25zKSB7XG4gICAgdGhpcy5lcnJvck5hbWVzID0gdG9BcnJheSh2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgd2hlbih2YWx1ZTogRXJyb3JPcHRpb25zKSB7XG4gICAgdGhpcy5ydWxlcyA9IHRvQXJyYXkodmFsdWUpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdoaWRkZW4nKSBwdWJsaWMgaGlkZGVuOiBib29sZWFuID0gdHJ1ZTtcblxuICBwcml2YXRlIHJ1bGVzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIGVycm9yTmFtZXM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3N0YXRlcyQ6IFN1YmplY3Q8c3RyaW5nW10+O1xuICBwcml2YXRlIHN0YXRlcyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBTZW1Gb3JtRXJyb3JzRGlyZWN0aXZlKSlcbiAgICBwcml2YXRlIG5neEVycm9yczogU2VtRm9ybUVycm9yc0RpcmVjdGl2ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fc3RhdGVzJCA9IG5ldyBTdWJqZWN0PHN0cmluZ1tdPigpO1xuICAgIHRoaXMuc3RhdGVzJCA9IHRoaXMuX3N0YXRlcyQuYXNPYnNlcnZhYmxlKCkucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcblxuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMubmd4RXJyb3JzLnN1YmplY3QkLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBmaWx0ZXIob2JqID0+ICEhfnRoaXMuZXJyb3JOYW1lcy5pbmRleE9mKG9iai5lcnJvck5hbWUpKVxuICAgICk7XG5cbiAgICBjb25zdCBzdGF0ZXMgPSB0aGlzLnN0YXRlcyQucGlwZShcbiAgICAgIG1hcChzdGF0ZXMgPT4gdGhpcy5ydWxlcy5ldmVyeShydWxlID0+ICEhfnN0YXRlcy5pbmRleE9mKHJ1bGUpKSlcbiAgICApO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSBjb21iaW5lTGF0ZXN0KHN0YXRlcywgZXJyb3JzKS5zdWJzY3JpYmUoXG4gICAgICAoW3N0YXRlcywgZXJyb3JzXSkgPT4ge1xuICAgICAgICB0aGlzLmhpZGRlbiA9ICEoc3RhdGVzICYmIGVycm9ycy5jb250cm9sLmhhc0Vycm9yKGVycm9ycy5lcnJvck5hbWUpKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIHRoaXMuX3N0YXRlcyQubmV4dChcbiAgICAgIHRoaXMucnVsZXMuZmlsdGVyKHJ1bGUgPT4gKHRoaXMubmd4RXJyb3JzLmNvbnRyb2wgYXMgYW55KVtydWxlXSlcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fc3RhdGVzJC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==