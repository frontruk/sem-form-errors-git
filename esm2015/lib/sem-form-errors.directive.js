/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { toArray } from './utils/toArray';
export class SemFormErrorsDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtLWZvcm0tZXJyb3JzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcm9udHIvbmdmb3JtZXJyb3JzLyIsInNvdXJjZXMiOlsibGliL3NlbS1mb3JtLWVycm9ycy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsS0FBSyxFQUdOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBa0Isa0JBQWtCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRXJDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQU14QyxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBT2pDLFlBQW9CLElBQXdCO1FBQXhCLFNBQUksR0FBSixJQUFJLENBQW9CO1FBRnBDLFVBQUssR0FBWSxLQUFLLENBQUM7SUFFZ0IsQ0FBQzs7OztJQUVoRCxJQUFJLE1BQU07UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQVksRUFBRSxVQUF3QjtRQUM3QyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBWSxFQUFFLFVBQXdCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQVk7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUN4QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7Ozs7O0lBRU8sY0FBYyxDQUNwQixJQUFZLEVBQ1osSUFBWSxFQUNaLFVBQXdCO1FBRXhCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87O2NBRWxCLGlCQUFpQixHQUNyQixDQUFDLFVBQVU7WUFDWCxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSzs7OztZQUFDLENBQUMsU0FBaUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBQztRQUUzRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBaUIsQ0FBQztTQUNoRDtRQUVELE9BQU8sSUFBSSxLQUFLLE9BQU87WUFDckIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzlCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBaUIsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVPLFdBQVc7O2NBQ1gsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPOztjQUN0QixNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU07UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ3BCLEtBQUssTUFBTSxTQUFTLElBQUksTUFBTSxFQUFFO1lBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDOzs7O0lBQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQWUsSUFBSSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7OztZQUMzQixHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQzs7O1lBQzFCLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQy9CLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUFyRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsV0FBVzthQUN0Qjs7OztZQVJ3QixrQkFBa0I7OzswQkFVeEMsS0FBSyxTQUFDLFdBQVc7Ozs7Ozs7SUFBbEIsNkNBQXlEOztJQUV6RCwwQ0FBK0M7O0lBQy9DLHlDQUFnQzs7Ozs7SUFDaEMsdUNBQStCOzs7OztJQUVuQixzQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWJzdHJhY3RDb250cm9sLCBGb3JtR3JvdXBEaXJlY3RpdmV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7RXJyb3JEZXRhaWxzLCBFcnJvck9wdGlvbnN9IGZyb20gJy4vbmd4ZXJyb3JzJztcbmltcG9ydCB7dG9BcnJheX0gZnJvbSAnLi91dGlscy90b0FycmF5JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neEVycm9yc10nLFxuICBleHBvcnRBczogJ25neEVycm9ycydcbn0pXG5leHBvcnQgY2xhc3MgU2VtRm9ybUVycm9yc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCduZ3hFcnJvcnMnKSBwcml2YXRlIHJlYWRvbmx5IGNvbnRyb2xOYW1lOiBzdHJpbmc7XG5cbiAgcHVibGljIHN1YmplY3QkOiBCZWhhdmlvclN1YmplY3Q8RXJyb3JEZXRhaWxzPjtcbiAgcHVibGljIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcbiAgcHJpdmF0ZSByZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybTogRm9ybUdyb3VwRGlyZWN0aXZlKSB7fVxuXG4gIGdldCBlcnJvcnMoKSB7XG4gICAgaWYgKCF0aGlzLnJlYWR5KSByZXR1cm47XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC5lcnJvcnM7XG4gIH1cblxuICBnZXQgaGFzRXJyb3JzKCkge1xuICAgIHJldHVybiAhIXRoaXMuZXJyb3JzO1xuICB9XG5cbiAgaGFzRXJyb3IobmFtZTogc3RyaW5nLCBjb25kaXRpb25zOiBFcnJvck9wdGlvbnMpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jaGVja1Byb3BTdGF0ZSgnaW52YWxpZCcsIG5hbWUsIGNvbmRpdGlvbnMpO1xuICB9XG5cbiAgaXNWYWxpZChuYW1lOiBzdHJpbmcsIGNvbmRpdGlvbnM6IEVycm9yT3B0aW9ucyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrUHJvcFN0YXRlKCd2YWxpZCcsIG5hbWUsIGNvbmRpdGlvbnMpO1xuICB9XG5cbiAgZ2V0RXJyb3IobmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLnJlYWR5KSByZXR1cm47XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC5nZXRFcnJvcihuYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tQcm9wU3RhdGUoXG4gICAgcHJvcDogc3RyaW5nLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBjb25kaXRpb25zOiBFcnJvck9wdGlvbnNcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLnJlYWR5KSByZXR1cm47XG5cbiAgICBjb25zdCBjb250cm9sUHJvcHNTdGF0ZSA9XG4gICAgICAhY29uZGl0aW9ucyB8fFxuICAgICAgdG9BcnJheShjb25kaXRpb25zKS5ldmVyeSgoY29uZGl0aW9uOiBzdHJpbmcpID0+IHRoaXMuY29udHJvbFtjb25kaXRpb25dKTtcblxuICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gJyonKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250cm9sW3Byb3BdICYmIGNvbnRyb2xQcm9wc1N0YXRlO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wID09PSAndmFsaWQnXG4gICAgICA/ICF0aGlzLmNvbnRyb2wuaGFzRXJyb3IobmFtZSlcbiAgICAgIDogdGhpcy5jb250cm9sLmhhc0Vycm9yKG5hbWUpICYmIGNvbnRyb2xQcm9wc1N0YXRlO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja1N0YXR1cygpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5jb250cm9sO1xuICAgIGNvbnN0IGVycm9ycyA9IGNvbnRyb2wuZXJyb3JzO1xuICAgIHRoaXMucmVhZHkgPSB0cnVlO1xuICAgIGlmICghZXJyb3JzKSByZXR1cm47XG4gICAgZm9yIChjb25zdCBlcnJvck5hbWUgaW4gZXJyb3JzKSB7XG4gICAgICB0aGlzLnN1YmplY3QkLm5leHQoe2NvbnRyb2wsIGVycm9yTmFtZX0pO1xuICAgIH1cbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YmplY3QkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxFcnJvckRldGFpbHM+KG51bGwpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy5mb3JtLmNvbnRyb2wuZ2V0KHRoaXMuY29udHJvbE5hbWUpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jaGVja1N0YXR1cygpO1xuICAgICAgdGhpcy5jb250cm9sLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKFxuICAgICAgICB0aGlzLmNoZWNrU3RhdHVzLmJpbmQodGhpcyksXG4gICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdlcnJvcicpLFxuICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnY29tcGxldGVkJylcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YmplY3QkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==