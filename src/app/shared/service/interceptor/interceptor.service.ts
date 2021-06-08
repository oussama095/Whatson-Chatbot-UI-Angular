import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable()
export class Interceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      url: `${environment.watsonUrl}${request.url}`,
      params: new HttpParams().set('version', environment.watsonVersion),
      setHeaders: {
        Authorization: 'Basic ' + btoa(`${environment.username}:${environment.password}`)
      }
    });
    return next.handle(request);
  }
}
