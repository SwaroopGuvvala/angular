'use strict';var lang_1 = require('angular2/src/facade/lang');
var promise_1 = require('angular2/src/facade/promise');
var async_1 = require('angular2/src/facade/async');
var collection_1 = require('angular2/src/facade/collection');
var core_1 = require('angular2/core');
/**
 * Providers for validators to be used for {@link Control}s in a form.
 *
 * Provide this using `multi: true` to add validators.
 *
 * ### Example
 *
 * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
 */
exports.NG_VALIDATORS = lang_1.CONST_EXPR(new core_1.OpaqueToken("NgValidators"));
/**
 * Providers for asynchronous validators to be used for {@link Control}s
 * in a form.
 *
 * Provide this using `multi: true` to add validators.
 *
 * See {@link NG_VALIDATORS} for more details.
 */
exports.NG_ASYNC_VALIDATORS = lang_1.CONST_EXPR(new core_1.OpaqueToken("NgAsyncValidators"));
/**
 * Provides a set of validators used by form controls.
 *
 * A validator is a function that processes a {@link Control} or collection of
 * controls and returns a map of errors. A null map means that validation has passed.
 *
 * ### Example
 *
 * ```typescript
 * var loginControl = new Control("", Validators.required)
 * ```
 */
var Validators = (function () {
    function Validators() {
    }
    /**
     * Validator that requires controls to have a non-empty value.
     */
    Validators.required = function (control) {
        return lang_1.isBlank(control.value) || (lang_1.isString(control.value) && control.value == "") ?
            { "required": true } :
            null;
    };
    /**
     * Validator that requires controls to have a value of a minimum length.
     */
    Validators.minLength = function (minLength) {
        return function (control) {
            if (lang_1.isPresent(Validators.required(control)))
                return null;
            var v = control.value;
            return v.length < minLength ?
                { "minlength": { "requiredLength": minLength, "actualLength": v.length } } :
                null;
        };
    };
    /**
     * Validator that requires controls to have a value of a maximum length.
     */
    Validators.maxLength = function (maxLength) {
        return function (control) {
            if (lang_1.isPresent(Validators.required(control)))
                return null;
            var v = control.value;
            return v.length > maxLength ?
                { "maxlength": { "requiredLength": maxLength, "actualLength": v.length } } :
                null;
        };
    };
    /**
     * Validator that requires a control to match a regex to its value.
     */
    Validators.pattern = function (pattern) {
        return function (control) {
            if (lang_1.isPresent(Validators.required(control)))
                return null;
            var regex = new RegExp("^" + pattern + "$");
            var v = control.value;
            return regex.test(v) ? null :
                { "pattern": { "requiredPattern": "^" + pattern + "$", "actualValue": v } };
        };
    };
    /**
     * No-op validator.
     */
    Validators.nullValidator = function (c) { return null; };
    /**
     * Compose multiple validators into a single function that returns the union
     * of the individual error maps.
     */
    Validators.compose = function (validators) {
        if (lang_1.isBlank(validators))
            return null;
        var presentValidators = validators.filter(lang_1.isPresent);
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            return _mergeErrors(_executeValidators(control, presentValidators));
        };
    };
    Validators.composeAsync = function (validators) {
        if (lang_1.isBlank(validators))
            return null;
        var presentValidators = validators.filter(lang_1.isPresent);
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            var promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
            return promise_1.PromiseWrapper.all(promises).then(_mergeErrors);
        };
    };
    return Validators;
})();
exports.Validators = Validators;
function _convertToPromise(obj) {
    return promise_1.PromiseWrapper.isPromise(obj) ? obj : async_1.ObservableWrapper.toPromise(obj);
}
function _executeValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
function _executeAsyncValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
function _mergeErrors(arrayOfErrors) {
    var res = arrayOfErrors.reduce(function (res, errors) {
        return lang_1.isPresent(errors) ? collection_1.StringMapWrapper.merge(res, errors) : res;
    }, {});
    return collection_1.StringMapWrapper.isEmpty(res) ? null : res;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtZjF1UHJ5anMudG1wL2FuZ3VsYXIyL3NyYy9jb21tb24vZm9ybXMvdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6WyJWYWxpZGF0b3JzIiwiVmFsaWRhdG9ycy5jb25zdHJ1Y3RvciIsIlZhbGlkYXRvcnMucmVxdWlyZWQiLCJWYWxpZGF0b3JzLm1pbkxlbmd0aCIsIlZhbGlkYXRvcnMubWF4TGVuZ3RoIiwiVmFsaWRhdG9ycy5wYXR0ZXJuIiwiVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yIiwiVmFsaWRhdG9ycy5jb21wb3NlIiwiVmFsaWRhdG9ycy5jb21wb3NlQXN5bmMiLCJfY29udmVydFRvUHJvbWlzZSIsIl9leGVjdXRlVmFsaWRhdG9ycyIsIl9leGVjdXRlQXN5bmNWYWxpZGF0b3JzIiwiX21lcmdlRXJyb3JzIl0sIm1hcHBpbmdzIjoiQUFBQSxxQkFBdUQsMEJBQTBCLENBQUMsQ0FBQTtBQUNsRix3QkFBNkIsNkJBQTZCLENBQUMsQ0FBQTtBQUMzRCxzQkFBZ0MsMkJBQTJCLENBQUMsQ0FBQTtBQUM1RCwyQkFBNEMsZ0NBQWdDLENBQUMsQ0FBQTtBQUM3RSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFLMUM7Ozs7Ozs7O0dBUUc7QUFDVSxxQkFBYSxHQUFnQixpQkFBVSxDQUFDLElBQUksa0JBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBRXRGOzs7Ozs7O0dBT0c7QUFDVSwyQkFBbUIsR0FBZ0IsaUJBQVUsQ0FBQyxJQUFJLGtCQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0FBRWpHOzs7Ozs7Ozs7OztHQVdHO0FBQ0g7SUFBQUE7SUE4RUFDLENBQUNBO0lBN0VDRDs7T0FFR0E7SUFDSUEsbUJBQVFBLEdBQWZBLFVBQWdCQSxPQUFvQ0E7UUFDbERFLE1BQU1BLENBQUNBLGNBQU9BLENBQUNBLE9BQU9B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Q0FBQ0Esd0JBQWNBLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEdBQUdBLEdBQUdBLHlCQUFpQkEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7QUFDaEZBLENBQUNBO0FBRUQsNEJBQTRCLE9BQW9DLEVBQ3BDLFVBQXlCO0lBQ25EQyxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFBQSxDQUFDQSxJQUFJQSxPQUFBQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFWQSxDQUFVQSxDQUFDQSxDQUFDQTtBQUN6Q0EsQ0FBQ0E7QUFFRCxpQ0FBaUMsT0FBb0MsRUFDcEMsVUFBOEI7SUFDN0RDLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLEdBQUdBLENBQUNBLFVBQUFBLENBQUNBLElBQUlBLE9BQUFBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLEVBQVZBLENBQVVBLENBQUNBLENBQUNBO0FBQ3pDQSxDQUFDQTtBQUVELHNCQUFzQixhQUFvQjtJQUN4Q0MsSUFBSUEsR0FBR0EsR0FDSEEsYUFBYUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsVUFBQ0EsR0FBeUJBLEVBQUVBLE1BQTRCQTtRQUMzRUEsTUFBTUEsQ0FBQ0EsZ0JBQVNBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLDZCQUFnQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsRUFBRUEsTUFBTUEsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0E7SUFDdkVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO0lBQ1hBLE1BQU1BLENBQUNBLDZCQUFnQkEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsSUFBSUEsR0FBR0EsR0FBR0EsQ0FBQ0E7QUFDcERBLENBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc0JsYW5rLCBpc1ByZXNlbnQsIENPTlNUX0VYUFIsIGlzU3RyaW5nfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtQcm9taXNlV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9wcm9taXNlJztcbmltcG9ydCB7T2JzZXJ2YWJsZVdyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuaW1wb3J0IHtMaXN0V3JhcHBlciwgU3RyaW5nTWFwV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9jb2xsZWN0aW9uJztcbmltcG9ydCB7T3BhcXVlVG9rZW59IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyBtb2RlbE1vZHVsZSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7VmFsaWRhdG9yRm4sIEFzeW5jVmFsaWRhdG9yRm59IGZyb20gJy4vZGlyZWN0aXZlcy92YWxpZGF0b3JzJztcblxuLyoqXG4gKiBQcm92aWRlcnMgZm9yIHZhbGlkYXRvcnMgdG8gYmUgdXNlZCBmb3Ige0BsaW5rIENvbnRyb2x9cyBpbiBhIGZvcm0uXG4gKlxuICogUHJvdmlkZSB0aGlzIHVzaW5nIGBtdWx0aTogdHJ1ZWAgdG8gYWRkIHZhbGlkYXRvcnMuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiB7QGV4YW1wbGUgY29yZS9mb3Jtcy90cy9uZ192YWxpZGF0b3JzL25nX3ZhbGlkYXRvcnMudHMgcmVnaW9uPSduZ192YWxpZGF0b3JzJ31cbiAqL1xuZXhwb3J0IGNvbnN0IE5HX1ZBTElEQVRPUlM6IE9wYXF1ZVRva2VuID0gQ09OU1RfRVhQUihuZXcgT3BhcXVlVG9rZW4oXCJOZ1ZhbGlkYXRvcnNcIikpO1xuXG4vKipcbiAqIFByb3ZpZGVycyBmb3IgYXN5bmNocm9ub3VzIHZhbGlkYXRvcnMgdG8gYmUgdXNlZCBmb3Ige0BsaW5rIENvbnRyb2x9c1xuICogaW4gYSBmb3JtLlxuICpcbiAqIFByb3ZpZGUgdGhpcyB1c2luZyBgbXVsdGk6IHRydWVgIHRvIGFkZCB2YWxpZGF0b3JzLlxuICpcbiAqIFNlZSB7QGxpbmsgTkdfVkFMSURBVE9SU30gZm9yIG1vcmUgZGV0YWlscy5cbiAqL1xuZXhwb3J0IGNvbnN0IE5HX0FTWU5DX1ZBTElEQVRPUlM6IE9wYXF1ZVRva2VuID0gQ09OU1RfRVhQUihuZXcgT3BhcXVlVG9rZW4oXCJOZ0FzeW5jVmFsaWRhdG9yc1wiKSk7XG5cbi8qKlxuICogUHJvdmlkZXMgYSBzZXQgb2YgdmFsaWRhdG9ycyB1c2VkIGJ5IGZvcm0gY29udHJvbHMuXG4gKlxuICogQSB2YWxpZGF0b3IgaXMgYSBmdW5jdGlvbiB0aGF0IHByb2Nlc3NlcyBhIHtAbGluayBDb250cm9sfSBvciBjb2xsZWN0aW9uIG9mXG4gKiBjb250cm9scyBhbmQgcmV0dXJucyBhIG1hcCBvZiBlcnJvcnMuIEEgbnVsbCBtYXAgbWVhbnMgdGhhdCB2YWxpZGF0aW9uIGhhcyBwYXNzZWQuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiB2YXIgbG9naW5Db250cm9sID0gbmV3IENvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZClcbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9ycyB7XG4gIC8qKlxuICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgbm9uLWVtcHR5IHZhbHVlLlxuICAgKi9cbiAgc3RhdGljIHJlcXVpcmVkKGNvbnRyb2w6IG1vZGVsTW9kdWxlLkFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBib29sZWFufSB7XG4gICAgcmV0dXJuIGlzQmxhbmsoY29udHJvbC52YWx1ZSkgfHwgKGlzU3RyaW5nKGNvbnRyb2wudmFsdWUpICYmIGNvbnRyb2wudmFsdWUgPT0gXCJcIikgP1xuICAgICAgICAgICAgICAge1wicmVxdWlyZWRcIjogdHJ1ZX0gOlxuICAgICAgICAgICAgICAgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgdmFsdWUgb2YgYSBtaW5pbXVtIGxlbmd0aC5cbiAgICovXG4gIHN0YXRpYyBtaW5MZW5ndGgobWluTGVuZ3RoOiBudW1iZXIpOiBWYWxpZGF0b3JGbiB7XG4gICAgcmV0dXJuIChjb250cm9sOiBtb2RlbE1vZHVsZS5BYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSA9PiB7XG4gICAgICBpZiAoaXNQcmVzZW50KFZhbGlkYXRvcnMucmVxdWlyZWQoY29udHJvbCkpKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciB2OiBzdHJpbmcgPSBjb250cm9sLnZhbHVlO1xuICAgICAgcmV0dXJuIHYubGVuZ3RoIDwgbWluTGVuZ3RoID9cbiAgICAgICAgICAgICAgICAge1wibWlubGVuZ3RoXCI6IHtcInJlcXVpcmVkTGVuZ3RoXCI6IG1pbkxlbmd0aCwgXCJhY3R1YWxMZW5ndGhcIjogdi5sZW5ndGh9fSA6XG4gICAgICAgICAgICAgICAgIG51bGw7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgdmFsdWUgb2YgYSBtYXhpbXVtIGxlbmd0aC5cbiAgICovXG4gIHN0YXRpYyBtYXhMZW5ndGgobWF4TGVuZ3RoOiBudW1iZXIpOiBWYWxpZGF0b3JGbiB7XG4gICAgcmV0dXJuIChjb250cm9sOiBtb2RlbE1vZHVsZS5BYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSA9PiB7XG4gICAgICBpZiAoaXNQcmVzZW50KFZhbGlkYXRvcnMucmVxdWlyZWQoY29udHJvbCkpKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciB2OiBzdHJpbmcgPSBjb250cm9sLnZhbHVlO1xuICAgICAgcmV0dXJuIHYubGVuZ3RoID4gbWF4TGVuZ3RoID9cbiAgICAgICAgICAgICAgICAge1wibWF4bGVuZ3RoXCI6IHtcInJlcXVpcmVkTGVuZ3RoXCI6IG1heExlbmd0aCwgXCJhY3R1YWxMZW5ndGhcIjogdi5sZW5ndGh9fSA6XG4gICAgICAgICAgICAgICAgIG51bGw7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBhIGNvbnRyb2wgdG8gbWF0Y2ggYSByZWdleCB0byBpdHMgdmFsdWUuXG4gICAqL1xuICBzdGF0aWMgcGF0dGVybihwYXR0ZXJuOiBzdHJpbmcpOiBWYWxpZGF0b3JGbiB7XG4gICAgcmV0dXJuIChjb250cm9sOiBtb2RlbE1vZHVsZS5BYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSA9PiB7XG4gICAgICBpZiAoaXNQcmVzZW50KFZhbGlkYXRvcnMucmVxdWlyZWQoY29udHJvbCkpKSByZXR1cm4gbnVsbDtcbiAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoYF4ke3BhdHRlcm59JGApO1xuICAgICAgbGV0IHY6IHN0cmluZyA9IGNvbnRyb2wudmFsdWU7XG4gICAgICByZXR1cm4gcmVnZXgudGVzdCh2KSA/IG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJwYXR0ZXJuXCI6IHtcInJlcXVpcmVkUGF0dGVyblwiOiBgXiR7cGF0dGVybn0kYCwgXCJhY3R1YWxWYWx1ZVwiOiB2fX07XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOby1vcCB2YWxpZGF0b3IuXG4gICAqL1xuICBzdGF0aWMgbnVsbFZhbGlkYXRvcihjOiBtb2RlbE1vZHVsZS5BYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYm9vbGVhbn0geyByZXR1cm4gbnVsbDsgfVxuXG4gIC8qKlxuICAgKiBDb21wb3NlIG11bHRpcGxlIHZhbGlkYXRvcnMgaW50byBhIHNpbmdsZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHVuaW9uXG4gICAqIG9mIHRoZSBpbmRpdmlkdWFsIGVycm9yIG1hcHMuXG4gICAqL1xuICBzdGF0aWMgY29tcG9zZSh2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdKTogVmFsaWRhdG9yRm4ge1xuICAgIGlmIChpc0JsYW5rKHZhbGlkYXRvcnMpKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgcHJlc2VudFZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzLmZpbHRlcihpc1ByZXNlbnQpO1xuICAgIGlmIChwcmVzZW50VmFsaWRhdG9ycy5sZW5ndGggPT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oY29udHJvbDogbW9kZWxNb2R1bGUuQWJzdHJhY3RDb250cm9sKSB7XG4gICAgICByZXR1cm4gX21lcmdlRXJyb3JzKF9leGVjdXRlVmFsaWRhdG9ycyhjb250cm9sLCBwcmVzZW50VmFsaWRhdG9ycykpO1xuICAgIH07XG4gIH1cblxuICBzdGF0aWMgY29tcG9zZUFzeW5jKHZhbGlkYXRvcnM6IEFzeW5jVmFsaWRhdG9yRm5bXSk6IEFzeW5jVmFsaWRhdG9yRm4ge1xuICAgIGlmIChpc0JsYW5rKHZhbGlkYXRvcnMpKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgcHJlc2VudFZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzLmZpbHRlcihpc1ByZXNlbnQpO1xuICAgIGlmIChwcmVzZW50VmFsaWRhdG9ycy5sZW5ndGggPT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oY29udHJvbDogbW9kZWxNb2R1bGUuQWJzdHJhY3RDb250cm9sKSB7XG4gICAgICBsZXQgcHJvbWlzZXMgPSBfZXhlY3V0ZUFzeW5jVmFsaWRhdG9ycyhjb250cm9sLCBwcmVzZW50VmFsaWRhdG9ycykubWFwKF9jb252ZXJ0VG9Qcm9taXNlKTtcbiAgICAgIHJldHVybiBQcm9taXNlV3JhcHBlci5hbGwocHJvbWlzZXMpLnRoZW4oX21lcmdlRXJyb3JzKTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jb252ZXJ0VG9Qcm9taXNlKG9iajogYW55KTogYW55IHtcbiAgcmV0dXJuIFByb21pc2VXcmFwcGVyLmlzUHJvbWlzZShvYmopID8gb2JqIDogT2JzZXJ2YWJsZVdyYXBwZXIudG9Qcm9taXNlKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9leGVjdXRlVmFsaWRhdG9ycyhjb250cm9sOiBtb2RlbE1vZHVsZS5BYnN0cmFjdENvbnRyb2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXSk6IGFueVtdIHtcbiAgcmV0dXJuIHZhbGlkYXRvcnMubWFwKHYgPT4gdihjb250cm9sKSk7XG59XG5cbmZ1bmN0aW9uIF9leGVjdXRlQXN5bmNWYWxpZGF0b3JzKGNvbnRyb2w6IG1vZGVsTW9kdWxlLkFic3RyYWN0Q29udHJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IEFzeW5jVmFsaWRhdG9yRm5bXSk6IGFueVtdIHtcbiAgcmV0dXJuIHZhbGlkYXRvcnMubWFwKHYgPT4gdihjb250cm9sKSk7XG59XG5cbmZ1bmN0aW9uIF9tZXJnZUVycm9ycyhhcnJheU9mRXJyb3JzOiBhbnlbXSk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgdmFyIHJlczoge1trZXk6IHN0cmluZ106IGFueX0gPVxuICAgICAgYXJyYXlPZkVycm9ycy5yZWR1Y2UoKHJlczoge1trZXk6IHN0cmluZ106IGFueX0sIGVycm9yczoge1trZXk6IHN0cmluZ106IGFueX0pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzUHJlc2VudChlcnJvcnMpID8gU3RyaW5nTWFwV3JhcHBlci5tZXJnZShyZXMsIGVycm9ycykgOiByZXM7XG4gICAgICB9LCB7fSk7XG4gIHJldHVybiBTdHJpbmdNYXBXcmFwcGVyLmlzRW1wdHkocmVzKSA/IG51bGwgOiByZXM7XG59XG4iXX0=