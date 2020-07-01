import { finalize, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        let ok: string;
        
        console.log('int req')

        return next.handle(req).pipe(tap(
            // Succeeds when there is a response; ignore other events
            event => ok = event instanceof HttpResponse ? 'succeeded' : '',
            // Operation failed; error is an HttpErrorResponse
            error => ok = 'failed'
        ),
            // Log when response observable either completes or errors
            finalize(() => {
                console.log('int resp')
            })
        );
    }
}