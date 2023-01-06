import { UtilityService } from 'src/app/services/utility.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpErrorResponse } from "@angular/common/http";

import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable({
    providedIn: 'root'
})
export class AngularInterceptor implements HttpInterceptor {
    constructor(
        public loaderService: NgxUiLoaderService,
        public UtilityService: UtilityService
    ) {

    }

    isStringMatch(s:any, word:any) {
        return new RegExp('\\b' + (word).toLowerCase() + '\\b', 'i').test(s);
    }

    totalRequests = 0;
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        
        this.totalRequests++;
        this.loaderService.start()
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    this.UtilityService.openSnackbar(error?.error?.message || error?.message);
                    return throwError(error);
                }),
                finalize(() => {
                    this.totalRequests--;
                    if (this.totalRequests == 0) {
                        this.loaderService.stop()
                    }
                }
                )
            )
    }
}