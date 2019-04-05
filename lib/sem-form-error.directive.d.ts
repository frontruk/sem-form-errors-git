import { DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ErrorOptions } from './ngxerrors';
import { SemFormErrorsDirective } from './sem-form-errors.directive';
export declare class SemFormErrorDirective implements OnInit, OnDestroy, DoCheck {
    private ngxErrors;
    ngxError: ErrorOptions;
    when: ErrorOptions;
    hidden: boolean;
    private rules;
    private errorNames;
    private subscription;
    private _states$;
    private states$;
    constructor(ngxErrors: SemFormErrorsDirective);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
}
