import { stringify } from 'angular2/src/facade/lang';
import { BaseException } from 'angular2/src/facade/exceptions';
export class InvalidPipeArgumentException extends BaseException {
    constructor(type, value) {
        super(`Invalid argument '${value}' for pipe '${stringify(type)}'`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZF9waXBlX2FyZ3VtZW50X2V4Y2VwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtNzNoMHVZRXYudG1wL2FuZ3VsYXIyL3NyYy9jb21tb24vcGlwZXMvaW52YWxpZF9waXBlX2FyZ3VtZW50X2V4Y2VwdGlvbi50cyJdLCJuYW1lcyI6WyJJbnZhbGlkUGlwZUFyZ3VtZW50RXhjZXB0aW9uIiwiSW52YWxpZFBpcGVBcmd1bWVudEV4Y2VwdGlvbi5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBYyxTQUFTLEVBQUMsTUFBTSwwQkFBMEI7T0FDeEQsRUFBQyxhQUFhLEVBQW1CLE1BQU0sZ0NBQWdDO0FBRTlFLGtEQUFrRCxhQUFhO0lBQzdEQSxZQUFZQSxJQUFVQSxFQUFFQSxLQUFhQTtRQUNuQ0MsTUFBTUEscUJBQXFCQSxLQUFLQSxlQUFlQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUNyRUEsQ0FBQ0E7QUFDSEQsQ0FBQ0E7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q09OU1QsIFR5cGUsIHN0cmluZ2lmeX0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7QmFzZUV4Y2VwdGlvbiwgV3JhcHBlZEV4Y2VwdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9leGNlcHRpb25zJztcblxuZXhwb3J0IGNsYXNzIEludmFsaWRQaXBlQXJndW1lbnRFeGNlcHRpb24gZXh0ZW5kcyBCYXNlRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IodHlwZTogVHlwZSwgdmFsdWU6IE9iamVjdCkge1xuICAgIHN1cGVyKGBJbnZhbGlkIGFyZ3VtZW50ICcke3ZhbHVlfScgZm9yIHBpcGUgJyR7c3RyaW5naWZ5KHR5cGUpfSdgKTtcbiAgfVxufVxuIl19