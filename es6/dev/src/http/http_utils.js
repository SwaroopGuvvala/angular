import { isString } from 'angular2/src/facade/lang';
import { RequestMethod } from './enums';
import { makeTypeError } from 'angular2/src/facade/exceptions';
export function normalizeMethodName(method) {
    if (isString(method)) {
        var originalMethod = method;
        method = method
            .replace(/(\w)(\w*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase());
        method = RequestMethod[method];
        if (typeof method !== 'number')
            throw makeTypeError(`Invalid request method. The method "${originalMethod}" is not supported.`);
    }
    return method;
}
export const isSuccess = (status) => (status >= 200 && status < 300);
export function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return;
}
export { isJsObject } from 'angular2/src/facade/lang';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cF91dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtNzNoMHVZRXYudG1wL2FuZ3VsYXIyL3NyYy9odHRwL2h0dHBfdXRpbHMudHMiXSwibmFtZXMiOlsibm9ybWFsaXplTWV0aG9kTmFtZSIsImdldFJlc3BvbnNlVVJMIl0sIm1hcHBpbmdzIjoiT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLDBCQUEwQjtPQUMxQyxFQUFDLGFBQWEsRUFBQyxNQUFNLFNBQVM7T0FDOUIsRUFBQyxhQUFhLEVBQUMsTUFBTSxnQ0FBZ0M7QUFHNUQsb0NBQW9DLE1BQThCO0lBQ2hFQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNyQkEsSUFBSUEsY0FBY0EsR0FBR0EsTUFBTUEsQ0FBQ0E7UUFDNUJBLE1BQU1BLEdBQVlBLE1BQU9BO2FBQ1hBLE9BQU9BLENBQUNBLFlBQVlBLEVBQUVBLENBQUNBLEVBQVVBLEVBQUVBLEVBQVVBLEVBQUVBLEVBQVVBLEtBQy9CQSxFQUFFQSxDQUFDQSxXQUFXQSxFQUFFQSxHQUFHQSxFQUFFQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUM3RUEsTUFBTUEsR0FBa0NBLGFBQWNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQy9EQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxNQUFNQSxLQUFLQSxRQUFRQSxDQUFDQTtZQUM3QkEsTUFBTUEsYUFBYUEsQ0FDZkEsdUNBQXVDQSxjQUFjQSxxQkFBcUJBLENBQUNBLENBQUNBO0lBQ3BGQSxDQUFDQTtJQUNEQSxNQUFNQSxDQUFnQkEsTUFBTUEsQ0FBQ0E7QUFDL0JBLENBQUNBO0FBRUQsYUFBYSxTQUFTLEdBQUcsQ0FBQyxNQUFjLEtBQWMsQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztBQUV0RiwrQkFBK0IsR0FBUTtJQUNyQ0MsRUFBRUEsQ0FBQ0EsQ0FBQ0EsYUFBYUEsSUFBSUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDekJBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLFdBQVdBLENBQUNBO0lBQ3pCQSxDQUFDQTtJQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxrQkFBa0JBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLHFCQUFxQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDekRBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7SUFDaERBLENBQUNBO0lBQ0RBLE1BQU1BLENBQUNBO0FBQ1RBLENBQUNBO0FBRUQsU0FBUSxVQUFVLFFBQU8sMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lzU3RyaW5nfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtSZXF1ZXN0TWV0aG9kfSBmcm9tICcuL2VudW1zJztcbmltcG9ydCB7bWFrZVR5cGVFcnJvcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9leGNlcHRpb25zJztcbmltcG9ydCB7UmVzcG9uc2V9IGZyb20gJy4vc3RhdGljX3Jlc3BvbnNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZE5hbWUobWV0aG9kOiBzdHJpbmcgfCBSZXF1ZXN0TWV0aG9kKTogUmVxdWVzdE1ldGhvZCB7XG4gIGlmIChpc1N0cmluZyhtZXRob2QpKSB7XG4gICAgdmFyIG9yaWdpbmFsTWV0aG9kID0gbWV0aG9kO1xuICAgIG1ldGhvZCA9ICg8c3RyaW5nPm1ldGhvZClcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyhcXHcpKFxcdyopL2csIChnMDogc3RyaW5nLCBnMTogc3RyaW5nLCBnMjogc3RyaW5nKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnMS50b1VwcGVyQ2FzZSgpICsgZzIudG9Mb3dlckNhc2UoKSk7XG4gICAgbWV0aG9kID0gPG51bWJlcj4oPHtba2V5OiBzdHJpbmddOiBhbnl9PlJlcXVlc3RNZXRob2QpW21ldGhvZF07XG4gICAgaWYgKHR5cGVvZiBtZXRob2QgIT09ICdudW1iZXInKVxuICAgICAgdGhyb3cgbWFrZVR5cGVFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCByZXF1ZXN0IG1ldGhvZC4gVGhlIG1ldGhvZCBcIiR7b3JpZ2luYWxNZXRob2R9XCIgaXMgbm90IHN1cHBvcnRlZC5gKTtcbiAgfVxuICByZXR1cm4gPFJlcXVlc3RNZXRob2Q+bWV0aG9kO1xufVxuXG5leHBvcnQgY29uc3QgaXNTdWNjZXNzID0gKHN0YXR1czogbnVtYmVyKTogYm9vbGVhbiA9PiAoc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDApO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzcG9uc2VVUkwoeGhyOiBhbnkpOiBzdHJpbmcge1xuICBpZiAoJ3Jlc3BvbnNlVVJMJyBpbiB4aHIpIHtcbiAgICByZXR1cm4geGhyLnJlc3BvbnNlVVJMO1xuICB9XG4gIGlmICgvXlgtUmVxdWVzdC1VUkw6L20udGVzdCh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKSB7XG4gICAgcmV0dXJuIHhoci5nZXRSZXNwb25zZUhlYWRlcignWC1SZXF1ZXN0LVVSTCcpO1xuICB9XG4gIHJldHVybjtcbn1cblxuZXhwb3J0IHtpc0pzT2JqZWN0fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuIl19