import { finalize, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

    constructor(public auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        let ok: string;

        // adiciona token na requisição
        req = req.clone({ setHeaders: { Authorization: `Bearer ${this.auth.getToken()}` } });

        console.log('Doing request...')
        return next.handle(req).pipe(tap(
            // Succeeds when there is a response; ignore other events
            event => ok = event instanceof HttpResponse ? 'succeeded' : '',
            // Operation failed; error is an HttpErrorResponse
            error => ok = 'failed'
        ),
            // Log when response observable either completes or errors
            finalize(() => {
                console.log('Server responded.')
            })
        );
    }
}