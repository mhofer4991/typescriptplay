import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let d = request.clone({
      /*setHeaders: {
        Authorization: 
      }*/
      headers: request.headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjcxNDE3MzBlOTA1YmUzOTY3NGJjMjk2NjdiZjBhMmYzOTEwNjgwYThlZDExZmEwZTNmYzBkZTFhNmM1ZDNlY2NiZTU3MTFjYWY1N2NmYmY0In0.eyJhdWQiOiIzIiwianRpIjoiNzE0MTczMGU5MDViZTM5Njc0YmMyOTY2N2JmMGEyZjM5MTA2ODBhOGVkMTFmYTBlM2ZjMGRlMWE2YzVkM2VjY2JlNTcxMWNhZjU3Y2ZiZjQiLCJpYXQiOjE1MzU3OTM0NTYsIm5iZiI6MTUzNTc5MzQ1NiwiZXhwIjoxNTY3MzI5NDU2LCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.hjqg3g0LC5qrk44vbnsVByL6zH8qdLQSBza-8klnNOZdwPwqKaj3kT36xR5GTTrXaU_jt8ufMl180TJO3v6v2YuGu-K5FTGN1cbs_gNVMcsc7JfMaQvFzRE88NQrNq30EmXGmA-FOZZZtWQl8Qkl61hZT82EpkKABH7F6HSh8YTZ9oNl4N4FOAEyj1A4BxAqVHgu8XnxUFeWD4DisbP_WXpl5oFMrA5ZZDZnCP4r2DVJkuFYVPs0nLSiwS_uz1sRFw0nuztdm2250pd_9AC_WeTVshJTmslLghC5ooRR4V2P7TplnYh6OZc5qEqG_NkmN47Vf_TThoEoZtGR40y2PDCQo2jJVoswOHr5Xsvy6yzELDq_tXYGRDWaVBEHhz-j3czMCQSvhp72wsFygIIfnjSYQ8aOhv7VIlFj0W3pRLn13op-ZmSZi5_pwKzATZKsFnIo4MIuZL7uVRErsuWCeYo8RzgVIOEDAig-d7LvCKkkrhv0cvhBrVPR_VnTA1iwgdqkZKFGQZQ-nNzzjJBIKX_yN1XAMmTyLmweF1o-7TR9pKC2ZPgX076srMAmoawsb29PWZJ6KxNXKNYz8Tg3NlldIQvMQ7UimmVTquaJTgx9T7w4nBVwUMOEot8gqyHgRbkPIJ_FFNXoPFHypdxiqyMvSOUP1yvKQZBH0ZK2nEo')

    });

    return next.handle(d);
  }
}